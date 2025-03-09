
import React from 'react';
import DiagramHeader from './flow-diagram/DiagramHeader';
import FlowDiagramContent from './flow-diagram/FlowDiagramContent';

const AkenoServiceFlowDiagram = () => {
  return (
    <div className="w-full py-16 px-4 max-w-6xl mx-auto bg-gradient-to-b from-white to-[#F1F0FB]/30">
      <DiagramHeader />
      <FlowDiagramContent />
    </div>
  );
};

export default AkenoServiceFlowDiagram;
