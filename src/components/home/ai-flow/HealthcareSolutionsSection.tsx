
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HealthcareSolutionsSection = () => {
  return (
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
  );
};

export default HealthcareSolutionsSection;
