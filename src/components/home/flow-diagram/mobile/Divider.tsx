
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { DIAGRAM_COLORS } from '../utils/diagramUtils';

interface DividerProps {
  delay?: number;
}

const Divider = ({ delay = 0 }: DividerProps) => (
  <motion.div 
    className="flex justify-center items-center my-4"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
  >
    <div className={`w-px h-12 bg-gradient-to-b from-transparent via-[${DIAGRAM_COLORS.primary}]/30 to-transparent relative`}>
      <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[${DIAGRAM_COLORS.primary}]/70`}
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
