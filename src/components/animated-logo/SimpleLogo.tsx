
import React from 'react';
import { HumanBodySilhouette } from './HumanBodySilhouette';

const SimpleLogo: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-health-primary to-health-secondary opacity-20"></div>
      <div className="relative w-2/3 h-2/3 flex items-center justify-center">
        <HumanBodySilhouette />
      </div>
    </div>
  );
};

export { SimpleLogo };
