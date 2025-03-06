
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PatientDashboard from '@/components/dashboard/patient/PatientDashboard';
import DoctorDashboard from '@/components/dashboard/doctor/DoctorDashboard';
import ResearcherDashboard from '@/components/dashboard/researcher/ResearcherDashboard';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-health-primary" />
        <span className="ml-2 text-health-dark">Loading...</span>
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
              <PatientDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/doctor/*" 
        element={
          <ProtectedRoute requiredRole="doctor">
            <DashboardLayout>
              <DoctorDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/researcher/*" 
        element={
          <ProtectedRoute requiredRole="researcher">
            <DashboardLayout>
              <ResearcherDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to={getDefaultDashboard()} replace />} />
    </Routes>
  );
};

export default Dashboard;
