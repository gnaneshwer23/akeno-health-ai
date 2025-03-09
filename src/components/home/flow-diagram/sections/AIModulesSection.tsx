
import React from 'react';
import { Activity, Brain, FlaskConical, Tablet } from 'lucide-react';
import CoreSolution from '../CoreSolution';

const AIModulesSection = () => {
  return (
    <>
      {/* AI Core - Center */}
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <CoreSolution />
      </div>
      
      {/* AI Sub-modules - Around Core */}
      <div className="absolute left-[40%] top-[18%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <Activity size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Predictive AI</span>
      </div>
      
      <div className="absolute left-[56%] top-[18%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <Brain size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Diagnostic AI</span>
      </div>
      
      <div className="absolute left-[40%] top-[42%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <FlaskConical size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Research AI</span>
      </div>
      
      <div className="absolute left-[56%] top-[42%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <Tablet size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Clinical AI</span>
      </div>
    </>
  );
};

export default AIModulesSection;
