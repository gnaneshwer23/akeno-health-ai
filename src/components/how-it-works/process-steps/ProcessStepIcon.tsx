
import React from 'react';
import { 
  Smartphone, Database, Brain, Activity, FlaskConical, Workflow, 
  Dna, LineChart, HeartPulse, Beaker, Users, Shield, FileText, 
  Zap, Lock, Link as LinkIcon, Pill
} from 'lucide-react';

interface ProcessStepIconProps {
  iconName: string;
  size?: number;
  className?: string;
}

const ProcessStepIcon: React.FC<ProcessStepIconProps> = ({ 
  iconName, 
  size = 60, 
  className = "" 
}) => {
  // Map icon names to actual Lucide icon components
  const getIcon = () => {
    switch(iconName) {
      case 'database': return <Database size={size} />;
      case 'brain': return <Brain size={size} />;
      case 'activity': return <Activity size={size} />;
      case 'flask': return <FlaskConical size={size} />;
      case 'heart': return <HeartPulse size={size} />;
      case 'shield': return <Shield size={size} />;
      case 'zap': return <Zap size={size} />;
      case 'dna': return <Dna size={size} />;
      case 'smartphone': return <Smartphone size={size} />;
      case 'workflow': return <Workflow size={size} />;
      case 'chart': return <LineChart size={size} />;
      case 'beaker': return <Beaker size={size} />;
      case 'users': return <Users size={size} />;
      case 'file': return <FileText size={size} />;
      case 'lock': return <Lock size={size} />;
      case 'link': return <LinkIcon size={size} />;
      case 'pill': return <Pill size={size} />;
      default: return <Database size={size} />;
    }
  };

  return (
    <div className={className}>
      {getIcon()}
    </div>
  );
};

export default ProcessStepIcon;
