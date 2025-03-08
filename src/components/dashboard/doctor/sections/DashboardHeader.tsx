
import React from 'react';

interface DashboardHeaderProps {
  userName?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-health-dark">Welcome, {userName}</h1>
      <p className="text-muted-foreground">Here's your AI-enhanced clinical dashboard</p>
    </div>
  );
};

export default DashboardHeader;
