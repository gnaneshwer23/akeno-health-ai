
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, TrendingUp, FileBarChart, PieChart } from 'lucide-react';
import BiomarkerTrendsChart from '../components/BiomarkerTrendsChart';

// Mock data for biomarker trends
const biomarkerData = [
  {
    id: 'glucose',
    name: 'Blood Glucose',
    unit: 'mg/dL',
    description: 'Fasting blood glucose levels',
    category: 'Metabolic',
    color: '#3b82f6',
    trends: [
      { date: 'Jan 1', value: 95, min: 70, max: 100, unit: 'mg/dL' },
      { date: 'Feb 1', value: 100, min: 70, max: 100, unit: 'mg/dL' },
      { date: 'Mar 1', value: 102, min: 70, max: 100, unit: 'mg/dL' },
      { date: 'Apr 1', value: 115, min: 70, max: 100, unit: 'mg/dL' },
      { date: 'May 1', value: 108, min: 70, max: 100, unit: 'mg/dL' },
      { date: 'Jun 1', value: 112, min: 70, max: 100, unit: 'mg/dL' },
    ]
  },
  {
    id: 'a1c',
    name: 'HbA1c',
    unit: '%',
    description: 'Glycated hemoglobin levels',
    category: 'Metabolic',
    color: '#ef4444',
    trends: [
      { date: 'Jan 1', value: 5.7, min: 4.0, max: 5.7, unit: '%' },
      { date: 'Mar 1', value: 5.9, min: 4.0, max: 5.7, unit: '%' },
      { date: 'May 1', value: 6.2, min: 4.0, max: 5.7, unit: '%' },
    ]
  },
  {
    id: 'cholesterol',
    name: 'Total Cholesterol',
    unit: 'mg/dL',
    description: 'Overall cholesterol levels',
    category: 'Cardiovascular',
    color: '#f59e0b',
    trends: [
      { date: 'Jan 1', value: 190, min: 125, max: 200, unit: 'mg/dL' },
      { date: 'Mar 1', value: 185, min: 125, max: 200, unit: 'mg/dL' },
      { date: 'May 1', value: 178, min: 125, max: 200, unit: 'mg/dL' },
    ]
  },
  {
    id: 'hdl',
    name: 'HDL Cholesterol',
    unit: 'mg/dL',
    description: 'High-density lipoprotein levels',
    category: 'Cardiovascular',
    color: '#10b981',
    trends: [
      { date: 'Jan 1', value: 45, min: 40, max: 60, unit: 'mg/dL' },
      { date: 'Mar 1', value: 48, min: 40, max: 60, unit: 'mg/dL' },
      { date: 'May 1', value: 52, min: 40, max: 60, unit: 'mg/dL' },
    ]
  }
];

const BiomarkerAnalysisSection = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-health-primary" />
          Biomarker Trend Analysis
        </CardTitle>
        <CardDescription>
          AI-powered longitudinal analysis of patient biomarkers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metabolic">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="metabolic">
              <TrendingUp size={16} className="mr-2" />
              Metabolic
            </TabsTrigger>
            <TabsTrigger value="cardiovascular">
              <FileBarChart size={16} className="mr-2" />
              Cardiovascular
            </TabsTrigger>
            <TabsTrigger value="inflammatory">
              <PieChart size={16} className="mr-2" />
              Inflammatory
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="metabolic" className="space-y-4">
            <BiomarkerTrendsChart biomarker={biomarkerData[0]} />
            <BiomarkerTrendsChart biomarker={biomarkerData[1]} />
          </TabsContent>
          
          <TabsContent value="cardiovascular" className="space-y-4">
            <BiomarkerTrendsChart biomarker={biomarkerData[2]} />
            <BiomarkerTrendsChart biomarker={biomarkerData[3]} />
          </TabsContent>
          
          <TabsContent value="inflammatory" className="space-y-4">
            <div className="flex items-center justify-center h-48 border rounded-md bg-slate-50">
              <p className="text-muted-foreground">No inflammatory markers available for this patient</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BiomarkerAnalysisSection;
