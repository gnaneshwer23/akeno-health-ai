
import React from 'react';

interface MonitoringFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MonitoringFeature = ({ icon, title, description }: MonitoringFeatureProps) => (
  <div className="flex items-start gap-3 hover:bg-health-primary/5 p-2 rounded-lg transition-colors group">
    <div className="mt-1 flex-shrink-0">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-health-primary/20 text-health-primary group-hover:bg-health-primary group-hover:text-white transition-colors">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-medium text-health-dark">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default MonitoringFeature;
