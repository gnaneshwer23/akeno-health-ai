
import React from 'react';
import { HumanBodySilhouette } from './HumanBodySilhouette';

const StaticLogo: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-health-primary via-health-secondary to-health-accent opacity-80"></div>
      <div className="absolute inset-0 rounded-full border-2 border-white opacity-30"></div>
      <div className="absolute inset-[15%] rounded-full bg-white opacity-90"></div>
      <div className="relative w-3/4 h-3/4 text-health-primary flex items-center justify-center">
        <HumanBodySilhouette />
      </div>
    </div>
  );
};

export { StaticLogo };
