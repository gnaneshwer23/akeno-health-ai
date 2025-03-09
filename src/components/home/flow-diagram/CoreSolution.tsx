
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { DIAGRAM_COLORS } from './utils/diagramUtils';

const CoreSolution = () => (
  <motion.div 
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className={`w-36 h-36 rounded-xl border border-[${DIAGRAM_COLORS.primary}]/30 bg-[${DIAGRAM_COLORS.secondary}] shadow-md flex items-center justify-center relative z-10`}>
      <div className={`absolute inset-0 bg-gradient-to-br from-[${DIAGRAM_COLORS.secondary}] to-[${DIAGRAM_COLORS.secondary}] rounded-xl`} />
      <div className={`w-20 h-20 rounded-full bg-[${DIAGRAM_COLORS.secondary}] flex items-center justify-center`}>
        <Brain size={42} className={`text-[${DIAGRAM_COLORS.primary}]`} />
      </div>
    </div>
    <div className={`absolute inset-0 border border-dashed border-[${DIAGRAM_COLORS.primary}]/30 rounded-xl rotate-6 -z-10`} />
    <div className={`absolute inset-0 border border-dashed border-[${DIAGRAM_COLORS.primary}]/30 rounded-xl -rotate-3 -z-10`} />
    <div className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-base font-semibold text-[${DIAGRAM_COLORS.primary}] whitespace-nowrap`}>
      Akeno AI Platform
    </div>
    
    {/* Circular data flow indicator */}
    <div className={`absolute -inset-8 border-2 border-dashed border-[${DIAGRAM_COLORS.primary}]/10 rounded-full animate-spin-slow`} style={{animationDuration: '30s'}} />
    <div className={`absolute -inset-12 border border-dashed border-[${DIAGRAM_COLORS.primary}]/5 rounded-full animate-spin-slow`} style={{animationDuration: '40s', animationDirection: 'reverse'}} />
  </motion.div>
);

export default CoreSolution;
