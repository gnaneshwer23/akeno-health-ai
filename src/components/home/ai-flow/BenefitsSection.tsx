
import React from 'react';
import { ArrowRight } from 'lucide-react';

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
