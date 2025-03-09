
import React from 'react';

export const HeroFooterElements: React.FC = () => {
  return (
    <>
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-2 h-2 rounded-full bg-health-primary/60 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-health-secondary/60 animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="w-2 h-2 rounded-full bg-health-accent/60 animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 animate-pulse-slow">
        <span className="text-sm text-health-dark/80 mb-2 font-medium">Your Health, Your Data, Your Future</span>
        <div className="w-1 h-10 bg-gradient-to-b from-health-primary via-health-secondary to-transparent rounded-full"></div>
      </div>
    </>
  );
};
