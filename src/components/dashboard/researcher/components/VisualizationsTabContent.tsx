
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart4, LineChart, PieChart, Database } from 'lucide-react';

const VisualizationsTabContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Biomarker Distribution</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
            <BarChart4 size={64} className="text-gray-300" />
          </div>
          <div className="mt-2 text-xs text-center text-muted-foreground">
            Distribution of IL-6 levels across different patient cohorts
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Treatment Response</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
            <LineChart size={64} className="text-gray-300" />
          </div>
          <div className="mt-2 text-xs text-center text-muted-foreground">
            Response to treatment over time by genetic profile
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Genetic Variant Frequency</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
            <PieChart size={64} className="text-gray-300" />
          </div>
          <div className="mt-2 text-xs text-center text-muted-foreground">
            Distribution of key genetic variants in study population
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Multi-omics Clustering</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md border">
            <Database size={64} className="text-gray-300" />
          </div>
          <div className="mt-2 text-xs text-center text-muted-foreground">
            Patient clustering based on integrated omics data
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisualizationsTabContent;
