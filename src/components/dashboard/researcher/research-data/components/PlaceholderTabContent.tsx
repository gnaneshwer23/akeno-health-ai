
import React from 'react';
import { CardContent } from '@/components/ui/card';

interface PlaceholderTabContentProps {
  label: string;
}

const PlaceholderTabContent: React.FC<PlaceholderTabContentProps> = ({ label }) => {
  return (
    <CardContent>
      <div className="p-4 text-center text-muted-foreground">
        {label} content will be displayed here
      </div>
    </CardContent>
  );
};

export default PlaceholderTabContent;
