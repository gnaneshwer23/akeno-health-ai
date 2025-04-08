
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutDashboard, Calendar, Filter, Download, AlertTriangle, Heart, Activity, Brain, Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { analyticsService } from '@/services/analyticsService';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { LineChart, AreaChart, BarChart, PieChart, Line, Area, Bar, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { PredictiveAnalytics } from './PredictiveAnalytics';

interface DashboardProps {
  patientId?: string;
  userRole?: 'doctor' | 'researcher' | 'patient' | 'hospital';
}

export const InteractiveDashboard = ({ patientId, userRole = 'doctor' }: DashboardProps) => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [category, setCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadDashboardData();
  }, [timeRange, category, patientId]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const data = await analyticsService.getDashboardAnalytics({
        timeRange,
        category,
        patientId
      });
      setDashboardData(data);
    } catch (error: any) {
      toast({
        title: "Error loading dashboard data",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Mock data for the dashboard visualizations
  const mockVitalsTrendData = [
    { name: 'Jan', heartRate: 72, bloodPressure: 120, temperature: 98.6 },
    { name: 'Feb', heartRate: 75, bloodPressure: 122, temperature: 98.4 },
    { name: 'Mar', heartRate: 71, bloodPressure: 118, temperature: 98.7 },
    { name: 'Apr', heartRate: 74, bloodPressure: 121, temperature: 98.5 },
    { name: 'May', heartRate: 76, bloodPressure: 125, temperature: 98.8 },
    { name: 'Jun', heartRate: 73, bloodPressure: 119, temperature: 98.6 },
  ];

  const mockBiomarkerData = [
    { name: 'Glucose', value: 105, normalMin: 70, normalMax: 100 },
    { name: 'Cholesterol', value: 185, normalMin: 125, normalMax: 200 },
    { name: 'HbA1c', value: 5.7, normalMin: 4.0, normalMax: 5.7 },
    { name: 'HDL', value: 55, normalMin: 40, normalMax: 60 },
    { name: 'LDL', value: 110, normalMin: 0, normalMax: 100 },
  ];

  const mockTreatmentOutcomesData = [
    { name: 'Medication A', success: 67, partial: 20, failure: 13 },
    { name: 'Medication B', success: 52, partial: 30, failure: 18 },
    { name: 'Therapy C', success: 78, partial: 15, failure: 7 },
    { name: 'Procedure D', success: 45, partial: 35, failure: 20 },
  ];

  const mockPopulationDistributionData = [
    { name: 'Low Risk', value: 35, color: '#10b981' },
    { name: 'Medium Risk', value: 40, color: '#f59e0b' },
    { name: 'High Risk', value: 25, color: '#ef4444' },
  ];

  const chartConfig = {
    heartRate: { color: '#ef4444', label: 'Heart Rate' },
    bloodPressure: { color: '#3b82f6', label: 'Blood Pressure' },
    temperature: { color: '#f59e0b', label: 'Temperature' },
    success: { color: '#10b981', label: 'Success' },
    partial: { color: '#f59e0b', label: 'Partial Response' },
    failure: { color: '#ef4444', label: 'Failure' },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b">
        <div>
          <h2 className="text-2xl font-medium">Interactive Health Analytics</h2>
          <p className="text-muted-foreground">
            {userRole === 'doctor' && "Comprehensive patient health data analytics and visualization"}
            {userRole === 'researcher' && "Population-level analysis and cohort insights"}
            {userRole === 'patient' && "Your personal health trends and insights"}
            {userRole === 'hospital' && "Facility-wide metrics and resource utilization analytics"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={(value) => setTimeRange(value as any)}>
            <SelectTrigger className="w-[120px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="quarter">Quarter</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[150px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="vitals">Vitals</SelectItem>
              <SelectItem value="biomarkers">Biomarkers</SelectItem>
              <SelectItem value="treatments">Treatments</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="overview">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="vitals">
            <Heart className="h-4 w-4 mr-2" />
            Vitals
          </TabsTrigger>
          <TabsTrigger value="biomarkers">
            <Dna className="h-4 w-4 mr-2" />
            Biomarkers
          </TabsTrigger>
          <TabsTrigger value="predictions">
            <Brain className="h-4 w-4 mr-2" />
            Predictions
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Key Health Score</CardTitle>
                <CardDescription>Overall health assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        className="text-slate-200" 
                        strokeWidth="8" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r="42" 
                        cx="50" 
                        cy="50" 
                      />
                      <circle 
                        className="text-health-primary" 
                        strokeWidth="8" 
                        strokeDasharray={`${84 * 0.82} 250`} 
                        strokeLinecap="round" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r="42" 
                        cx="50" 
                        cy="50" 
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                      82
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-green-600 font-medium">Excellent</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Risk Assessment</CardTitle>
                <CardDescription>Current risk factors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="text-sm">Medium</span>
                  </div>
                  <div className="font-bold text-2xl">3</div>
                  <div className="text-xs text-muted-foreground">Risk<br/>Factors</div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-yellow-600">Pre-diabetes markers</span>
                    <span className="font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-yellow-600">Elevated cholesterol</span>
                    <span className="font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-yellow-600">Family history: CVD</span>
                    <span className="font-medium">Moderate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Vitals Trends</CardTitle>
                <CardDescription>6-month overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[100px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockVitalsTrendData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                      <Line type="monotone" dataKey="heartRate" stroke="#ef4444" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="bloodPressure" stroke="#3b82f6" strokeWidth={2} dot={false} />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-white p-2 border shadow-sm rounded-md text-xs">
                                <p className="font-medium">{payload[0].payload.name}</p>
                                <p className="text-red-500">Heart Rate: {payload[0].value} bpm</p>
                                <p className="text-blue-500">BP: {payload[1].value} mmHg</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Heart Rate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Blood Pressure</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Treatment Efficacy</CardTitle>
                <CardDescription>Current treatment plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[100px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                      <Pie
                        data={mockPopulationDistributionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={40}
                        dataKey="value"
                        label={false}
                      >
                        {mockPopulationDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-white p-2 border shadow-sm rounded-md text-xs">
                                <p className="font-medium">{payload[0].name}</p>
                                <p>{payload[0].value}%</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 grid grid-cols-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Low</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Medium</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>High</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vital Signs Trends</CardTitle>
                <CardDescription>6-month history of key vital measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-80" config={chartConfig}>
                  <LineChart data={mockVitalsTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="heartRate" 
                      name="Heart Rate" 
                      stroke="var(--color-heartRate)" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="bloodPressure" 
                      name="Blood Pressure" 
                      stroke="var(--color-bloodPressure)" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="temperature" 
                      name="Temperature" 
                      stroke="var(--color-temperature)" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Treatment Outcomes</CardTitle>
                <CardDescription>Comparison of treatment efficacy rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-80" config={chartConfig}>
                  <BarChart data={mockTreatmentOutcomesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="success" name="Success" fill="var(--color-success)" stackId="a" />
                    <Bar dataKey="partial" name="Partial" fill="var(--color-partial)" stackId="a" />
                    <Bar dataKey="failure" name="Failure" fill="var(--color-failure)" stackId="a" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="vitals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Vitals Analysis</CardTitle>
              <CardDescription>Long-term trends for vital health indicators</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockVitalsTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="heartRate" name="Heart Rate (bpm)" stroke="#ef4444" activeDot={{ r: 8 }} />
                  <Line yAxisId="left" type="monotone" dataKey="bloodPressure" name="Blood Pressure (systolic)" stroke="#3b82f6" />
                  <Line yAxisId="right" type="monotone" dataKey="temperature" name="Temperature (°F)" stroke="#f59e0b" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="biomarkers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Biomarker Analysis</CardTitle>
                <CardDescription>Current biomarker levels and normal ranges</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={mockBiomarkerData}
                    margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Current Value" fill="#3b82f6" />
                    <Bar dataKey="normalMin" name="Min Normal" fill="#f3f4f6" />
                    <Bar dataKey="normalMax" name="Max Normal" fill="#e5e7eb" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Biomarker Correlation</CardTitle>
                <CardDescription>Relationships between key biomarkers and health outcomes</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-2" />
                  <h3 className="text-lg font-medium">Advanced Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    Correlation analysis requires additional data points.
                    <br />Request expanded biomarker analysis for this patient.
                  </p>
                  <Button className="mt-4">Request Advanced Analysis</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="predictions" className="space-y-6">
          {patientId ? (
            <PredictiveAnalytics patientId={patientId} />
          ) : (
            <Card>
              <CardContent className="p-10 text-center">
                <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Patient ID Required</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Predictive analytics requires a specific patient ID to generate personalized predictions.
                  Please select a patient to view their prediction data.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
