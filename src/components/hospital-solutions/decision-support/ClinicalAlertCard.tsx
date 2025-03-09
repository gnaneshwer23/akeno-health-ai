
import React from 'react';

interface ClinicalAlertCardProps {
  type: 'critical' | 'warning';
  icon: React.ReactNode;
  title: string;
  patientId: string;
  description: string;
  confidence: number;
  recommendations: string[];
}

const ClinicalAlertCard = ({ 
  type, 
  icon, 
  title, 
  patientId,
  description,
  confidence,
  recommendations
}: ClinicalAlertCardProps) => {
  const bgColor = type === 'critical' ? 'bg-red-50' : 'bg-yellow-50';
  const borderColor = type === 'critical' ? 'border-red-200' : 'border-yellow-200';
  const buttonBgColor = type === 'critical' ? 'bg-red-600' : 'bg-yellow-600';
  
  return (
    <div className={`${bgColor} ${borderColor} border p-4 rounded-lg`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="font-medium">{title}</h4>
        <span className="ml-auto text-xs bg-white px-2 py-0.5 rounded-full border border-gray-200">
          Patient: {patientId}
        </span>
      </div>
      
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      
      <div className="flex items-center mb-3">
        <span className="text-sm font-medium mr-2">AI Confidence:</span>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex-1">
          <div 
            className={confidence > 90 ? "bg-green-500" : confidence > 75 ? "bg-yellow-500" : "bg-red-500"}
            style={{ width: `${confidence}%`, height: '100%' }}
          ></div>
        </div>
        <span className="text-sm ml-2">{confidence}%</span>
      </div>
      
      <div className="mb-3">
        <span className="text-sm font-medium">AI Recommendations:</span>
        <ul className="mt-1 space-y-1">
          {recommendations.map((rec, index) => (
            <li key={index} className="text-xs flex items-start">
              <span className="mr-1 mt-0.5">•</span> {rec}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex gap-2 mt-2">
        <button className={`text-xs ${buttonBgColor} text-white px-3 py-1 rounded-full`}>
          Review Alert
        </button>
        <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default ClinicalAlertCard;
