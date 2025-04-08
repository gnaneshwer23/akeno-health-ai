
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { InteractiveDashboard } from '@/components/analytics/InteractiveDashboard';
import { useAuth } from '@/contexts/AuthContext';

const Analytics = () => {
  // Since we don't have the full auth context implemented, we'll use a mock user
  const mockUser = { role: 'doctor', id: 'mock-user-id' };
  const patientId = mockUser?.role === 'patient' ? mockUser.id : undefined;

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Advanced Analytics</h1>
        <p className="text-lg mb-8">Explore health data insights and predictive analytics.</p>
        <InteractiveDashboard patientId={patientId} userRole={mockUser?.role as any} />
      </div>
    </MainLayout>
  );
};

export default Analytics;
