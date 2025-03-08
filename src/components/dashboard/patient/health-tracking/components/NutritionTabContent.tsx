
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NutritionTabContent = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nutrition Tracking</CardTitle>
        <CardDescription>Track your food intake and nutrition</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 px-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-4">
            <Clock size={32} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Nutrition tracking features are currently in development and will be available soon!
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => toast({
              title: "Feature in Development",
              description: "We're working hard to bring you nutrition tracking soon!",
            })}
          >
            Get Notified When Available
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionTabContent;
