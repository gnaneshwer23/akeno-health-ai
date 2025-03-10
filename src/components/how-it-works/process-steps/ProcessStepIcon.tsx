
import React from 'react';
import { 
  Smartphone, Database, Brain, Activity, FlaskConical, Workflow, 
  Dna, LineChart, HeartPulse, Beaker, Users, Shield, FileText, 
  Zap, Lock, Link as LinkIcon, Pill
} from 'lucide-react';

interface ProcessStepIconProps {
  icon: React.ReactNode;
  size?: number;
  className?: string;
}

const ProcessStepIcon: React.FC<ProcessStepIconProps> = ({ 
  icon, 
  size = 60, 
  className = "" 
}) => {
  return (
    <div className={className}>
      {icon}
    </div>
  );
};

export default ProcessStepIcon;
