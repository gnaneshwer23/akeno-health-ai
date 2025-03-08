
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, LineChart, Dna, Brain, Microscope, Activity, Heart } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ResearchData = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Research Data</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search datasets, biomarkers, studies..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Data Types</SelectItem>
            <SelectItem value="genomics">Genomics</SelectItem>
            <SelectItem value="imaging">Medical Imaging</SelectItem>
            <SelectItem value="longitudinal">Longitudinal</SelectItem>
            <SelectItem value="drugDiscovery">Drug Discovery</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="genomics" className="w-full">
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

        <TabsContent value="genomics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Genomics & Biomarker Data</CardTitle>
              <CardDescription>AI-analyzed correlations between genomic mutations and disease risk</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Whole Genome Sequencing Database</h3>
                    <Heart className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    10,000+ whole genome sequences with associated phenotypic data
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">23GB</span>
                    <Button size="sm" variant="outline">Access Data</Button>
                  </div>
                </div>

                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Cancer Mutation Database</h3>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Comprehensive database of somatic mutations across 50+ cancer types
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">8.5GB</span>
                    <Button size="sm" variant="outline">Access Data</Button>
                  </div>
                </div>

                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Pharmacogenomic Dataset</h3>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Genetic variants affecting drug metabolism and efficacy
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">4.2GB</span>
                    <Button size="sm" variant="outline">Access Data</Button>
                  </div>
                </div>

                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Multi-omics Integration Dataset</h3>
                    <Heart className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Integrated genomic, transcriptomic, and proteomic data from 500 individuals
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">15GB</span>
                    <Button size="sm" variant="outline">Access Data</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="imaging" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medical Imaging AI Models</CardTitle>
              <CardDescription>MRI, CT scan, and histopathology datasets with AI annotations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sample content for Medical Imaging tab */}
                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Brain MRI Dataset</h3>
                    <Heart className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    5,000+ T1 and T2 weighted brain MRIs with lesion annotations
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">120GB</span>
                    <Button size="sm" variant="outline">Access Data</Button>
                  </div>
                </div>

                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Chest X-ray Collection</h3>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Large-scale dataset of chest X-rays with radiologist annotations
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">85GB</span>
                    <Button size="sm" variant="outline">Access Data</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="longitudinal">
          <Card>
            <CardHeader>
              <CardTitle>Longitudinal Health Data</CardTitle>
              <CardDescription>Patient data spanning years to study disease progression & therapy outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                Longitudinal data content will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drug-discovery">
          <Card>
            <CardHeader>
              <CardTitle>Drug Discovery Simulations</CardTitle>
              <CardDescription>AI-generated molecular docking models for new drug formulations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                Drug discovery simulation data will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="epidemiology">
          <Card>
            <CardHeader>
              <CardTitle>Epidemiology & Public Health Trends</CardTitle>
              <CardDescription>AI predictions for disease outbreaks and global health risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 text-center text-muted-foreground">
                Epidemiology data will be displayed here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResearchData;
