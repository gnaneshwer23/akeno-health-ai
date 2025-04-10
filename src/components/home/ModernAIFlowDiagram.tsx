
import React from 'react';
import { 
  FileText, 
  Dna, 
  Activity, 
  Brain, 
  HeartPulse, 
  LineChart,
  BarChart4,
  TrendingUp,
  Search,
  Pill,
  LockKeyhole
} from 'lucide-react';

const ModernAIFlowDiagram: React.FC = () => {
  const dataSources = [
    { 
      icon: <FileText size={24} color="#5bbeff" />, 
      name: "EHR Integration", 
      description: "Clinical Records & Notes" 
    },
    { 
      icon: <Dna size={24} color="#5bbeff" />, 
      name: "Multi-Omics", 
      description: "Genomic & Molecular Data" 
    },
    { 
      icon: <LockKeyhole size={24} color="#5bbeff" />, 
      name: "Edge AI & IoT", 
      description: "Real-time Monitoring" 
    },
    { 
      icon: <FileText size={24} color="#5bbeff" />, 
      name: "Imaging AI", 
      description: "Medical Imaging Analysis" 
    },
    { 
      icon: <Brain size={24} color="#5bbeff" />, 
      name: "Behavioral Health", 
      description: "Mental Health Metrics" 
    }
  ];

  const healthOutcomes = [
    {
      icon: <HeartPulse size={24} color="#b45cff" />,
      title: "Digital Twin AI",
      description: "Personalized Health Model"
    },
    {
      icon: <BarChart4 size={24} color="#b45cff" />,
      title: "Predictive Dashboard",
      description: "Health Forecasting"
    },
    {
      icon: <Search size={24} color="#b45cff" />,
      title: "Risk Forecasts",
      description: "Early Warning System"
    },
    {
      icon: <Pill size={24} color="#b45cff" />,
      title: "Drug Discovery",
      description: "Treatment Optimization"
    },
    {
      icon: <Activity size={24} color="#b45cff" />,
      title: "Real-Time Monitoring",
      description: "Continuous Assessment"
    }
  ];

  return (
    <div className="modern-flow-container">
      <h2 className="modern-flow-title">Bridging Data, Intelligence, and Care</h2>
      <div className="modern-flow-wrapper">
        {/* Data Sources Section - Left Side */}
        <div className="modern-flow-section">
          <h2 className="modern-section-title">Data Sources</h2>
          
          {dataSources.map((source, index) => (
            <div key={index} className="data-source">
              <div className="data-icon">
                {source.icon}
                <div className="pulse-dots">
                  <div className="pulse-dot"></div>
                  <div className="pulse-dot"></div>
                  <div className="pulse-dot"></div>
                </div>
              </div>
              <div className="data-content">
                <div className="data-gradient left-gradient"></div>
                <div className="data-text">{source.name}</div>
                <div className="data-description">{source.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Akeno AI Engine Section - Center */}
        <div className="modern-flow-section">
          <div className="akeno-engine-container">
            <div className="engine-outer-ring"></div>
            <div className="akeno-engine">
              <h3>Akeno AI</h3>
              <p>Healthcare Engine</p>
              <div className="engine-glow"></div>
            </div>
          </div>
        </div>
        
        {/* Health Insights Section - Right Side */}
        <div className="modern-flow-section">
          <h2 className="modern-section-title">Insights</h2>
          
          {healthOutcomes.map((outcome, index) => (
            <div key={index} className="health-outcome">
              <div className="outcome-content">
                <div className="outcome-gradient right-gradient"></div>
                <div className="health-title">{outcome.title}</div>
                <div className="health-description">{outcome.description}</div>
              </div>
              <div className="outcome-icon">
                {outcome.icon}
                <div className="bar-graph-container">
                  <div className="bar-graph bar1"></div>
                  <div className="bar-graph bar2"></div>
                  <div className="bar-graph bar3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernAIFlowDiagram;
