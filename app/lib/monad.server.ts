import { ethers } from "ethers";
import type { Block, Transaction, NetworkStats } from "./types";

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
const CACHE_TTL = 5000; // 5 seconds

export async function getNetworkStats(): Promise<NetworkStats> {
  const now = Date.now();
  if (metricsCache.networkStats && now - metricsCache.lastUpdated < CACHE_TTL) {
    return metricsCache.networkStats;
  }

  try {
    // Get latest block
    const latestBlock = await provider.getBlockNumber();
    
    // Get recent blocks to calculate average block time
    const blocks = await getRecentBlocks(10);
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
    
    // Get pending transactions
    const pendingTxCount = await provider.send("eth_pendingTransactions", []).then(txs => txs.length);
    
    // Get gas price
    const gasPrice = (await provider.getFeeData()).gasPrice?.toString() || "0";
    
    // Nodes count (this is a mock as there's no direct way to get this)
    const nodesCount = 50; // Mock value
    
    const stats: NetworkStats = {
      latestBlock,
      avgBlockTime,
      tps,
      pendingTxCount,
      gasPrice,
      nodesCount
    };
    
    // Update cache
    metricsCache.networkStats = stats;
    metricsCache.lastUpdated = now;
    
    return stats;
  } catch (error) {
    console.error("Error fetching network stats:", error);
    throw error;
  }
}

export async function getRecentBlocks(count: number = 10): Promise<Block[]> {
  const now = Date.now();
  if (metricsCache.recentBlocks.length >= count && now - metricsCache.lastUpdated < CACHE_TTL) {
    return metricsCache.recentBlocks.slice(0, count);
  }

  try {
    const latestBlock = await provider.getBlockNumber();
    const blocks: Block[] = [];
    
    for (let i = 0; i < count; i++) {
      const blockNumber = latestBlock - i;
      if (blockNumber < 0) break;
      
      const block = await provider.getBlock(blockNumber);
      if (!block) continue;
      
      blocks.push({
        number: Number(block.number),
        hash: block.hash || "",
        timestamp: Number(block.timestamp),
        transactions: block.transactions || [],
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
        const tx = await provider.getTransaction(txHash);
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
