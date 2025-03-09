
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
          <div className="flow-items">
            <div className="flow-item data-source">
              <Watch className="item-icon" />
              <div className="item-title">Edge AI & IoT</div>
              <div className="item-desc">Smartwatches, ECG, Glucose</div>
            </div>
            
            <div className="flow-item data-source">
              <Clipboard className="item-icon" />
              <div className="item-title">EHR Integration</div>
              <div className="item-desc">FHIR, DICOM, OpenEHR</div>
            </div>
            
            <div className="flow-item data-source">
              <Dna className="item-icon" />
              <div className="item-title">Multi-Omics Analysis</div>
              <div className="item-desc">NGS, Proteomics, PRS</div>
            </div>
            
            <div className="flow-item data-source">
              <Microscope className="item-icon" />
              <div className="item-title">AI-Enhanced Imaging</div>
              <div className="item-desc">Radiology AI, DICOM</div>
            </div>
            
            <div className="flow-item data-source">
              <Apple className="item-icon" />
              <div className="item-title">Behavioral Analytics</div>
              <div className="item-desc">NLP, Mental Health AI</div>
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
          <div className="flow-item engine-container">
            <Brain className="engine-icon" />
            <div className="engine-modules">
              <div className="engine-module">
                <div className="module-title">Predictive Analytics</div>
                <div className="module-desc">Risk Assessment & Forecasting</div>
              </div>
              
              <div className="engine-module">
                <div className="module-title">Diagnostic Intelligence</div>
                <div className="module-desc">Medical Imaging & Pathology</div>
              </div>
              
              <div className="engine-module">
                <div className="module-title">Clinical Decision Support</div>
                <div className="module-desc">Treatment Optimization & NLP</div>
              </div>
              
              <div className="engine-module">
                <div className="module-title">Research & Discovery</div>
                <div className="module-desc">Drug Development & RWE</div>
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
          <div className="solutions-container">
            <div className="solutions-section">
              <h4 className="solutions-subtitle">Healthcare AI Solutions</h4>
              <div className="flow-items">
                <div className="flow-item solution">
                  <User className="item-icon" />
                  <div className="item-title">Virtual Health AI</div>
                  <div className="item-desc">LLMs, Personalized Care</div>
                </div>
                
                <div className="flow-item solution">
                  <User className="item-icon" />
                  <div className="item-title">Digital Twin AI</div>
                  <div className="item-desc">Treatment Simulation</div>
                </div>
                
                <div className="flow-item solution">
                  <Hospital className="item-icon" />
                  <div className="item-title">Workflow AI</div>
                  <div className="item-desc">Resource Optimization</div>
                </div>
                
                <div className="flow-item solution">
                  <Pill className="item-icon" />
                  <div className="item-title">Drug Discovery AI</div>
                  <div className="item-desc">Quantum Computing</div>
                </div>
              </div>
            </div>
            
            <div className="solutions-section">
              <h4 className="solutions-subtitle">System-Wide Benefits</h4>
              <div className="flow-items">
                <div className="flow-item benefit">
                  <Clock className="item-icon" />
                  <div className="item-title">Real-Time Health AI</div>
                  <div className="item-desc">24/7 Monitoring & Insights</div>
                </div>
                
                <div className="flow-item benefit">
                  <Award className="item-icon" />
                  <div className="item-title">Precision Medicine</div>
                  <div className="item-desc">Personalized Treatment</div>
                </div>
                
                <div className="flow-item benefit">
                  <LayoutDashboard className="item-icon" />
                  <div className="item-title">Smart Healthcare</div>
                  <div className="item-desc">Automated Workflows</div>
                </div>
                
                <div className="flow-item benefit">
                  <Rocket className="item-icon" />
                  <div className="item-title">Accelerated R&D</div>
                  <div className="item-desc">Quantum-Powered Discovery</div>
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
