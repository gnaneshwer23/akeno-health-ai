
import React from 'react';

const AIEngineColumn = () => {
  return (
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
  );
};

export default AIEngineColumn;
