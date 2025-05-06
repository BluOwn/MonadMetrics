import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getRecentBlocks } from "~/lib/monad.server";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useFarcaster } from "~/hooks/useFarcaster";

interface Block {
  number: number;
  hash: string;
  timestamp: number;
  transactions: string[];
  gasUsed: string;
  gasLimit: string;
}

export const loader = async () => {
  try {
    const blocks = await getRecentBlocks(50);
    return json({ blocks });
  } catch (error) {
    console.error("Error loading blocks:", error);
    throw new Response("Error loading blocks", { status: 500 });
  }
};

export default function Blocks() {
  const { blocks } = useLoaderData<typeof loader>();
  
  useFarcaster();
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Recent Blocks</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hash</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Txs</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Used</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Limit</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blocks.map((block) => (
              <tr key={block.hash} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">
                  <Link to={`/blocks/${block.number}`}>
                    {block.number}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {block.hash.substring(0, 10)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(block.timestamp * 1000).toISOString().replace('T', ' ').slice(0, 19)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {block.transactions.length}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {ethers.formatUnits(block.gasUsed, "gwei")} Gwei
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {ethers.formatUnits(block.gasLimit, "gwei")} Gwei
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}