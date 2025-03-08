
import React from 'react';

const HumanBodySilhouette: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* SVG for human body silhouette */}
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
        <circle cx="12" cy="5" r="2.5" />
        
        {/* Body */}
        <path d="M12 7.5v5" />
        <path d="M10 10.5h4" />
        
        {/* Legs */}
        <path d="M12 12.5l-2 5" />
        <path d="M12 12.5l2 5" />
        
        {/* Arms */}
        <path d="M10 10.5l-2 3" />
        <path d="M14 10.5l2 3" />
      </svg>
      
      {/* Data connection points */}
      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-health-secondary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-health-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-health-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-health-secondary rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
    </div>
  );
};

export { HumanBodySilhouette };
