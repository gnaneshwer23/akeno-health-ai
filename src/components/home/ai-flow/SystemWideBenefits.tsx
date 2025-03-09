
import React from 'react';
import { Clock, Award, LayoutDashboard, Rocket } from 'lucide-react';

const SystemWideBenefits = () => {
  return (
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
  );
};

export default SystemWideBenefits;
