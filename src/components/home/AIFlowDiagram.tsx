
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const AIFlowDiagram = () => {
  const nodesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = nodesRef.current?.querySelectorAll('.node');
    
    if (nodes) {
      nodes.forEach((node, index) => {
        const typedNode = node as HTMLElement;
        typedNode.style.animationDelay = `${index * 0.1}s`;

        // Add particle effects
        const interval = setInterval(() => {
          if (Math.random() < 0.3) { // 30% chance to create a particle
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position along the bottom of the node
            const x = Math.random() * typedNode.offsetWidth;
            particle.style.left = `${x}px`;
            particle.style.bottom = '0';
            
            // Random duration between 2-4 seconds
            const duration = 2 + Math.random() * 2;
            particle.style.animationDuration = `${duration}s`;
            
            typedNode.appendChild(particle);
            setTimeout(() => particle.remove(), duration * 1000);
          }
        }, 500);

        return () => clearInterval(interval);
      });
    }
  }, []);

  return (
    <div className="container-ai-flow">
      <h2 className="title-ai-flow">Akeno Health AI: Transforming Healthcare with AI-Powered Insights</h2>
      
      <div id="diagram" ref={nodesRef} className="three-column-layout">
        {/* Left Column: Data Sources (Inputs) */}
        <div className="column data-sources">
          <h3 className="column-title">Data Sources</h3>
          
          <div className="node data-source wearables">
            <div className="icon">⌚</div>
            <div>Edge AI & IoT</div>
            <small>Smartwatches, ECG, Glucose</small>
            <div className="connector">
              <ArrowRight className="arrow-icon" size={16} />
            </div>
          </div>
          
          <div className="node data-source ehr">
            <div className="icon">📋</div>
            <div>EHR Integration</div>
            <small>FHIR, DICOM, OpenEHR</small>
            <div className="connector">
              <ArrowRight className="arrow-icon" size={16} />
            </div>
          </div>
          
          <div className="node data-source genomics">
            <div className="icon">🧬</div>
            <div>Multi-Omics Analysis</div>
            <small>NGS, Proteomics, PRS</small>
            <div className="connector">
              <ArrowRight className="arrow-icon" size={16} />
            </div>
          </div>
          
          <div className="node data-source imaging">
            <div className="icon">🔬</div>
            <div>AI-Enhanced Imaging</div>
            <small>Radiology AI, DICOM</small>
            <div className="connector">
              <ArrowRight className="arrow-icon" size={16} />
            </div>
          </div>
        </div>
        
        {/* Middle Column: Akeno AI Engine (Processing Layer) */}
        <div className="column ai-engine-column">
          <h3 className="column-title">Processing Layer</h3>
          
          <div className="ai-container">
            <div className="ai-title">
              <span className="icon">🧠</span>
              <span className="text">Akeno AI Engine</span>
            </div>
            
            <div className="node ai-engine predictive">
              <div className="icon">🔮</div>
              <div>Predictive Analytics</div>
              <small>Risk Assessment & Forecasting</small>
            </div>
            
            <div className="node ai-engine diagnostic">
              <div className="icon">⚕️</div>
              <div>Diagnostic Intelligence</div>
              <small>Medical Imaging & Pathology</small>
            </div>
            
            <div className="node ai-engine clinical">
              <div className="icon">📊</div>
              <div>Clinical Decision Support</div>
              <small>Treatment Optimization & NLP</small>
            </div>
          </div>
        </div>
        
        {/* Right Column: Solutions & Benefits (Outputs) */}
        <div className="column solutions-benefits">
          <h3 className="column-title">AI Solutions & Benefits</h3>
          
          <div className="solutions-section">
            <div className="section-title">Healthcare AI Solutions</div>
            
            <div className="node solution virtual-health">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div className="icon">👤</div>
              <div>Virtual Health AI</div>
              <small>LLMs, Personalized Care</small>
            </div>
            
            <div className="node solution digital-twin">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div className="icon">👨‍⚕️</div>
              <div>Digital Twin AI</div>
              <small>Treatment Simulation</small>
            </div>
            
            <div className="node solution workflow">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div className="icon">🏥</div>
              <div>Workflow AI</div>
              <small>Resource Optimization</small>
            </div>
            
            <div className="node solution drug-discovery">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div className="icon">💊</div>
              <div>Drug Discovery AI</div>
              <small>Quantum Computing</small>
            </div>
          </div>
          
          <div className="benefits-section">
            <div className="section-title">System-wide Benefits</div>
            
            <div className="node benefit real-time">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div>Real-Time Health AI</div>
              <small>24/7 Monitoring & Insights</small>
            </div>
            
            <div className="node benefit precision">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div>Precision Medicine</div>
              <small>Personalized Treatment</small>
            </div>
            
            <div className="node benefit smart">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div>Smart Healthcare</div>
              <small>Automated Workflows</small>
            </div>
            
            <div className="node benefit research">
              <div className="connector-in">
                <ArrowRight className="arrow-icon" size={16} />
              </div>
              <div>Accelerated R&D</div>
              <small>Quantum-Powered Discovery</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFlowDiagram;
