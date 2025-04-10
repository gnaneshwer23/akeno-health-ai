
import React from 'react';
import { 
  Database, 
  FileText, 
  Dna, 
  Activity, 
  Brain, 
  HeartPulse, 
  PanelTop, 
  Shield, 
  LineChart, 
  GanttChartSquare, 
  Pill
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
      title: "Digital Twin AI",
      description: "Personalized health simulation for precision medicine and tailored interventions"
    },
    {
      title: "Predictive Dashboard",
      description: "Early warning system highlighting potential health risks before symptoms appear"
    },
    {
      title: "Risk Forecasts",
      description: "Advanced risk stratification and personalized prevention strategies"
    },
    {
      title: "Drug Discovery",
      description: "AI-accelerated pharmaceutical development and treatment optimization"
    },
    {
      title: "Real-Time Monitoring",
      description: "Continuous health tracking with intelligent alerts and actionable insights"
    }
  ];

  return (
    <div className="modern-flow-container">
      <h2 className="modern-flow-title">Bridging Data, Intelligence, and Care</h2>
      <p className="modern-flow-subtitle">for a Healthier Tomorrow</p>
      
      <div className="modern-flow-wrapper">
        {/* Data Sources Section */}
        <div className="modern-flow-section">
          <h3 className="modern-section-title">Health Data Sources</h3>
          
          {dataSources.map((source, index) => (
            <div key={index} className="data-source">
              <div className="data-icon">
                {source.icon}
              </div>
              <div>
                <div className="data-text">{source.name}</div>
                <div className="data-description">{source.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Akeno AI Engine Section */}
        <div className="modern-flow-section">
          <div className="akeno-engine-container">
            <div className="engine-pulse"></div>
            <div className="engine-pulse"></div>
            <div className="engine-pulse"></div>
            <div className="akeno-engine">
              <div className="engine-text">Akeno AI Engine</div>
            </div>
          </div>
        </div>
        
        {/* Health Outcomes Section */}
        <div className="modern-flow-section">
          <h3 className="modern-section-title">AI Healthcare Solutions</h3>
          
          {healthOutcomes.map((outcome, index) => (
            <div key={index} className="health-outcome">
              <div className="health-title">{outcome.title}</div>
              <div className="health-description">{outcome.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernAIFlowDiagram;
