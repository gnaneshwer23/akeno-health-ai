
import React from 'react';
import { motion } from 'framer-motion';
import { ActionButtons } from '../cta/ActionButtons';

export const VisionMissionCTA = () => {
  return (
    <motion.div
      className="px-8 py-10 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-purple-100/50 shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h4 
        className="text-2xl font-bold mb-4 text-health-dark"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join Us in Transforming Healthcare
      </motion.h4>
      
      <motion.p 
        className="text-health-dark/80 font-medium text-lg mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        We are backed by renowned medical professionals, AI pioneers, and biotech leaders who guide our mission 
        towards a smarter, more efficient healthcare system.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <ActionButtons />
      </motion.div>
    </motion.div>
  );
};
