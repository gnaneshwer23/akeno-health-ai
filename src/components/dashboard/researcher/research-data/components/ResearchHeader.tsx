
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResearchHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-tight">Research Data</h1>
      <Button variant="outline">
        <Download className="h-4 w-4 mr-2" />
        Export Data
      </Button>
    </div>
  );
};

export default ResearchHeader;
