
import React from 'react';

interface DiagnosticStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
  accentColor?: string;
  activeAccentColor?: string;
}

const DiagnosticStep = ({ 
  icon, 
  title, 
  description, 
  active = false,
  accentColor = "bg-gradient-to-br from-health-primary/20 to-health-secondary/20 text-health-primary",
  activeAccentColor = "bg-gradient-to-r from-health-primary to-health-secondary text-white"
}: DiagnosticStepProps) => (
  <div className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
    active 
      ? 'bg-gradient-to-r from-health-primary/10 to-health-secondary/10 shadow-md' 
      : 'bg-white hover:bg-health-light/50 shadow-sm'
  }`}>
    <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${active ? activeAccentColor : accentColor}`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-health-dark">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {active && <div className="w-2 h-10 bg-gradient-to-b from-health-primary to-health-secondary rounded-full"/>}
  </div>
);

export default DiagnosticStep;
