
import React from 'react';
import { motion } from 'framer-motion';

interface OutcomeProps {
  title: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
}

const Outcome = ({ title, icon, color = "[#8571DD]", delay = 0 }: OutcomeProps) => (
  <motion.div 
    className={`flex items-center gap-3 bg-[#F1F0FB] px-4 py-2.5 rounded-full shadow-sm border border-${color}/10`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {icon}
    <span className="text-sm font-medium text-[#1A1F2C]">{title}</span>
  </motion.div>
);

export default Outcome;
