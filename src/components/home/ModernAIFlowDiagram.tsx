
import React, { useEffect } from 'react';
import { 
  Watch, 
  Dna, 
  Brain, 
  Eye,
  FlaskConical,
  Target,
  BarChart4,
  Sparkles,
  Cable,
  FileText
} from 'lucide-react';

const ModernAIFlowDiagram: React.FC = () => {
  const dataSources = [
    { 
      icon: <Watch size={28} className="text-cyan-400" />, 
      name: "Wearable Data", 
      description: "Real-time Monitoring" 
    },
    { 
      icon: <Dna size={28} className="text-cyan-400" />, 
      name: "Genomic Data", 
      description: "Molecular Analysis" 
    },
    { 
      icon: <Brain size={28} className="text-cyan-400" />, 
      name: "Cognitive Health", 
      description: "Mental Health Metrics" 
    },
    { 
      icon: <Eye size={28} className="text-cyan-400" />, 
      name: "Medical Imaging", 
      description: "Visual Diagnostics" 
    },
    { 
      icon: <FileText size={28} className="text-cyan-400" />, 
      name: "Clinical Records", 
      description: "Patient History" 
    },
  ];

  const aiCapabilities = [
    {
      icon: <Target size={22} className="text-cyan-400" />,
      title: "Predictive Analytics",
      color: "text-cyan-400",
      connectTo: "bg-cyan-400"
    },
    {
      icon: <Brain size={22} className="text-blue-400" />,
      title: "Diagnostic Intelligence",
      color: "text-blue-400",
      connectTo: "bg-blue-400"
    },
    {
      icon: <Cable size={22} className="text-indigo-400" />,
      title: "Clinical Decision",
      color: "text-indigo-400",
      connectTo: "bg-indigo-400"
    },
    {
      icon: <FlaskConical size={22} className="text-violet-400" />,
      title: "Research & Discovery",
      color: "text-violet-400",
      connectTo: "bg-violet-400"
    }
  ];

  const systemBenefits = [
    {
      title: "Real Time Health",
      value: 65,
      color: "bg-cyan-400"
    },
    {
      title: "Precision Medicine",
      value: 75,
      color: "bg-blue-400"
    },
    {
      title: "Smart Healthcare",
      value: 85,
      color: "bg-indigo-400"
    },
    {
      title: "Smart R&D",
      value: 95,
      color: "bg-violet-400"
    },
    {
      title: "Accelerated R&D",
      value: 100,
      color: "bg-purple-400"
    }
  ];

  // Create connections between AI capabilities and benefit bars
  useEffect(() => {
    // Clear any existing connections
    const existingConnections = document.querySelectorAll('.capability-to-benefit-connection');
    existingConnections.forEach(conn => conn.remove());
    
    // Create new connections with a slight delay to ensure elements are rendered
    setTimeout(() => {
      aiCapabilities.forEach((capability, index) => {
        const capabilityElement = document.querySelector(`.ai-capability-card:nth-child(${index + 1})`);
        const benefitElement = document.querySelector(`.benefit-item .benefit-bar.${capability.connectTo}`);
        
        if (capabilityElement && benefitElement) {
          const capRect = capabilityElement.getBoundingClientRect();
          const benefitRect = benefitElement.getBoundingClientRect();
          
          const connection = document.createElement('div');
          connection.className = `capability-to-benefit-connection ${capability.color}`;
          document.querySelector('.modern-flow-diagram').appendChild(connection);
          
          // Position and size the connection
          const startX = capRect.right;
          const startY = capRect.top + capRect.height / 2;
          const endX = benefitRect.left;
          const endY = benefitRect.top + benefitRect.height / 2;
          
          const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
          const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
          
          connection.style.width = `${length}px`;
          connection.style.left = `${startX}px`;
          connection.style.top = `${startY}px`;
          connection.style.transform = `rotate(${angle}deg)`;
          connection.style.opacity = '1';
        }
      });
    }, 500);
    
    // Cleanup function
    return () => {
      const connections = document.querySelectorAll('.capability-to-benefit-connection');
      connections.forEach(conn => conn.remove());
    };
  }, []);

  return (
    <div className="modern-flow-container">
      <h2 className="modern-flow-title">Bridging Data, Intelligence, and Care</h2>
      
      <div className="modern-flow-diagram">
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
                      <div key={i} className="flow-dot" style={{animationDelay: `${i * 0.1}s`}}></div>
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
        <div className="flow-column akeno-engine">
          {/* AI Capabilities above the engine */}
          <div className="ai-capabilities-container">
            {aiCapabilities.slice(0, 2).map((capability, index) => (
              <div key={index} className={`ai-capability-card ${capability.color}`}>
                <span className={`capability-icon ${capability.color}`}>{capability.icon}</span>
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
              <div key={index} className={`ai-capability-card ${capability.color}`}>
                <span className={`capability-icon ${capability.color}`}>{capability.icon}</span>
                <span className="capability-title">{capability.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column - System Benefits */}
        <div className="flow-column system-benefits">
          <h2 className="column-title">System-Wide Benefits</h2>
          
          <div className="benefits-chart">
            {systemBenefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-bar-container">
                  <div 
                    className={`benefit-bar ${benefit.color}`} 
                    style={{height: `${benefit.value}%`}}
                  ></div>
                </div>
                <div className="benefit-label">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernAIFlowDiagram;
