
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, FlaskConical, Tablet } from 'lucide-react';

const CoreSolution = () => (
  <motion.div 
    className="relative flex items-center justify-center py-8"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="w-24 h-24 rounded-xl border border-[#8571DD]/30 bg-[#F1F0FB] shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F0FB] to-[#F1F0FB] rounded-xl" />
      <div className="w-16 h-16 rounded-full bg-[#F1F0FB] flex items-center justify-center">
        <Brain size={28} className="text-[#8571DD]" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-[#8571DD]/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-[#8571DD]/30 rounded-xl -rotate-3 -z-10" />
    
    {/* AI Sub-modules */}
    <div className="absolute -top-2 -left-4 w-10 h-10 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
      <Activity size={18} className="text-[#8571DD]" />
    </div>
    <div className="absolute -top-2 -right-4 w-10 h-10 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
      <Tablet size={18} className="text-[#8571DD]" />
    </div>
    <div className="absolute -bottom-2 -left-4 w-10 h-10 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
      <FlaskConical size={18} className="text-[#8571DD]" />
    </div>
    
    <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-[#8571DD]">
      Akeno AI Platform
    </div>
  </motion.div>
);

export default CoreSolution;
