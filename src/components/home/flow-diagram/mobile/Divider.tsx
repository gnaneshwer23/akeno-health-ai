
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface DividerProps {
  delay?: number;
}

const Divider = ({ delay = 0 }: DividerProps) => (
  <motion.div 
    className="flex justify-center items-center my-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="relative h-12 flex flex-col items-center justify-center">
      <div className="h-full w-px bg-[#8571DD]/30"></div>
      <motion.div
        className="absolute text-[#8571DD]"
        initial={{ y: -5 }}
        animate={{ y: 5 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay }}
      >
        <ArrowDown size={16} />
      </motion.div>
    </div>
  </motion.div>
);

export default Divider;
