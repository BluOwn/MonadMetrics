import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import type { ChainComparison } from "../lib/types";

interface ComparisonChartProps {
  data: ChainComparison[];
  metric: "tps" | "blockTime" | "finality";
  title: string;
  color: string;
}

export function ComparisonChart({ data, metric, title, color }: ComparisonChartProps) {
  const formatYAxis = (value: number) => {
    if (metric === "tps" && value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis 
              type="category" 
              dataKey="name"
              width={100}
            />
            <Tooltip 
              formatter={(value) => {
                if (metric === "tps") {
                  return [`${value.toLocaleString()} TPS`, "Transactions Per Second"];
                } else if (metric === "blockTime") {
                  return [`${value} seconds`, "Block Time"];
                } else {
                  return [`${value} seconds`, "Finality Time"];
                }
              }}
            />
            <Legend />
            <Bar 
              dataKey={metric} 
              fill={color} 
              name={
                metric === "tps" 
                  ? "Transactions Per Second" 
                  : metric === "blockTime" 
                    ? "Block Time (s)" 
                    : "Finality Time (s)"
              } 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
