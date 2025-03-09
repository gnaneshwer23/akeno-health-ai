
import React from 'react';
import { CheckCheck, Zap } from 'lucide-react';
import Outcome from '../Outcome';

const OutcomesSection = () => {
  return (
    <div className="absolute right-0 top-[40px] flex flex-col space-y-[42px]">
      <Outcome 
        title="Personalized Care Plans" 
        icon={<CheckCheck size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={0.9} 
      />
      <Outcome 
        title="AI-Enhanced Diagnosis" 
        icon={<Zap size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={1.0} 
      />
      <Outcome 
        title="Predictive Disease Detection" 
        icon={<CheckCheck size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={1.1} 
      />
      <Outcome 
        title="Resource Optimization" 
        icon={<Zap size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={1.2} 
      />
      <Outcome 
        title="Accelerated Drug Discovery" 
        icon={<CheckCheck size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={1.3} 
      />
      <Outcome 
        title="Real-Time Monitoring" 
        icon={<Zap size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={1.4} 
      />
      <Outcome 
        title="Clinical Trial Matching" 
        icon={<CheckCheck size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={1.5} 
      />
      <Outcome 
        title="Advanced Treatment Insights" 
        icon={<Zap size={16} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={1.6} 
      />
    </div>
  );
};

export default OutcomesSection;
