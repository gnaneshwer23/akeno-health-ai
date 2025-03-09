
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const CoreSolution = () => (
  <motion.div 
    className="relative flex items-center justify-center py-8"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="w-24 h-24 rounded-xl border border-health-primary/30 bg-white shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/10 to-[#7E69AB]/10 rounded-xl" />
      <div className="w-16 h-16 rounded-full bg-[#9b87f5]/15 flex items-center justify-center">
        <Brain size={28} className="text-[#7E69AB]" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-[#9b87f5]/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-[#7E69AB]/30 rounded-xl -rotate-3 -z-10" />
    <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-[#7E69AB]">
      Akeno AI Platform
    </div>
  </motion.div>
);

export default CoreSolution;
