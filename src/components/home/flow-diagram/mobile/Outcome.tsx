
import React from 'react';
import { motion } from 'framer-motion';

interface OutcomeProps {
  title: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
}

const Outcome = ({ title, icon, color = "health-primary", delay = 0 }: OutcomeProps) => (
  <motion.div 
    className={`flex items-center gap-2 bg-[#F1F0FB] px-4 py-2 rounded-full shadow-sm border border-${color}/20`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {icon}
    <span className="text-xs font-medium">{title}</span>
  </motion.div>
);

export default Outcome;
