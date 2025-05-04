import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface BlockTimeChartProps {
  data: Array<{
    blockNumber: number;
    blockTime: number;
  }>;
}

export function BlockTimeChart({ data }: BlockTimeChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Block Time (seconds)</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="blockNumber" 
              label={{ value: 'Block Number', position: 'insideBottomRight', offset: -10 }} 
            />
            <YAxis 
              label={{ value: 'Block Time (s)', angle: -90, position: 'insideLeft' }} 
            />
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(2)} seconds`, 'Block Time']}
              labelFormatter={(label: number) => `Block #${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="blockTime" 
              stroke="#82ca9d" 
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}