
import React from 'react';
import { CheckCheck, Zap } from 'lucide-react';
import Outcome from './Outcome';

const OutcomesList = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-3">AI-Driven Outcomes</h3>
      <div className="flex flex-wrap gap-2.5">
        <Outcome 
          title="Personalized Care" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          delay={1.0} 
        />
        <Outcome 
          title="Enhanced Diagnosis" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          delay={1.1} 
        />
        <Outcome 
          title="Disease Prediction" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          delay={1.2} 
        />
        <Outcome 
          title="Resource Optimization" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          delay={1.3} 
        />
        <Outcome 
          title="Drug Discovery" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          delay={1.4} 
        />
        <Outcome 
          title="Real-Time Monitoring" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          delay={1.5} 
        />
        <Outcome 
          title="Clinical Trial Matching" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          delay={1.6} 
        />
        <Outcome 
          title="Treatment Insights" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          delay={1.7} 
        />
      </div>
    </div>
  );
};

export default OutcomesList;
