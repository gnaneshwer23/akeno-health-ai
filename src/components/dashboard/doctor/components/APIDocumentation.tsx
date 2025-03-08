
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Activity, Brain, Image, Database, Code } from 'lucide-react';
import RiskPredictionTab from './api-docs/RiskPredictionTab';
import BiomarkersTab from './api-docs/BiomarkersTab';
import WearableDataTab from './api-docs/WearableDataTab';
import ImagingTab from './api-docs/ImagingTab';
import ClinicalDecisionTab from './api-docs/ClinicalDecisionTab';

const APIDocumentation: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code size={18} className="text-health-primary" />
          Healthcare API Documentation
        </CardTitle>
        <CardDescription>
          Comprehensive guides for AI-powered health prediction and analytics APIs for clinical applications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="risk-prediction">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="risk-prediction" className="flex items-center justify-center">
              <Calculator size={14} className="mr-2" />
              <span className="hidden md:inline">Risk Prediction</span>
            </TabsTrigger>
            <TabsTrigger value="biomarkers" className="flex items-center justify-center">
              <Activity size={14} className="mr-2" />
              <span className="hidden md:inline">Biomarkers</span>
            </TabsTrigger>
            <TabsTrigger value="wearable" className="flex items-center justify-center">
              <Brain size={14} className="mr-2" />
              <span className="hidden md:inline">Wearable Data</span>
            </TabsTrigger>
            <TabsTrigger value="imaging" className="flex items-center justify-center">
              <Image size={14} className="mr-2" />
              <span className="hidden md:inline">Imaging</span>
            </TabsTrigger>
            <TabsTrigger value="clinical" className="flex items-center justify-center">
              <Database size={14} className="mr-2" />
              <span className="hidden md:inline">Clinical Data</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="risk-prediction" className="space-y-6">
            <RiskPredictionTab />
          </TabsContent>
          
          <TabsContent value="biomarkers" className="space-y-6">
            <BiomarkersTab />
          </TabsContent>
          
          <TabsContent value="wearable" className="space-y-6">
            <WearableDataTab />
          </TabsContent>
          
          <TabsContent value="imaging" className="space-y-6">
            <ImagingTab />
          </TabsContent>

          <TabsContent value="clinical" className="space-y-6">
            <ClinicalDecisionTab />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default APIDocumentation;
