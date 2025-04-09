
import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground = () => {
  return (
    <>
      {/* Enhanced background elements */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 bg-health-accent/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-health-primary/10 rounded-full blur-xl -z-10"
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
};
