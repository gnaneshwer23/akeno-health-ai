
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const SectionHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div 
        className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 text-sm font-medium mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles size={16} className="text-indigo-500 mr-2" />
        Our Vision & Mission
      </motion.div>
      
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Transforming Healthcare with AI
        </span>
      </motion.h2>
      
      <motion.div 
        className="flex justify-center mb-8"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </motion.div>
      
      <motion.p 
        className="text-xl text-health-dark/70 max-w-3xl mx-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        At <span className="font-semibold">Akeno Health</span>, we believe that <span className="font-semibold">healthcare should be predictive, personalised, and accessible to everyone</span>.
      </motion.p>
    </div>
  );
};
