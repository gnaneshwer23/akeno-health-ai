
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const DiagramHeader = () => (
  <motion.div 
    className="text-center mb-12"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F0FB] text-[#8571DD] font-medium mb-4">
      <Users size={16} className="text-[#8571DD]" />
      <span>AI-POWERED PATIENT-CENTRIC HEALTHCARE ECOSYSTEM</span>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C]">
      Empowering All Healthcare Stakeholders with AI
    </h2>
  </motion.div>
);

export default DiagramHeader;
