
import React from 'react';
import { ActivitySquare, Brain, FlaskConical, Database, HeartPulse, Shield } from 'lucide-react';

export const services = [
  {
    icon: <ActivitySquare className="h-10 w-10 text-white" />,
    title: "Continuous Health Monitoring",
    description: "Our platform processes data from wearables and clinical sources to detect early signs of health changes before symptoms appear."
  },
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: "AI-Powered Diagnostics & Clinical Decision Support",
    description: "Advanced algorithms analyze patient data to provide evidence-based recommendations, reducing diagnostic errors."
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-white" />,
    title: "Precision Medicine & Digital Twin Technology",
    description: "Personalized treatments tailored to your unique genetics, microbiome, and health profile for optimized outcomes."
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-white" />,
    title: "AI-Driven Clinical Trials & Drug Discovery",
    description: "We match patients to appropriate clinical trials and accelerate drug discovery using advanced computing."
  },
  {
    icon: <Database className="h-10 w-10 text-white" />,
    title: "Secure Health Records Management",
    description: "Our blockchain-powered health data system ensures your data remains secure while providing authorized access when needed."
  },
  {
    icon: <Shield className="h-10 w-10 text-white" />,
    title: "Early Detection & Preventive Care",
    description: "Advanced AI assessments detect early signs of health conditions, enabling proactive interventions before problems escalate."
  }
];
