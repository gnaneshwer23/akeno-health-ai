
import React from 'react';
import { motion } from 'framer-motion';

interface MilestoneProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

export const MilestoneCard: React.FC<MilestoneProps> = ({ title, description, icon, color, index }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center`}>
      <motion.div 
        className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
      >
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          whileHover={{ y: -5 }}
        >
          <h3 className="text-xl font-bold text-health-dark mb-3">{title}</h3>
          <p className="text-health-dark/70">{description}</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="md:w-12 flex items-center justify-center py-4 md:py-0 z-10 relative"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <div className={`h-12 w-12 rounded-full ${color} flex items-center justify-center shadow-lg`}>
          {icon}
        </div>
      </motion.div>
      
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 md:order-last' : 'md:pr-16 md:text-right'}`}>
        {/* Empty div for layout */}
      </div>
    </div>
  );
};
