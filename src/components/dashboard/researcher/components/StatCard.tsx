
import React, { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  value: string;
  subtext: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  iconBgClass,
  iconTextClass,
  title,
  value,
  subtext,
}) => {
  return (
    <div className="p-6 flex items-center gap-4">
      <div className={`h-12 w-12 rounded-full ${iconBgClass} flex items-center justify-center ${iconTextClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
        <p className="text-xs">{subtext}</p>
      </div>
    </div>
  );
};

export default StatCard;
