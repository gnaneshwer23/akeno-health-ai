
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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 relative">
        <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent animate-pulse-slow">
          Bridging Data, Intelligence, and Care
        </span>
        <span className="block text-health-dark"> for a Healthier Tomorrow</span>
        <div className="h-1 w-36 mx-auto mt-4 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
      </h2>
      
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
