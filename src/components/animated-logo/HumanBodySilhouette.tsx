
import React from 'react';
import { User } from 'lucide-react';

const HumanBodySilhouette: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Using a better human body silhouette SVG */}
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
        <circle cx="12" cy="4" r="2" />
        
        {/* Body */}
        <path d="M12 6.5v6" />
        
        {/* Arms */}
        <path d="M8 9l4 3" />
        <path d="M16 9l-4 3" />
        
        {/* Legs */}
        <path d="M9.5 18l2.5-5.5" />
        <path d="M14.5 18l-2.5-5.5" />
        
        {/* Optional: could add a heartbeat line across the chest */}
        <path d="M8 10.5h1.5l1-1.5l1 3l1-1.5l1.5 1.5h2" className="text-health-accent" strokeWidth="1" />
      </svg>
      
      {/* Data connection points */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-health-secondary rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-health-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-health-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-health-secondary rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
    </div>
  );
};

export { HumanBodySilhouette };
