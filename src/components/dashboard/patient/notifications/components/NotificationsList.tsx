
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Calendar, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NotificationsList = () => {
  const { toast } = useToast();

  const handleViewAll = () => {
    toast({
      title: "Coming Soon",
      description: "View all notifications functionality will be available soon!",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Notifications</CardTitle>
        <CardDescription>Your latest health updates and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Alert variant="destructive" className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="text-red-800">Critical Health Alert</AlertTitle>
            <AlertDescription className="text-red-700">
              Your blood glucose reading was 180 mg/dL at 2:30 PM today, which is above your target range. Consider checking again in 1 hour.
            </AlertDescription>
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
              <span>Today, 2:35 PM</span>
              <Badge variant="outline" className="bg-white border-red-200">High Priority</Badge>
            </div>
          </Alert>

          <Alert className="border-amber-200 bg-amber-50">
            <Calendar className="h-4 w-4 text-amber-500" />
            <AlertTitle className="text-amber-800">Medication Reminder</AlertTitle>
            <AlertDescription className="text-amber-700">
              Remember to take your evening medication in 30 minutes. Don't forget to log it in your health tracking.
            </AlertDescription>
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
              <span>Today, 6:00 PM</span>
              <Badge variant="outline" className="bg-white border-amber-200">Reminder</Badge>
            </div>
          </Alert>

          <Alert className="border-blue-200 bg-blue-50">
            <Heart className="h-4 w-4 text-blue-500" />
            <AlertTitle className="text-blue-800">Health Update</AlertTitle>
            <AlertDescription className="text-blue-700">
              Your heart rate variability has improved by 15% over the past week. This indicates better recovery and stress management.
            </AlertDescription>
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
              <span>Yesterday, 9:15 AM</span>
              <Badge variant="outline" className="bg-white border-blue-200">Weekly Update</Badge>
            </div>
          </Alert>

          <Alert className="border-green-200 bg-green-50">
            <Activity className="h-4 w-4 text-green-500" />
            <AlertTitle className="text-green-800">Goal Achievement</AlertTitle>
            <AlertDescription className="text-green-700">
              Congratulations! You've reached your daily step goal of 10,000 steps for 5 consecutive days. Keep up the good work!
            </AlertDescription>
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
              <span>Yesterday, 8:45 PM</span>
              <Badge variant="outline" className="bg-white border-green-200">Achievement</Badge>
            </div>
          </Alert>

          <Button variant="outline" className="w-full" onClick={handleViewAll}>
            View All Notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsList;
