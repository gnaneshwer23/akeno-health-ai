
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity } from 'lucide-react';

const FlowHeader = () => (
  <div className="text-center mb-6">
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2 mb-2"
    >
      <Brain size={20} className="text-[#8571DD]" />
      <h2 className="text-lg font-medium text-[#1A1F2C]">Akeno AI Healthcare Flow</h2>
      <Activity size={20} className="text-[#8571DD]" />
    </motion.div>
    
    <motion.p
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-sm text-gray-500 max-w-xs mx-auto"
    >
      From patient data collection to AI analysis and healthcare delivery
    </motion.p>
  </div>
);

export default FlowHeader;
