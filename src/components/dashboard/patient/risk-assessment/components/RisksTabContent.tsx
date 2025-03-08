
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface RiskItem {
  icon: React.ReactNode;
  name: string;
  risk: string;
  riskColor: string;
  progress: number;
  description: string;
}

interface RisksTabContentProps {
  riskItems: RiskItem[];
}

const RisksTabContent: React.FC<RisksTabContentProps> = ({ riskItems }) => {
  return (
    <>
      {riskItems.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="flex items-center gap-2">
              {item.icon}
              <span>{item.name}</span>
            </span>
            <span className={`${item.riskColor} font-medium`}>{item.risk}</span>
          </div>
          <Progress value={item.progress} className="h-2" />
          <p className="mt-1 text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default RisksTabContent;
