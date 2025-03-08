
import React from 'react';
import { AlertCircle, Activity } from 'lucide-react';

interface BiomarkerItem {
  name: string;
  value: number | string;
  status: string;
  trend: string;
  impact: string;
}

interface BiomarkersTabContentProps {
  loading: boolean;
  biomarkers: BiomarkerItem[];
}

const BiomarkersTabContent: React.FC<BiomarkersTabContentProps> = ({ loading, biomarkers }) => {
  const getBiomarkerStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'alert': return 'text-red-600';
      case 'monitor': return 'text-yellow-600';
      case 'normal': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };
  
  const getTrendIcon = (trend: string) => {
    switch (trend.toLowerCase()) {
      case 'elevated':
        return <Activity className="h-4 w-4 text-red-500" />;
      case 'borderline':
        return <Activity className="h-4 w-4 text-yellow-500" />;
      case 'suboptimal':
        return <Activity className="h-4 w-4 text-yellow-500" />;
      case 'normal':
      case 'stable':
        return <Activity className="h-4 w-4 text-green-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        <p>Analyzing your biomarkers...</p>
      </div>
    );
  }

  if (biomarkers.length === 0) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        <AlertCircle className="h-8 w-8 mx-auto mb-2 text-amber-500" />
        <p>No biomarker data available for analysis.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {biomarkers.map((biomarker, index) => (
        <div key={index} className="border rounded-md p-3">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              {getTrendIcon(biomarker.trend)}
              <span className="font-medium">{biomarker.name}</span>
            </div>
            <span className={`text-sm px-2 py-1 rounded-full ${getBiomarkerStatusColor(biomarker.status)} bg-opacity-10`}>
              {biomarker.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Value:</span> {biomarker.value}
            </div>
            <div>
              <span className="text-muted-foreground">Trend:</span> {biomarker.trend}
            </div>
          </div>
          <p className="mt-2 text-sm">{biomarker.impact}</p>
        </div>
      ))}
    </div>
  );
};

export default BiomarkersTabContent;
