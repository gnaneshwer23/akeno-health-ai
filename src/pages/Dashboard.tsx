
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Lazy load patient components
const PatientDashboard = lazy(() => import('@/components/dashboard/patient/PatientDashboard'));
const PatientProfile = lazy(() => import('@/components/dashboard/patient/profile/PatientProfile'));
const PatientSettings = lazy(() => import('@/components/dashboard/patient/settings/PatientSettings'));
const PatientHelp = lazy(() => import('@/components/dashboard/patient/help/PatientHelp'));
const PatientHealthTracking = lazy(() => import('@/components/dashboard/patient/health-tracking/PatientHealthTracking'));
const AIHealthAssistant = lazy(() => import('@/components/dashboard/patient/ai-assistant/AIHealthAssistant'));
const PatientNotifications = lazy(() => import('@/components/dashboard/patient/notifications/PatientNotifications'));

// Lazy load doctor components
const DoctorDashboard = lazy(() => import('@/components/dashboard/doctor/DoctorDashboard'));
const DoctorProfile = lazy(() => import('@/components/dashboard/doctor/profile/DoctorProfile'));
const DoctorSettings = lazy(() => import('@/components/dashboard/doctor/settings/DoctorSettings'));
const DoctorHelp = lazy(() => import('@/components/dashboard/doctor/help/DoctorHelp'));
const PatientReports = lazy(() => import('@/components/dashboard/doctor/patient-reports/PatientReports'));
const Consultations = lazy(() => import('@/components/dashboard/doctor/consultations/Consultations'));
const DoctorAlerts = lazy(() => import('@/components/dashboard/doctor/alerts/DoctorAlerts'));

// Lazy load researcher components
const ResearcherDashboard = lazy(() => import('@/components/dashboard/researcher/ResearcherDashboard'));
const ResearcherProfile = lazy(() => import('@/components/dashboard/researcher/profile/ResearcherProfile'));
const ResearcherSettings = lazy(() => import('@/components/dashboard/researcher/settings/ResearcherSettings'));
const ResearcherHelp = lazy(() => import('@/components/dashboard/researcher/help/ResearcherHelp'));
const ResearchData = lazy(() => import('@/components/dashboard/researcher/research-data/ResearchData'));
const Collaborations = lazy(() => import('@/components/dashboard/researcher/collaborations/Collaborations'));
const Updates = lazy(() => import('@/components/dashboard/researcher/updates/Updates'));

// Route loading fallback
const RouteLoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh]">
    <Loader2 className="h-8 w-8 animate-spin text-health-primary mb-4" />
    <p className="text-sm text-muted-foreground">Loading content...</p>
  </div>
);

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
    switch (user?.role) {
      case 'patient':
        return '/dashboard/patient';
      case 'doctor':
        return '/dashboard/doctor';
      case 'researcher':
        return '/dashboard/researcher';
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
              <Suspense fallback={<RouteLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<PatientDashboard />} />
                  <Route path="/profile" element={<PatientProfile />} />
                  <Route path="/settings" element={<PatientSettings />} />
                  <Route path="/help" element={<PatientHelp />} />
                  <Route path="/health-tracking" element={<PatientHealthTracking />} />
                  <Route path="/ai-assistant" element={<AIHealthAssistant />} />
                  <Route path="/notifications" element={<PatientNotifications />} />
                </Routes>
              </Suspense>
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/doctor/*" 
        element={
          <ProtectedRoute requiredRole="doctor">
            <DashboardLayout>
              <Suspense fallback={<RouteLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<DoctorDashboard />} />
                  <Route path="/profile" element={<DoctorProfile />} />
                  <Route path="/settings" element={<DoctorSettings />} />
                  <Route path="/help" element={<DoctorHelp />} />
                  <Route path="/patient-reports" element={<PatientReports />} />
                  <Route path="/consultations" element={<Consultations />} />
                  <Route path="/alerts" element={<DoctorAlerts />} />
                </Routes>
              </Suspense>
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/researcher/*" 
        element={
          <ProtectedRoute requiredRole="researcher">
            <DashboardLayout>
              <Suspense fallback={<RouteLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<ResearcherDashboard />} />
                  <Route path="/profile" element={<ResearcherProfile />} />
                  <Route path="/settings" element={<ResearcherSettings />} />
                  <Route path="/help" element={<ResearcherHelp />} />
                  <Route path="/research-data" element={<ResearchData />} />
                  <Route path="/collaborations" element={<Collaborations />} />
                  <Route path="/updates" element={<Updates />} />
                </Routes>
              </Suspense>
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to={getDefaultDashboard()} replace />} />
    </Routes>
  );
};

export default Dashboard;
