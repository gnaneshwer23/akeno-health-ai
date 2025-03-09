
import React from 'react';
import { User, Stethoscope, Building, FlaskConical } from 'lucide-react';
import Stakeholder from './Stakeholder';
import { DIAGRAM_COLORS } from '../utils/diagramUtils';

const StakeholdersList = () => {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-3">Stakeholders</h3>
      <Stakeholder 
        title="Patients" 
        icon={<User size={20} className="text-[#8571DD]" />} 
        color={DIAGRAM_COLORS.primary}
        delay={0.6}
      />
      <Stakeholder 
        title="Doctors & Clinicians" 
        icon={<Stethoscope size={20} className="text-[#8571DD]" />} 
        color={DIAGRAM_COLORS.primary}
        delay={0.7}
      />
      <Stakeholder 
        title="Hospitals & Healthcare" 
        icon={<Building size={20} className="text-[#8571DD]" />} 
        color={DIAGRAM_COLORS.primary}
        delay={0.8}
      />
      <Stakeholder 
        title="Pharma & Research" 
        icon={<FlaskConical size={20} className="text-[#8571DD]" />} 
        color={DIAGRAM_COLORS.primary}
        delay={0.9}
      />
    </div>
  );
};

export default StakeholdersList;
