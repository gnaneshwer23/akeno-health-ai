
import React from 'react';
import { Brain, Activity } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const AIAnalysisCard = () => {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <Brain size={16} className="text-health-primary" />
          AI Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-2">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium flex items-center gap-1">
                <Activity size={12} className="text-health-primary" />
                Early Stage Pneumonia
              </span>
              <span className="text-xs font-medium">96%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-health-primary rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium flex items-center gap-1">
                <Activity size={12} className="text-health-primary" />
                COVID-19 Indicators
              </span>
              <span className="text-xs font-medium">12%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-health-primary rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium flex items-center gap-1">
                <Activity size={12} className="text-health-primary" />
                Pulmonary Fibrosis
              </span>
              <span className="text-xs font-medium">3%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-health-primary rounded-full" style={{ width: '3%' }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAnalysisCard;
