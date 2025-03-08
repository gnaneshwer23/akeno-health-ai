
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Building, TrendingUp, CalendarDays, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for resource prediction
const resourcePredictionData = {
  admissions: [
    { department: 'Cardiology', current: 32, predicted: 38 },
    { department: 'Oncology', current: 28, predicted: 26 },
    { department: 'Neurology', current: 24, predicted: 29 },
    { department: 'Pediatrics', current: 18, predicted: 22 },
    { department: 'Orthopedics', current: 22, predicted: 20 },
  ],
  staffing: [
    { role: 'Physicians', current: 42, predicted: 48 },
    { role: 'Nurses', current: 86, predicted: 96 },
    { role: 'Technicians', current: 36, predicted: 34 },
    { role: 'Support Staff', current: 28, predicted: 32 },
  ],
  resources: [
    { resource: 'ICU Beds', current: 85, predicted: 92 },
    { resource: 'ER Capacity', current: 78, predicted: 88 },
    { resource: 'OR Usage', current: 65, predicted: 76 },
    { resource: 'Radiology', current: 72, predicted: 69 },
    { resource: 'Lab Services', current: 80, predicted: 85 },
  ]
};

const HospitalResourcePredictionSection = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5 text-health-primary" />
          Hospital Resource Forecasting
        </CardTitle>
        <CardDescription>
          AI-driven prediction of hospital resource utilization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="admissions">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="admissions">
              <TrendingUp size={16} className="mr-2" />
              Admissions
            </TabsTrigger>
            <TabsTrigger value="staffing">
              <Users size={16} className="mr-2" />
              Staffing
            </TabsTrigger>
            <TabsTrigger value="resources">
              <CalendarDays size={16} className="mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="admissions">
            <div className="p-2">
              <p className="text-sm text-muted-foreground mb-4">
                Predicted patient admissions by department over the next 7 days,
                compared to current levels.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={resourcePredictionData.admissions}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" name="Current" fill="#3b82f6" />
                  <Bar dataKey="predicted" name="AI Prediction" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="staffing">
            <div className="p-2">
              <p className="text-sm text-muted-foreground mb-4">
                Predicted staffing needs by role over the next 7 days,
                compared to current levels.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={resourcePredictionData.staffing}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" name="Current" fill="#3b82f6" />
                  <Bar dataKey="predicted" name="AI Prediction" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="p-2">
              <p className="text-sm text-muted-foreground mb-4">
                Predicted resource utilization (%) over the next 7 days,
                compared to current levels.
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={resourcePredictionData.resources}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="resource" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" name="Current %" fill="#3b82f6" />
                  <Bar dataKey="predicted" name="AI Prediction %" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HospitalResourcePredictionSection;
