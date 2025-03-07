
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';

const HealthScoreCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Your Health Score</CardTitle>
        <CardDescription>AI-generated assessment based on your health metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
            86
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Overall Health</span>
              <span className="text-sm font-medium text-green-600">Good</span>
            </div>
            <Progress value={86} className="h-2" />
            <p className="mt-2 text-sm text-muted-foreground">
              Your health score is <span className="text-green-600 font-medium">12% higher</span> than last month
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthScoreCard;
