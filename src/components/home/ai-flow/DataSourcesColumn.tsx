
import React from 'react';
import { Watch, Clipboard, Dna, Microscope, Apple } from 'lucide-react';
import DataSourceItem from './DataSourceItem';

const DataSourcesColumn = () => {
  return (
    <div className="flow-column">
      <h3 className="column-title">Data Sources</h3>
      <div className="data-source-items">
        <DataSourceItem 
          icon={Watch} 
          title="Edge AI & IoT" 
          description="Smartwatches, ECG" 
        />
        
        <DataSourceItem 
          icon={Clipboard} 
          title="EHR Integration" 
          description="FHIR, DICOM" 
        />
        
        <DataSourceItem 
          icon={Dna} 
          title="Multi-Omics" 
          description="NGS, Proteomics" 
        />
        
        <DataSourceItem 
          icon={Microscope} 
          title="AI Imaging" 
          description="Radiology AI" 
        />
        
        <DataSourceItem 
          icon={Apple} 
          title="Behavioral" 
          description="NLP, Mental Health" 
        />
      </div>
    </div>
  );
};

export default DataSourcesColumn;
