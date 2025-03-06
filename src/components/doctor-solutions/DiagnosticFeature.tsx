
import React from 'react';

interface DiagnosticFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor?: string;
}

const DiagnosticFeature = ({ 
  icon, 
  title, 
  description, 
  accentColor = "bg-health-primary/20 text-health-primary group-hover:bg-health-primary group-hover:text-white" 
}: DiagnosticFeatureProps) => {
  return (
    <div className="flex items-start gap-3 hover:bg-health-primary/5 p-3 rounded-lg transition-colors group">
      <div className="mt-1 flex-shrink-0">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${accentColor} transition-colors`}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-health-dark">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default DiagnosticFeature;
