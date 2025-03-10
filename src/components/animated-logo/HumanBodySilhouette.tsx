
import React from 'react';

const HumanBodySilhouette: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-full h-full text-health-primary"
      >
        {/* Head */}
        <circle cx="12" cy="7" r="3" />
        
        {/* Body */}
        <path d="M12 10v7" />
        
        {/* Arms */}
        <path d="M9 13l3 -3l3 3" />
        
        {/* Legs */}
        <path d="M10 17l2 3" />
        <path d="M14 17l-2 3" />
      </svg>
      
      {/* Decorative pulse point at heart location */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-1.5 h-1.5 bg-health-accent rounded-full animate-pulse"></div>
      
      {/* Decorative pulse point at brain location */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-health-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export { HumanBodySilhouette };
