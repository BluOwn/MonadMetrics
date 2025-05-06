import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getChainComparisons } from "~/lib/monad.server";
import { ComparisonChart } from "~/components/ComparisonChart";
import { useEffect } from "react";

interface ChainComparison {
  name: string;
  tps: number;
  blockTime: number;
  finality: number;
}

export const loader = async () => {
  try {
    const chainComparisons = await getChainComparisons();
    return json({ chainComparisons });
  } catch (error) {
    console.error("Error loading chain comparisons:", error);
    throw new Response("Error loading chain comparisons", { status: 500 });
  }
};

export default function Compare() {
  const { chainComparisons } = useLoaderData<typeof loader>();
  
  useEffect(() => {
    try {
      const sdk = require('@farcaster/frame-sdk');
      sdk.actions.ready();
    } catch (error) {
      console.log('Farcaster SDK not available');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Chain Comparisons</h1>
        <p className="text-gray-600">Compare Monad Testnet with other blockchain networks</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <ComparisonChart 
          data={chainComparisons} 
          metric="tps" 
          title="Transactions Per Second (TPS)" 
          color="#8884d8" 
        />
        
        <ComparisonChart 
          data={chainComparisons} 
          metric="blockTime" 
          title="Block Time (seconds)" 
          color="#82ca9d" 
        />
        
        <ComparisonChart 
          data={chainComparisons} 
          metric="finality" 
          title="Finality Time (seconds)" 
          color="#ffc658" 
        />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Performance Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chain</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TPS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block Time (s)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finality (s)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {chainComparisons.map((chain) => (
                  <tr key={chain.name} className={chain.name === "Monad Testnet" ? "bg-blue-50" : "hover:bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {chain.name === "Monad Testnet" ? <strong>{chain.name}</strong> : chain.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {chain.tps.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {chain.blockTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {chain.finality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
