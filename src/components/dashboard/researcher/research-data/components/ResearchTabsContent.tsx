
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import GenomicsTabContent from './GenomicsTabContent';
import ImagingTabContent from './ImagingTabContent';
import PlaceholderTabContent from './PlaceholderTabContent';

const ResearchTabsContent: React.FC = () => {
  return (
    <>
      <TabsContent value="genomics" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Genomics & Biomarker Data</CardTitle>
            <CardDescription>AI-analyzed correlations between genomic mutations and disease risk</CardDescription>
          </CardHeader>
          <GenomicsTabContent />
        </Card>
      </TabsContent>

      <TabsContent value="imaging" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Medical Imaging AI Models</CardTitle>
            <CardDescription>MRI, CT scan, and histopathology datasets with AI annotations</CardDescription>
          </CardHeader>
          <ImagingTabContent />
        </Card>
      </TabsContent>

      <TabsContent value="longitudinal">
        <Card>
          <CardHeader>
            <CardTitle>Longitudinal Health Data</CardTitle>
            <CardDescription>Patient data spanning years to study disease progression & therapy outcomes</CardDescription>
          </CardHeader>
          <PlaceholderTabContent label="Longitudinal data" />
        </Card>
      </TabsContent>

      <TabsContent value="drug-discovery">
        <Card>
          <CardHeader>
            <CardTitle>Drug Discovery Simulations</CardTitle>
            <CardDescription>AI-generated molecular docking models for new drug formulations</CardDescription>
          </CardHeader>
          <PlaceholderTabContent label="Drug discovery simulation data" />
        </Card>
      </TabsContent>

      <TabsContent value="epidemiology">
        <Card>
          <CardHeader>
            <CardTitle>Epidemiology & Public Health Trends</CardTitle>
            <CardDescription>AI predictions for disease outbreaks and global health risks</CardDescription>
          </CardHeader>
          <PlaceholderTabContent label="Epidemiology data" />
        </Card>
      </TabsContent>
    </>
  );
};

export default ResearchTabsContent;
