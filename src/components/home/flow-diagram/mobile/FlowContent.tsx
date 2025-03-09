
import React from 'react';
import FlowHeader from './FlowHeader';
import DataSourcesList from './DataSourcesList';
import CoreSolution from './CoreSolution';
import StakeholdersList from './StakeholdersList';
import OutcomesList from './OutcomesList';
import Divider from './Divider';

const FlowContent = () => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-[#8571DD]/10">
      <FlowHeader />
      
      {/* Layer 1: Data Collection */}
      <div className="bg-gradient-to-r from-[#F1F0FB]/30 to-white/30 p-4 rounded-lg border border-[#8571DD]/10 mb-4">
        <DataSourcesList />
      </div>
      
      <Divider delay={0.4} />
      
      {/* Layer 2: AI Processing */}
      <div className="relative bg-gradient-to-r from-white/30 to-[#F1F0FB]/30 p-4 rounded-lg border border-[#8571DD]/10 mb-4">
        <CoreSolution />
      </div>
      
      <Divider delay={0.5} />
      
      {/* Layer 3: Stakeholders */}
      <div className="bg-gradient-to-r from-[#F1F0FB]/30 to-white/30 p-4 rounded-lg border border-[#8571DD]/10 mb-4">
        <StakeholdersList />
      </div>
      
      <Divider delay={0.9} />
      
      {/* Layer 4: Healthcare Impacts */}
      <div className="bg-gradient-to-r from-white/30 to-[#F1F0FB]/30 p-4 rounded-lg border border-[#8571DD]/10">
        <OutcomesList />
      </div>
    </div>
  );
};

export default FlowContent;
