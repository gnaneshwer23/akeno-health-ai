
import React from 'react';
import { UserRound, Stethoscope, Building, Heart } from 'lucide-react';
import Stakeholder from './Stakeholder';

const StakeholdersList = () => {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-3">Stakeholders</h3>
      <Stakeholder 
        title="Patients" 
        icon={<UserRound size={22} className="text-[#8571DD]" />}
        delay={0.6}
      />
      <Stakeholder 
        title="Doctors & Clinicians" 
        icon={<Stethoscope size={22} className="text-[#8571DD]" />}
        delay={0.7}
      />
      <Stakeholder 
        title="Hospitals & Healthcare" 
        icon={<Building size={22} className="text-[#8571DD]" />}
        delay={0.8}
      />
      <Stakeholder 
        title="Pharmaceutical & Research" 
        icon={<Heart size={22} className="text-[#8571DD]" />}
        delay={0.9}
      />
    </div>
  );
};

export default StakeholdersList;
