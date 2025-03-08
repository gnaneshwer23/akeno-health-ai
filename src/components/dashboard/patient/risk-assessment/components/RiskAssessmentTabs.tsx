
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RisksTabContent from './RisksTabContent';
import BiomarkersTabContent from './BiomarkersTabContent';
import MultiOmicsTabContent from './MultiOmicsTabContent';
import PreprocessingTabContent from './PreprocessingTabContent';

interface RiskAssessmentTabsProps {
  loading: boolean;
  riskItems: any[];
  biomarkers: any[];
  multiOmicsAnalysis: any;
  processingResults: any;
}

const RiskAssessmentTabs: React.FC<RiskAssessmentTabsProps> = ({
  loading,
  riskItems,
  biomarkers,
  multiOmicsAnalysis,
  processingResults
}) => {
  return (
    <Tabs defaultValue="risks">
      <TabsList className="mb-4">
        <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
        <TabsTrigger value="biomarkers">Biomarker Analysis</TabsTrigger>
        <TabsTrigger value="multiomics">Multi-Omics</TabsTrigger>
        <TabsTrigger value="preprocessing">Preprocessing</TabsTrigger>
      </TabsList>
      
      <TabsContent value="risks" className="space-y-4">
        <RisksTabContent riskItems={riskItems} />
      </TabsContent>
      
      <TabsContent value="biomarkers">
        <BiomarkersTabContent loading={loading} biomarkers={biomarkers} />
      </TabsContent>
      
      <TabsContent value="multiomics">
        <MultiOmicsTabContent loading={loading} multiOmicsAnalysis={multiOmicsAnalysis} />
      </TabsContent>
      
      <TabsContent value="preprocessing">
        <PreprocessingTabContent loading={loading} processingResults={processingResults} />
      </TabsContent>
    </Tabs>
  );
};

export default RiskAssessmentTabs;
