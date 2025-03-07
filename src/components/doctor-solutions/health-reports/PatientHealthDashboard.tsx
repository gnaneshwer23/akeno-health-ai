
import React from 'react';
import { FileText } from 'lucide-react';
import HealthWorkflowDiagram from './HealthWorkflowDiagram';
import CardiovascularRiskCard from './CardiovascularRiskCard';
import MetabolicHealthCard from './MetabolicHealthCard';
import LungFunctionCard from './LungFunctionCard';
import GeneticRiskFactorsCard from './GeneticRiskFactorsCard';
import PreventionRecommendationsCard from './PreventionRecommendationsCard';

const PatientHealthDashboard = () => (
  <div className="aspect-auto bg-health-light/10 rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6">
    <div className="h-full flex flex-col">
      <div className="text-center mb-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
          <FileText size={24} className="text-health-primary" />
        </div>
        <h3 className="text-xl font-medium text-health-dark">Patient Health Dashboard</h3>
      </div>
      
      <div className="flex-1 flex flex-col gap-4">
        <HealthWorkflowDiagram />
        
        <CardiovascularRiskCard />
        
        <div className="grid grid-cols-2 gap-3">
          <MetabolicHealthCard />
          <LungFunctionCard />
        </div>
        
        <GeneticRiskFactorsCard />
        
        <PreventionRecommendationsCard />
      </div>
    </div>
  </div>
);

export default PatientHealthDashboard;
