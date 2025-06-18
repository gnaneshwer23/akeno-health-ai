
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/auth/useAuth';
import { Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import OnboardingFlow from '@/components/onboarding/OnboardingFlow';

const Onboarding = () => {
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Getting Started - Akeno Health";
  }, []);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <OnboardingFlow />
      </div>
    </MainLayout>
  );
};

export default Onboarding;
