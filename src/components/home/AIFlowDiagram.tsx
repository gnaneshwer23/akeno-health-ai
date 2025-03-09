
import React from 'react';
import '@/styles/ai-flow-diagram.css';
import DataSourcesColumn from './ai-flow/DataSourcesColumn';
import AkenoAIEngine from './ai-flow/AkenoAIEngine';
import HealthcareAISolutions from './ai-flow/HealthcareAISolutions';
import SystemWideBenefits from './ai-flow/SystemWideBenefits';
import FlowConnector from './ai-flow/FlowConnector';
import FloatingConnections from './ai-flow/FloatingConnections';

const AIFlowDiagram = () => {
  return (
    <div className="container-ai-flow">
      <h2 className="title-ai-flow">AI-Powered Health Intelligence: The Akeno Ecosystem</h2>
      
      <div className="flow-diagram single-layer">
        {/* Floating connection elements */}
        <FloatingConnections />
        
        {/* Data Sources */}
        <DataSourcesColumn />
        
        {/* Flow Connector with Animation */}
        <FlowConnector />
        
        {/* Akeno AI Engine */}
        <AkenoAIEngine />
        
        {/* Flow Connector with Animation */}
        <FlowConnector />
        
        {/* Healthcare AI Solutions */}
        <HealthcareAISolutions />
        
        {/* Flow Connector with Animation */}
        <FlowConnector />
        
        {/* System-Wide Benefits */}
        <SystemWideBenefits />
      </div>
    </div>
  );
};

export default AIFlowDiagram;
