
import React from 'react';
import GradientDefinitions from './GradientDefinitions';
import DataSourcesSection from './sections/DataSourcesSection';
import AIModulesSection from './sections/AIModulesSection';
import StakeholdersSection from './sections/StakeholdersSection';
import OutcomesSection from './sections/OutcomesSection';
import ConnectionsSection from './sections/ConnectionsSection';

const FlowDiagramContent = () => {
  return (
    <div className="relative min-h-[580px] w-full">
      {/* Data Sources - Left Side */}
      <DataSourcesSection />

      {/* AI Modules - Center */}
      <AIModulesSection />
      
      {/* Stakeholders - Right Center */}
      <StakeholdersSection />

      {/* Outcomes - Far Right */}
      <OutcomesSection />

      {/* All Connections */}
      <ConnectionsSection />

      {/* SVG Definitions */}
      <GradientDefinitions />
    </div>
  );
};

export default FlowDiagramContent;
