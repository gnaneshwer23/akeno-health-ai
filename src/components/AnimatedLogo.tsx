
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  className,
  size = 'md'
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("relative", sizes[size], className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-health-primary to-health-secondary opacity-70 animate-pulse-slow"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 rounded-full border-t-2 border-l-2 border-white opacity-70 animate-rotate-slow"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 rounded-full bg-white opacity-90 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-health-primary opacity-90 z-10">
          <path 
            d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 13.25V19.25" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M19.25 9V16.25" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M4.75 9V16.25" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 19.25L19.25 15.25" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 19.25L4.75 15.25" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export { AnimatedLogo };
