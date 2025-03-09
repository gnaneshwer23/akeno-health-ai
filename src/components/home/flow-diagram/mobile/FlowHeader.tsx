
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const FlowHeader = () => {
  return (
    <motion.div 
      className="text-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F0FB] text-[#8571DD] font-medium text-xs mb-3">
        <Users size={14} className="text-[#8571DD]" />
        <span>AI-POWERED HEALTHCARE</span>
      </div>
      <h2 className="text-xl font-bold text-[#1A1F2C]">
        Empowering All Healthcare Stakeholders
      </h2>
    </motion.div>
  );
};

export default FlowHeader;
