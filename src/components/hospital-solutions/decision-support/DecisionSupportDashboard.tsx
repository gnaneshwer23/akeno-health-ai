
import React from 'react';
import { Brain, AlertTriangle, ScanLine } from 'lucide-react';
import ClinicalAlertCard from './ClinicalAlertCard';
import AIAnalysisCard from './AIAnalysisCard';
import PatientRiskCard from './PatientRiskCard';

const DecisionSupportDashboard = () => (
  <div className="aspect-auto bg-health-light/10 rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6">
    <div className="h-full flex flex-col">
      <div className="text-center mb-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
          <Brain size={24} className="text-health-primary" />
        </div>
        <h3 className="text-xl font-medium text-health-dark">AI Clinical Decision Support</h3>
      </div>
      
      <div className="flex-1 flex flex-col gap-4">
        <ClinicalAlertCard 
          type="critical"
          icon={<AlertTriangle size={20} className="text-red-600" />}
          title="Sepsis Early Warning"
          patientId="PT-78923"
          description="AI has detected early signs of sepsis development based on vital trends, lab work, and risk factors."
          confidence={92}
          recommendations={[
            "Immediate blood cultures",
            "Consider empiric antibiotics",
            "Increase fluid monitoring"
          ]}
        />
        
        <div className="grid grid-cols-2 gap-3">
          <PatientRiskCard 
            title="Readmission Risk"
            patientId="PT-45673"
            risk={76}
            factors={["COPD history", "Medication adherence issues"]}
          />
          <PatientRiskCard 
            title="Fall Risk Assessment"
            patientId="PT-23409"
            risk={83}
            factors={["Prior falls", "New medication"]}
          />
        </div>
        
        <AIAnalysisCard 
          icon={<ScanLine size={20} className="text-health-primary" />}
          title="AI Imaging Analysis"
          imageType="Chest X-ray"
          patientId="PT-39842"
          findings="Possible early-stage pneumonia in right lower lobe. Subtle infiltrate detected by AI that may be missed in conventional review."
          confidence={88}
          recommendation="Correlate with clinical symptoms and consider follow-up CT if symptoms persist."
        />
      </div>
    </div>
  </div>
);

export default DecisionSupportDashboard;
