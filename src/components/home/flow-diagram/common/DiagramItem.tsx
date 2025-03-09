
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DiagramItemProps } from '../utils/diagramUtils';

interface DiagramItemBaseProps extends DiagramItemProps {
  variant: 'icon' | 'avatar' | 'outcome';
  iconContainerClassName?: string;
  textClassName?: string;
  animationDirection?: 'x' | 'y';
  animationDistance?: number;
}

const DiagramItem = ({ 
  title, 
  icon, 
  color = "#8571DD", 
  delay = 0,
  variant = 'icon',
  className = "",
  iconContainerClassName = "",
  textClassName = "",
  animationDirection = 'y',
  animationDistance = 20
}: DiagramItemBaseProps) => {
  
  // Configure animation based on variant and direction
  const getAnimationProps = () => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    
    if (animationDirection === 'y') {
      initial['y'] = variant === 'outcome' ? 0 : animationDistance;
      animate['y'] = 0;
    } else {
      initial['x'] = variant === 'icon' ? -animationDistance : 
                    variant === 'outcome' ? animationDistance : 0;
      animate['x'] = 0;
    }
    
    if (variant === 'avatar') {
      initial['scale'] = 0.9;
      animate['scale'] = 1;
    }
    
    return { initial, animate, transition: { duration: 0.5, delay } };
  };

  const animationProps = getAnimationProps();
  
  // Determine container classes based on variant
  const containerClasses = cn(
    "flex", 
    variant === 'outcome' ? "flex-row items-center gap-3" : "flex-col items-center gap-3",
    className
  );
  
  // Determine icon container classes based on variant
  const iconContainerClasses = cn(
    variant === 'avatar' ? "rounded-full" : 
    variant === 'outcome' ? "min-w-fit" : "rounded-md",
    variant === 'outcome' ? "" : "w-20 h-20 shadow-sm flex items-center justify-center",
    variant === 'outcome' ? "" : `bg-white border border-${color}/20`,
    iconContainerClassName
  );
  
  // Determine text classes based on variant
  const textClasses = cn(
    "font-medium",
    variant === 'outcome' ? "text-sm" : "text-sm text-center",
    variant === 'outcome' ? "" : "max-w-[120px]",
    `text-[#1A1F2C]`,
    textClassName
  );
  
  return (
    <motion.div 
      className={containerClasses}
      {...animationProps}
    >
      <div className={iconContainerClasses}>
        {icon}
      </div>
      <span className={textClasses}>{title}</span>
    </motion.div>
  );
};

export default DiagramItem;
