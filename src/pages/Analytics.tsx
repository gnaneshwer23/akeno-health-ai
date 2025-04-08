
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { InteractiveDashboard } from '@/components/analytics/InteractiveDashboard';
import { useAuth } from '@/contexts/AuthContext';
import { Helmet } from 'react-helmet-async';

const Analytics = () => {
  const { user } = useAuth();
  const patientId = user?.role === 'patient' ? user.id : undefined;

  return (
    <MainLayout>
      <Helmet>
        <title>Advanced Analytics | Akeno Health</title>
      </Helmet>
      <div className="container mx-auto py-8 px-4">
        <InteractiveDashboard patientId={patientId} userRole={user?.role as any} />
      </div>
    </MainLayout>
  );
};

export default Analytics;
