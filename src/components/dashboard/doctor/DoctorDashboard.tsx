
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from './sections/DashboardHeader';
import DashboardStats from './sections/DashboardStats';
import PatientRiskMonitor from './sections/PatientRiskMonitor';
import AIInsightsSection from './sections/AIInsightsSection';
import ScheduleSection from './sections/ScheduleSection';

const DoctorDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <DashboardHeader userName={user?.name} />

      {/* Stats Overview */}
      <DashboardStats />

      {/* Patient Risk Monitor */}
      <PatientRiskMonitor />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Clinical Insights */}
        <div className="md:col-span-2">
          <AIInsightsSection />
        </div>

        {/* Appointments */}
        <ScheduleSection />
      </div>
    </div>
  );
};

export default DoctorDashboard;
