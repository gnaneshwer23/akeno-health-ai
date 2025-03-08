
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Droplet, 
  Stethoscope, 
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';

const BiometricsTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Metrics Trends</CardTitle>
        <CardDescription>View your historical health data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <h4 className="font-medium">Cardiovascular Health</h4>
              </div>
              <Badge>Good</Badge>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Resting Heart Rate</span>
                  <span className="flex items-center gap-1">
                    <TrendingDown className="h-3 w-3 text-green-600" /> 
                    <span className="font-medium">68 bpm</span>
                  </span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Blood Pressure</span>
                  <span className="flex items-center gap-1">
                    <Activity className="h-3 w-3 text-blue-600" /> 
                    <span className="font-medium">118/78 mmHg</span>
                  </span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Heart Rate Variability</span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600" /> 
                    <span className="font-medium">62 ms</span>
                  </span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplet className="h-5 w-5 text-blue-500" />
                <h4 className="font-medium">Metabolic Health</h4>
              </div>
              <Badge>Excellent</Badge>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Fasting Glucose</span>
                  <span className="flex items-center gap-1">
                    <Activity className="h-3 w-3 text-blue-600" /> 
                    <span className="font-medium">92 mg/dL</span>
                  </span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Cholesterol (Total)</span>
                  <span className="flex items-center gap-1">
                    <Activity className="h-3 w-3 text-blue-600" /> 
                    <span className="font-medium">175 mg/dL</span>
                  </span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Body Fat</span>
                  <span className="flex items-center gap-1">
                    <TrendingDown className="h-3 w-3 text-green-600" /> 
                    <span className="font-medium">18.5%</span>
                  </span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-indigo-500" />
                <h4 className="font-medium">Respiratory Health</h4>
              </div>
              <Badge>Good</Badge>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Resting Respiratory Rate</span>
                  <span className="flex items-center gap-1">
                    <Activity className="h-3 w-3 text-blue-600" /> 
                    <span className="font-medium">14 breaths/min</span>
                  </span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Blood Oxygen</span>
                  <span className="flex items-center gap-1">
                    <Activity className="h-3 w-3 text-blue-600" /> 
                    <span className="font-medium">98%</span>
                  </span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BiometricsTabContent;
