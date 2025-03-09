
import React from 'react';
import { motion } from 'framer-motion';

interface StakeholderProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const Stakeholder = ({ title, icon, color, delay = 0 }: StakeholderProps) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-16 h-16 rounded-full bg-white border border-${color}/30 shadow-sm flex items-center justify-center mb-2`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-center max-w-[100px]">{title}</span>
  </motion.div>
);

export default Stakeholder;
