
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from './sections/DashboardHeader';
import DashboardStats from './sections/DashboardStats';
import PatientRiskMonitor from './sections/PatientRiskMonitor';
import AIInsightsSection from './sections/AIInsightsSection';
import ScheduleSection from './sections/ScheduleSection';
import APIManagementSection from './sections/APIManagementSection';

const DoctorDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <DashboardHeader 
        userName={user?.name}
        databaseStats={{
          totalPatients: 247,
          totalRecords: 1834,
          storageUsed: '2.4 GB',
          backupStatus: 'success',
          lastBackup: '2 hours ago'
        }} 
      />

      {/* Stats Overview */}
      <DashboardStats />

      {/* Patient Risk Monitor */}
      <PatientRiskMonitor />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Clinical Insights */}
        <AIInsightsSection />

        {/* API Management Section */}
        <APIManagementSection />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Appointments */}
        <ScheduleSection />
      </div>
    </div>
  );
};

export default DoctorDashboard;
