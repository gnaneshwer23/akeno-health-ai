
import React from 'react';
import { AlertCircle, Dna, FileText, Brain } from 'lucide-react';

interface MultiOmicsTabContentProps {
  loading: boolean;
  multiOmicsAnalysis: any;
}

const MultiOmicsTabContent: React.FC<MultiOmicsTabContentProps> = ({ loading, multiOmicsAnalysis }) => {
  if (loading) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        <p>Analyzing multi-omics data fusion...</p>
      </div>
    );
  }

  if (!multiOmicsAnalysis) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        <AlertCircle className="h-8 w-8 mx-auto mb-2 text-amber-500" />
        <p>No multi-omics analysis data available.</p>
        <p className="text-xs mt-2">This requires genomic data combined with other health metrics.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Biological Pathways */}
      {multiOmicsAnalysis.pathways && multiOmicsAnalysis.pathways.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <Dna className="h-4 w-4 text-purple-500" />
            Biological Pathways
          </h4>
          <div className="space-y-2">
            {multiOmicsAnalysis.pathways.map((pathway: any, index: number) => (
              <div key={index} className="bg-slate-50 p-3 rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">{pathway.name}</span>
                  <span className={
                    pathway.significance === 'high' ? 'text-red-600' : 
                    pathway.significance === 'medium' ? 'text-yellow-600' : 
                    'text-green-600'
                  }>
                    {pathway.significance} significance
                  </span>
                </div>
                <p className="text-sm mt-1">{pathway.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Recommended Biomarkers */}
      {multiOmicsAnalysis.biomarkers && multiOmicsAnalysis.biomarkers.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-500" />
            Recommended Biomarkers to Monitor
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {multiOmicsAnalysis.biomarkers.map((biomarker: any, index: number) => (
              <div key={index} className="bg-slate-50 p-3 rounded-md">
                <div className="font-medium">{biomarker.name}</div>
                <div className="text-xs text-muted-foreground">Category: {biomarker.category}</div>
                <p className="text-sm mt-1">{biomarker.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Personalized Insights */}
      {multiOmicsAnalysis.personalizedInsights && multiOmicsAnalysis.personalizedInsights.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <Brain className="h-4 w-4 text-indigo-500" />
            Personalized Insights
          </h4>
          <ul className="space-y-2">
            {multiOmicsAnalysis.personalizedInsights.map((insight: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiOmicsTabContent;
