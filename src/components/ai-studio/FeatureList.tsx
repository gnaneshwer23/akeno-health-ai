
import React from 'react';
import { Brain, LineChart, Microscope, FileCode, ShieldCheck, Rocket, Database } from 'lucide-react';
import FeatureSection from './FeatureSection';

interface FeatureListProps {
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ className }) => {
  const features = [
    {
      icon: <Database />,
      color: 'blue',
      title: 'Model Management Hub',
      subtitle: 'Manage every stage of the model lifecycle with complete transparency.',
      features: [
        "Model Dashboard: Overview of all active models, their current deployment status, and usage stats.",
        "Train / Re-Train: Upload new data, fine-tune existing models using federated or synthetic data.",
        "Audit Logs: Version history and model change tracking.",
        "Performance Metrics: ROC, AUC, F1, and cohort-specific analysis."
      ],
      useCase: "Use Case: Fine-tune the sepsis risk prediction model based on ICU real-time vitals across 3 hospitals."
    },
    {
      icon: <Brain />,
      color: 'purple',
      title: 'Explainability Engine',
      subtitle: 'Make AI understandable — even to non-data scientists.',
      features: [
        "Visual Explainability Layer with SHAP Values, LIME, and Grad-CAM for Imaging AI",
        "Clinical Notes Generator: Converts AI outputs into human-readable rationale for doctors."
      ],
      useCase: "Use Case: Explain why a model predicted early-stage pancreatic cancer in a 42-year-old male."
    },
    {
      icon: <LineChart />,
      color: 'teal',
      title: 'Cohort Prediction Tools',
      subtitle: 'Build, test, and compare model performance across patient groups.',
      features: [
        "Cohort Builder Interface: Filter by comorbidities, age, gender, genetic markers, region, etc.",
        "Compare model performance by cohort.",
        "Outcome Simulation: Run what-if scenarios like 'What if this cohort received Drug X instead of Drug Y?'"
      ],
      useCase: "Use Case: Simulate cardiovascular risk improvement across diabetic patients aged 55+ with specific SNP markers."
    },
    {
      icon: <FileCode />,
      color: 'indigo',
      title: 'Notebook Mode (Code-Friendly Zone)',
      subtitle: 'For in-house data science teams and research collaborators.',
      features: [
        "Access secure, cloud-based Jupyter-style notebooks",
        "Use Python, R, or Julia environments with built-in medical libraries",
        "Integrated with hospital EHRs via FHIR APIs (read-only or sandbox mode)",
        "Includes anonymised or synthetic datasets for training & testing"
      ],
      useCase: "Use Case: A pharma partner runs a machine learning pipeline on anonymised Indian population data to discover gene-drug interactions."
    },
    {
      icon: <ShieldCheck />,
      color: 'red',
      title: 'Governance & Compliance Panel',
      subtitle: 'Ensure safety, reproducibility, and accountability in healthcare AI.',
      features: [
        "Regulatory Readiness Flags: Mark models requiring FDA/EMA/ICMR validation.",
        "Audit Trail Generator: Export all training logs and data lineage for compliance submission.",
        "Smart Consent Tracker: Ensure training datasets include patient-consented samples.",
        "Zero-Knowledge Proof Mode: Let external parties validate model output without seeing raw data."
      ],
      useCase: "Use Case: Generate audit documents for an AI being submitted to MHRA for CE certification."
    },
    {
      icon: <Rocket />,
      color: 'green',
      title: 'Deployment Portal',
      subtitle: 'Push live models to patient apps, hospital systems, and clinical dashboards.',
      features: [
        "Drag-and-drop deployment to: Patient monitoring AI, Doctor CDS systems, Drug discovery pipelines, and Clinical trial recruitment engine",
        "Real-time model health monitoring with alerts (e.g., drift detection, underperformance)"
      ],
      useCase: "Use Case: Update Digital Twin simulation models in the field as new biomarkers are discovered."
    }
  ];

  return (
    <div className={className}>
      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          icon={feature.icon}
          color={feature.color}
          title={feature.title}
          subtitle={feature.subtitle}
          features={feature.features}
          useCase={feature.useCase}
          index={index}
        />
      ))}
    </div>
  );
};

export default FeatureList;
