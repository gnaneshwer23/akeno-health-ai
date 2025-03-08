
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Server, Key, FileText } from 'lucide-react';
import APIKeyManager from '../components/APIKeyManager';
import APIDocumentation from '../components/APIDocumentation';

const APIManagementSection: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server size={18} />
          <span>Healthcare API Platform</span>
        </CardTitle>
        <CardDescription>
          Access and integrate AI-powered healthcare insights into your systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="documentation" className="space-y-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="documentation" className="flex items-center justify-center">
              <FileText size={16} className="mr-2" />
              API Documentation
            </TabsTrigger>
            <TabsTrigger value="apikeys" className="flex items-center justify-center">
              <Key size={16} className="mr-2" />
              API Keys
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="documentation">
            <APIDocumentation />
          </TabsContent>
          
          <TabsContent value="apikeys">
            <APIKeyManager />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default APIManagementSection;
