
import React from 'react';
import { ActivitySquare, Brain, FlaskConical, Database, HeartPulse, Shield } from 'lucide-react';

export const services = [
  {
    icon: <ActivitySquare className="h-10 w-10 text-white" />,
    title: "Continuous Health Monitoring",
    description: "AI-powered wearables and real-time biomarkers detect early disease signals before symptoms appear."
  },
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: "AI-Powered Diagnostics & Clinical Decision Support",
    description: "AI-enhanced tools empower doctors with real-time, evidence-based recommendations, reducing diagnostic errors and treatment delays."
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-white" />,
    title: "Precision Medicine & Digital Twin Technology",
    description: "Hyper-personalised treatments tailored to genetics, microbiome, and disease progression for optimised health outcomes."
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-white" />,
    title: "AI-Driven Clinical Trials & Drug Discovery",
    description: "Advanced AI matches patients to clinical trials and accelerates drug discovery using quantum computing."
  },
  {
    icon: <Database className="h-10 w-10 text-white" />,
    title: "Blockchain-Powered Universal Health Records",
    description: "A secure, decentralised health data system, ensuring patient ownership and real-time access to medical history."
  },
  {
    icon: <Shield className="h-10 w-10 text-white" />,
    title: "AI-Integrated Mental & Cognitive Health",
    description: "Advanced AI-driven assessments detect early signs of cognitive decline, stress, and mental health conditions for proactive interventions."
  }
];
