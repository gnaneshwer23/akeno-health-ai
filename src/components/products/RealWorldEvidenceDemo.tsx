
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  FileText, 
  Activity,
  DNA,
  Image,
  Database,
  CheckCircle,
  AlertCircle,
  Calendar,
  MapPin
} from 'lucide-react';
import { simulatedDataService } from '@/services/simulatedDataService';
import { useToast } from '@/hooks/use-toast';

const RealWorldEvidenceDemo = () => {
  const [demoData, setDemoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    loadDemoData();
  }, []);

  const loadDemoData = async () => {
    try {
      setIsLoading(true);
      
      // Simulate analysis progress
      const progressInterval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev < 100) {
            return prev + 10;
          }
          clearInterval(progressInterval);
          return 100;
        });
      }, 200);

      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate demo data
      const mockData = {
        totalPatients: 2400000,
        studyDuration: 24,
        primaryEndpoints: [
          { name: 'Cardiovascular Events', reduction: 23, pValue: 0.003 },
          { name: 'Hospital Readmissions', reduction: 31, pValue: 0.001 },
          { name: 'Medication Adherence', improvement: 45, pValue: 0.000 }
        ],
        demographics: {
          ageGroups: [
            { range: '18-30', count: 240000, percentage: 10 },
            { range: '31-50', count: 720000, percentage: 30 },
            { range: '51-70', count: 960000, percentage: 40 },
            { range: '70+', count: 480000, percentage: 20 }
          ],
          conditions: [
            { name: 'Hypertension', count: 1200000, percentage: 50 },
            { name: 'Diabetes', count: 720000, percentage: 30 },
            { name: 'Heart Disease', count: 480000, percentage: 20 },
            { name: 'Obesity', count: 840000, percentage: 35 }
          ]
        },
        biomarkers: [
          { name: 'HbA1c', baseline: 8.2, followup: 7.1, improvement: 13.4 },
          { name: 'LDL Cholesterol', baseline: 145, followup: 112, improvement: 22.8 },
          { name: 'Blood Pressure', baseline: '142/88', followup: '128/78', improvement: 'Significant' }
        ],
        safety: {
          adverseEvents: 156,
          seriousEvents: 23,
          discontinuations: 89,
          overallSafety: 'Favorable'
        }
      };
      
      setDemoData(mockData);
      
      toast({
        title: "Real-World Evidence Analysis Complete",
        description: "Analyzed 2.4M patient records across 26 countries",
      });
      
    } catch (error) {
      console.error('Error loading demo data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !demoData) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-health-primary" />
              Real-World Evidence Analysis
            </CardTitle>
            <CardDescription>
              Analyzing patient outcomes across global healthcare systems
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Analysis Progress</span>
                <span>{analysisProgress}%</span>
              </div>
              <Progress value={analysisProgress} className="h-2" />
              <div className="text-xs text-gray-500 text-center">
                Processing multi-omics data from distributed healthcare networks...
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-health-primary" />
              Real-World Evidence Dashboard
            </CardTitle>
            <CardDescription>
              Comprehensive analysis of patient outcomes from real-world clinical data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {(demoData.totalPatients / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-600">Total Patients</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {demoData.studyDuration}
                </div>
                <div className="text-sm text-gray-600">Months Follow-up</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  26
                </div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  94%
                </div>
                <div className="text-sm text-gray-600">Data Compliance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="outcomes" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="outcomes">Primary Outcomes</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="biomarkers">Biomarkers</TabsTrigger>
          <TabsTrigger value="safety">Safety Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="outcomes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Primary Endpoint Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {demoData.primaryEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">{endpoint.name}</div>
                        <div className="text-sm text-gray-600">
                          p-value: {endpoint.pValue}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {endpoint.reduction || endpoint.improvement}%
                      </div>
                      <div className="text-sm text-gray-600">
                        {endpoint.reduction ? 'Reduction' : 'Improvement'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Age Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {demoData.demographics.ageGroups.map((group, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{group.range}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${group.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {group.count.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Condition Prevalence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {demoData.demographics.conditions.map((condition, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{condition.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{condition.percentage}%</Badge>
                        <span className="text-sm text-gray-600">
                          {condition.count.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="biomarkers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DNA className="h-5 w-5" />
                Biomarker Improvements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {demoData.biomarkers.map((biomarker, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium">{biomarker.name}</div>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {typeof biomarker.improvement === 'number' 
                          ? `${biomarker.improvement}% improvement`
                          : biomarker.improvement
                        }
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Baseline</div>
                        <div className="font-medium">{biomarker.baseline}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Follow-up</div>
                        <div className="font-medium">{biomarker.followup}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Safety Profile Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-yellow-600">
                    {demoData.safety.adverseEvents}
                  </div>
                  <div className="text-sm text-gray-600">Adverse Events</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-red-600">
                    {demoData.safety.seriousEvents}
                  </div>
                  <div className="text-sm text-gray-600">Serious Events</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-orange-600">
                    {demoData.safety.discontinuations}
                  </div>
                  <div className="text-sm text-gray-600">Discontinuations</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-green-600">
                    {demoData.safety.overallSafety}
                  </div>
                  <div className="text-sm text-gray-600">Overall Safety</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="text-sm text-gray-600">
              This Real-World Evidence analysis demonstrates the platform's ability to process 
              and analyze large-scale healthcare data from distributed sources while maintaining 
              patient privacy and regulatory compliance.
            </div>
            <CustomButton onClick={() => window.location.href = '/simulated-data-manager'}>
              <Database className="h-4 w-4 mr-2" />
              Generate Your Own Data
            </CustomButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealWorldEvidenceDemo;
