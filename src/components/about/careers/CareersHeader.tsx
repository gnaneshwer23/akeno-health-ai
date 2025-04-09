
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export const CareersHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-health-dark">
        Careers & Culture
      </h2>
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-full text-health-primary font-medium">
          <Target size={18} /> Join a Mission-Driven, Multidisciplinary Team
        </div>
      </div>
      <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
        Whether you're a clinician, data scientist, engineer, or policy expert, 
        <span className="font-semibold text-health-primary"> your skills could help change global healthcare</span>. 
        We believe in:
      </p>
    </motion.div>
  );
};
