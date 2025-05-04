import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getRecentTransactions } from "~/lib/monad.server";
import { useEffect, useState } from "react";
import { sdk } from '@farcaster/frame-sdk';

export const loader = async () => {
  try {
    const transactions = await getRecentTransactions(50);
    return json({ transactions });
  } catch (error) {
    console.error("Error loading transactions:", error);
    throw new Response("Error loading transactions", { status: 500 });
  }
};

export default function Transactions() {
  const { transactions } = useLoaderData<typeof loader>();
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    sdk.actions.ready();
  }, []);
  
  // Format the value for better display
  const formatEther = (wei: string) => {
    try {
      return parseFloat(ethers.formatEther(wei)).toFixed(6);
    } catch {
      return "0";
    }
  };
  
  const filteredTransactions = transactions.filter(tx => 
    tx.hash.includes(searchTerm) || 
    tx.from.includes(searchTerm) || 
    tx.to.includes(searchTerm)
  );
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Recent Transactions</h1>
      </div>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by tx hash, from, or to address..."
          className="w-full p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tx Hash</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((tx) => (
              <tr key={tx.hash} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">
                  <a 
                    href={`https://testnet.monadexplorer.com/tx/${tx.hash}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {tx.hash.substring(0, 10)}...
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a 
                    href={`https://testnet.monadexplorer.com/block/${tx.blockNumber}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {tx.blockNumber}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a 
                    href={`https://testnet.monadexplorer.com/address/${tx.from}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {tx.from.substring(0, 8)}...{tx.from.substring(tx.from.length - 6)}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tx.to ? (
                    <a 
                      href={`https://testnet.monadexplorer.com/address/${tx.to}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {tx.to.substring(0, 8)}...{tx.to.substring(tx.to.length - 6)}
                    </a>
                  ) : (
                    <span>Contract Creation</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatEther(tx.value)} MON
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(tx.timestamp * 1000).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}