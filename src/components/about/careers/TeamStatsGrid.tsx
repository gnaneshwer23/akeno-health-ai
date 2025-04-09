
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Users, Target } from 'lucide-react';

export const TeamStatsGrid: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
    >
      <div className="bg-white rounded-lg p-6 shadow-sm border border-indigo-50 hover:shadow-md transition-shadow text-center">
        <BarChart size={28} className="mx-auto mb-3 text-purple-500" />
        <div className="text-3xl font-bold text-health-primary mb-1">35+</div>
        <p className="text-health-dark/70">Countries with team members</p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-indigo-50 hover:shadow-md transition-shadow text-center">
        <Users size={28} className="mx-auto mb-3 text-indigo-500" />
        <div className="text-3xl font-bold text-health-primary mb-1">40%</div>
        <p className="text-health-dark/70">Team with healthcare background</p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-indigo-50 hover:shadow-md transition-shadow text-center">
        <Target size={28} className="mx-auto mb-3 text-blue-500" />
        <div className="text-3xl font-bold text-health-primary mb-1">100%</div>
        <p className="text-health-dark/70">Committed to health equity</p>
      </div>
    </motion.div>
  );
};
