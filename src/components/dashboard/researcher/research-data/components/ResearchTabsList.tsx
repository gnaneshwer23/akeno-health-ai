
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dna, Brain, LineChart, Microscope, Activity } from 'lucide-react';

const ResearchTabsList: React.FC = () => {
  return (
    <TabsList className="grid grid-cols-5 mb-4">
      <TabsTrigger value="genomics">
        <Dna className="h-4 w-4 mr-2" />
        Genomics
      </TabsTrigger>
      <TabsTrigger value="imaging">
        <Brain className="h-4 w-4 mr-2" />
        Medical Imaging
      </TabsTrigger>
      <TabsTrigger value="longitudinal">
        <LineChart className="h-4 w-4 mr-2" />
        Longitudinal
      </TabsTrigger>
      <TabsTrigger value="drug-discovery">
        <Microscope className="h-4 w-4 mr-2" />
        Drug Discovery
      </TabsTrigger>
      <TabsTrigger value="epidemiology">
        <Activity className="h-4 w-4 mr-2" />
        Epidemiology
      </TabsTrigger>
    </TabsList>
  );
};

export default ResearchTabsList;
