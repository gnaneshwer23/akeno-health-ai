
import React from 'react';
import { motion } from 'framer-motion';

export const ConnectingLine = () => {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-1 hidden lg:block">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-300 via-purple-400 to-blue-400"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Connection dots */}
      <motion.div 
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 h-4 w-4 bg-purple-400 rounded-full shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <motion.div 
          className="absolute inset-0 bg-purple-400 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-4 w-4 bg-indigo-400 rounded-full shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <motion.div 
          className="absolute inset-0 bg-indigo-400 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.div>
      
      <motion.div 
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 h-4 w-4 bg-blue-400 rounded-full shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <motion.div 
          className="absolute inset-0 bg-blue-400 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
        />
      </motion.div>
    </div>
  );
};
