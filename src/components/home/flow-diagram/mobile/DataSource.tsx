
import React from 'react';
import { motion } from 'framer-motion';
import { DiagramItemProps } from '../utils/diagramUtils';

const DataSource = ({ title, icon, delay = 0, color = "#8571DD" }: DiagramItemProps) => (
  <motion.div 
    className="flex items-center gap-3"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="w-14 h-14 rounded-md bg-white border border-[#8571DD]/20 flex items-center justify-center shadow-sm">
      <div className="text-[#8571DD]">{icon}</div>
    </div>
    <span className="text-sm font-medium text-[#1A1F2C]">{title}</span>
  </motion.div>
);

export default DataSource;
