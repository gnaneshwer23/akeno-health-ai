
import React from 'react';
import { motion } from 'framer-motion';

interface TeamGroupHeaderProps {
  title: string;
  description: string;
}

export const TeamGroupHeader: React.FC<TeamGroupHeaderProps> = ({ title, description }) => {
  return (
    <motion.div 
      className="md:w-1/4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-health-dark mb-2">{title}</h3>
      <div className="h-1 w-12 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mb-4"></div>
      <p className="text-health-dark/70">{description}</p>
    </motion.div>
  );
};
