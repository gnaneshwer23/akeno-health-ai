
import React from 'react';

interface EfficiencyStatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const EfficiencyStatCard = ({ title, value, icon, description }: EfficiencyStatCardProps) => {
  const isPositive = value.startsWith('+');
  const textColor = isPositive ? 'text-green-600' : 'text-health-primary';
  
  return (
    <div className="bg-white border border-gray-200 p-3 rounded-lg">
      <div className="flex items-center gap-2 mb-1">
        <div className="text-health-primary">{icon}</div>
        <span className="text-xs font-medium">{title}</span>
      </div>
      <div className={`text-2xl font-bold ${textColor}`}>
        {value}
      </div>
      <div className="mt-1 text-xs text-gray-500">{description}</div>
    </div>
  );
};

export default EfficiencyStatCard;
