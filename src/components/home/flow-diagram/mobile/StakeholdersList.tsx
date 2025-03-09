
import React from 'react';
import { UserRound, Stethoscope, Building, Dna } from 'lucide-react';
import Stakeholder from './Stakeholder';

const StakeholdersList = () => {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="text-sm font-semibold text-[#7E69AB] mb-3">Stakeholders</h3>
      <Stakeholder 
        title="Patients" 
        icon={<UserRound size={22} className="text-[#9b87f5]" />}
        delay={0.6}
      />
      <Stakeholder 
        title="Doctors & Clinicians" 
        icon={<Stethoscope size={22} className="text-[#7E69AB]" />}
        delay={0.7}
      />
      <Stakeholder 
        title="Hospitals & Providers" 
        icon={<Building size={22} className="text-[#6E59A5]" />}
        delay={0.8}
      />
      <Stakeholder 
        title="Biotech & Pharma" 
        icon={<Dna size={22} className="text-[#8B5CF6]" />}
        delay={0.9}
      />
    </div>
  );
};

export default StakeholdersList;
