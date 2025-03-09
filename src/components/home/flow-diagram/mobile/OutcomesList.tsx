
import React from 'react';
import { CheckCheck, Zap } from 'lucide-react';
import Outcome from './Outcome';

const OutcomesList = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-[#7E69AB] mb-3">AI-Driven Outcomes</h3>
      <div className="flex flex-wrap gap-2.5">
        <Outcome 
          title="Personalised Care" 
          icon={<CheckCheck size={16} className="text-[#9b87f5]" />}
          color="[#9b87f5]"
          delay={1.0} 
        />
        <Outcome 
          title="Clinical Decision Support" 
          icon={<Zap size={16} className="text-[#7E69AB]" />}
          color="[#7E69AB]"
          delay={1.1} 
        />
        <Outcome 
          title="Resource Optimization" 
          icon={<CheckCheck size={16} className="text-[#6E59A5]" />}
          color="[#6E59A5]"
          delay={1.2} 
        />
        <Outcome 
          title="Predictive Analytics" 
          icon={<Zap size={16} className="text-[#8B5CF6]" />}
          color="[#8B5CF6]"
          delay={1.3} 
        />
        <Outcome 
          title="Real-Time Monitoring" 
          icon={<CheckCheck size={16} className="text-[#9b87f5]" />}
          color="[#9b87f5]"
          delay={1.4} 
        />
        <Outcome 
          title="Trial Matching" 
          icon={<Zap size={16} className="text-[#7E69AB]" />}
          color="[#7E69AB]"
          delay={1.5} 
        />
      </div>
    </div>
  );
};

export default OutcomesList;
