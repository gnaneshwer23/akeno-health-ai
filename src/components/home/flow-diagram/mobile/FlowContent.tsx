
import React from 'react';
import FlowHeader from './FlowHeader';
import DataSourcesList from './DataSourcesList';
import CoreSolution from './CoreSolution';
import StakeholdersList from './StakeholdersList';
import OutcomesList from './OutcomesList';
import Divider from './Divider';

const FlowContent = () => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-[#D6BCFA]/20">
      <FlowHeader />
      <DataSourcesList />
      <Divider delay={0.4} />
      <CoreSolution />
      <Divider delay={0.5} />
      <StakeholdersList />
      <Divider delay={0.9} />
      <OutcomesList />
    </div>
  );
};

export default FlowContent;
