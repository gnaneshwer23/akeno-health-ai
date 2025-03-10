
import { 
  Smartphone, Database, Brain, FlaskConical, Activity, 
  HeartPulse, Beaker, Link as LinkIcon, Shield, Users, Zap, Lock
} from 'lucide-react';
import React from 'react';

export type JourneyStep = {
  step: number;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
};

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Health Data Collection",
    content: "AI gathers data from wearables, medical records, genetics, and more",
    icon: <Smartphone size={24} />,
    color: "indigo"
  },
  {
    step: 2,
    title: "Digital Twin Creation",
    content: "AI builds a virtual health model to simulate outcomes",
    icon: <Database size={24} />,
    color: "purple"
  },
  {
    step: 3,
    title: "AI Risk Analysis",
    content: "Early disease detection before symptoms appear",
    icon: <Brain size={24} />,
    color: "blue"
  },
  {
    step: 4,
    title: "AI-Powered Diagnosis",
    content: "Enhanced medical insights for doctors",
    icon: <Zap size={24} />,
    color: "cyan"
  },
  {
    step: 5,
    title: "Precision Treatment",
    content: "Personalized therapy based on your unique biology",
    icon: <FlaskConical size={24} />,
    color: "teal"
  },
  {
    step: 6,
    title: "Continuous Monitoring",
    content: "Real-time health tracking and adjustments",
    icon: <Activity size={24} />,
    color: "pink"
  },
  {
    step: 7,
    title: "Secure Data Sharing",
    content: "Blockchain-protected health data under your control",
    icon: <Lock size={24} />,
    color: "amber"
  }
];
