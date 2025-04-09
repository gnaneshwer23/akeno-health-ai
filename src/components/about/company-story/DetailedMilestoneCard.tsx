
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

interface DetailedMilestoneProps {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color: string;
  index: number;
  isLast?: boolean;
}

export const DetailedMilestoneCard: React.FC<DetailedMilestoneProps> = ({ 
  year, 
  title, 
  description, 
  icon, 
  color, 
  index,
  isLast = false
}) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
    >
      {/* Year marker */}
      <motion.div 
        className="flex items-center mb-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 + (0.1 * index) }}
      >
        <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center shadow-lg mr-4 z-10`}>
          <span className="text-2xl font-bold text-white">{year}</span>
        </div>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gray-200 to-gray-100"></div>
      </motion.div>
      
      {/* Milestone content */}
      <div className="ml-0 md:ml-32">
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 + (0.1 * index) }}
          whileHover={{ y: -5 }}
        >
          {/* Connector line to timeline (visible on md+ screens) */}
          <div className="absolute left-0 top-1/2 w-10 h-0.5 bg-gray-200 -translate-x-10 hidden md:block"></div>
          
          {/* Title with icon */}
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center mr-4`}>
              {icon || <Calendar size={20} className="text-white" />}
            </div>
            <h3 className="text-2xl font-bold text-health-dark">{title}</h3>
          </div>
          
          {/* Description */}
          <p className="text-health-dark/70 text-lg leading-relaxed">{description}</p>
          
          {/* Next milestone indicator (except for last item) */}
          {!isLast && (
            <motion.div 
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight size={20} className="text-gray-400 rotate-90" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
