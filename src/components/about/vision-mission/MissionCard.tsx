
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { PointListItem } from './PointListItem';

interface MissionCardProps {
  missionPoints: string[];
}

export const MissionCard = ({ missionPoints }: MissionCardProps) => {
  return (
    <motion.div 
      className="relative z-10 group"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-fuchsia-600/40 rounded-3xl blur-lg transform group-hover:scale-105 transition-transform duration-500 opacity-80"></div>
      <div className="relative bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100 h-full transform transition-transform duration-500 group-hover:translate-y-[-5px]">
        <div className="flex items-center mb-8">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-700 flex items-center justify-center shadow-lg mr-5">
            <Target size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-900">Our Mission</h3>
            <p className="text-purple-700/70 text-md">How we'll get there</p>
          </div>
        </div>
        
        <ul className="space-y-5 pl-2">
          {missionPoints.map((point, index) => (
            <PointListItem key={index} point={point} index={index} color="purple" />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
