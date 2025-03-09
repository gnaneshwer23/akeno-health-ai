
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
    <div className="w-36 h-36 rounded-xl border border-[#8571DD]/30 bg-[#F1F0FB] shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F0FB] to-[#F1F0FB] rounded-xl" />
      <div className="w-20 h-20 rounded-full bg-[#F1F0FB] flex items-center justify-center">
        <Brain size={42} className="text-[#8571DD]" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-[#8571DD]/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-[#8571DD]/30 rounded-xl -rotate-3 -z-10" />
    <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-base font-semibold text-[#8571DD] whitespace-nowrap">
      Akeno AI Platform
    </div>
    
    {/* Circular data flow indicator */}
    <div className="absolute -inset-8 border-2 border-dashed border-[#8571DD]/10 rounded-full animate-spin-slow" style={{animationDuration: '30s'}} />
    <div className="absolute -inset-12 border border-dashed border-[#8571DD]/5 rounded-full animate-spin-slow" style={{animationDuration: '40s', animationDirection: 'reverse'}} />
  </motion.div>
);

export default CoreSolution;
