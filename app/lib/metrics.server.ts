import { getNetworkStats, getRecentBlocks, getRecentTransactions, getChainComparisons } from "./monad.server";
import type { Block, Transaction, NetworkStats, ChainComparison } from "./types";

export async function getDashboardData() {
  try {
    const [networkStats, recentBlocks, recentTransactions, chainComparisons] = await Promise.all([
      getNetworkStats(),
      getRecentBlocks(10),
      getRecentTransactions(20),
      getChainComparisons()
    ]);
    
    // Calculate block time trend data
    const blockTimeTrend = calculateBlockTimeTrend(recentBlocks);
    
    // Calculate transaction trend data
    const txTrend = calculateTransactionTrend(recentBlocks);
    
    return {
      networkStats,
      recentBlocks,
      recentTransactions,
      chainComparisons,
      blockTimeTrend,
      txTrend
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}

function calculateBlockTimeTrend(blocks: Block[]) {
  if (blocks.length <= 1) return [];
  
  const trend = [];
  for (let i = 1; i < blocks.length; i++) {
    const blockTime = blocks[i-1].timestamp - blocks[i].timestamp;
    trend.push({
      blockNumber: blocks[i].number,
      blockTime
    });
  }
  
  return trend.reverse(); // Oldest to newest
}

function calculateTransactionTrend(blocks: Block[]) {
  return blocks.map(block => ({
    blockNumber: block.number,
    transactionCount: block.transactions.length
  })).reverse(); // Oldest to newest
}