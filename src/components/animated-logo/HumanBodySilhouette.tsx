
import React from 'react';
import { motion } from 'framer-motion';

const HumanBodySilhouette: React.FC = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-full h-full text-health-primary"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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

        {/* Subtle glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </motion.svg>
    </div>
  );
};

export { HumanBodySilhouette };
