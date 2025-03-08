
import React from 'react';
import { Brain, FileText, Eye, Heart, AlertCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const imagingData = [
  {
    id: 1,
    title: "Brain MRI",
    date: "May 2, 2023",
    type: "MRI",
    bodyPart: "Brain",
    findings: "No significant abnormalities detected",
    aiConfidence: 96,
    status: "Normal",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Chest CT Scan",
    date: "Apr 18, 2023",
    type: "CT",
    bodyPart: "Chest",
    findings: "Small pulmonary nodule (4mm) in right lower lobe",
    aiConfidence: 89,
    status: "Abnormal",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Coronary CT Angiogram",
    date: "Mar 30, 2023",
    type: "CT Angiogram",
    bodyPart: "Heart",
    findings: "Mild calcification in LAD",
    aiConfidence: 92,
    status: "Follow-up",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Abdominal Ultrasound",
    date: "Mar 15, 2023",
    type: "Ultrasound",
    bodyPart: "Abdomen",
    findings: "Normal liver, kidneys, pancreas, and spleen",
    aiConfidence: 94,
    status: "Normal",
    thumbnail: "/placeholder.svg"
  }
];

const MedicalImagingGrid = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Normal':
        return <Badge className="bg-green-500">Normal</Badge>;
      case 'Abnormal':
        return <Badge className="bg-red-500">Abnormal</Badge>;
      case 'Follow-up':
        return <Badge className="bg-amber-500">Follow-up</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getBodyPartIcon = (bodyPart: string) => {
    switch (bodyPart) {
      case 'Brain':
        return <Brain size={24} className="text-purple-500" />;
      case 'Chest':
        return <AlertCircle size={24} className="text-blue-500" />;
      case 'Heart':
        return <Heart size={24} className="text-red-500" />;
      default:
        return <FileText size={24} className="text-gray-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {imagingData.map((image) => (
        <div 
          key={image.id} 
          className="border rounded-lg overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-center h-40 bg-muted p-2">
            <img 
              src={image.thumbnail} 
              alt={image.title} 
              className="h-full object-contain" 
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                {getBodyPartIcon(image.bodyPart)}
                <h3 className="font-medium">{image.title}</h3>
              </div>
              {getStatusBadge(image.status)}
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              <div className="flex justify-between mb-1">
                <span>Date: {image.date}</span>
                <span>Type: {image.type}</span>
              </div>
              <div className="flex justify-between">
                <span>AI Confidence: {image.aiConfidence}%</span>
              </div>
            </div>
            <p className="text-sm mb-4">{image.findings}</p>
            <div className="flex justify-between">
              <Button variant="outline" size="sm">
                <Eye size={16} className="mr-1" />
                View Full
              </Button>
              <Button variant="outline" size="sm">
                <FileText size={16} className="mr-1" />
                Full Report
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalImagingGrid;
