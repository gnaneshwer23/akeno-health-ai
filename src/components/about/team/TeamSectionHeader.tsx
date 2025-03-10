
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export const TeamSectionHeader: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.span 
        className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 text-sm font-medium mb-5"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Users size={16} className="text-purple-500 mr-2" />
        Meet the Team
      </motion.span>
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          The Minds Behind Akeno Health
        </span>
      </motion.h2>
      
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
      </motion.div>
      
      <motion.p 
        className="text-health-dark/80 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our team consists of world-class experts in AI, medicine, biotechnology, healthcare strategy, and digital transformation. 
        Together, we are united by a single mission—to redefine healthcare as a data-driven, precision-based, 
        patient-first ecosystem that leverages AI to enhance medical outcomes and make healthcare more accessible for all.
      </motion.p>
    </motion.div>
  );
};
