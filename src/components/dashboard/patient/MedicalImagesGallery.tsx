
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ImageIcon, Calendar, FileText, Maximize, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { dataCollectionService } from '@/services/dataCollectionService';
import { MedicalImageType } from '@/types/supabase-types';
import { Skeleton } from '@/components/ui/skeleton';

const MedicalImagesGallery: React.FC = () => {
  const [images, setImages] = useState<MedicalImageType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<MedicalImageType | null>(null);
  const [imageCategory, setImageCategory] = useState('all');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const fetchMedicalImages = async () => {
      try {
        setIsLoading(true);
        const data = await dataCollectionService.getMedicalImages();
        setImages(data);
      } catch (error) {
        console.error('Error fetching medical images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedicalImages();
  }, []);

  const handleImageClick = (image: MedicalImageType) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const filteredImages = imageCategory === 'all' 
    ? images 
    : images.filter(image => image.image_type === imageCategory);

  const groupImagesByYear = () => {
    const groupedImages: Record<string, MedicalImageType[]> = {};
    
    filteredImages.forEach(image => {
      const year = new Date(image.image_date).getFullYear().toString();
      if (!groupedImages[year]) {
        groupedImages[year] = [];
      }
      groupedImages[year].push(image);
    });
    
    return groupedImages;
  };

  const getImageTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'mri': 'MRI',
      'ct': 'CT Scan',
      'xray': 'X-Ray',
      'pet': 'PET Scan',
      'ultrasound': 'Ultrasound',
      'other': 'Other'
    };
    return labels[type] || type.toUpperCase();
  };

  const renderImagePlaceholder = (image: MedicalImageType) => {
    const colorClasses: Record<string, string> = {
      'mri': 'bg-purple-100 text-purple-800',
      'ct': 'bg-blue-100 text-blue-800',
      'xray': 'bg-gray-100 text-gray-800',
      'pet': 'bg-yellow-100 text-yellow-800',
      'ultrasound': 'bg-green-100 text-green-800',
      'other': 'bg-red-100 text-red-800'
    };
    
    return (
      <div className={`aspect-square rounded-md flex items-center justify-center ${colorClasses[image.image_type] || 'bg-gray-100'}`}>
        <div className="text-center p-4">
          <ImageIcon className="h-10 w-10 mx-auto mb-2" />
          <p className="font-medium text-sm">{getImageTypeLabel(image.image_type)}</p>
          <p className="text-xs">{image.body_part || 'Unknown'}</p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <Skeleton key={i} className="aspect-square rounded-md" />
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-8">
        <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
        <h3 className="text-lg font-medium mb-2">No Medical Images Available</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your medical imaging records will appear here once they're added by your healthcare provider.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
        <Tabs 
          value={imageCategory} 
          onValueChange={setImageCategory}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mri">MRI</TabsTrigger>
            <TabsTrigger value="ct">CT</TabsTrigger>
            <TabsTrigger value="xray">X-Ray</TabsTrigger>
            <TabsTrigger value="pet">PET</TabsTrigger>
            <TabsTrigger value="ultrasound">Ultrasound</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Select defaultValue="newest">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="type">Group by Type</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-6">
        {Object.entries(groupImagesByYear()).map(([year, yearImages]) => (
          <div key={year}>
            <h3 className="font-medium text-lg mb-3">{year}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {yearImages.map((image) => (
                <Card 
                  key={image.id} 
                  className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  {image.image_url ? (
                    <div className="aspect-square relative">
                      <img 
                        src={image.image_url} 
                        alt={`Medical scan of ${image.body_part || 'unknown body part'}`} 
                        className="object-cover w-full h-full"
                      />
                      <Badge className="absolute top-2 right-2 bg-black/70">
                        {getImageTypeLabel(image.image_type)}
                      </Badge>
                    </div>
                  ) : (
                    renderImagePlaceholder(image)
                  )}
                  <CardFooter className="p-2">
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">{image.body_part || 'Unknown'}</div>
                        <div className="text-xs text-muted-foreground">
                          {format(new Date(image.image_date), 'MMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Image modal dialog */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle>
                  {getImageTypeLabel(selectedImage.image_type)} - {selectedImage.body_part || 'Unknown'}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                  {selectedImage.image_url ? (
                    <img 
                      src={selectedImage.image_url} 
                      alt={`Medical scan of ${selectedImage.body_part || 'unknown body part'}`} 
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="h-24 w-24 text-muted-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Image Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Date: {format(new Date(selectedImage.image_date), 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        <span>Type: {getImageTypeLabel(selectedImage.image_type)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>ID: {selectedImage.id.substring(0, 8)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Radiologist Notes</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedImage.radiologist_notes || 'No notes available for this image.'}
                    </p>
                  </div>
                </div>
                
                {selectedImage.ai_analysis_results && (
                  <div>
                    <h4 className="font-medium mb-2">AI Analysis</h4>
                    <div className="p-3 bg-blue-50 rounded-md text-sm">
                      <p>
                        AI-powered analysis detected no abnormalities in this scan.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="default" size="sm">
                    <Maximize className="h-4 w-4 mr-2" />
                    Full Screen
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MedicalImagesGallery;
