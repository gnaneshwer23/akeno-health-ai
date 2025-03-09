
import React from 'react';
import { motion } from 'framer-motion';
import { DiagramItemProps } from '../utils/diagramUtils';

interface DiagramItemBaseProps extends DiagramItemProps {
  variant: 'icon' | 'avatar';
  containerClassName?: string;
  iconContainerClassName?: string;
  textClassName?: string;
  animationProps?: Record<string, any>;
}

const DiagramItem = ({ 
  title, 
  icon, 
  color = "[#8571DD]", 
  delay = 0,
  variant = 'icon',
  containerClassName = "",
  iconContainerClassName = "",
  textClassName = "",
  animationProps = {}
}: DiagramItemBaseProps) => {
  
  const defaultAnimationProps = {
    initial: variant === 'icon' ? { opacity: 0, y: 20 } : { opacity: 0, scale: 0.9 },
    animate: variant === 'icon' ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay }
  };

  const mergedAnimationProps = { ...defaultAnimationProps, ...animationProps };

  const isRounded = variant === 'avatar';
  
  return (
    <motion.div 
      className={`flex flex-col items-center gap-3 ${containerClassName}`}
      {...mergedAnimationProps}
    >
      <div className={`
        w-20 h-20 
        ${isRounded ? 'rounded-full' : 'rounded-md'} 
        bg-white border border-${color}/20 
        flex items-center justify-center 
        shadow-sm
        ${iconContainerClassName}
      `}>
        {icon}
      </div>
      <span className={`text-sm font-medium text-center max-w-[120px] text-[#1A1F2C] ${textClassName}`}>{title}</span>
    </motion.div>
  );
};

export default DiagramItem;
