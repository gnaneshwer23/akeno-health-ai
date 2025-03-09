
import React from 'react';
import { Search, Brain, Syringe, ScanLine, ListChecks, AlertTriangle } from 'lucide-react';
import DiagnosticFeature from './DiagnosticFeature';

const DiagnosticFeaturesList = () => {
  const features = [
    {
      icon: <Search size={24} />,
      title: "AI-Enhanced Differential Diagnosis",
      description: "Rapid, AI-assisted analysis of patient symptoms, medical history, and real-time vitals to generate comprehensive differential diagnoses."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "AI-Powered Risk Stratification",
      description: "Advanced predictive analytics for early detection of disease progression and potential complications before they become critical."
    },
    {
      icon: <Brain size={24} />,
      title: "Automated Diagnostic Support",
      description: "AI scans millions of research papers, clinical guidelines, and patient records to offer instant insights and evidence-based suggestions."
    },
    {
      icon: <ScanLine size={24} />,
      title: "Medical Imaging & Radiology Support",
      description: "AI assists radiologists in detecting tumors, fractures, infections, and cardiovascular abnormalities with enhanced accuracy."
    },
    {
      icon: <ListChecks size={24} />,
      title: "AI-Powered Symptom Checker",
      description: "Get intelligent, evidence-based diagnostic suggestions based on comprehensive symptom analysis and patient-specific factors."
    },
    {
      icon: <Syringe size={24} />,
      title: "Smart Treatment Recommendations",
      description: "Evidence-based treatment suggestions tailored to the patient's specific condition, medical history, and unique biological profile."
    }
  ];

  return (
    <div className="space-y-5 mb-8">
      {features.map((feature, index) => (
        <DiagnosticFeature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default DiagnosticFeaturesList;
