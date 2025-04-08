
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PatientDashboard from '@/components/dashboard/patient/PatientDashboard';
import PatientProfile from '@/components/dashboard/patient/profile/PatientProfile';
import PatientSettings from '@/components/dashboard/patient/settings/PatientSettings';
import PatientHelp from '@/components/dashboard/patient/help/PatientHelp';
import PatientHealthTracking from '@/components/dashboard/patient/health-tracking/PatientHealthTracking';
import AIHealthAssistant from '@/components/dashboard/patient/ai-assistant/AIHealthAssistant';
import PatientNotifications from '@/components/dashboard/patient/notifications/PatientNotifications';
import DoctorDashboard from '@/components/dashboard/doctor/DoctorDashboard';
import DoctorProfile from '@/components/dashboard/doctor/profile/DoctorProfile';
import DoctorSettings from '@/components/dashboard/doctor/settings/DoctorSettings';
import DoctorHelp from '@/components/dashboard/doctor/help/DoctorHelp';
import PatientReports from '@/components/dashboard/doctor/patient-reports/PatientReports';
import Consultations from '@/components/dashboard/doctor/consultations/Consultations';
import DoctorAlerts from '@/components/dashboard/doctor/alerts/DoctorAlerts';
import ResearcherDashboard from '@/components/dashboard/researcher/ResearcherDashboard';
import ResearcherProfile from '@/components/dashboard/researcher/profile/ResearcherProfile';
import ResearcherSettings from '@/components/dashboard/researcher/settings/ResearcherSettings';
import ResearcherHelp from '@/components/dashboard/researcher/help/ResearcherHelp';
import ResearchData from '@/components/dashboard/researcher/research-data/ResearchData';
import Collaborations from '@/components/dashboard/researcher/collaborations/Collaborations';
import Updates from '@/components/dashboard/researcher/updates/Updates';
import HospitalDashboard from '@/components/dashboard/hospital/HospitalDashboard';
import HospitalProfile from '@/components/dashboard/hospital/profile/HospitalProfile';
import HospitalSettings from '@/components/dashboard/hospital/settings/HospitalSettings';
import HospitalHelp from '@/components/dashboard/hospital/help/HospitalHelp';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserRole } from '@/contexts/auth/types';

const Dashboard = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Show a welcome toast when dashboard loads
    if (user && !isLoading) {
      toast({
        title: `Welcome, ${user.name}`,
        description: `Your ${user.role} dashboard is ready with AI-powered insights`,
      });
    }
  }, [user, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-health-primary mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-medium text-health-dark mb-1">Loading your dashboard</h2>
          <p className="text-sm text-muted-foreground">Preparing your personalized AI insights...</p>
        </div>
      </div>
    );
  }

  // Determine the default dashboard route based on user role
  const getDefaultDashboard = () => {
    const role = user?.role as UserRole;
    switch (role) {
      case 'patient':
        return '/dashboard/patient';
      case 'doctor':
        return '/dashboard/doctor';
      case 'researcher':
        return '/dashboard/researcher';
      case 'hospital':
        return '/dashboard/hospital';
      default:
        return '/login';
    }
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Navigate to={getDefaultDashboard()} replace />} 
      />
      <Route 
        path="/patient/*" 
        element={
          <ProtectedRoute requiredRole="patient">
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<PatientDashboard />} />
                <Route path="/profile" element={<PatientProfile />} />
                <Route path="/settings" element={<PatientSettings />} />
                <Route path="/help" element={<PatientHelp />} />
                <Route path="/health-tracking" element={<PatientHealthTracking />} />
                <Route path="/ai-assistant" element={<AIHealthAssistant />} />
                <Route path="/notifications" element={<PatientNotifications />} />
              </Routes>
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/doctor/*" 
        element={
          <ProtectedRoute requiredRole="doctor">
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<DoctorDashboard />} />
                <Route path="/profile" element={<DoctorProfile />} />
                <Route path="/settings" element={<DoctorSettings />} />
                <Route path="/help" element={<DoctorHelp />} />
                <Route path="/patient-reports" element={<PatientReports />} />
                <Route path="/consultations" element={<Consultations />} />
                <Route path="/alerts" element={<DoctorAlerts />} />
              </Routes>
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/researcher/*" 
        element={
          <ProtectedRoute requiredRole="researcher">
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<ResearcherDashboard />} />
                <Route path="/profile" element={<ResearcherProfile />} />
                <Route path="/settings" element={<ResearcherSettings />} />
                <Route path="/help" element={<ResearcherHelp />} />
                <Route path="/research-data" element={<ResearchData />} />
                <Route path="/collaborations" element={<Collaborations />} />
                <Route path="/updates" element={<Updates />} />
              </Routes>
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/hospital/*" 
        element={
          <ProtectedRoute requiredRole="hospital">
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<HospitalDashboard />} />
                <Route path="/profile" element={<HospitalProfile />} />
                <Route path="/settings" element={<HospitalSettings />} />
                <Route path="/help" element={<HospitalHelp />} />
              </Routes>
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to={getDefaultDashboard()} replace />} />
    </Routes>
  );
};

export default Dashboard;
