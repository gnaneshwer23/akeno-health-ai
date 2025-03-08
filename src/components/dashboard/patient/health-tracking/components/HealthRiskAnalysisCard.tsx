
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Activity, AlertTriangle, Brain } from 'lucide-react';

const HealthRiskAnalysisCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Risk Analysis</CardTitle>
        <CardDescription>AI-detected health risks based on your data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex items-start gap-3">
            <div className="p-1.5 bg-green-100 rounded-full flex-shrink-0">
              <Activity className="h-4 w-4 text-green-700" />
            </div>
            <div>
              <h4 className="font-medium text-green-800">Low Cardiovascular Risk</h4>
              <p className="text-xs text-green-700 mt-1">Your heart health metrics indicate low risk of cardiovascular issues.</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 flex items-start gap-3">
            <div className="p-1.5 bg-yellow-100 rounded-full flex-shrink-0">
              <AlertTriangle className="h-4 w-4 text-yellow-700" />
            </div>
            <div>
              <h4 className="font-medium text-yellow-800">Moderate Metabolic Risk</h4>
              <p className="text-xs text-yellow-700 mt-1">Slight variations in glucose levels suggest monitoring.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-start gap-3">
            <div className="p-1.5 bg-gray-100 rounded-full flex-shrink-0">
              <Brain className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Low Cognitive Risk</h4>
              <p className="text-xs text-gray-700 mt-1">Sleep quality and stress levels are within healthy ranges.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthRiskAnalysisCard;
