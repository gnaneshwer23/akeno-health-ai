
import React from 'react';
import { UserRound, Stethoscope, Building, Heart } from 'lucide-react';
import Stakeholder from '../Stakeholder';

const StakeholdersSection = () => {
  return (
    <div className="absolute right-[42%] top-[50px] flex flex-col space-y-24">
      <Stakeholder 
        title="Patients" 
        icon={<UserRound size={28} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={0.5}
      />
      <Stakeholder 
        title="Doctors & Clinicians" 
        icon={<Stethoscope size={28} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={0.6}
      />
      <Stakeholder 
        title="Hospitals & Healthcare" 
        icon={<Building size={28} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={0.7}
      />
      <Stakeholder 
        title="Pharmaceutical & Research" 
        icon={<Heart size={28} className="text-[#8571DD]" />}
        color="[#8571DD]"
        delay={0.8}
      />
    </div>
  );
};

export default StakeholdersSection;
