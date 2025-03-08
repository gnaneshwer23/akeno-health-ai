
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
import { Bell, Heart, Activity, Calendar, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PatientNotifications = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Notifications</h1>
        <p className="text-muted-foreground">Stay updated with your health alerts and reminders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-health-primary" />
                <CardTitle className="text-lg">Notification Center</CardTitle>
              </div>
              <Badge variant="outline" className="bg-white">7 New</Badge>
            </div>
            <CardDescription>Your health alerts and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>All Notifications</span>
                <span className="font-medium">16</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Unread</span>
                <span className="font-medium text-health-primary">7</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Health Alerts</span>
                <span className="font-medium text-red-500">2</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Reminders</span>
                <span className="font-medium text-amber-500">5</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Updates</span>
                <span className="font-medium text-blue-500">9</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Button variant="outline" className="h-auto flex flex-col items-center justify-center py-4 px-2 space-y-2">
                <Bell className="h-6 w-6 text-health-primary" />
                <span className="text-xs text-center">Mark All as Read</span>
              </Button>
              <Button variant="outline" className="h-auto flex flex-col items-center justify-center py-4 px-2 space-y-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-xs text-center">Notification Settings</span>
              </Button>
              <Button variant="outline" className="h-auto flex flex-col items-center justify-center py-4 px-2 space-y-2">
                <Info className="h-6 w-6 text-blue-500" />
                <span className="text-xs text-center">Setup Alerts</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

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

            <Button variant="outline" className="w-full">View All Notifications</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientNotifications;
