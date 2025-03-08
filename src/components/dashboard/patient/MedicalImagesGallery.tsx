import React, { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FileImage, Calendar, AlertCircle } from 'lucide-react';
import { MedicalImageType } from '@/types/supabase-types';
import { dataCollectionService } from '@/services/dataCollectionService';

const MedicalImagesGallery = ({ patientId }: { patientId: string }) => {
  const [images, setImages] = useState<MedicalImageType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageType, setActiveImageType] = useState('all');

  useEffect(() => {
    const fetchMedicalImages = async () => {
      try {
        setLoading(true);
        const data = await dataCollectionService.getMedicalImageData(patientId);
        setImages(data);
      } catch (err) {
        console.error('Error fetching medical images:', err);
        setError('Failed to load medical images');
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalImages();
  }, [patientId]);

  const filteredImages = activeImageType === 'all' 
    ? images 
    : images?.filter(img => img.image_type === activeImageType);

  if (loading) {
    return <div className="flex justify-center items-center min-h-[200px]">Loading medical images...</div>;
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Loading Images</CardTitle>
          <CardDescription className="text-red-500">{error}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
            <span>Failed to load medical images. Please try again later.</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!images || images.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Medical Images</CardTitle>
          <CardDescription>No medical images available for this patient.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <FileImage className="h-4 w-4" />
            <span>No images have been uploaded yet.</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medical Images Gallery</CardTitle>
        <CardDescription>View and analyze medical images.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="all" className="space-y-4" onValueChange={(value) => setActiveImageType(value)}>
          <TabsList>
            <TabsTrigger value="all">All Images</TabsTrigger>
            <TabsTrigger value="xray">X-Ray</TabsTrigger>
            <TabsTrigger value="mri">MRI</TabsTrigger>
            <TabsTrigger value="ct">CT Scan</TabsTrigger>
            <TabsTrigger value="ultrasound">Ultrasound</TabsTrigger>
            <TabsTrigger value="pet">PET Scan</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages?.map((image) => (
                <div key={image.id} className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.image_url || 'https://via.placeholder.com/400x300'}
                      alt={image.image_type}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <p className="text-sm font-medium">{image.image_type.toUpperCase()}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(image.image_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="xray" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages?.filter(img => img.image_type === 'xray').map((image) => (
                <div key={image.id} className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.image_url || 'https://via.placeholder.com/400x300'}
                      alt={image.image_type}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <p className="text-sm font-medium">{image.image_type.toUpperCase()}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(image.image_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="mri" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages?.filter(img => img.image_type === 'mri').map((image) => (
                <div key={image.id} className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.image_url || 'https://via.placeholder.com/400x300'}
                      alt={image.image_type}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <p className="text-sm font-medium">{image.image_type.toUpperCase()}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(image.image_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ct" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages?.filter(img => img.image_type === 'ct').map((image) => (
                <div key={image.id} className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.image_url || 'https://via.placeholder.com/400x300'}
                      alt={image.image_type}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <p className="text-sm font-medium">{image.image_type.toUpperCase()}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(image.image_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
           <TabsContent value="ultrasound" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages?.filter(img => img.image_type === 'ultrasound').map((image) => (
                <div key={image.id} className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.image_url || 'https://via.placeholder.com/400x300'}
                      alt={image.image_type}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <p className="text-sm font-medium">{image.image_type.toUpperCase()}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(image.image_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pet" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages?.filter(img => img.image_type === 'pet').map((image) => (
                <div key={image.id} className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.image_url || 'https://via.placeholder.com/400x300'}
                      alt={image.image_type}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <p className="text-sm font-medium">{image.image_type.toUpperCase()}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(image.image_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="other" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages?.filter(img => img.image_type === 'other').map((image) => (
                <div key={image.id} className="relative">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.image_url || 'https://via.placeholder.com/400x300'}
                      alt={image.image_type}
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <p className="text-sm font-medium">{image.image_type.toUpperCase()}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(image.image_date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MedicalImagesGallery;
