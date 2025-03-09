
import React from 'react';
import { motion } from 'framer-motion';

interface MissionServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const MissionServiceCard: React.FC<MissionServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  index 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-health-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-health-primary to-health-secondary rounded-bl-[100px] -translate-y-1/2 translate-x-1/2 group-hover:rotate-12 transition-transform duration-500 opacity-80"></div>
      
      <div className="relative z-10 p-6">
        {/* Icon with animated rotation */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-health-primary to-health-secondary mb-5 mx-auto shadow-md flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Content with improved typography */}
        <h4 className="text-xl font-semibold text-health-dark text-center mb-3">{title}</h4>
        <p className="text-health-dark/70 text-center">{description}</p>
      </div>
      
      {/* Bottom decorative accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-health-primary/20 via-health-secondary/20 to-transparent"></div>
    </motion.div>
  );
};
