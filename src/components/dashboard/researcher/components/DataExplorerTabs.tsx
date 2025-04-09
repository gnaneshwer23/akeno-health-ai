
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import DatasetsTabContent from './DatasetsTabContent';
import VisualizationsTabContent from './VisualizationsTabContent';
import AIInsightsTabContent from './AIInsightsTabContent';

const DataExplorerTabs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>AI-Powered Data Explorer</CardTitle>
            <CardDescription>Analyze anonymized patient data with AI insights from our integrated database</CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search datasets..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="datasets">
          <TabsList className="mb-4">
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="datasets">
            <DatasetsTabContent />
          </TabsContent>
          
          <TabsContent value="visualizations">
            <VisualizationsTabContent />
          </TabsContent>
          
          <TabsContent value="ai-insights">
            <AIInsightsTabContent />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DataExplorerTabs;
