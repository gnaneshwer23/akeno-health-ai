
import React from 'react';

interface PatientRiskCardProps {
  title: string;
  patientId: string;
  risk: number;
  factors: string[];
}

const PatientRiskCard = ({ title, patientId, risk, factors }: PatientRiskCardProps) => {
  const getRiskColor = () => {
    if (risk > 75) return "text-red-600";
    if (risk > 50) return "text-yellow-600";
    return "text-green-600";
  };
  
  const getRiskBgColor = () => {
    if (risk > 75) return "bg-red-100";
    if (risk > 50) return "bg-yellow-100";
    return "bg-green-100";
  };
  
  return (
    <div className="bg-white border border-gray-200 p-3 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h5 className="text-sm font-medium">{title}</h5>
        <span className="text-xs text-gray-500">ID: {patientId}</span>
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        <div className={`text-xl font-bold ${getRiskColor()}`}>{risk}%</div>
        <div className={`text-xs px-2 py-0.5 rounded-full ${getRiskBgColor()}`}>
          {risk > 75 ? "High Risk" : risk > 50 ? "Medium Risk" : "Low Risk"}
        </div>
      </div>
      
      <div>
        <span className="text-xs font-medium">Risk Factors:</span>
        <ul className="mt-1 space-y-0.5">
          {factors.map((factor, index) => (
            <li key={index} className="text-xs flex items-start">
              <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-1.5 mr-1"></span>
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientRiskCard;
