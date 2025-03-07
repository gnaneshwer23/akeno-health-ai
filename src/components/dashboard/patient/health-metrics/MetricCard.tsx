
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';

interface MetricItem {
  label: string;
  value: string;
  progress: number;
}

interface MetricCardProps {
  title: string;
  icon: React.ReactNode;
  status: string;
  statusColor: string;
  metrics: MetricItem[];
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  icon, 
  status, 
  statusColor, 
  metrics 
}) => {
  return (
    <Card>
      <CardHeader className="py-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </CardTitle>
          <span className={`${statusColor} text-sm`}>{status}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1 text-sm">
                <span>{metric.label}</span>
                <span className="font-medium">{metric.value}</span>
              </div>
              <Progress value={metric.progress} className="h-1.5" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
