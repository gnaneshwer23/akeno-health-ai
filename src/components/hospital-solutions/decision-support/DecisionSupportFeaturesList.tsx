
import React from 'react';
import { 
  Brain, 
  BarChart, 
  ScanLine, 
  HeartPulse, 
  Stethoscope, 
  Microscope 
} from 'lucide-react';
import DecisionSupportFeature from './DecisionSupportFeature';

const features = [
  {
    icon: <Brain size={24} />,
    title: "AI-Powered Clinical Decision Support (CDS)",
    description: "AI scans millions of research papers, clinical trial data, and patient records to provide real-time diagnostic and treatment recommendations."
  },
  {
    icon: <BarChart size={24} />,
    title: "Automated Risk Stratification & Predictive Analytics",
    description: "AI detects high-risk patients and predicts complications before symptoms worsen using advanced predictive modeling."
  },
  {
    icon: <ScanLine size={24} />,
    title: "AI-Powered Imaging & Radiology Support",
    description: "Faster and more accurate AI-assisted X-ray, MRI, and CT scan analysis, detecting abnormalities human eyes might miss."
  },
  {
    icon: <HeartPulse size={24} />,
    title: "Real-Time AI-Driven ICU & Emergency Support",
    description: "AI monitors ICU patients 24/7 for early detection of deterioration, predicting critical events before they occur."
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Evidence-Based Treatment Protocol Optimization",
    description: "AI continuously updates clinical guidelines based on the latest medical research and outcomes data."
  },
  {
    icon: <Microscope size={24} />,
    title: "AI-Enhanced Laboratory & Pathology Analysis",
    description: "Automated identification of abnormal lab results and tissue samples with higher accuracy than traditional methods."
  }
];

const DecisionSupportFeaturesList = () => (
  <div className="space-y-4 mb-8">
    {features.map((feature, index) => (
      <DecisionSupportFeature 
        key={index} 
        icon={feature.icon} 
        title={feature.title} 
        description={feature.description} 
      />
    ))}
  </div>
);

export default DecisionSupportFeaturesList;
