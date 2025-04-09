
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const HeroHeader = () => {
  return (
    <>
      <motion.span 
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/20 to-health-secondary/20 text-health-primary font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Heart size={16} className="text-rose-500" />
        <span>About Akeno Health AI</span>
      </motion.span>
      
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6 tracking-tight"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUpVariants}
      >
        <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">
          Pioneering AI-Driven
        </span> Personalised Medicine for All
      </motion.h1>
      
      <motion.div 
        className="flex justify-center mb-8"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUpVariants}
      >
        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
      </motion.div>
      
      <motion.p 
        className="text-xl md:text-2xl text-health-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={fadeUpVariants}
      >
        Our Mission to Revolutionise Healthcare through artificial intelligence, 
        real-time health monitoring, and advanced medical analytics.
      </motion.p>
    </>
  );
};
