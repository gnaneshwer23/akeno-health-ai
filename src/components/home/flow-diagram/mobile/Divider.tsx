
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface DividerProps {
  delay?: number;
}

const Divider = ({ delay = 0 }: DividerProps) => (
  <motion.div 
    className="flex justify-center py-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay }}
  >
    <ArrowDown size={20} className="text-[#8B5CF6]/50" />
  </motion.div>
);

export default Divider;
