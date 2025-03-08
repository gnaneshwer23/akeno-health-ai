
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SymptomTrackerTabContent = () => {
  const { toast } = useToast();

  const handleAddSymptom = () => {
    toast({
      title: "Coming Soon",
      description: "Symptom tracking will be available soon!",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Symptom Tracker</CardTitle>
            <CardDescription>Log and monitor your symptoms over time</CardDescription>
          </div>
          <Button onClick={handleAddSymptom}>
            <Plus className="mr-2 h-4 w-4" />
            Add Symptom
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">Recent Symptoms</h3>
            <div className="space-y-3">
              <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">Headache</h4>
                    <Badge variant="outline" className="bg-white">Moderate</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Reported yesterday at 3:15 PM</p>
                  <p className="text-sm mt-2">Dull pain behind eyes, lasted approximately 2 hours.</p>
                  <div className="mt-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Stress</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-1">Dehydration</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">Fatigue</h4>
                    <Badge variant="outline" className="bg-white">Mild</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Reported 2 days ago at 9:30 PM</p>
                  <p className="text-sm mt-2">General tiredness throughout the day, improved after rest.</p>
                  <div className="mt-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Poor Sleep</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-1">Stress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">AI Insights</h3>
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
              <p className="text-sm">Based on your symptom patterns, our AI has identified:</p>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                <li>Your headaches may be correlated with periods of high stress</li>
                <li>Fatigue symptoms tend to occur after days with less than 7 hours of sleep</li>
                <li>Both symptoms improve with increased hydration</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <p className="text-sm font-medium">Recommendations:</p>
                <ul className="mt-1 text-sm list-disc pl-5 space-y-1">
                  <li>Maintain consistent sleep schedule (7-8 hours)</li>
                  <li>Practice stress management techniques</li>
                  <li>Increase daily water intake by 16oz</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SymptomTrackerTabContent;
