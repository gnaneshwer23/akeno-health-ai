
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, Activity, Calendar, BarChart3, Server, Users, Heart, Clock, Stethoscope } from 'lucide-react';
import PatientRiskMonitorSection from './sections/PatientRiskMonitorSection';
import ResourceManagementSection from './sections/ResourceManagementSection';
import BillingAnalyticsSection from './sections/BillingAnalyticsSection';
import EmergencyResponseSection from './sections/EmergencyResponseSection';
import HospitalAnalyticsSection from './sections/HospitalAnalyticsSection';
import DischargeManagementSection from './sections/DischargeManagementSection';
import SurgerySchedulingSection from './sections/SurgerySchedulingSection';
import DashboardSummaryCards from './components/DashboardSummaryCards';
import { useToast } from '@/hooks/use-toast';

const HospitalDashboard = () => {
  const { toast } = useToast();

  const handleActionClick = (action: string) => {
    toast({
      title: "Action triggered",
      description: `You clicked on ${action}. This feature is coming soon.`,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Hospital Dashboard</h2>
        <p className="text-muted-foreground">
          AI-driven healthcare optimization for your hospital operations.
        </p>
      </div>

      <DashboardSummaryCards onActionClick={handleActionClick} />

      <Tabs defaultValue="patient-risk" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-7">
          <TabsTrigger value="patient-risk" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span className="hidden md:inline">Patient Risk</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            <span className="hidden md:inline">Resources</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden md:inline">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="emergency" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span className="hidden md:inline">Emergency</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="discharge" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden md:inline">Discharge</span>
          </TabsTrigger>
          <TabsTrigger value="surgery" className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            <span className="hidden md:inline">Surgery</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="patient-risk" className="space-y-4">
          <PatientRiskMonitorSection onActionClick={handleActionClick} />
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <ResourceManagementSection onActionClick={handleActionClick} />
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <BillingAnalyticsSection onActionClick={handleActionClick} />
        </TabsContent>

        <TabsContent value="emergency" className="space-y-4">
          <EmergencyResponseSection onActionClick={handleActionClick} />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <HospitalAnalyticsSection onActionClick={handleActionClick} />
        </TabsContent>

        <TabsContent value="discharge" className="space-y-4">
          <DischargeManagementSection onActionClick={handleActionClick} />
        </TabsContent>

        <TabsContent value="surgery" className="space-y-4">
          <SurgerySchedulingSection onActionClick={handleActionClick} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HospitalDashboard;
