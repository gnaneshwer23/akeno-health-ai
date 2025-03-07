
import React from 'react';

const GeneticRiskFactorsCard = () => (
  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
    <div className="text-sm text-health-primary font-medium mb-2">Genetic Risk Factors</div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm">Type 2 Diabetes</span>
        <span className="text-sm font-medium px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">Moderate</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Alzheimer's Disease</span>
        <span className="text-sm font-medium px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Low</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Breast Cancer (BRCA1/2)</span>
        <span className="text-sm font-medium px-2 py-0.5 bg-red-100 text-red-800 rounded-full">High</span>
      </div>
    </div>
  </div>
);

export default GeneticRiskFactorsCard;
