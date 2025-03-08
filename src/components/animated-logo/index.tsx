
import React from 'react';
import { cn } from "@/lib/utils";
import { AnimatedLogoProps } from './types';
import { SimpleLogo } from './SimpleLogo';
import { StaticLogo } from './StaticLogo';
import { DefaultLogo } from './DefaultLogo';

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  className,
  size = 'md',
  variant = 'default'
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };
  
  // Determine which logo variant to render
  const renderLogo = () => {
    if (variant === 'simple') {
      return <SimpleLogo />;
    }
    
    if (variant === 'static') {
      return <StaticLogo />;
    }
    
    // Default animated version
    return <DefaultLogo />;
  };

  return (
    <div className={cn("relative", sizes[size], className)}>
      {renderLogo()}
    </div>
  );
};

export { AnimatedLogo };
