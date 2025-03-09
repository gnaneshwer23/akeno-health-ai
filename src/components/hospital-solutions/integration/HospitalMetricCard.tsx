
import React from 'react';

interface HospitalMetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  statusColor: string;
}

const HospitalMetricCard = ({ icon, title, value, status, statusColor }: HospitalMetricCardProps) => (
  <div className="bg-health-light/20 border border-gray-200 p-3 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="text-sm font-medium">{title}</span>
    </div>
    <div className="text-2xl font-bold">
      {value}
    </div>
    <div className={`mt-1 text-xs ${statusColor}`}>{status}</div>
  </div>
);

export default HospitalMetricCard;
