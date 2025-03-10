
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUsFloatingElements: React.FC = () => {
  return (
    <>
      {/* Animated floating elements with enhanced styling */}
      <motion.div 
        className="fixed top-[10%] left-[10%] w-20 h-20 rounded-xl bg-health-primary/10 animate-float -z-10" 
        style={{animationDelay: '0.3s'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div 
        className="fixed top-[30%] right-[15%] w-24 h-24 rounded-full bg-health-secondary/10 animate-float -z-10" 
        style={{animationDelay: '1.5s'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      ></motion.div>
      <motion.div 
        className="fixed top-[70%] left-[20%] w-16 h-16 rounded-2xl bg-health-accent/10 animate-float -z-10" 
        style={{animationDelay: '2.8s'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      ></motion.div>
      <motion.div 
        className="fixed top-[45%] right-[8%] w-12 h-12 rounded-lg bg-purple-400/10 animate-float -z-10" 
        style={{animationDelay: '4.2s'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      ></motion.div>
      <motion.div 
        className="fixed top-[85%] right-[25%] w-14 h-14 rounded-full bg-blue-400/10 animate-float -z-10" 
        style={{animationDelay: '3.7s'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      ></motion.div>
    </>
  );
};
