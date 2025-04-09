
import React from 'react';
import { Activity, Brain, Database, Shield, Microscope, Link, HeartPulse, Smartphone } from 'lucide-react';

export const features = [
  {
    text: "Continuous Health Monitoring with AI-powered biomarkers detection",
    icon: <Activity className="text-white" size={14} />
  },
  {
    text: "AI-Powered Diagnostics & Clinical Decision Support",
    icon: <Brain className="text-white" size={14} />
  },
  {
    text: "Precision Medicine & Digital Twin Technology",
    icon: <Microscope className="text-white" size={14} />
  },
  {
    text: "Secure Health Records with Blockchain Technology",
    icon: <Shield className="text-white" size={14} />
  },
  {
    text: "Real-time Health Insights on Your Mobile Device",
    icon: <Smartphone className="text-white" size={14} />
  },
  {
    text: "Seamless Connection with Healthcare Providers",
    icon: <Link className="text-white" size={14} />
  }
];

// Additional detailed features that align with backend capabilities
export const detailedFeatures = [
  {
    icon: <HeartPulse size={24} className="text-health-primary" />,
    title: "Real-time Health Monitoring",
    description: "Our platform continuously captures vital signs and biomarkers from wearables and medical devices, analyzing patterns in real-time to detect early warning signs.",
    backendCapability: "Processes wearable_data and electronic_health_records from the database to provide continuous health tracking."
  },
  {
    icon: <Brain size={24} className="text-health-primary" />,
    title: "AI-Driven Health Insights",
    description: "Advanced machine learning algorithms analyze your health data to provide personalized recommendations and early disease detection.",
    backendCapability: "Leverages genomic_data and medical_images tables to deliver personalized health analytics."
  },
  {
    icon: <Microscope size={24} className="text-health-primary" />,
    title: "Digital Twin Technology",
    description: "Create a virtual replica of your health profile to simulate treatments and predict outcomes before actual interventions.",
    backendCapability: "Combines patient profiles with electronic_health_records to build comprehensive health simulations."
  },
  {
    icon: <Shield size={24} className="text-health-primary" />,
    title: "Secure Data Management",
    description: "Your health information is protected with hospital-grade encryption and blockchain technology that meets or exceeds all regulatory requirements.",
    backendCapability: "Implements robust security measures with Row Level Security (RLS) policies for all patient data."
  }
];
