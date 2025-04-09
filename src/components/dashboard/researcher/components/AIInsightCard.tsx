
import React from 'react';
import { Button } from '@/components/ui/button';

interface AIInsightCardProps {
  borderColor: string;
  bgColor: string;
  title: string;
  description: string;
  confidenceScore: number;
}

const AIInsightCard: React.FC<AIInsightCardProps> = ({
  borderColor,
  bgColor,
  title,
  description,
  confidenceScore,
}) => {
  return (
    <div className={`p-3 border-l-4 ${borderColor} ${bgColor} rounded-r-md`}>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm mt-1">
        {description}
      </p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xs text-muted-foreground">Confidence score: {confidenceScore}%</span>
        <Button variant="link" size="sm" className="h-auto p-0">View detailed analysis</Button>
      </div>
    </div>
  );
};

export default AIInsightCard;
