
import React from 'react';
import { motion } from 'framer-motion';

interface OutcomeProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const Outcome = ({ title, icon, color, delay = 0 }: OutcomeProps) => (
  <motion.div 
    className={`flex items-center gap-2 bg-[#F1F0FB] px-4 py-2.5 rounded-full shadow-sm border border-${color}/20`}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`text-${color}`}>{icon}</div>
    <span className="text-xs font-medium">{title}</span>
  </motion.div>
);

export default Outcome;
