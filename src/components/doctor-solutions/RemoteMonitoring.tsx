
import React from 'react';
import MonitoringFeaturesList from './remote-monitoring/MonitoringFeaturesList';
import OutcomeBox from './remote-monitoring/OutcomeBox';
import MonitoringDashboard from './remote-monitoring/MonitoringDashboard';

const RemoteMonitoring = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-health-primary/10 relative z-10">
            <div className="absolute -z-10 -top-10 -left-10 h-40 w-40 bg-health-primary/10 rounded-full blur-xl"></div>
            
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/20 to-health-secondary/20 text-health-primary font-medium">
              Solution 3
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent mb-6">
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
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 h-64 w-64 bg-health-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 h-80 w-80 bg-health-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default RemoteMonitoring;
