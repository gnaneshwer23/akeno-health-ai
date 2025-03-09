
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DataSourcesColumn = () => {
  return (
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
  );
};

export default DataSourcesColumn;
