
import React from 'react';
import { FileText, HeartPulse, Database, TestTube } from 'lucide-react';
import DataSource from './DataSource';

const DataSourcesList = () => {
  return (
    <div className="space-y-4 mb-6">
      <h3 className="text-sm font-semibold text-[#7E69AB] mb-3">Data Sources</h3>
      <DataSource 
        title="Patient Health Records" 
        icon={<FileText size={22} className="text-[#9b87f5]" />} 
        color="[#9b87f5]"
        delay={0.1}
      />
      <DataSource 
        title="Real-Time Biometrics" 
        icon={<HeartPulse size={22} className="text-[#7E69AB]" />} 
        color="[#7E69AB]"
        delay={0.2}
      />
      <DataSource 
        title="Medical Imaging & Lab Data" 
        icon={<Database size={22} className="text-[#6E59A5]" />} 
        color="[#6E59A5]"
        delay={0.3}
      />
      <DataSource 
        title="Clinical Trial Data" 
        icon={<TestTube size={22} className="text-[#8B5CF6]" />} 
        color="[#8B5CF6]"
        delay={0.4}
      />
    </div>
  );
};

export default DataSourcesList;
