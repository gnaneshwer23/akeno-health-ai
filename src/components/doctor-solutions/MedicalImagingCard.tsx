
import React from 'react';
import { ScanLine, Search } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const MedicalImagingCard = () => {
  return (
    <Card className="border-0 shadow-md bg-gradient-to-br from-white to-health-light/50 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-health-primary/10">
            <ScanLine size={14} className="text-health-primary" />
          </div>
          <span className="bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent">
            Medical Imaging
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-health-light/50 rounded-lg relative flex items-center justify-center mb-2 overflow-hidden border border-health-primary/5">
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
            Chest X-ray Image
          </div>
          <div className="absolute bottom-2 right-2 bg-white/90 rounded-full p-1.5 shadow-sm">
            <Search size={12} className="text-health-primary" />
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Processed</span>
          <span className="font-medium text-health-primary bg-health-primary/10 px-2 py-0.5 rounded-full">4.3s</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalImagingCard;
