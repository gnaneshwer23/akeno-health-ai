
import React from 'react';
import { User, Hospital, Pill } from 'lucide-react';

const HealthcareAISolutions = () => {
  return (
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
  );
};

export default HealthcareAISolutions;
