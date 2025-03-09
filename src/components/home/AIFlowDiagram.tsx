
import React from 'react';
import { 
  ArrowRight, 
  Watch, 
  Clipboard, 
  Dna, 
  Microscope, 
  Apple, 
  Brain, 
  User, 
  Hospital, 
  Pill, 
  Clock, 
  Award, 
  LayoutDashboard, 
  Rocket
} from 'lucide-react';

const AIFlowDiagram = () => {
  return (
    <div className="container-ai-flow">
      <h2 className="title-ai-flow">Akeno Health AI: Transforming Healthcare with AI-Powered Insights</h2>
      
      <div className="flow-diagram">
        {/* Left Column: Data Sources */}
        <div className="flow-column data-sources">
          <h3 className="column-title">Data Sources</h3>
          <div className="data-source-items">
            <div className="flow-item-card">
              <Watch className="item-icon-card" />
              <div className="item-title-card">Edge AI & IoT</div>
              <div className="item-desc-card">Smartwatches, ECG</div>
            </div>
            
            <div className="flow-item-card">
              <Clipboard className="item-icon-card" />
              <div className="item-title-card">EHR Integration</div>
              <div className="item-desc-card">FHIR, DICOM</div>
            </div>
            
            <div className="flow-item-card">
              <Dna className="item-icon-card" />
              <div className="item-title-card">Multi-Omics</div>
              <div className="item-desc-card">NGS, Proteomics</div>
            </div>
            
            <div className="flow-item-card">
              <Microscope className="item-icon-card" />
              <div className="item-title-card">AI Imaging</div>
              <div className="item-desc-card">Radiology AI</div>
            </div>
            
            <div className="flow-item-card">
              <Apple className="item-icon-card" />
              <div className="item-title-card">Behavioral</div>
              <div className="item-desc-card">NLP, Mental Health</div>
            </div>
          </div>
        </div>
        
        {/* Arrow Connectors */}
        <div className="flow-connector">
          <ArrowRight className="flow-arrow" />
        </div>
        
        {/* Middle Column: Akeno AI Engine */}
        <div className="flow-column ai-engine">
          <h3 className="column-title">Akeno AI Engine</h3>
          <div className="engine-container-card">
            <Brain className="engine-icon-card" />
            <div className="engine-modules-card">
              <div className="engine-module-card">
                <div className="module-title-card">Predictive Analytics</div>
                <div className="module-desc-card">Risk Assessment</div>
              </div>
              
              <div className="engine-module-card">
                <div className="module-title-card">Diagnostic Intelligence</div>
                <div className="module-desc-card">Medical Imaging</div>
              </div>
              
              <div className="engine-module-card">
                <div className="module-title-card">Clinical Decision</div>
                <div className="module-desc-card">Treatment Optimization</div>
              </div>
              
              <div className="engine-module-card">
                <div className="module-title-card">Research & Discovery</div>
                <div className="module-desc-card">Drug Development</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Arrow Connectors */}
        <div className="flow-connector">
          <ArrowRight className="flow-arrow" />
        </div>
        
        {/* Right Column: AI Solutions & Outcomes */}
        <div className="flow-column solutions">
          <h3 className="column-title">AI Solutions & Outcomes</h3>
          
          <div className="solutions-container-card">
            <h4 className="solutions-subtitle-card">Healthcare AI Solutions</h4>
            <div className="solutions-grid">
              <div className="flow-item-card">
                <User className="item-icon-card" />
                <div className="item-title-card">Virtual Health AI</div>
                <div className="item-desc-card">LLMs, Care</div>
              </div>
              
              <div className="flow-item-card">
                <User className="item-icon-card" />
                <div className="item-title-card">Digital Twin AI</div>
                <div className="item-desc-card">Simulation</div>
              </div>
              
              <div className="flow-item-card">
                <Hospital className="item-icon-card" />
                <div className="item-title-card">Workflow AI</div>
                <div className="item-desc-card">Optimization</div>
              </div>
              
              <div className="flow-item-card">
                <Pill className="item-icon-card" />
                <div className="item-title-card">Drug Discovery</div>
                <div className="item-desc-card">Quantum</div>
              </div>
            </div>
            
            <h4 className="solutions-subtitle-card">System-Wide Benefits</h4>
            <div className="solutions-grid">
              <div className="flow-item-card">
                <Clock className="item-icon-card" />
                <div className="item-title-card">Real-Time Health</div>
                <div className="item-desc-card">24/7 Monitoring</div>
              </div>
              
              <div className="flow-item-card">
                <Award className="item-icon-card" />
                <div className="item-title-card">Precision Medicine</div>
                <div className="item-desc-card">Personalized</div>
              </div>
              
              <div className="flow-item-card">
                <LayoutDashboard className="item-icon-card" />
                <div className="item-title-card">Smart Healthcare</div>
                <div className="item-desc-card">Workflows</div>
              </div>
              
              <div className="flow-item-card">
                <Rocket className="item-icon-card" />
                <div className="item-title-card">Accelerated R&D</div>
                <div className="item-desc-card">Discovery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFlowDiagram;
