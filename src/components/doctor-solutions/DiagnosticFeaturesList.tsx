
import React from 'react';
import { Search, Brain, Syringe, ScanLine, ListChecks, Puzzle } from 'lucide-react';
import DiagnosticFeature from './DiagnosticFeature';

const DiagnosticFeaturesList = () => {
  const features = [
    {
      icon: <Search size={24} />,
      title: "AI-Powered Diagnostics & Anomaly Detection",
      description: "Advanced machine learning models analyze medical imaging, pathology reports, laboratory results, and genetic data to provide high-accuracy diagnoses and early anomaly detection."
    },
    {
      icon: <Brain size={24} />,
      title: "Predictive Disease Modeling & Risk Stratification",
      description: "AI evaluates multi-omics data, clinical biomarkers, and symptom patterns to detect diseases earlier, more accurately, and at the molecular level."
    },
    {
      icon: <Syringe size={24} />,
      title: "Precision Medicine & AI-Driven Therapy Matching",
      description: "AI matches patients with the most effective, targeted treatment plans, using genomics, epigenetics, and proteomic data to customize interventions."
    },
    {
      icon: <ScanLine size={24} />,
      title: "Medical Imaging & Radiology Support",
      description: "AI assists radiologists in detecting tumors, fractures, infections, and cardiovascular abnormalities with enhanced accuracy and reduced false positives."
    },
    {
      icon: <ListChecks size={24} />,
      title: "AI-Powered Clinical Workflows",
      description: "AI automates routine clinical assessments, freeing up time for physicians to focus on critical decision-making and personalized patient care."
    },
    {
      icon: <Puzzle size={24} />,
      title: "AI for Rare & Complex Diseases",
      description: "AI analyzes vast datasets to identify rare genetic disorders, autoimmune conditions, and hard-to-diagnose diseases, providing AI-generated differential diagnoses."
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
