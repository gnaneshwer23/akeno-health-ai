
import React from 'react';
import { FileText, Brain, AlertCircle, ListChecks } from 'lucide-react';
import DiagnosticStep from './DiagnosticStep';

const DiagnosticProcessList = () => {
  const diagnosticProcess = [
    {
      icon: <FileText size={24} />,
      title: "Data Collection",
      description: "Patient medical history, symptoms, and test results are gathered",
      active: false
    },
    {
      icon: <Brain size={24} />,
      title: "AI Analysis",
      description: "Deep learning algorithms process and analyze all patient data",
      active: true
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Finding Identification",
      description: "AI detects anomalies and potential diagnoses",
      active: false
    },
    {
      icon: <ListChecks size={24} />,
      title: "Clinical Validation",
      description: "Medical professionals review AI findings and confirm diagnosis",
      active: false
    }
  ];

  return (
    <div className="mb-6">
      <h4 className="text-sm font-medium mb-3">Diagnostic Process</h4>
      <div className="space-y-3">
        {diagnosticProcess.map((step, index) => (
          <DiagnosticStep 
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            active={step.active}
          />
        ))}
      </div>
    </div>
  );
};

export default DiagnosticProcessList;
