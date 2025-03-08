
import React from 'react';
import { AlertCircle, BarChart2, Check } from 'lucide-react';

interface PreprocessingTabContentProps {
  loading: boolean;
  processingResults: any;
}

const PreprocessingTabContent: React.FC<PreprocessingTabContentProps> = ({ loading, processingResults }) => {
  if (loading) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        <p>Analyzing and preprocessing your health data...</p>
      </div>
    );
  }

  if (!processingResults) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        <AlertCircle className="h-8 w-8 mx-auto mb-2 text-amber-500" />
        <p>Could not retrieve preprocessing results.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-3 rounded-md bg-slate-50">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-5 w-5 text-indigo-500" />
          <span className="font-medium">Features Extracted</span>
        </div>
        <span className="text-lg font-semibold text-indigo-600">{processingResults.featureCount}</span>
      </div>
      
      <div className="flex justify-between items-center p-3 rounded-md bg-slate-50">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          <span className="font-medium">Anomalies Detected</span>
        </div>
        <span className="text-lg font-semibold text-amber-600">{processingResults.anomalyCount}</span>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">Key Findings</h4>
        <ul className="space-y-2">
          {processingResults.significantFindings.map((finding: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              {finding.includes("No significant") ? (
                <Check className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
              )}
              <span>{finding}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {processingResults.topFeatures && processingResults.topFeatures.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Top Health Indicators</h4>
          <ul className="space-y-2">
            {processingResults.topFeatures.map((feature: any, index: number) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                <span className="capitalize">{feature.name.replace(/_/g, ' ')}</span>
                <span className="text-xs text-muted-foreground">({feature.category})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PreprocessingTabContent;
