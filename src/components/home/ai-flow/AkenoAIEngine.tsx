
import React from 'react';
import { Brain } from 'lucide-react';

const AkenoAIEngine = () => {
  return (
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
  );
};

export default AkenoAIEngine;
