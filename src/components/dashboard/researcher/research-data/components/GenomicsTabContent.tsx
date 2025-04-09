
import React from 'react';
import { CardContent } from '@/components/ui/card';
import DatasetCard from './DatasetCard';

const GenomicsTabContent: React.FC = () => {
  return (
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatasetCard
          title="Whole Genome Sequencing Database"
          description="10,000+ whole genome sequences with associated phenotypic data"
          size="23GB"
          isFavorite={true}
        />

        <DatasetCard
          title="Cancer Mutation Database"
          description="Comprehensive database of somatic mutations across 50+ cancer types"
          size="8.5GB"
        />

        <DatasetCard
          title="Pharmacogenomic Dataset"
          description="Genetic variants affecting drug metabolism and efficacy"
          size="4.2GB"
        />

        <DatasetCard
          title="Multi-omics Integration Dataset"
          description="Integrated genomic, transcriptomic, and proteomic data from 500 individuals"
          size="15GB"
          isFavorite={true}
        />
      </div>
    </CardContent>
  );
};

export default GenomicsTabContent;
