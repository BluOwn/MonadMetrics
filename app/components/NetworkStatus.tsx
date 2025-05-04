import React from "react";
import type { NetworkStats } from "../lib/types";

interface NetworkStatusProps {
  stats: NetworkStats;
}

export function NetworkStatus({ stats }: NetworkStatusProps) {
  // Calculate status based on network stats
  const getStatus = () => {
    // These thresholds are arbitrary and can be adjusted
    if (stats.tps > 5000 && stats.avgBlockTime < 2) {
      return { label: "Excellent", color: "bg-green-500" };
    } else if (stats.tps > 1000 && stats.avgBlockTime < 5) {
      return { label: "Good", color: "bg-green-400" };
    } else if (stats.tps > 100 && stats.avgBlockTime < 10) {
      return { label: "Normal", color: "bg-yellow-400" };
    } else {
      return { label: "Degraded", color: "bg-red-500" };
    }
  };

  const status = getStatus();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Network Status</h2>
      
      <div className="flex items-center mb-4">
        <div className={`w-3 h-3 rounded-full ${status.color} mr-2`}></div>
        <span className="font-medium">{status.label}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Latest Block</p>
          <p className="font-medium"># {stats.latestBlock.toLocaleString()}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">TPS</p>
          <p className="font-medium">{stats.tps.toFixed(2)}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Block Time</p>
          <p className="font-medium">{stats.avgBlockTime.toFixed(2)}s</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Gas Price</p>
          <p className="font-medium">{ethers.formatUnits(stats.gasPrice || "0", "gwei")} Gwei</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Pending Txs</p>
          <p className="font-medium">{stats.pendingTxCount}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Nodes</p>
          <p className="font-medium">{stats.nodesCount}</p>
        </div>
      </div>
    </div>
  );
}