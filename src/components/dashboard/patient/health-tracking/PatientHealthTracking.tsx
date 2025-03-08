
import React from 'react';
import MetricsCardGrid from './components/MetricsCardGrid';
import HealthTrackingTabs from './components/HealthTrackingTabs';
import HealthRiskAnalysisCard from './components/HealthRiskAnalysisCard';
import HealthGoalsCard from './components/HealthGoalsCard';

const PatientHealthTracking = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Health Tracking</h1>
        <p className="text-muted-foreground">Real-time monitoring and AI-driven health trends analysis</p>
      </div>

      <MetricsCardGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <HealthTrackingTabs />
        </div>

        <div className="space-y-6">
          <HealthRiskAnalysisCard />
          <HealthGoalsCard />
        </div>
      </div>
    </div>
  );
};

export default PatientHealthTracking;
