
import React from 'react';
import { CardContent } from '@/components/ui/card';
import DatasetCard from './DatasetCard';

const ImagingTabContent: React.FC = () => {
  return (
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatasetCard
          title="Brain MRI Dataset"
          description="5,000+ T1 and T2 weighted brain MRIs with lesion annotations"
          size="120GB"
          isFavorite={true}
        />

        <DatasetCard
          title="Chest X-ray Collection"
          description="Large-scale dataset of chest X-rays with radiologist annotations"
          size="85GB"
        />
      </div>
    </CardContent>
  );
};

export default ImagingTabContent;
