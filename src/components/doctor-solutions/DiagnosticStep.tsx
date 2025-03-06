
import React from 'react';

interface DiagnosticStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
}

const DiagnosticStep = ({ icon, title, description, active = false }: DiagnosticStepProps) => (
  <div className={`flex items-center gap-4 p-3 rounded-lg transition-all ${active ? 'bg-health-primary/20' : 'bg-white hover:bg-health-light/50'}`}>
    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${active ? 'bg-health-primary text-white' : 'bg-health-primary/10 text-health-primary'}`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-health-dark">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {active && <div className="w-2 h-8 bg-health-primary rounded-full"/>}
  </div>
);

export default DiagnosticStep;
