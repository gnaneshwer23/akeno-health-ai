
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { InteractiveDashboard } from '@/components/analytics/InteractiveDashboard';
import { useAuth } from '@/contexts/auth/useAuth';

const Analytics = () => {
  // Try to get auth context, but gracefully handle if it's not available
  const auth = React.useMemo(() => {
    try {
      return useAuth();
    } catch (error) {
      return { user: { role: 'guest', id: 'guest' } };
    }
  }, []);

  const patientId = auth.user?.role === 'patient' ? auth.user.id : undefined;

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Advanced Analytics</h1>
        <p className="text-lg mb-8">Explore health data insights and predictive analytics.</p>
        <InteractiveDashboard patientId={patientId} userRole={auth.user?.role || 'guest'} />
      </div>
    </MainLayout>
  );
};

export default Analytics;
