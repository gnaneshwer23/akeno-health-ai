
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Scan, FileImage, Zap, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    if (confidence > 0.9) return 'bg-red-100 text-red-800';
    if (confidence > 0.7) return 'bg-amber-100 text-amber-800';
    return 'bg-blue-100 text-blue-800';
  };
  
  const getRelevanceColor = (relevance: string) => {
    if (relevance === 'High') return 'text-red-600';
    if (relevance === 'Medium') return 'text-amber-600';
    return 'text-blue-600';
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scan className="h-5 w-5 text-health-primary" />
          Medical Imaging AI Analysis
        </CardTitle>
        <CardDescription>
          AI-enhanced detection of abnormalities in medical images
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={imagingData[0].id} onValueChange={(value) => {
          const selected = imagingData.find(img => img.id === value);
          if (selected) setSelectedImage(selected);
        }}>
          <TabsList className="grid grid-cols-3 mb-4">
            {imagingData.map(img => (
              <TabsTrigger key={img.id} value={img.id}>
                <FileImage size={16} className="mr-2" />
                {img.bodyPart} {img.type}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {imagingData.map(img => (
            <TabsContent key={img.id} value={img.id} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium">
                      {img.bodyPart} {img.type} - {new Date(img.date).toLocaleDateString()}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant={currentView === 'original' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setCurrentView('original')}
                      >
                        <Eye size={14} className="mr-1" />
                        Original
                      </Button>
                      <Button 
                        variant={currentView === 'heatmap' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setCurrentView('heatmap')}
                      >
                        <Target size={14} className="mr-1" />
                        AI Heatmap
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-md overflow-hidden bg-black flex items-center justify-center h-[250px]">
                    <img 
                      src={currentView === 'original' ? img.imageUrl : img.heatmapUrl} 
                      alt={`${img.bodyPart} ${img.type}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Zap size={16} className="mr-1 text-health-primary" />
                    AI Analysis Findings
                  </h4>
                  <div className="space-y-3">
                    {img.aiFindings.map((finding, idx) => (
                      <div key={idx} className="border rounded-md p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{finding.location}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getConfidenceColor(finding.confidence)}`}>
                            {Math.round(finding.confidence * 100)}% confidence
                          </span>
                        </div>
                        <p className="text-sm mb-1">{finding.description}</p>
                        <p className="text-xs flex items-center">
                          Relevance: 
                          <span className={`ml-1 font-medium ${getRelevanceColor(finding.relevance)}`}>
                            {finding.relevance}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
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
