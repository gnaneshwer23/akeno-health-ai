import React from 'react';
import { Watch, Dna, Brain, Eye, FlaskConical, Target, BarChart4, Sparkles, Cable, FileText } from 'lucide-react';
const ModernAIFlowDiagram: React.FC = () => {
  const dataSources = [{
    icon: <Watch size={28} className="text-cyan-400" />,
    name: "Wearable Data",
    description: "Real-time Monitoring"
  }, {
    icon: <Dna size={28} className="text-cyan-400" />,
    name: "Genomic Data",
    description: "Molecular Analysis"
  }, {
    icon: <Brain size={28} className="text-cyan-400" />,
    name: "Cognitive Health",
    description: "Mental Health Metrics"
  }, {
    icon: <Eye size={28} className="text-cyan-400" />,
    name: "Medical Imaging",
    description: "Visual Diagnostics"
  }, {
    icon: <FileText size={28} className="text-cyan-400" />,
    name: "Clinical Records",
    description: "Patient History"
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
  const systemBenefits = [{
    title: "Disease Prediction",
    value: 58,
    color: "bg-gradient-to-t from-teal-600 to-teal-300"
  }, {
    title: "Precision Medicine",
    value: 72,
    color: "bg-gradient-to-t from-blue-600 to-blue-300"
  }, {
    title: "Drug Discovery",
    value: 85,
    color: "bg-gradient-to-t from-indigo-600 to-indigo-400"
  }, {
    title: "AI Clinical Decisions",
    value: 92,
    color: "bg-gradient-to-t from-violet-600 to-violet-300"
  }, {
    title: "Data-Driven Healthcare",
    value: 78,
    color: "bg-gradient-to-t from-purple-600 to-fuchsia-300"
  }];
  return <div className="modern-flow-container">
      <h2 className="modern-flow-title">Bridging Data, Intelligence, and Care</h2>
      
      <div className="modern-flow-diagram">
        {/* Left Column - Data Sources */}
        <div className="flow-column data-sources">
          <h2 className="column-title">Data Sources</h2>
          
          <div className="data-sources-list">
            {dataSources.map((source, index) => <div key={index} className="data-source-item">
                <div className="data-source-icon-container">
                  <div className="data-source-icon">{source.icon}</div>
                  <div className="flow-connection-dots">
                    {Array(12).fill(0).map((_, i) => <div key={i} className="flow-dot" style={{
                  animationDelay: `${i * 0.1}s`
                }}></div>)}
                  </div>
                </div>
                <div className="data-source-content">
                  <div className="data-source-name">{source.name}</div>
                  <div className="data-source-description">{source.description}</div>
                </div>
              </div>)}
          </div>
        </div>
        
        {/* Middle Column - Akeno AI Engine */}
        <div className="flow-column akeno-engine rounded-none mx-[100px] py-[50px] px-0 bg-slate-950">
          {/* AI Capabilities above the engine */}
          <div className="ai-capabilities-container">
            {aiCapabilities.slice(0, 2).map((capability, index) => <div key={index} className="ai-capability-card">
                <span className="capability-icon">{capability.icon}</span>
                <span className="capability-title">{capability.title}</span>
              </div>)}
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
            {aiCapabilities.slice(2, 4).map((capability, index) => <div key={index} className="ai-capability-card">
                <span className="capability-icon">{capability.icon}</span>
                <span className="capability-title">{capability.title}</span>
              </div>)}
          </div>
        </div>
        
        {/* Right Column - System Benefits */}
        <div className="flow-column system-benefits px-[25px]">
          <h2 className="column-title">System-Wide Benefits</h2>
          
          <div className="benefits-chart mb-[80px] mt-[30px] px-[30px] py-[30px] my-0 mx-0">
            {systemBenefits.map((benefit, index) => <div key={index} className="benefit-item">
                <div className="benefit-bar-container bg-green-300 px-0 my-[3px] mx-0 py-0">
                  <div style={{
                height: `${benefit.value}%`
              }} className="px-[30px]"></div>
                  <div className="benefit-label my-[6px] py-[9px] px-0 mx-0">{benefit.title}</div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ModernAIFlowDiagram;