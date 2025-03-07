
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import HealthScoreCard from './health-overview/HealthScoreCard';
import HealthMetricsGrid from './health-metrics/HealthMetricsGrid';
import RiskAssessmentCard from './risk-assessment/RiskAssessmentCard';
import AIHealthAssistant from './ai-assistant/AIHealthAssistant';
import WellnessPlanCard from './wellness-plan/WellnessPlanCard';

const PatientDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">Here's your AI-powered health analysis</p>
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
