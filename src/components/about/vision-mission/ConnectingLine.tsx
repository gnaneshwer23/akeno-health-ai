
import React from 'react';
import { motion } from 'framer-motion';

export const ConnectingLine = () => {
  return (
    <motion.div 
      className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 to-purple-400 hidden lg:block"
      initial={{ height: 0 }}
      whileInView={{ height: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    ></motion.div>
  );
};
