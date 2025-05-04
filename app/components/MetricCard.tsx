import React from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: number; // Percentage change
  icon?: React.ReactNode;
}

export function MetricCard({ title, value, description, trend, icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        {icon && <div className="text-blue-500">{icon}</div>}
      </div>
      
      <div className="flex items-baseline mt-1">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        {trend !== undefined && (
          <span className={`ml-2 text-sm font-medium ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      
      {description && <p className="text-gray-500 text-sm mt-1">{description}</p>}
    </div>
  );
}