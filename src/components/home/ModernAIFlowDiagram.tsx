
import React from 'react';
import { 
  Database, 
  FileText, 
  Dna, 
  Activity, 
  Brain, 
  HeartPulse, 
  LineChart,
  BarChart4,
  TrendingUp
} from 'lucide-react';

const ModernAIFlowDiagram: React.FC = () => {
  const dataSources = [
    { 
      icon: <Database size={24} color="#5bbeff" />, 
      name: "EHR Integration", 
      description: "Clinical records, lab results, and medical history" 
    },
    { 
      icon: <Dna size={24} color="#5bbeff" />, 
      name: "Multi-Omics", 
      description: "Genomic, proteomic, and metabolomic data" 
    },
    { 
      icon: <Activity size={24} color="#5bbeff" />, 
      name: "Edge AI & IoT", 
      description: "Wearables, sensors, and remote monitoring devices" 
    },
    { 
      icon: <FileText size={24} color="#5bbeff" />, 
      name: "Imaging AI", 
      description: "MRI, CT scans, x-rays, and ultrasounds" 
    },
    { 
      icon: <Brain size={24} color="#5bbeff" />, 
      name: "Behavioral Health", 
      description: "Mental health, cognitive functions, and lifestyle" 
    }
  ];

  const healthOutcomes = [
    {
      icon: <BarChart4 size={24} color="#5bbeff" />,
      title: "Digital Twin AI",
      description: "Personalized health simulation for precision medicine"
    },
    {
      icon: <LineChart size={24} color="#5bbeff" />,
      title: "Predictive Dashboard",
      description: "Early warning system highlighting potential health risks"
    },
    {
      icon: <TrendingUp size={24} color="#5bbeff" />,
      title: "Risk Forecasts",
      description: "Advanced risk stratification and prevention strategies"
    },
    {
      icon: <HeartPulse size={24} color="#5bbeff" />,
      title: "Real-Time Monitoring",
      description: "Continuous health tracking with intelligent alerts"
    }
  ];

  return (
    <div className="modern-flow-container">
      <h2 className="modern-flow-title">Bridging Data, Intelligence, and Care</h2>
      <p className="modern-flow-subtitle">for a Healthier Tomorrow</p>
      
      <div className="modern-flow-wrapper">
        {/* Data Sources Section with animated pulse dots */}
        <div className="modern-flow-section">
          <h3 className="modern-section-title">Health Data Sources</h3>
          
          {dataSources.map((source, index) => (
            <div key={index} className="data-source">
              <div className="data-icon">
                {source.icon}
              </div>
              <div className="data-content">
                <div className="data-text">{source.name}</div>
                <div className="data-description">{source.description}</div>
              </div>
              <div className="data-pulse-container">
                <div className="data-pulse-dot" style={{animationDelay: `${index * 0.2}s`}}></div>
                <div className="data-pulse-dot" style={{animationDelay: `${(index * 0.2) + 0.3}s`}}></div>
                <div className="data-pulse-dot" style={{animationDelay: `${(index * 0.2) + 0.6}s`}}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Akeno AI Engine Section - glowing, beating circle */}
        <div className="modern-flow-section">
          <div className="akeno-engine-container">
            <div className="engine-pulse"></div>
            <div className="engine-pulse"></div>
            <div className="engine-pulse"></div>
            <div className="akeno-engine">
              <div className="engine-text">Akeno AI Engine</div>
            </div>
            <div className="engine-glow"></div>
          </div>
        </div>
        
        {/* Health Outcomes Section with animated bar graphs */}
        <div className="modern-flow-section">
          <h3 className="modern-section-title">AI Healthcare Solutions</h3>
          
          {healthOutcomes.map((outcome, index) => (
            <div key={index} className="health-outcome">
              <div className="outcome-header">
                <div className="outcome-icon">{outcome.icon}</div>
                <div className="health-title">{outcome.title}</div>
              </div>
              <div className="health-description">{outcome.description}</div>
              <div className="analytics-bars-container">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="analytics-bar" 
                    style={{
                      height: `${20 + Math.floor(Math.random() * 60)}%`,
                      animationDelay: `${(i * 0.2) + (index * 0.1)}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernAIFlowDiagram;
