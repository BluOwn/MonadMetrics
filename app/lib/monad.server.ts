import { ethers } from "ethers";

// Type definitions
interface NetworkStats {
  latestBlock: number;
  avgBlockTime: number;
  tps: number;
  pendingTxCount: number;
  gasPrice: string;
  nodesCount: number;
}

interface Block {
  number: number;
  hash: string;
  timestamp: number;
  transactions: string[];
  gasUsed: string;
  gasLimit: string;
  difficulty: string;
  totalDifficulty: string;
  size: string;
  miner: string;
}

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  nonce: number;
  blockHash: string;
  blockNumber: number;
  timestamp: number;
}

interface ChainComparison {
  name: string;
  tps: number;
  blockTime: number;
  finality: number;
}

// Initialize the Monad testnet provider
const MONAD_RPC_URL = "https://testnet-rpc.monad.xyz";
const provider = new ethers.JsonRpcProvider(MONAD_RPC_URL);

// Cache for storing metrics data to reduce API calls
let metricsCache = {
  lastUpdated: 0,
  networkStats: null as NetworkStats | null,
  recentBlocks: [] as Block[],
  recentTransactions: [] as Transaction[],
};

// Time in ms before the cache is considered stale
const CACHE_TTL = 30000; // 30 seconds

// Rate limiting
const RATE_LIMIT = {
  maxRequests: 15, // Reduced from 20 to stay well under the 25/second limit
  timeWindow: 1000, // 1 second
  requests: [] as number[],
  retryDelay: 200 // Increased from 100ms to 200ms
};

async function checkRateLimit() {
  const now = Date.now();
  RATE_LIMIT.requests = RATE_LIMIT.requests.filter(time => now - time < RATE_LIMIT.timeWindow);
  
  if (RATE_LIMIT.requests.length >= RATE_LIMIT.maxRequests) {
    const oldestRequest = RATE_LIMIT.requests[0];
    const waitTime = RATE_LIMIT.timeWindow - (now - oldestRequest);
    if (waitTime > 0) {
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  
  RATE_LIMIT.requests.push(now);
}

async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: any;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      await checkRateLimit();
      return await operation();
    } catch (error: any) {
      lastError = error;
      
      // Check if it's a rate limit error
      if (error?.error?.code === -32007 || error?.error?.message?.includes('request limit reached')) {
        const delay = RATE_LIMIT.retryDelay * Math.pow(2, i); // Exponential backoff
        console.log(`Rate limit hit, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // For other errors, throw immediately
      throw error;
    }
  }
  
  throw lastError;
}

export async function getNetworkStats(): Promise<NetworkStats> {
  const now = Date.now();
  if (metricsCache.networkStats && now - metricsCache.lastUpdated < CACHE_TTL) {
    return metricsCache.networkStats;
  }

  try {
    // Get latest block with retry
    const latestBlock = await retryWithBackoff(() => provider.getBlockNumber());
    
    // Get recent blocks to calculate average block time
    const blocks = await getRecentBlocks(5); // Reduced from 10 to 5 blocks
    let avgBlockTime = 0;
    
    if (blocks.length > 1) {
      let totalTime = 0;
      for (let i = 1; i < blocks.length; i++) {
        totalTime += blocks[i-1].timestamp - blocks[i].timestamp;
      }
      avgBlockTime = totalTime / (blocks.length - 1);
    }
    
    // Calculate TPS based on recent blocks
    let totalTxs = 0;
    blocks.forEach(block => {
      totalTxs += block.transactions.length;
    });
    const tps = totalTxs / (blocks.length * avgBlockTime);
    
    // Get gas price with retry
    const gasPrice = await retryWithBackoff(async () => {
      const feeData = await provider.getFeeData();
      return feeData.gasPrice?.toString() || "0";
    });
    
    // Nodes count (this is a mock as there's no direct way to get this)
    const nodesCount = 50; // Mock value
    
    const stats: NetworkStats = {
      latestBlock,
      avgBlockTime,
      tps,
      pendingTxCount: 0, // Removed pending transactions as it's not supported
      gasPrice,
      nodesCount
    };
    
    // Update cache
    metricsCache.networkStats = stats;
    metricsCache.lastUpdated = now;
    
    return stats;
  } catch (error) {
    console.error("Error fetching network stats:", error);
    // Return cached data if available, otherwise throw
    if (metricsCache.networkStats) {
      return metricsCache.networkStats;
    }
    throw error;
  }
}

export async function getRecentBlocks(count: number = 5): Promise<Block[]> { // Reduced default from 10 to 5
  const now = Date.now();
  if (metricsCache.recentBlocks.length >= count && now - metricsCache.lastUpdated < CACHE_TTL) {
    return metricsCache.recentBlocks.slice(0, count);
  }

  try {
    const latestBlock = await retryWithBackoff(() => provider.getBlockNumber());
    const blocks: Block[] = [];
    
    for (let i = 0; i < count; i++) {
      const blockNumber = latestBlock - i;
      if (blockNumber < 0) break;
      
      const block = await retryWithBackoff(() => provider.getBlock(blockNumber));
      if (!block) continue;
      
      blocks.push({
        number: Number(block.number),
        hash: block.hash || "",
        timestamp: Number(block.timestamp),
        transactions: [...(block.transactions || [])],
        gasUsed: block.gasUsed?.toString() || "0",
        gasLimit: block.gasLimit?.toString() || "0",
        difficulty: "0", // Not applicable for PoS chains
        totalDifficulty: "0", // Not applicable for PoS chains
        size: "0", // Need to calculate from raw data
        miner: block.miner || ""
      });
    }
    
    // Update cache
    metricsCache.recentBlocks = blocks;
    metricsCache.lastUpdated = now;
    
    return blocks;
  } catch (error) {
    console.error("Error fetching recent blocks:", error);
    // Return cached data if available, otherwise throw
    if (metricsCache.recentBlocks.length > 0) {
      return metricsCache.recentBlocks.slice(0, count);
    }
    throw error;
  }
}

export async function getRecentTransactions(count: number = 20): Promise<Transaction[]> {
  const now = Date.now();
  if (metricsCache.recentTransactions.length >= count && now - metricsCache.lastUpdated < CACHE_TTL) {
    return metricsCache.recentTransactions.slice(0, count);
  }

  try {
    const blocks = await getRecentBlocks(5);
    const transactions: Transaction[] = [];
    
    for (const block of blocks) {
      for (const txHash of block.transactions.slice(0, Math.ceil(count / blocks.length))) {
        const tx = await retryWithBackoff(() => provider.getTransaction(txHash));
        if (!tx) continue;
        
        transactions.push({
          hash: tx.hash,
          from: tx.from,
          to: tx.to || "",
          value: tx.value.toString(),
          gas: tx.gasLimit.toString(),
          gasPrice: tx.gasPrice?.toString() || "0",
          nonce: tx.nonce,
          blockHash: tx.blockHash || "",
          blockNumber: Number(tx.blockNumber),
          timestamp: block.timestamp
        });
        
        if (transactions.length >= count) break;
      }
      if (transactions.length >= count) break;
    }
    
    // Update cache
    metricsCache.recentTransactions = transactions;
    metricsCache.lastUpdated = now;
    
    return transactions;
  } catch (error) {
    console.error("Error fetching recent transactions:", error);
    // Return cached data if available, otherwise throw
    if (metricsCache.recentTransactions.length > 0) {
      return metricsCache.recentTransactions.slice(0, count);
    }
    throw error;
  }
}

export async function getChainComparisons(): Promise<ChainComparison[]> {
  // This would normally come from an API or database
  // Using static data for demonstration
  return [
    { name: "Monad Testnet", tps: 10000, blockTime: 1, finality: 1 },
    { name: "Ethereum", tps: 15, blockTime: 12, finality: 12 },
    { name: "Solana", tps: 4000, blockTime: 0.4, finality: 32 },
    { name: "Arbitrum", tps: 50, blockTime: 0.25, finality: 0.25 },
    { name: "Optimism", tps: 35, blockTime: 2, finality: 10 }
  ];
}
