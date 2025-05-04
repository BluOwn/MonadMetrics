export interface Block {
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
  
  export interface Transaction {
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
  
  export interface NetworkStats {
    latestBlock: number;
    avgBlockTime: number; // in seconds
    tps: number; // transactions per second
    pendingTxCount: number;
    gasPrice: string;
    nodesCount: number;
  }
  
  export interface ChainComparison {
    name: string;
    tps: number;
    blockTime: number;
    finality: number;
  }
  