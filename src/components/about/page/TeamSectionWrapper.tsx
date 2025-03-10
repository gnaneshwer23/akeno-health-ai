
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TeamSectionWrapperProps {
  children: ReactNode;
}

export const TeamSectionWrapper: React.FC<TeamSectionWrapperProps> = ({ children }) => {
  return (
    <div className="relative bg-gradient-to-b from-white via-health-light/30 to-white py-10">
      {/* Side accent bars with glow effect */}
      <motion.div 
        className="absolute left-0 top-1/4 bottom-1/4 w-3 bg-gradient-to-b from-health-primary/60 to-health-secondary/60 rounded-r-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        animate={{
          opacity: [0.8, 1, 0.8],
          height: ['50%', '55%', '50%'],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute right-0 top-1/3 bottom-1/3 w-3 bg-gradient-to-t from-health-primary/60 to-health-secondary/60 rounded-l-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        animate={{
          opacity: [0.8, 1, 0.8],
          height: ['33.33%', '38%', '33.33%'],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      ></motion.div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-dashed border-health-primary/20 animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border-2 border-dashed border-health-secondary/20 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
      
      {children}
    </div>
  );
};
