
import React from 'react';
import { FileText, HeartPulse, Microscope, Database } from 'lucide-react';
import DataSource from './DataSource';

const DataSourcesList = () => {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-3">Data Sources</h3>
      <DataSource 
        title="Patient Health Records" 
        icon={<FileText size={22} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.1}
      />
      <DataSource 
        title="Real-Time Wearables" 
        icon={<HeartPulse size={22} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.2}
      />
      <DataSource 
        title="Medical Imaging" 
        icon={<Microscope size={22} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.3}
      />
      <DataSource 
        title="Genomic Data" 
        icon={<Database size={22} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.4}
      />
    </div>
  );
};

export default DataSourcesList;
