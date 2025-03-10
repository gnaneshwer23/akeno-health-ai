
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUsDivider: React.FC = () => {
  return (
    <motion.div 
      className="relative py-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-6 gap-1 h-2">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${
                index === 0 ? 'from-health-primary to-health-primary/80' :
                index === 1 ? 'from-health-secondary to-health-secondary/80' :
                index === 2 ? 'from-health-accent to-health-accent/80' :
                index === 3 ? 'from-purple-500 to-purple-400' :
                index === 4 ? 'from-blue-500 to-blue-400' :
                'from-green-500 to-green-400'
              } rounded-full`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scaleY: 1.5 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
