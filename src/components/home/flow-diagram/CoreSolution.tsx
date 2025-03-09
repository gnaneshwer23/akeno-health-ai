
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const CoreSolution = () => (
  <motion.div 
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="w-32 h-32 rounded-xl border border-[#9b87f5]/30 bg-white shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/10 to-[#7E69AB]/10 rounded-xl" />
      <div className="w-20 h-20 rounded-full bg-[#9b87f5]/15 flex items-center justify-center">
        <Brain size={36} className="text-[#7E69AB]" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-[#9b87f5]/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-[#7E69AB]/30 rounded-xl -rotate-3 -z-10" />
    <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#7E69AB] whitespace-nowrap">
      Akeno AI Platform
    </div>
  </motion.div>
);

export default CoreSolution;
