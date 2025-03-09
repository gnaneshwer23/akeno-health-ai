
import React from 'react';
import { CheckCheck, Zap } from 'lucide-react';
import Outcome from './Outcome';

const OutcomesList = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-3">AI-Driven Outcomes</h3>
      <div className="flex flex-wrap gap-2.5">
        <Outcome 
          title="Personalised Care" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.0} 
        />
        <Outcome 
          title="Clinical Decision Support" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.1} 
        />
        <Outcome 
          title="Resource Optimization" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.2} 
        />
        <Outcome 
          title="Accelerated Trial Matching" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.3} 
        />
        <Outcome 
          title="Real-Time Monitoring" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.4} 
        />
        <Outcome 
          title="Predictive Disease Detection" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.5} 
        />
      </div>
    </div>
  );
};

export default OutcomesList;
