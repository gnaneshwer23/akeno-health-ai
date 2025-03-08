
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell } from 'lucide-react';

const NotificationCenter = () => {
  return (
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
  );
};

export default NotificationCenter;
