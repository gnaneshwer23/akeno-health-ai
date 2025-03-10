
import React from 'react';
import { HumanBodySilhouette } from './HumanBodySilhouette';

const SimpleLogo: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-health-primary/20 to-health-secondary/20"></div>
      <div className="absolute inset-0 rounded-full border border-health-primary/30"></div>
      <div className="relative w-1/2 h-1/2 flex items-center justify-center">
        <HumanBodySilhouette />
      </div>
    </div>
  );
};

export { SimpleLogo };
