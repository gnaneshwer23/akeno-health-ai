
import React from 'react';
import { CheckCircle, Zap, TrendingUp, LineChart, FlaskConical, Activity, Users, Stethoscope } from 'lucide-react';
import Outcome from './Outcome';
import { DIAGRAM_COLORS } from '../utils/diagramUtils';

const OutcomesList = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-3">Healthcare Impacts</h3>
      
      {/* Personalized Care Plans */}
      <Outcome 
        title="Personalized Care Plans" 
        icon={<CheckCircle size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.0} 
      />
      
      {/* AI-Enhanced Diagnosis */}
      <Outcome 
        title="AI-Enhanced Diagnosis" 
        icon={<Zap size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.1} 
      />
      
      {/* Predictive Disease Detection */}
      <Outcome 
        title="Predictive Disease Detection" 
        icon={<TrendingUp size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.2} 
      />
      
      {/* Resource Optimization */}
      <Outcome 
        title="Resource Optimization" 
        icon={<LineChart size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.3} 
      />
      
      {/* Accelerated Drug Discovery */}
      <Outcome 
        title="Accelerated Drug Discovery" 
        icon={<FlaskConical size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.4} 
      />
      
      {/* Real-Time Monitoring */}
      <Outcome 
        title="Real-Time Monitoring" 
        icon={<Activity size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.5} 
      />
      
      {/* Clinical Trial Matching */}
      <Outcome 
        title="Clinical Trial Matching" 
        icon={<Users size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.6} 
      />
      
      {/* Advanced Treatment Insights */}
      <Outcome 
        title="Advanced Treatment Insights" 
        icon={<Stethoscope size={16} className="text-[#8571DD]" />}
        color={DIAGRAM_COLORS.primary}
        delay={1.7} 
      />
    </div>
  );
};

export default OutcomesList;
