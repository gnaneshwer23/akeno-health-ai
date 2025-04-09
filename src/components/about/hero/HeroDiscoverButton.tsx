
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown } from 'lucide-react';

export const HeroDiscoverButton = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <motion.button
        onClick={() => scrollToSection('vision-mission')}
        className="group flex flex-col items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-health-dark/60 font-medium mb-2 text-sm">Discover Our Story</span>
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white"
          animate={{ 
            y: [0, 5, 0],
            boxShadow: [
              '0 0 0 rgba(99, 102, 241, 0)', 
              '0 0 8px rgba(99, 102, 241, 0.5)', 
              '0 0 0 rgba(99, 102, 241, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};
