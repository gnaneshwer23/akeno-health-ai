
import React from 'react';
import { HumanBodySilhouette } from './HumanBodySilhouette';
import { motion } from 'framer-motion';

const SimpleLogo: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-health-primary/20 to-health-secondary/20"
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <div className="absolute inset-0 rounded-full border border-health-primary/30"></div>
      <div className="relative w-1/2 h-1/2 flex items-center justify-center">
        <HumanBodySilhouette />
      </div>
    </div>
  );
};

export { SimpleLogo };
