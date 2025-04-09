
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
    title: "Real-Time Data Collection",
    content: "We start by listening to your body — continuously",
    icon: <Smartphone size={24} />,
    color: "indigo"
  },
  {
    step: 2,
    title: "AI Risk Detection",
    content: "Before symptoms appear, our AI predicts risk",
    icon: <Brain size={24} />,
    color: "purple"
  },
  {
    step: 3,
    title: "Clinical Intelligence",
    content: "AI becomes your doctor's co-pilot",
    icon: <HeartPulse size={24} />,
    color: "blue"
  },
  {
    step: 4,
    title: "Digital Twin Simulation",
    content: "A treatment plan tested on your digital self first",
    icon: <FlaskConical size={24} />,
    color: "cyan"
  },
  {
    step: 5,
    title: "Adaptive Care",
    content: "As you heal, the system evolves with you",
    icon: <Activity size={24} />,
    color: "teal"
  },
  {
    step: 6,
    title: "Clinical Trial Matching",
    content: "Access cutting-edge treatments and research",
    icon: <Zap size={24} />,
    color: "pink"
  },
  {
    step: 7,
    title: "Blockchain Security",
    content: "You control your health data – always",
    icon: <Lock size={24} />,
    color: "amber"
  }
];
