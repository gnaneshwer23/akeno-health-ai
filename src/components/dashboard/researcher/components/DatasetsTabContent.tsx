
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Download, Filter, Database, Dna, Beaker } from 'lucide-react';
import DatasetItem from './DatasetItem';

const DatasetsTabContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Dataset Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="genomic">Genomic</SelectItem>
              <SelectItem value="clinical">Clinical</SelectItem>
              <SelectItem value="imaging">Imaging</SelectItem>
              <SelectItem value="biomarker">Biomarker</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all-time">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-time">All Time</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-quarter">Last Quarter</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button variant="ghost" size="sm">
          <Download size={16} className="mr-2" />
          Export
        </Button>
      </div>
      
      <div className="space-y-2">
        <DatasetItem 
          icon={<Database size={20} />}
          iconBgClass="bg-blue-100"
          iconTextClass="text-blue-600"
          title="Cardiovascular Disease Biomarker Dataset"
          description="Multi-omics data including proteomics, metabolomics, and clinical outcomes from our genomic_data table"
          badgeText="10.2K patients"
        />
        
        <DatasetItem 
          icon={<Dna size={20} />}
          iconBgClass="bg-purple-100"
          iconTextClass="text-purple-600"
          title="Type 2 Diabetes Genomic Analysis"
          description="Whole genome sequencing with treatment response correlations from our genomic samples database"
          badgeText="3.8K patients"
        />
        
        <DatasetItem 
          icon={<Beaker size={20} />}
          iconBgClass="bg-green-100"
          iconTextClass="text-green-600"
          title="Immunotherapy Response Prediction"
          description="Immune profile sequencing with clinical response data from our electronic health records"
          badgeText="1.5K patients"
        />
      </div>
    </div>
  );
};

export default DatasetsTabContent;
