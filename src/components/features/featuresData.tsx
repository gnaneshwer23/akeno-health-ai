
import React from 'react';
import { Activity, Brain, Database, Shield, Microscope, Link } from 'lucide-react';

export const features = [
  {
    text: "Continuous Health Monitoring with AI-powered biomarkers detection",
    icon: <Activity className="text-white" size={14} />
  },
  {
    text: "AI-Powered Diagnostics & Clinical Decision Support for healthcare providers",
    icon: <Brain className="text-white" size={14} />
  },
  {
    text: "Precision Medicine & Digital Twin Technology for personalized treatments",
    icon: <Microscope className="text-white" size={14} />
  },
  {
    text: "AI-Driven Clinical Trials & Drug Discovery with quantum computing",
    icon: <Database className="text-white" size={14} />
  },
  {
    text: "Blockchain-Powered Universal Health Records for patient data ownership",
    icon: <Shield className="text-white" size={14} />
  },
  {
    text: "Seamless Ecosystem connecting patients, doctors, hospitals, and researchers",
    icon: <Link className="text-white" size={14} />
  }
];
