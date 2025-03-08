
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Brain, Dna, ImageIcon, Calendar, AlertCircle } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import HealthMetricsGrid from './health-metrics/HealthMetricsGrid';
import HealthScoreCard from './health-overview/HealthScoreCard';
import RiskAssessmentCard from './risk-assessment/RiskAssessmentCard';
import { useAuth } from '@/contexts/AuthContext';
import { dataCollectionService } from '@/services/dataCollectionService';
import VitalsHistoryChart from './PatientVitalsChart';
import GenomicDataVisualizer from './GenomicDataVisualizer';
import MedicalImagesGallery from './MedicalImagesGallery';

const PatientDataDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("health-metrics");
  const [isLoading, setIsLoading] = useState(true);
  const [healthData, setHealthData] = useState<any>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const fetchPatientData = async () => {
      if (!user) return;
      
      try {
        setIsLoading(true);
        // This would be expanded to fetch various types of data
        const patientData = await dataCollectionService.getPatientProfile();
        setHealthData(patientData);
      } catch (error) {
        console.error('Error fetching patient data:', error);
        toast({
          title: "Error loading health data",
          description: "We couldn't load your health data. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, [user, toast]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-health-primary" />
        <span className="ml-2 text-health-dark">Loading your health data...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <HealthScoreCard />
        </div>
        <div className="flex-1">
          <RiskAssessmentCard />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 md:grid-cols-5 w-full">
          <TabsTrigger value="health-metrics" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden md:inline">Health Metrics</span>
          </TabsTrigger>
          <TabsTrigger value="vitals-history" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span className="hidden md:inline">Vitals History</span>
          </TabsTrigger>
          <TabsTrigger value="genomic-data" className="flex items-center gap-2">
            <Dna className="h-4 w-4" />
            <span className="hidden md:inline">Genomic Data</span>
          </TabsTrigger>
          <TabsTrigger value="medical-images" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            <span className="hidden md:inline">Medical Images</span>
          </TabsTrigger>
          <TabsTrigger value="health-records" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden md:inline">Health Records</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="health-metrics" className="mt-6">
          <HealthMetricsGrid />
        </TabsContent>
        
        <TabsContent value="vitals-history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Vitals History</CardTitle>
              <CardDescription>Track your vitals over time to monitor health trends</CardDescription>
            </CardHeader>
            <CardContent>
              <VitalsHistoryChart />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="genomic-data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Genomic Analysis</CardTitle>
              <CardDescription>Personalized insights based on your genetic profile</CardDescription>
            </CardHeader>
            <CardContent>
              <GenomicDataVisualizer />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="medical-images" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Medical Imaging</CardTitle>
              <CardDescription>View and manage your medical scans and images</CardDescription>
            </CardHeader>
            <CardContent>
              <MedicalImagesGallery />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="health-records" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Electronic Health Records</CardTitle>
              <CardDescription>Your medical history, diagnoses, and treatments</CardDescription>
            </CardHeader>
            <CardContent>
              {healthData ? (
                <div className="space-y-4">
                  <p>Health records visualization will be displayed here.</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">No health records found. Your medical data will appear here once added by your healthcare provider.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientDataDashboard;
