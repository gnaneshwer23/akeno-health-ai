
import React from 'react';
import { FeatureGridItem } from './FeatureGridItem';
import { features } from './featuresData';

export const FeaturesGrid: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-health-primary/5 to-health-secondary/5 rounded-3xl p-8 mb-16 border border-health-primary/10 shadow-lg backdrop-blur-sm">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Why Akeno Health is the Future of Healthcare</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureGridItem 
            key={index} 
            icon={feature.icon} 
            text={feature.text} 
          />
        ))}
      </div>
    </div>
  );
};
