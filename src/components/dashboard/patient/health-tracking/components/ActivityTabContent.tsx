
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Activity } from 'lucide-react';

const ActivityTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Physical Activity</CardTitle>
        <CardDescription>Your movement and exercise data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-3">
                <Activity size={24} className="text-blue-600" />
              </div>
              <h4 className="text-2xl font-medium">8,456</h4>
              <p className="text-sm text-muted-foreground">Steps today</p>
              <p className="text-xs mt-2 text-green-600">84% of daily goal</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-3">
                <Activity size={24} className="text-green-600" />
              </div>
              <h4 className="text-2xl font-medium">42</h4>
              <p className="text-sm text-muted-foreground">Active minutes</p>
              <p className="text-xs mt-2 text-green-600">70% of daily goal</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-3">
                <Activity size={24} className="text-purple-600" />
              </div>
              <h4 className="text-2xl font-medium">3</h4>
              <p className="text-sm text-muted-foreground">Workouts this week</p>
              <p className="text-xs mt-2 text-green-600">60% of weekly goal</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Recent Workouts</h4>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Activity size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-medium">Morning Walk</h5>
                    <p className="text-xs text-muted-foreground">45 minutes, 4,500 steps</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">Today</span>
                  <p className="text-xs text-muted-foreground">7:30 AM</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-medium">Strength Training</h5>
                    <p className="text-xs text-muted-foreground">30 minutes, upper body</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">Yesterday</span>
                  <p className="text-xs text-muted-foreground">6:00 PM</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Activity size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-medium">Yoga Session</h5>
                    <p className="text-xs text-muted-foreground">45 minutes, flexibility focus</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">2 days ago</span>
                  <p className="text-xs text-muted-foreground">7:15 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">AI-Recommended Activity Goals</h4>
            <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
              <p className="text-sm">Based on your health profile and recent metrics, our AI recommends:</p>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                <li>Aim for 10,000 steps daily to improve cardiovascular health</li>
                <li>Add 2 strength training sessions per week</li>
                <li>Include 15 minutes of stretching after workouts to improve flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTabContent;
