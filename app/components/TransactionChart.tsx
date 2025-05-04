import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TransactionChartProps {
  data: Array<{
    blockNumber: number;
    transactionCount: number;
  }>;
}

export function TransactionChart({ data }: TransactionChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Transaction Volume</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="blockNumber" 
              label={{ value: 'Block Number', position: 'insideBottomRight', offset: -10 }} 
            />
            <YAxis 
              label={{ value: 'Transaction Count', angle: -90, position: 'insideLeft' }} 
            />
            <Tooltip 
              formatter={(value) => [`${value} transactions`, 'Count']}
              labelFormatter={(label) => `Block #${label}`}
            />
            <Area 
              type="monotone" 
              dataKey="transactionCount" 
              stroke="#8884d8" 
              fill="#8884d8" 
              fillOpacity={0.3} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}