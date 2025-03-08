
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Hospital, Users, FlaskConical, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BiomarkerTrendsChart from '../dashboard/doctor/components/BiomarkerTrendsChart';

// Define user types for healthcare stakeholders
type StakeholderType = 'clinician' | 'researcher' | 'patient' | 'regulatory';

// Sample biomarker data for visualization
const sampleBiomarkerData = {
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
};

// Clinical insight card for healthcare providers
const ClinicalInsightCard = () => (
  <Card className="mb-4">
    <CardHeader className="pb-2">
      <CardTitle className="text-base">AI Diagnostic Recommendation</CardTitle>
      <CardDescription>Based on patient biomarkers and medical history</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <h4 className="font-medium text-yellow-800 mb-2">Prediabetes Risk Alert</h4>
          <p className="text-sm text-yellow-700 mb-2">
            Patient shows increasing glucose trend over last 6 months with latest HbA1c of 5.9%.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
              92% confidence
            </span>
            <span className="text-yellow-700">AI-powered analysis</span>
          </div>
        </div>
        
        <BiomarkerTrendsChart biomarker={sampleBiomarkerData} height={200} />
        
        <div className="space-y-2">
          <h4 className="font-medium">Recommended Actions:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Order confirmatory HbA1c test</li>
            <li>Check family history of diabetes</li>
            <li>Evaluate for metabolic syndrome</li>
            <li>Consider oral glucose tolerance test</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Research insight card for medical researchers
const ResearchInsightCard = () => (
  <Card className="mb-4">
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Biomarker Pattern Analysis</CardTitle>
      <CardDescription>AI-detected correlations in clinical trial data</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h4 className="font-medium text-blue-800 mb-2">Novel Biomarker Correlation</h4>
          <p className="text-sm text-blue-700 mb-2">
            AI analysis identified significant correlation between IL-6 levels and treatment response in cohort B.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              p-value: 0.003
            </span>
            <span className="text-blue-700">Multi-omics data integration</span>
          </div>
        </div>
        
        <BiomarkerTrendsChart 
          biomarker={{
            id: 'il6',
            name: 'IL-6 Inflammatory Marker',
            unit: 'pg/mL',
            description: 'Interleukin 6 levels',
            category: 'Inflammatory',
            color: '#ef4444',
            trends: [
              { date: 'Cohort A', value: 4.2, min: 0, max: 5, unit: 'pg/mL' },
              { date: 'Cohort B', value: 8.7, min: 0, max: 5, unit: 'pg/mL' },
              { date: 'Cohort C', value: 3.8, min: 0, max: 5, unit: 'pg/mL' },
              { date: 'Control', value: 2.1, min: 0, max: 5, unit: 'pg/mL' },
            ]
          }} 
          height={200} 
        />
        
        <div className="space-y-2">
          <h4 className="font-medium">Research Implications:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Potential predictive biomarker for treatment stratification</li>
            <li>Suggests inflammatory pathway involvement in disease mechanism</li>
            <li>May inform future therapeutic target identification</li>
            <li>Recommended for validation in larger cohort</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Patient insight card for health recommendations
const PatientInsightCard = () => (
  <Card className="mb-4">
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Personalized Health Recommendations</CardTitle>
      <CardDescription>AI-generated based on your health profile</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <h4 className="font-medium text-green-800 mb-1">Nutrition</h4>
            <p className="text-sm text-green-700">
              Adding more soluble fiber could help stabilize your blood sugar levels.
            </p>
          </div>
          
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <h4 className="font-medium text-blue-800 mb-1">Activity</h4>
            <p className="text-sm text-blue-700">
              Walking 30 minutes after meals shown to reduce glucose spikes by 22%.
            </p>
          </div>
          
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
            <h4 className="font-medium text-purple-800 mb-1">Sleep</h4>
            <p className="text-sm text-purple-700">
              Improving sleep quality may help regulate your insulin sensitivity.
            </p>
          </div>
        </div>
        
        <div className="border-t pt-3">
          <h4 className="font-medium mb-2">Your Health Trends</h4>
          <BiomarkerTrendsChart 
            biomarker={{
              ...sampleBiomarkerData,
              name: 'Your Blood Glucose',
              description: 'Your fasting glucose measurements'
            }}
            height={200} 
          />
        </div>
        
        <Button className="w-full">See Detailed Wellness Plan</Button>
      </div>
    </CardContent>
  </Card>
);

// Regulatory insight card for policy makers
const RegulatoryInsightCard = () => (
  <Card className="mb-4">
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Population Health Analytics</CardTitle>
      <CardDescription>AI-driven insights for public health policy</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-md">
          <h4 className="font-medium text-indigo-800 mb-2">Prediabetes Prevalence Trend</h4>
          <p className="text-sm text-indigo-700 mb-2">
            AI analysis of regional health data shows 28% increase in prediabetes markers among adults 30-45.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
              High confidence
            </span>
            <span className="text-indigo-700">Based on 125,000 records</span>
          </div>
        </div>
        
        <div className="border rounded-md p-3">
          <h4 className="font-medium mb-2">Geographic Distribution</h4>
          <div className="h-40 bg-slate-100 rounded flex items-center justify-center">
            <p className="text-slate-500 text-sm">Geographic heatmap visualization</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">Policy Recommendations:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Target preventive interventions in high-risk regions</li>
            <li>Expand early screening programs for at-risk demographics</li>
            <li>Consider public health campaigns focusing on metabolic health</li>
            <li>Allocate resources for community-based lifestyle programs</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main component that displays different content based on user type
const HealthcareDecisionInsights = () => {
  const [stakeholderType, setStakeholderType] = useState<StakeholderType>('clinician');

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-health-dark mb-2">
          AI-Powered Healthcare Decision Making
        </h1>
        <p className="text-lg text-muted-foreground">
          Delivering personalized AI insights to key healthcare stakeholders
        </p>
      </div>
      
      <Tabs 
        defaultValue="clinician" 
        className="w-full" 
        onValueChange={(value) => setStakeholderType(value as StakeholderType)}
      >
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="clinician" className="flex items-center gap-2">
            <Hospital className="h-4 w-4" />
            <span className="hidden md:inline">Hospitals & Clinicians</span>
            <span className="md:hidden">Clinicians</span>
          </TabsTrigger>
          <TabsTrigger value="researcher" className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4" />
            <span className="hidden md:inline">Medical Researchers</span>
            <span className="md:hidden">Researchers</span>
          </TabsTrigger>
          <TabsTrigger value="patient" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Patients & Caregivers</span>
            <span className="md:hidden">Patients</span>
          </TabsTrigger>
          <TabsTrigger value="regulatory" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span className="hidden md:inline">Government & Regulatory</span>
            <span className="md:hidden">Regulatory</span>
          </TabsTrigger>
        </TabsList>

        <div className="mb-6">
          <div className="p-4 rounded-lg bg-health-primary/5 border border-health-primary/10 flex items-start gap-3">
            <div className="mt-1 bg-health-primary/10 p-2 rounded-full">
              <Brain className="h-5 w-5 text-health-primary" />
            </div>
            <div>
              <h3 className="font-medium text-health-primary">
                AI-Powered Insights for {
                  stakeholderType === 'clinician' ? 'Healthcare Providers' :
                  stakeholderType === 'researcher' ? 'Medical Researchers' :
                  stakeholderType === 'patient' ? 'Patients & Caregivers' : 
                  'Policy & Regulatory Bodies'
                }
              </h3>
              <p className="text-sm text-muted-foreground">
                {stakeholderType === 'clinician' && 'AI-enhanced diagnostics and predictive analytics to improve patient care.'}
                {stakeholderType === 'researcher' && 'AI accelerates biomarker discovery, drug response modeling, and precision medicine development.'}
                {stakeholderType === 'patient' && 'Personalized AI-driven recommendations to empower proactive health management.'}
                {stakeholderType === 'regulatory' && 'AI analytics to inform public health policy, outbreak prediction, and population health trends.'}
              </p>
            </div>
          </div>
        </div>
        
        <TabsContent value="clinician">
          <ClinicalInsightCard />
        </TabsContent>
        
        <TabsContent value="researcher">
          <ResearchInsightCard />
        </TabsContent>
        
        <TabsContent value="patient">
          <PatientInsightCard />
        </TabsContent>
        
        <TabsContent value="regulatory">
          <RegulatoryInsightCard />
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-5 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="font-medium text-lg text-health-dark mb-2">
          AI-Powered Healthcare Outcome
        </h3>
        <p className="text-muted-foreground mb-4">
          AI-powered healthcare becomes actionable, personalized, and accessible to a wide range of stakeholders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-md border border-slate-200">
            <Hospital className="h-6 w-6 text-health-primary mb-2" />
            <h4 className="font-medium mb-1">Clinicians</h4>
            <p className="text-sm text-muted-foreground">
              Faster, more accurate diagnoses and personalized treatment plans.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md border border-slate-200">
            <FlaskConical className="h-6 w-6 text-health-primary mb-2" />
            <h4 className="font-medium mb-1">Researchers</h4>
            <p className="text-sm text-muted-foreground">
              Accelerated discovery of biomarkers and drug targets.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md border border-slate-200">
            <User className="h-6 w-6 text-health-primary mb-2" />
            <h4 className="font-medium mb-1">Patients</h4>
            <p className="text-sm text-muted-foreground">
              Proactive health management with personalized guidance.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md border border-slate-200">
            <Building className="h-6 w-6 text-health-primary mb-2" />
            <h4 className="font-medium mb-1">Regulators</h4>
            <p className="text-sm text-muted-foreground">
              Data-driven policy decisions and resource allocation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareDecisionInsights;
