
import React from 'react';
import MonitoringFeaturesList from './remote-monitoring/MonitoringFeaturesList';
import OutcomeBox from './remote-monitoring/OutcomeBox';
import MonitoringDashboard from './remote-monitoring/MonitoringDashboard';

const RemoteMonitoring = () => {
  return (
    <section className="py-20 px-6 bg-health-light/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Solution 3
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              Real-Time Alerts & Remote Patient Monitoring
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our AI-powered remote monitoring system provides continuous patient tracking, real-time critical alerts, and comprehensive telehealth solutions for healthcare providers.
            </p>
            
            <MonitoringFeaturesList />
            
            <OutcomeBox />
          </div>
          
          <MonitoringDashboard />
        </div>
      </div>
    </section>
  );
};

export default RemoteMonitoring;
