
import React from 'react';
import { motion } from 'framer-motion';
import { DiagramItemProps } from '../utils/diagramUtils';

const Stakeholder = ({ title, icon, delay = 0, color = "#8571DD" }: DiagramItemProps) => (
  <motion.div 
    className="flex items-center gap-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-10 h-10 rounded-full bg-white border border-[${color}]/20 flex items-center justify-center shadow-sm`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-[#1A1F2C]">{title}</span>
  </motion.div>
);

export default Stakeholder;
