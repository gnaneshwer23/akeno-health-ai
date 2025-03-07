
import React from 'react';

const CardiovascularRiskCard = () => (
  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-health-primary"></div>
        <span className="font-medium">Cardiovascular Risk</span>
      </div>
      <span className="text-sm font-bold text-health-primary">Medium</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-health-primary rounded-full" style={{ width: '42%' }}></div>
      </div>
      <span className="text-sm">42%</span>
    </div>
    <div className="mt-2 text-xs text-gray-500">
      <span className="text-health-primary font-medium">AI Insight:</span> Patient shows elevated LDL cholesterol and family history of heart disease.
    </div>
  </div>
);

export default CardiovascularRiskCard;
