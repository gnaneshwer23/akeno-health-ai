
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/40 rounded-3xl blur-lg transform group-hover:scale-105 transition-transform duration-500 opacity-80"></div>
      <div className="relative bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 h-full transform transition-transform duration-500 group-hover:translate-y-[-5px]">
        <div className="flex items-center mb-8">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-lg mr-5">
            <Eye size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">Our Vision</h3>
            <p className="text-blue-700/70 text-md">The future we're building</p>
          </div>
        </div>
        
        <ul className="space-y-5 pl-2">
          {visionPoints.map((point, index) => (
            <PointListItem key={index} point={point} index={index} color="indigo" />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
