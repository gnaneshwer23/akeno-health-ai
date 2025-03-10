
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CompanySectionWrapperProps {
  children: ReactNode;
}

export const CompanySectionWrapper: React.FC<CompanySectionWrapperProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-48 h-48 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-health-primary/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-health-secondary/20 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"
          animate={{
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        ></motion.div>
      </div>
      
      {children}
    </div>
  );
};
