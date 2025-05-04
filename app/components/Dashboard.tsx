import React from "react";
import { Link } from "@remix-run/react";
import { ethers } from "ethers";
import { MetricCard } from "./MetricCard";
import { TransactionChart } from "./TransactionChart";
import { BlockTimeChart } from "./BlockTimeChart";
import { NetworkStatus } from "./NetworkStatus";
import { ComparisonChart } from "./ComparisonChart";
import type { Block, Transaction, NetworkStats, ChainComparison } from "~/lib/types";

interface DashboardProps {
  networkStats: NetworkStats;
  recentBlocks: Block[];
  recentTransactions: Transaction[];
  chainComparisons: ChainComparison[];
  blockTimeTrend: Array<{ blockNumber: number; blockTime: number }>;
  txTrend: Array<{ blockNumber: number; transactionCount: number }>;
}

export function Dashboard({
  networkStats,
  recentBlocks,
  recentTransactions,
  chainComparisons,
  blockTimeTrend,
  txTrend
}: DashboardProps) {
  // Format the value for better display
  const formatEther = (wei: string) => {
    try {
      return parseFloat(ethers.formatEther(wei)).toFixed(6);
    } catch {
      return "0";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Monad Testnet Dashboard</h1>
        <p className="text-gray-600">Real-time analytics for the Monad Testnet</p>
      </header>

      {/* Key Metrics */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="TPS"
            value={networkStats.tps.toFixed(2)}
            description="Transactions per second"
          />
          <MetricCard
            title="Block Time"
            value={`${networkStats.avgBlockTime.toFixed(2)}s`}
            description="Average time between blocks"
          />
          <MetricCard
            title="Latest Block"
            value={networkStats.latestBlock.toLocaleString()}
            description="Current blockchain height"
          />
          <MetricCard
            title="Gas Price"
            value={`${ethers.formatUnits(networkStats.gasPrice || "0", "gwei")} Gwei`}
            description="Current gas price"
          />
        </div>
      </section>

      {/* Charts */}
      <section className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionChart data={txTrend} />
        <BlockTimeChart data={blockTimeTrend} />
      </section>

      {/* Network Status and Comparisons */}
      <section className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NetworkStatus stats={networkStats} />
        <ComparisonChart 
          data={chainComparisons} 
          metric="tps" 
          title="TPS Comparison" 
          color="#8884d8" 
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Chain Comparisons</h2>
        <div className="grid grid-cols-1 gap-6">
          <ComparisonChart 
            data={chainComparisons} 
            metric="blockTime" 
            title="Block Time Comparison (seconds)" 
            color="#82ca9d" 
          />
          <ComparisonChart 
            data={chainComparisons} 
            metric="finality" 
            title="Finality Time Comparison (seconds)" 
            color="#ffc658" 
          />
        </div>
      </section>

      {/* Recent Blocks & Transactions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Blocks</h2>
            <Link to="/blocks" className="text-blue-500 hover:text-blue-700">
              View All →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Txs</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Used</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentBlocks.slice(0, 5).map((block) => (
                  <tr key={block.hash} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">
                      <Link to={`/blocks/${block.number}`}>
                        {block.number}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(block.timestamp * 1000).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {block.transactions.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ethers.formatUnits(block.gasUsed, "gwei")} Gwei
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <Link to="/transactions" className="text-blue-500 hover:text-blue-700">
              View All →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tx Hash</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.slice(0, 5).map((tx) => (
                  <tr key={tx.hash} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">
                      <Link to={`/transactions/${tx.hash}`}>
                        {tx.hash.substring(0, 10)}...
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tx.from.substring(0, 8)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tx.to ? `${tx.to.substring(0, 8)}...` : 'Contract Creation'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatEther(tx.value)} MON
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}