
import React from 'react';
import { 
  Settings, 
  Receipt, 
  BarChart, 
  Pill,
  FileText,
  Users,
  ClipboardList
} from 'lucide-react';
import CostEfficiencyFeature from './CostEfficiencyFeature';

const CostEfficiencyFeaturesList = () => {
  const features = [
    {
      icon: <Settings size={24} />,
      title: "AI-Optimized Hospital Workflow Automation",
      description: "Reduces paperwork, manual processes, and inefficiencies by automating routine administrative tasks and clinical documentation."
    },
    {
      icon: <Receipt size={24} />,
      title: "Automated Billing & Insurance Claims Processing",
      description: "AI eliminates errors, fraud, and delays in insurance claims while optimizing revenue cycle management."
    },
    {
      icon: <BarChart size={24} />,
      title: "AI-Powered Predictive Resource Allocation",
      description: "Optimizes staffing, equipment usage, and bed management based on AI-predicted patient volumes and needs."
    },
    {
      icon: <Pill size={24} />,
      title: "Automated Medication & Pharmacy Integration",
      description: "AI prevents medication errors, monitors prescriptions, and streamlines pharmacy operations to reduce waste."
    },
    {
      icon: <FileText size={24} />,
      title: "AI-Driven Documentation & Compliance",
      description: "Automates clinical documentation, regulatory compliance reporting, and quality measure tracking."
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Supply Chain Optimization & Inventory Management",
      description: "AI predicts supply needs, prevents stockouts, and optimizes inventory levels to reduce costs and waste."
    }
  ];

  return (
    <div className="space-y-5 mb-8">
      {features.map((feature, index) => (
        <CostEfficiencyFeature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default CostEfficiencyFeaturesList;
