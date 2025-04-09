
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const InfographicHeader: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.span 
        className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 font-medium gap-2 border border-indigo-200/50 shadow-sm"
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 4px 20px rgba(99, 102, 241, 0.1)" 
        }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Activity size={16} className="text-indigo-600" />
        <span>Interactive Health Journey</span>
      </motion.span>
      
      <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
        Your Health Journey with <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">Akeno AI</span>
      </h2>
      
      <div className="flex justify-center mb-4">
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>
      
      <motion.p 
        className="text-lg text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        From wearables to wellness, see how our technology transforms your healthcare experience at every step
      </motion.p>
    </motion.div>
  );
};

export default InfographicHeader;
