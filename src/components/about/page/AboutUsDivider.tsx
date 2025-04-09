
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUsDivider: React.FC = () => {
  return (
    <motion.div 
      className="relative py-8 overflow-hidden"
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
      
      {/* Enhanced divider element */}
      <div className="mt-6 max-w-screen-lg mx-auto">
        <div className="flex items-center gap-2 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
          <motion.div 
            className="w-3 h-3 rounded-full bg-indigo-500" 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="flex justify-center mt-6">
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-indigo-300"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
