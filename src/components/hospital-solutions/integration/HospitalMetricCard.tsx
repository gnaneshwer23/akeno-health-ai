
import React from 'react';
import { cva } from 'class-variance-authority';

interface HospitalMetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  statusColor: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
}

const statusVariants = cva("mt-1 text-xs", {
  variants: {
    status: {
      positive: "text-green-600",
      warning: "text-amber-600",
      negative: "text-red-600",
      neutral: "text-blue-600",
    }
  },
  defaultVariants: {
    status: "neutral"
  }
});

const trendIconVariants = cva("inline-block ml-1", {
  variants: {
    trend: {
      up: "border-l-4 border-r-4 border-transparent border-b-4 border-b-green-500",
      down: "border-l-4 border-r-4 border-transparent border-t-4 border-t-red-500",
      stable: "h-1 w-4 bg-blue-500"
    }
  }
});

const HospitalMetricCard = ({ 
  icon, 
  title, 
  value, 
  status, 
  statusColor,
  trend,
  trendValue
}: HospitalMetricCardProps) => (
  <div className="bg-health-light/20 border border-gray-200 p-3 rounded-lg hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-2">
      <div className="text-health-primary">
        {icon}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
    <div className="text-2xl font-bold flex items-end gap-2">
      {value}
      {trend && trendValue && (
        <div className="flex items-center text-sm font-normal">
          <span className={trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-blue-600'}>
            {trendValue}
          </span>
          <div className={trendIconVariants({ trend })} style={{ width: '8px', height: '8px' }}></div>
        </div>
      )}
    </div>
    <div className={statusVariants({ status: statusColor as any })}>{status}</div>
  </div>
);

export default HospitalMetricCard;
