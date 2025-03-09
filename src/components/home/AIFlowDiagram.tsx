
import React from 'react';
import { 
  ChevronRight, 
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
import '@/styles/ai-flow-diagram.css';

const AIFlowDiagram = () => {
  return (
    <div className="container-ai-flow">
      <h2 className="title-ai-flow">Transforming Healthcare with AI-Powered Insights</h2>
      
      <div className="flow-diagram single-layer">
        {/* Floating connections - horizontal top */}
        <div className="floating-connection floating-connection-top">
          <div className="flow-particle"></div>
          <div className="flow-particle"></div>
          <div className="flow-particle"></div>
        </div>
        
        {/* Floating connections - horizontal middle */}
        <div className="floating-connection floating-connection-middle">
          <div className="flow-particle"></div>
          <div className="flow-particle"></div>
          <div className="flow-particle"></div>
        </div>
        
        {/* Floating connections - horizontal bottom */}
        <div className="floating-connection floating-connection-bottom">
          <div className="flow-particle"></div>
          <div className="flow-particle"></div>
          <div className="flow-particle"></div>
        </div>
        
        {/* Floating connection - vertical */}
        <div className="floating-connection floating-connection-vertical">
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
        </div>
        
        {/* Data Sources */}
        <div className="flow-column">
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
        
        {/* Flow Connector with Animation */}
        <div className="flow-connector">
          <div className="flow-animation">
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
            <ChevronRight className="flow-arrow-end" />
          </div>
        </div>
        
        {/* Akeno AI Engine */}
        <div className="flow-column">
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
        
        {/* Flow Connector with Animation */}
        <div className="flow-connector">
          <div className="flow-animation">
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
            <ChevronRight className="flow-arrow-end" />
          </div>
        </div>
        
        {/* Healthcare AI Solutions */}
        <div className="flow-column">
          <h3 className="column-title">Healthcare AI Solutions</h3>
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
        </div>
        
        {/* Flow Connector with Animation */}
        <div className="flow-connector">
          <div className="flow-animation">
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
            <ChevronRight className="flow-arrow-end" />
          </div>
        </div>
        
        {/* System-Wide Benefits */}
        <div className="flow-column">
          <h3 className="column-title">System-Wide Benefits</h3>
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
  );
};

export default AIFlowDiagram;
