
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundDecorations = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-health-light/10 to-white -z-10"></div>
      
      {/* Decorative Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-health-primary/10 to-health-secondary/10 blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-health-primary/10 to-health-secondary/10 blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-400/5 blur-3xl -z-10"
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
    </>
  );
};
