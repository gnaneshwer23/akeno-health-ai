
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HealthGoalsCard = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Goals</CardTitle>
        <CardDescription>AI-recommended goals based on your health profile</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Daily Steps</h4>
              <Badge variant="outline">8,456 / 10,000</Badge>
            </div>
            <Progress value={84} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">You're on track to reach your goal!</p>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Water Intake</h4>
              <Badge variant="outline">4 / 8 glasses</Badge>
            </div>
            <Progress value={50} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">You're halfway to your daily hydration goal.</p>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Weekly Exercise</h4>
              <Badge variant="outline">3 / 5 days</Badge>
            </div>
            <Progress value={60} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">2 more days of activity needed this week.</p>
          </div>

          <Button variant="outline" className="w-full" onClick={() => toast({
            title: "Coming Soon",
            description: "Custom goal setting will be available soon!",
          })}>
            <Plus className="mr-2 h-4 w-4" />
            Set Custom Goal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthGoalsCard;
