
import React from 'react';
import { useAuth } from '@/contexts/auth/useAuth';
import HealthScoreCard from './health-overview/HealthScoreCard';
import HealthMetricsGrid from './health-metrics/HealthMetricsGrid';
import RiskAssessmentCard from './risk-assessment/RiskAssessmentCard';
import AIHealthAssistant from './ai-assistant/AIHealthAssistant';
import WellnessPlanCard from './wellness-plan/WellnessPlanCard';
import { Button } from '@/components/ui/button'; 
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const PatientDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium text-health-dark">Welcome, {user?.name}</h1>
          <p className="text-muted-foreground">Here's your AI-powered health analysis</p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          asChild
        >
          <Link to="/dashboard/patient/profile">
            <User size={18} />
            View Profile
          </Link>
        </Button>
      </div>

      {/* Health Score Overview */}
      <HealthScoreCard />

      {/* Health Metrics */}
      <HealthMetricsGrid />

      {/* Risk Assessment */}
      <RiskAssessmentCard />

      {/* AI Health Assistant */}
      <AIHealthAssistant />

      {/* Preventive Recommendations */}
      <WellnessPlanCard />
    </div>
  );
};

export default PatientDashboard;
