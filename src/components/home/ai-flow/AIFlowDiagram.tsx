
import React from 'react';
import DataSourcesColumn from './DataSourcesColumn';
import AIEngineColumn from './AIEngineColumn';
import SolutionsBenefitsColumn from './SolutionsBenefitsColumn';
import ParticleEffect from './ParticleEffect';

const AIFlowDiagram = () => {
  return (
    <div className="container-ai-flow">
      <h2 className="title-ai-flow">Akeno Health AI: Transforming Healthcare with AI-Powered Insights</h2>
      
      <div id="diagram" className="three-column-layout">
        {/* Left Column: Data Sources (Inputs) */}
        <DataSourcesColumn />
        
        {/* Middle Column: Akeno AI Engine (Processing Layer) */}
        <AIEngineColumn />
        
        {/* Right Column: Solutions & Benefits (Outputs) */}
        <SolutionsBenefitsColumn />
      </div>
      
      {/* Add particle effects to all nodes */}
      <ParticleEffect selector=".node" />
    </div>
  );
};

export default AIFlowDiagram;
