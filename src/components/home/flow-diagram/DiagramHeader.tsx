
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const DiagramHeader = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F0FB] text-[#8571DD] font-medium text-sm mb-4">
        <Activity size={16} className="text-[#8571DD]" />
        <span>AI-POWERED HEALTHCARE ECOSYSTEM</span>
      </div>
      <h2 className="text-3xl font-bold text-[#1A1F2C]">
        End-to-End AI Healthcare System
      </h2>
      <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
        From data collection to AI-driven analysis and stakeholder-specific solutions
      </p>
    </motion.div>
  );
};

export default DiagramHeader;
