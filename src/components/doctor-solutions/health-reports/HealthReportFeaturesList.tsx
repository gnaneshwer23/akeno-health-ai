
import React from 'react';
import HealthReportFeature from './HealthReportFeature';
import { 
  FileText, 
  TrendingUp, 
  Dna, 
  LineChart, 
  LayoutDashboard, 
  FlaskConical,
} from 'lucide-react';

const features = [
  {
    icon: <FileText size={24} />,
    title: "AI-Powered Comprehensive Health Summaries",
    description: "AI compiles holistic patient reports by integrating EHRs, real-time biometrics, genomic sequencing, radiology data, and wearable device inputs."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Predictive Risk Assessments & Early Disease Detection",
    description: "AI evaluates multi-factorial health risks, predicting cardiovascular events, metabolic disorders, and other conditions before symptoms appear."
  },
  {
    icon: <Dna size={24} />,
    title: "Multi-Omics & Genomic Data Interpretation",
    description: "AI analyzes DNA mutations, epigenetic markers, and microbiome compositions to provide personalized risk assessments and preventative care strategies."
  },
  {
    icon: <LineChart size={24} />,
    title: "Longitudinal Health Monitoring & Trend Analysis",
    description: "AI continuously tracks biometric changes, medication adherence, and therapy effectiveness to provide actionable, long-term insights."
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "AI-Driven Clinical Decision Support Dashboards",
    description: "AI-powered interactive dashboards provide doctors with real-time alerts, AI-generated patient risk scores, and suggested clinical interventions."
  },
  {
    icon: <FlaskConical size={24} />,
    title: "AI-Powered Laboratory Test Analysis",
    description: "AI identifies hidden patterns in blood tests, metabolic panels, and inflammatory markers, providing early warnings for potential health risks."
  }
];

const HealthReportFeaturesList = () => (
  <div className="space-y-4 mb-8">
    {features.map((feature, index) => (
      <HealthReportFeature 
        key={index} 
        icon={feature.icon} 
        title={feature.title} 
        description={feature.description} 
      />
    ))}
  </div>
);

export default HealthReportFeaturesList;
