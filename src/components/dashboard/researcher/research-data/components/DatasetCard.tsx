
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DatasetCardProps {
  title: string;
  description: string;
  size: string;
  isFavorite?: boolean;
}

const DatasetCard: React.FC<DatasetCardProps> = ({ 
  title, 
  description, 
  size, 
  isFavorite = false 
}) => {
  return (
    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{title}</h3>
        <Heart className={`h-4 w-4 ${isFavorite ? 'text-red-500' : 'text-muted-foreground'}`} />
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{size}</span>
        <Button size="sm" variant="outline">Access Data</Button>
      </div>
    </div>
  );
};

export default DatasetCard;
