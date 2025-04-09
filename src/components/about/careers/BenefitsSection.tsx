
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Brain } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-14"
    >
      <h3 className="text-xl font-semibold text-center mb-8 text-health-dark">What We Offer</h3>
      
      <div className="flex justify-between flex-wrap gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Award className="w-8 h-8 text-indigo-500" />
          <div>
            <h4 className="font-semibold">Competitive Compensation</h4>
            <p className="text-sm text-gray-600">Fair pay + equity options</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <Star className="w-8 h-8 text-indigo-500" />
          <div>
            <h4 className="font-semibold">Professional Growth</h4>
            <p className="text-sm text-gray-600">Mentorship + career pathing</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <Brain className="w-8 h-8 text-indigo-500" />
          <div>
            <h4 className="font-semibold">Cutting-edge Tech</h4>
            <p className="text-sm text-gray-600">Latest AI + Healthcare tools</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
