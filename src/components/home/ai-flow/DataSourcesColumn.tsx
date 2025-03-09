
import React from 'react';
import { Watch, Clipboard, Dna, Microscope, Apple } from 'lucide-react';

const DataSourcesColumn = () => {
  return (
    <div className="flow-column">
      <h3 className="column-title">Data Sources</h3>
      <div className="data-source-items">
        <div className="flow-item-card">
          <Watch className="item-icon-card" />
          <div className="item-title-card">Edge AI & IoT</div>
          <div className="item-desc-card">Smartwatches, ECG</div>
        </div>
        
        <div className="flow-item-card">
          <Clipboard className="item-icon-card" />
          <div className="item-title-card">EHR Integration</div>
          <div className="item-desc-card">FHIR, DICOM</div>
        </div>
        
        <div className="flow-item-card">
          <Dna className="item-icon-card" />
          <div className="item-title-card">Multi-Omics</div>
          <div className="item-desc-card">NGS, Proteomics</div>
        </div>
        
        <div className="flow-item-card">
          <Microscope className="item-icon-card" />
          <div className="item-title-card">AI Imaging</div>
          <div className="item-desc-card">Radiology AI</div>
        </div>
        
        <div className="flow-item-card">
          <Apple className="item-icon-card" />
          <div className="item-title-card">Behavioral</div>
          <div className="item-desc-card">NLP, Mental Health</div>
        </div>
      </div>
    </div>
  );
};

export default DataSourcesColumn;
