
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Scan, FileImage, Zap, Target, Eye, AlertCircle, ArrowRight, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data for medical imaging analysis
const imagingData = [
  {
    id: 'chest-xray-001',
    type: 'X-ray',
    bodyPart: 'Chest',
    date: '2023-05-15',
    imageUrl: '/placeholder.svg',
    heatmapUrl: '/placeholder.svg',
    aiFindings: [
      {
        location: 'Right Upper Lobe',
        confidence: 0.92,
        description: 'Small nodular opacity, 8mm in diameter',
        relevance: 'High'
      },
      {
        location: 'Left Lower Lobe',
        confidence: 0.78,
        description: 'Mild interstitial markings',
        relevance: 'Medium'
      }
    ]
  },
  {
    id: 'brain-mri-001',
    type: 'MRI',
    bodyPart: 'Brain',
    date: '2023-06-22',
    imageUrl: '/placeholder.svg',
    heatmapUrl: '/placeholder.svg',
    aiFindings: [
      {
        location: 'Temporal Lobe',
        confidence: 0.86,
        description: 'Small region of abnormal signal intensity',
        relevance: 'High'
      }
    ]
  },
  {
    id: 'abdomen-ct-001',
    type: 'CT',
    bodyPart: 'Abdomen',
    date: '2023-07-10',
    imageUrl: '/placeholder.svg',
    heatmapUrl: '/placeholder.svg',
    aiFindings: [
      {
        location: 'Liver',
        confidence: 0.95,
        description: 'Multiple small hypodense lesions',
        relevance: 'High'
      },
      {
        location: 'Spleen',
        confidence: 0.65,
        description: 'No significant abnormalities',
        relevance: 'Low'
      }
    ]
  }
];

const MedicalImagingAISection = () => {
  const [currentView, setCurrentView] = useState<'original' | 'heatmap'>('original');
  const [selectedImage, setSelectedImage] = useState(imagingData[0]);

  const getConfidenceColor = (confidence: number) => {
    if (confidence > 0.9) return 'bg-red-100 text-red-800 border border-red-200';
    if (confidence > 0.7) return 'bg-amber-100 text-amber-800 border border-amber-200';
    return 'bg-blue-100 text-blue-800 border border-blue-200';
  };
  
  const getRelevanceColor = (relevance: string) => {
    if (relevance === 'High') return 'text-red-600';
    if (relevance === 'Medium') return 'text-amber-600';
    return 'text-blue-600';
  };

  const getBodyPartIcon = (bodyPart: string) => {
    switch (bodyPart) {
      case 'Brain':
        return <AlertCircle className="h-5 w-5 text-purple-500" />;
      case 'Chest':
        return <Scan className="h-5 w-5 text-blue-500" />;
      case 'Abdomen':
        return <Target className="h-5 w-5 text-amber-500" />;
      default:
        return <FileImage className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Card className="h-full overflow-hidden border-health-primary/10 shadow-md">
      <CardHeader className="bg-gradient-to-r from-health-primary/5 to-health-secondary/5">
        <CardTitle className="flex items-center gap-2">
          <Scan className="h-5 w-5 text-health-primary" />
          Medical Imaging AI Analysis
        </CardTitle>
        <CardDescription>
          AI-enhanced detection of abnormalities in medical images
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue={imagingData[0].id} onValueChange={(value) => {
          const selected = imagingData.find(img => img.id === value);
          if (selected) setSelectedImage(selected);
        }} className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <TabsList className="grid grid-cols-3 w-auto">
              {imagingData.map(img => (
                <TabsTrigger key={img.id} value={img.id} className="flex items-center gap-1.5">
                  {getBodyPartIcon(img.bodyPart)}
                  <span className="hidden md:inline">{img.bodyPart}</span>
                  <span className="inline md:hidden">{img.bodyPart.substring(0, 1)}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="flex items-center gap-2">
              <Button 
                variant={currentView === 'original' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setCurrentView('original')}
                className="gap-1.5"
              >
                <Eye size={14} />
                Original
              </Button>
              <Button 
                variant={currentView === 'heatmap' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setCurrentView('heatmap')}
                className="gap-1.5"
              >
                <Target size={14} />
                AI Heatmap
              </Button>
            </div>
          </div>
          
          {imagingData.map(img => (
            <TabsContent key={img.id} value={img.id} className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-md border overflow-hidden bg-gradient-to-r from-gray-50 to-white p-3">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      {getBodyPartIcon(img.bodyPart)}
                      <h4 className="text-sm font-medium">
                        {img.bodyPart} {img.type}
                      </h4>
                    </div>
                    <Badge variant="outline" className="flex gap-1.5 bg-gray-50">
                      <FileImage size={12} />
                      {new Date(img.date).toLocaleDateString()}
                    </Badge>
                  </div>
                  <div className="relative rounded-md overflow-hidden bg-black flex items-center justify-center h-[220px] group">
                    <img 
                      src={currentView === 'original' ? img.imageUrl : img.heatmapUrl} 
                      alt={`${img.bodyPart} ${img.type}`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                      {currentView === 'original' ? 'Original Image' : 'AI Heatmap View'}
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border bg-gradient-to-r from-white to-gray-50 p-3">
                  <h4 className="text-sm font-medium mb-3 flex items-center gap-2 border-b pb-2">
                    <Zap size={16} className="text-health-primary" />
                    AI Analysis Findings
                    <Badge variant="outline" className="ml-auto">{img.aiFindings.length} findings</Badge>
                  </h4>
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {img.aiFindings.map((finding, idx) => (
                      <div key={idx} className="rounded-md p-3 hover:shadow-md transition-shadow bg-white border border-gray-100">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-medium flex items-center gap-1.5">
                            <AlertCircle size={14} className={finding.relevance === 'High' ? 'text-red-500' : finding.relevance === 'Medium' ? 'text-amber-500' : 'text-blue-500'} />
                            {finding.location}
                          </span>
                          <Badge className={`text-xs px-2 py-0.5 rounded-md ${getConfidenceColor(finding.confidence)}`}>
                            {Math.round(finding.confidence * 100)}% confidence
                          </Badge>
                        </div>
                        <p className="text-sm mb-1.5 text-gray-700">{finding.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1">
                            Clinical relevance:
                            <span className={`font-medium ${getRelevanceColor(finding.relevance)}`}>
                              {finding.relevance}
                            </span>
                          </span>
                          <Button variant="ghost" size="sm" className="h-6 text-xs px-2 text-health-primary hover:text-health-primary/80">
                            <Copy size={12} className="mr-1" /> 
                            Copy to report
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" size="sm" className="mt-2 px-0 text-health-primary w-full justify-start gap-1">
                    <ArrowRight size={14} />
                    View complete analysis report
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MedicalImagingAISection;
