
import React from 'react';
import { FileText, HeartPulse, Microscope, Database } from 'lucide-react';
import DataSource from '../DataSource';

const DataSourcesSection = () => {
  return (
    <div className="absolute left-0 top-[40px] flex flex-col space-y-24">
      <DataSource 
        title="Patient Health Records" 
        icon={<FileText size={32} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.1}
      />
      <DataSource 
        title="Real-Time Wearables" 
        icon={<HeartPulse size={32} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.2}
      />
      <DataSource 
        title="Medical Imaging" 
        icon={<Microscope size={32} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.3}
      />
      <DataSource 
        title="Genomic Data" 
        icon={<Database size={32} className="text-[#8571DD]" />} 
        color="[#8571DD]"
        delay={0.4}
      />
    </div>
  );
};

export default DataSourcesSection;
