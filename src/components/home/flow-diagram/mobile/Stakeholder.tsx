
import React from 'react';
import { motion } from 'framer-motion';
import { DiagramItemProps } from '../utils/diagramUtils';

const Stakeholder = ({ title, icon, delay = 0 }: Omit<DiagramItemProps, 'color'>) => (
  <motion.div 
    className="flex items-center gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="w-12 h-12 rounded-full bg-white border border-[#8571DD]/20 shadow-sm flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium text-[#1A1F2C]">{title}</span>
  </motion.div>
);

export default Stakeholder;
