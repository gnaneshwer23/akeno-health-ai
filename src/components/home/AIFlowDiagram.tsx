
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
          <div className="flow-items-compact">
            <div className="flow-item-small data-source">
              <Watch className="item-icon-small" />
              <div className="item-title-small">Edge AI & IoT</div>
              <div className="item-desc-small">Smartwatches, ECG</div>
            </div>
            
            <div className="flow-item-small data-source">
              <Clipboard className="item-icon-small" />
              <div className="item-title-small">EHR Integration</div>
              <div className="item-desc-small">FHIR, DICOM</div>
            </div>
            
            <div className="flow-item-small data-source">
              <Dna className="item-icon-small" />
              <div className="item-title-small">Multi-Omics</div>
              <div className="item-desc-small">NGS, Proteomics</div>
            </div>
            
            <div className="flow-item-small data-source">
              <Microscope className="item-icon-small" />
              <div className="item-title-small">AI Imaging</div>
              <div className="item-desc-small">Radiology AI</div>
            </div>
            
            <div className="flow-item-small data-source">
              <Apple className="item-icon-small" />
              <div className="item-title-small">Behavioral</div>
              <div className="item-desc-small">NLP, Mental Health</div>
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
          <div className="flow-item-small engine-container">
            <Brain className="engine-icon-small" />
            <div className="engine-modules-compact">
              <div className="engine-module-small">
                <div className="module-title-small">Predictive Analytics</div>
                <div className="module-desc-small">Risk Assessment</div>
              </div>
              
              <div className="engine-module-small">
                <div className="module-title-small">Diagnostic Intelligence</div>
                <div className="module-desc-small">Medical Imaging</div>
              </div>
              
              <div className="engine-module-small">
                <div className="module-title-small">Clinical Decision</div>
                <div className="module-desc-small">Treatment Optimization</div>
              </div>
              
              <div className="engine-module-small">
                <div className="module-title-small">Research & Discovery</div>
                <div className="module-desc-small">Drug Development</div>
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
          <div className="solutions-container-compact">
            <div className="solutions-section">
              <h4 className="solutions-subtitle-small">Healthcare AI Solutions</h4>
              <div className="flow-items-row">
                <div className="flow-item-small solution">
                  <User className="item-icon-small" />
                  <div className="item-title-small">Virtual Health AI</div>
                  <div className="item-desc-small">LLMs, Care</div>
                </div>
                
                <div className="flow-item-small solution">
                  <User className="item-icon-small" />
                  <div className="item-title-small">Digital Twin AI</div>
                  <div className="item-desc-small">Simulation</div>
                </div>
                
                <div className="flow-item-small solution">
                  <Hospital className="item-icon-small" />
                  <div className="item-title-small">Workflow AI</div>
                  <div className="item-desc-small">Optimization</div>
                </div>
                
                <div className="flow-item-small solution">
                  <Pill className="item-icon-small" />
                  <div className="item-title-small">Drug Discovery</div>
                  <div className="item-desc-small">Quantum</div>
                </div>
              </div>
            </div>
            
            <div className="solutions-section">
              <h4 className="solutions-subtitle-small">System-Wide Benefits</h4>
              <div className="flow-items-row">
                <div className="flow-item-small benefit">
                  <Clock className="item-icon-small" />
                  <div className="item-title-small">Real-Time Health</div>
                  <div className="item-desc-small">24/7 Monitoring</div>
                </div>
                
                <div className="flow-item-small benefit">
                  <Award className="item-icon-small" />
                  <div className="item-title-small">Precision Medicine</div>
                  <div className="item-desc-small">Personalized</div>
                </div>
                
                <div className="flow-item-small benefit">
                  <LayoutDashboard className="item-icon-small" />
                  <div className="item-title-small">Smart Healthcare</div>
                  <div className="item-desc-small">Workflows</div>
                </div>
                
                <div className="flow-item-small benefit">
                  <Rocket className="item-icon-small" />
                  <div className="item-title-small">Accelerated R&D</div>
                  <div className="item-desc-small">Discovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFlowDiagram;
