
import React from 'react';
import { Watch, Dna, Brain, Eye, FlaskConical, Target, BarChart4, Sparkles, Cable, FileText } from 'lucide-react';

const ModernAIFlowDiagram: React.FC = () => {
  const dataSources = [{
    icon: <Watch size={28} className="text-cyan-400" />,
    name: "Wearable Data",
    description: "Real-time Monitoring",
    color: "from-cyan-600 to-cyan-300"
  }, {
    icon: <Dna size={28} className="text-purple-400" />,
    name: "Genomic Data",
    description: "Molecular Analysis",
    color: "from-purple-600 to-purple-300"
  }, {
    icon: <Brain size={28} className="text-blue-400" />,
    name: "Cognitive Health",
    description: "Mental Health Metrics",
    color: "from-blue-600 to-blue-300"
  }, {
    icon: <Eye size={28} className="text-rose-400" />,
    name: "Medical Imaging",
    description: "Visual Diagnostics",
    color: "from-rose-500 to-rose-300"
  }, {
    icon: <FileText size={28} className="text-amber-400" />,
    name: "Clinical Records",
    description: "Patient History",
    color: "from-amber-600 to-amber-300"
  }];

  const aiCapabilities = [{
    icon: <Target size={22} className="text-purple-300" />,
    title: "Predictive Analytics"
  }, {
    icon: <Brain size={22} className="text-purple-300" />,
    title: "Diagnostic Intelligence"
  }, {
    icon: <Cable size={22} className="text-purple-300" />,
    title: "Clinical Decision"
  }, {
    icon: <FlaskConical size={22} className="text-purple-300" />,
    title: "Research & Discovery"
  }];

  // Updated benefit titles to match the image
  const systemBenefits = [{
    title: "Disease Prediction",
    value: 58,
    color: "bg-gradient-to-t from-cyan-600 to-cyan-300" // Matches Wearable Data
  }, {
    title: "Precision Medicine",
    value: 73,
    color: "bg-gradient-to-t from-purple-600 to-purple-300" // Matches Genomic Data
  }, {
    title: "Drug Discovery",
    value: 80,
    color: "bg-gradient-to-t from-blue-600 to-blue-300" // Matches Cognitive Health
  }, {
    title: "AI Clinical Decisions",
    value: 65,
    color: "bg-gradient-to-t from-rose-500 to-rose-300" // Matches Medical Imaging
  }, {
    title: "Data-Driven Healthcare",
    value: 70,
    color: "bg-gradient-to-t from-amber-600 to-amber-300" // Matches Clinical Records
  }];

  return (
    <div className="modern-flow-container">
      <h2 className="modern-flow-title">Bridging Data, Intelligence, and Care</h2>
      
      <div className="modern-flow-diagram py-[5px] px-0 my-0 mx-0">
        {/* Left Column - Data Sources */}
        <div className="flow-column data-sources">
          <h2 className="column-title">Data Sources</h2>
          
          <div className="data-sources-list">
            {dataSources.map((source, index) => (
              <div key={index} className="data-source-item">
                <div className="data-source-icon-container">
                  <div className="data-source-icon">{source.icon}</div>
                  <div className="flow-connection-dots">
                    {Array(12).fill(0).map((_, i) => (
                      <div key={i} className="flow-dot" style={{
                        animationDelay: `${i * 0.1}s`
                      }}></div>
                    ))}
                  </div>
                </div>
                <div className="data-source-content">
                  <div className="data-source-name">{source.name}</div>
                  <div className="data-source-description">{source.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Middle Column - Akeno AI Engine */}
        <div className="flow-column akeno-engine rounded-none mx-[100px] py-[50px] px-0 bg-slate-950">
          {/* AI Capabilities above the engine */}
          <div className="ai-capabilities-container">
            {aiCapabilities.slice(0, 2).map((capability, index) => (
              <div key={index} className="ai-capability-card">
                <span className="capability-icon">{capability.icon}</span>
                <span className="capability-title">{capability.title}</span>
              </div>
            ))}
          </div>
          
          {/* The AI Engine */}
          <div className="akeno-engine-circle">
            <div className="engine-pulse-ring"></div>
            <div className="engine-inner">
              <div className="engine-text">Akeno AI</div>
            </div>
          </div>
          
          {/* AI Capabilities below the engine */}
          <div className="ai-capabilities-container">
            {aiCapabilities.slice(2, 4).map((capability, index) => (
              <div key={index} className="ai-capability-card">
                <span className="capability-icon">{capability.icon}</span>
                <span className="capability-title">{capability.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column - System Benefits */}
        <div className="flow-column system-benefits px-0 mx-[22px] py-[24px]">
          <h2 className="column-title">System-Wide Benefits</h2>
          
          <div className="benefits-chart my-[33px] mx-0 px-0">
            {systemBenefits.map((benefit, index) => {
              // Get the corresponding data source for this index
              const relatedSource = dataSources[index];
              return (
                <div key={index} className="benefit-item px-0 py-[5px] my-0">
                  <div className="benefit-bar-container">
                    <div 
                      className={`benefit-bar ${benefit.color}`} 
                      style={{
                        height: `${benefit.value}%`,
                        animationDelay: `${index * 0.3}s`
                      }} 
                    />
                  </div>
                  <div className="benefit-label-container">
                    <div 
                      className="benefit-label" 
                      style={{
                        color: relatedSource ? `rgb(var(--${relatedSource.name.toLowerCase().split(' ')[0]}-color, 255, 255, 255))` : '#ffffff'
                      }}
                    >
                      {benefit.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernAIFlowDiagram;
