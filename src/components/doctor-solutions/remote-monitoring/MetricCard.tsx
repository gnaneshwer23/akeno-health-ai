
import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  status: string;
  statusColor: string;
}

const MetricCard = ({ icon, title, value, unit, status, statusColor }: MetricCardProps) => (
  <div className="bg-white border border-gray-200 p-3 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="text-sm font-medium">{title}</span>
    </div>
    <div className="text-2xl font-bold">
      {value} <span className="text-sm font-normal text-gray-500">{unit}</span>
    </div>
    <div className={`mt-1 text-xs ${statusColor}`}>{status}</div>
  </div>
);

export default MetricCard;
