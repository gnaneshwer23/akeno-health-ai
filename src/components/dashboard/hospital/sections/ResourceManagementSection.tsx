
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Server, RefreshCw, Users, Bed, SquareStack, Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ResourceManagementSectionProps {
  onActionClick: (action: string) => void;
}

// Mock data
const resourceUtilizationData = [
  { name: 'ICU Beds', current: 92, limit: 100 },
  { name: 'Ventilators', current: 74, limit: 100 },
  { name: 'ER Capacity', current: 68, limit: 100 },
  { name: 'OR Rooms', current: 79, limit: 100 },
  { name: 'Med/Surg Beds', current: 86, limit: 100 },
];

const resourceForecastData = [
  { time: '8:00', icu: 85, er: 55, nurses: 70 },
  { time: '10:00', icu: 90, er: 68, nurses: 75 },
  { time: '12:00', icu: 95, er: 80, nurses: 90 },
  { time: '14:00', icu: 98, er: 70, nurses: 95 },
  { time: '16:00', icu: 92, er: 65, nurses: 85 },
  { time: '18:00', icu: 89, er: 60, nurses: 80 },
  { time: '20:00', icu: 86, er: 50, nurses: 75 },
];

const ResourceManagementSection: React.FC<ResourceManagementSectionProps> = ({ onActionClick }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-health-primary" />
              AI-Powered Resource Forecasting
            </CardTitle>
            <CardDescription>
              Predictive analytics to optimize hospital resource allocation for the next 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={resourceForecastData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis label={{ value: 'Utilization %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, '']}
                    labelFormatter={(label) => `Time: ${label}`}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="icu" 
                    name="ICU Capacity" 
                    stroke="#ef4444" 
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="er" 
                    name="ER Demand" 
                    stroke="#3b82f6" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="nurses" 
                    name="Nursing Coverage" 
                    stroke="#10b981" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-between">
              <Button variant="outline" onClick={() => onActionClick('Refresh resource forecast')} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh Forecast
              </Button>
              <Button variant="default" onClick={() => onActionClick('Optimize staff allocation')} className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Optimize Staff Allocation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Resource Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resourceUtilizationData.map((resource, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {index === 0 && <Bed className="h-4 w-4 mr-1 text-red-500" />}
                      {index === 1 && <Loader2 className="h-4 w-4 mr-1 text-blue-500" />}
                      {index === 2 && <Server className="h-4 w-4 mr-1 text-amber-500" />}
                      {index === 3 && <SquareStack className="h-4 w-4 mr-1 text-green-500" />}
                      {index === 4 && <Bed className="h-4 w-4 mr-1 text-purple-500" />}
                      <span className="text-sm">{resource.name}</span>
                    </div>
                    <span className="text-sm font-medium">
                      {resource.current}%
                    </span>
                  </div>
                  <Progress 
                    value={resource.current} 
                    className={
                      resource.current > 90 ? "bg-red-100" : 
                      resource.current > 75 ? "bg-amber-100" : "bg-green-100"
                    }
                  />
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4" 
              onClick={() => onActionClick('View detailed resource metrics')}
            >
              View Detailed Metrics
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Critical Supply Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-green-50 rounded-md">
                <span className="text-sm">PPE Supplies</span>
                <span className="text-sm font-medium text-green-600">
                  Adequate (4 weeks)
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-amber-50 rounded-md">
                <span className="text-sm">Blood Products</span>
                <span className="text-sm font-medium text-amber-600">
                  Low (Type O-)
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 rounded-md">
                <span className="text-sm">IV Solutions</span>
                <span className="text-sm font-medium text-red-600">
                  Critical (2 days)
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-green-50 rounded-md">
                <span className="text-sm">Medications</span>
                <span className="text-sm font-medium text-green-600">
                  Adequate
                </span>
              </div>
            </div>
            <Button 
              variant="default" 
              className="w-full mt-4" 
              onClick={() => onActionClick('Order critical supplies')}
            >
              Order Critical Supplies
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResourceManagementSection;
