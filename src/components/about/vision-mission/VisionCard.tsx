
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { PointListItem } from './PointListItem';

interface VisionCardProps {
  visionPoints: string[];
}

export const VisionCard = ({ visionPoints }: VisionCardProps) => {
  return (
    <motion.div 
      className="relative z-10 group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/40 rounded-3xl blur-lg transform group-hover:scale-105 transition-transform duration-500 opacity-80"></div>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-indigo-100 h-full transform transition-transform duration-500 group-hover:translate-y-[-5px]">
        <div className="flex items-center mb-6">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg mr-4">
            <Target size={30} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-indigo-900">Our Vision</h3>
        </div>
        
        <ul className="space-y-4">
          {visionPoints.map((point, index) => (
            <PointListItem key={index} point={point} index={index} color="indigo" />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
