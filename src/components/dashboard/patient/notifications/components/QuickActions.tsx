
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: "Action Triggered",
      description: `${action} functionality coming soon!`,
    });
  };

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Manage your notification preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Button 
            variant="outline" 
            className="h-auto flex flex-col items-center justify-center py-4 px-2 space-y-2"
            onClick={() => handleAction("Mark All as Read")}
          >
            <Bell className="h-6 w-6 text-health-primary" />
            <span className="text-xs text-center">Mark All as Read</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto flex flex-col items-center justify-center py-4 px-2 space-y-2"
            onClick={() => handleAction("Notification Settings")}
          >
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-xs text-center">Notification Settings</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto flex flex-col items-center justify-center py-4 px-2 space-y-2"
            onClick={() => handleAction("Setup Alerts")}
          >
            <Info className="h-6 w-6 text-blue-500" />
            <span className="text-xs text-center">Setup Alerts</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
