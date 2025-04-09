
import React from 'react';
import { motion } from 'framer-motion';

interface CultureValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export const CultureValueCard: React.FC<CultureValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
    >
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-health-primary/10 to-health-secondary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-health-dark font-semibold mb-2">{title}</h4>
      <p className="text-health-dark/80 text-sm">{description}</p>
    </motion.div>
  );
};
