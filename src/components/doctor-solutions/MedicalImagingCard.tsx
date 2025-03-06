
import React from 'react';
import { ScanLine, Search } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const MedicalImagingCard = () => {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <ScanLine size={16} className="text-health-primary" />
          Medical Imaging
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="aspect-square bg-gray-100 rounded-lg relative flex items-center justify-center mb-2 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
            Chest X-ray Image
          </div>
          <div className="absolute bottom-2 right-2 bg-white/80 rounded-full p-1">
            <Search size={14} className="text-health-primary" />
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Processed</span>
          <span className="font-medium text-health-primary">4.3s</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalImagingCard;
