
import React from 'react';
import { useAuth } from '@/contexts/auth/useAuth';

const DashboardHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-medium text-health-dark">Welcome, {user?.name}</h1>
      <p className="text-muted-foreground">Here's your AI-powered research dashboard</p>
    </div>
  );
};

export default DashboardHeader;
