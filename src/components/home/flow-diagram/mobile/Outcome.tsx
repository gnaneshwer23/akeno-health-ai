
import React from 'react';
import { motion } from 'framer-motion';
import { DiagramItemProps } from '../utils/diagramUtils';

const Outcome = ({ title, icon, delay = 0, color = "#8571DD" }: DiagramItemProps) => (
  <motion.div 
    className={`flex items-center gap-3 bg-[#F1F0FB] px-4 py-2.5 rounded-full shadow-sm border border-[${color}]/10`}
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`text-[${color}] flex-shrink-0`}>{icon}</div>
    <span className="text-sm font-medium text-[#1A1F2C]">{title}</span>
  </motion.div>
);

export default Outcome;
