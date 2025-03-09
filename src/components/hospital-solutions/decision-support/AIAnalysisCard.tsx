
import React from 'react';

interface AIAnalysisCardProps {
  icon: React.ReactNode;
  title: string;
  imageType: string;
  patientId: string;
  findings: string;
  confidence: number;
  recommendation: string;
}

const AIAnalysisCard = ({ 
  icon, 
  title, 
  imageType, 
  patientId, 
  findings, 
  confidence, 
  recommendation 
}: AIAnalysisCardProps) => {
  return (
    <div className="bg-health-light/20 border border-health-primary/10 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-white p-1 rounded-full">{icon}</div>
        <h4 className="font-medium">{title}</h4>
        <div className="ml-auto flex gap-2">
          <span className="text-xs bg-health-primary/10 px-2 py-0.5 rounded-full">
            {imageType}
          </span>
          <span className="text-xs bg-white border border-gray-200 px-2 py-0.5 rounded-full">
            {patientId}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-3 mb-3">
        <div className="col-span-2 bg-black rounded-lg flex items-center justify-center h-20">
          <span className="text-xs text-white">X-ray Image</span>
        </div>
        <div className="col-span-3">
          <h5 className="text-xs font-medium mb-1">AI Findings:</h5>
          <p className="text-xs text-gray-700">{findings}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        <span className="text-xs font-medium mr-2">AI Confidence:</span>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden flex-1">
          <div 
            className="bg-health-primary"
            style={{ width: `${confidence}%`, height: '100%' }}
          ></div>
        </div>
        <span className="text-xs ml-2">{confidence}%</span>
      </div>
      
      <div>
        <h5 className="text-xs font-medium mb-1">AI Recommendation:</h5>
        <p className="text-xs text-gray-700">{recommendation}</p>
      </div>
      
      <div className="flex gap-2 mt-3">
        <button className="text-xs bg-health-primary text-white px-3 py-1 rounded-full">
          Review Full Analysis
        </button>
        <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full">
          Send to Radiologist
        </button>
      </div>
    </div>
  );
};

export default AIAnalysisCard;
