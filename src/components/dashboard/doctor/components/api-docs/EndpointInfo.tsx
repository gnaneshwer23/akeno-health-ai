
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export interface EndpointInfoProps {
  title: string;
  description: string;
  endpoint: string;
  method: string;
  requestFormat: any;
  responseFormat: any;
  parameters?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  authentication?: string;
  usageExample?: string;
  responseTime?: string;
}

const EndpointInfo: React.FC<EndpointInfoProps> = ({
  title,
  description,
  endpoint,
  method,
  requestFormat,
  responseFormat,
  parameters,
  authentication,
  usageExample,
  responseTime
}) => {
  const { toast } = useToast();
  
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied",
      description: "The code snippet has been copied to your clipboard"
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium">{title}</h3>
          {responseTime && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Avg. Response: {responseTime}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded text-xs font-mono ${
            method === 'GET' ? 'bg-blue-100 text-blue-700' : 
            method === 'POST' ? 'bg-green-100 text-green-700' : 
            method === 'PUT' ? 'bg-amber-100 text-amber-700' : 
            'bg-red-100 text-red-700'
          }`}>{method}</span>
          <span className="font-mono text-sm">{endpoint}</span>
        </div>
        
        {authentication && (
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md">
            <p className="text-xs text-amber-800">
              <strong>Authentication:</strong> {authentication}
            </p>
          </div>
        )}
        
        {parameters && parameters.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Parameters</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border px-3 py-2 text-left">Parameter</th>
                    <th className="border px-3 py-2 text-left">Type</th>
                    <th className="border px-3 py-2 text-left">Required</th>
                    <th className="border px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map((param, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
                      <td className="border px-3 py-2 font-mono">{param.name}</td>
                      <td className="border px-3 py-2">{param.type}</td>
                      <td className="border px-3 py-2">{param.required ? 'Yes' : 'No'}</td>
                      <td className="border px-3 py-2">{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1 flex justify-between items-center">
              <span>Request Format</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5"
                onClick={() => handleCopyCode(JSON.stringify(requestFormat, null, 2))}
              >
                <Copy size={12} />
              </Button>
            </h4>
            <div className="bg-muted p-3 rounded-md relative">
              <pre className="text-xs overflow-auto whitespace-pre-wrap max-h-60">
                {JSON.stringify(requestFormat, null, 2)}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1 flex justify-between items-center">
              <span>Response Format</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5"
                onClick={() => handleCopyCode(JSON.stringify(responseFormat, null, 2))}
              >
                <Copy size={12} />
              </Button>
            </h4>
            <div className="bg-muted p-3 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap max-h-60">
                {JSON.stringify(responseFormat, null, 2)}
              </pre>
            </div>
          </div>
        </div>
        
        {usageExample && (
          <div>
            <h4 className="text-sm font-medium mb-1 flex justify-between items-center">
              <span>Usage Example</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5"
                onClick={() => handleCopyCode(usageExample)}
              >
                <Copy size={12} />
              </Button>
            </h4>
            <div className="bg-muted p-3 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap font-mono">
                {usageExample}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EndpointInfo;
