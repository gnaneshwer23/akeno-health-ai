
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Brain, 
  Droplet, 
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';

const MetricsCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <Heart className="h-5 w-5 text-red-500" />
            <Badge variant="outline" className="bg-white">Live Data</Badge>
          </div>
          <CardTitle className="text-lg">Heart Rate</CardTitle>
          <CardDescription>Current: 68 BPM</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-24 flex items-end gap-1">
            {[30, 45, 40, 50, 65, 55, 60, 68, 65, 70, 65, 68].map((value, i) => (
              <div 
                key={i}
                className="bg-red-400 rounded-t w-full"
                style={{ height: `${value}%` }}
              ></div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground flex justify-between">
          <span>Last 12 hours</span>
          <span className="flex items-center gap-1 text-green-600">
            <TrendingDown className="h-3 w-3" /> 
            5% lower than average
          </span>
        </CardFooter>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <Brain className="h-5 w-5 text-purple-500" />
            <Badge variant="outline" className="bg-white">Live Data</Badge>
          </div>
          <CardTitle className="text-lg">Sleep Quality</CardTitle>
          <CardDescription>Last night: 7.4 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Deep Sleep</span>
                <span>1.8 hrs</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>REM Sleep</span>
                <span>2.1 hrs</span>
              </div>
              <Progress value={28} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Light Sleep</span>
                <span>3.5 hrs</span>
              </div>
              <Progress value={47} className="h-2" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground flex justify-between">
          <span>Sleep efficiency: 89%</span>
          <span className="flex items-center gap-1 text-green-600">
            <TrendingUp className="h-3 w-3" /> 
            12% better than last week
          </span>
        </CardFooter>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <Droplet className="h-5 w-5 text-blue-500" />
            <Badge variant="outline" className="bg-white">Live Data</Badge>
          </div>
          <CardTitle className="text-lg">Blood Glucose</CardTitle>
          <CardDescription>Current: 92 mg/dL</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-24 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full border-4 border-blue-200 flex items-center justify-center">
                <div className="text-2xl font-bold text-blue-600">92</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end justify-between text-xs text-muted-foreground px-1">
              <span>70</span>
              <span className="text-green-600 font-medium">Target Range</span>
              <span>130</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground flex justify-between">
          <span>Today's average: 94 mg/dL</span>
          <span className="flex items-center gap-1 text-green-600">
            <Activity className="h-3 w-3" /> 
            Stable
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MetricsCardGrid;
