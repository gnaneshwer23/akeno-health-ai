
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, TrendingUp, FlaskConical, Stethoscope, Pill } from 'lucide-react';
import { DIAGRAM_COLORS } from '../utils/diagramUtils';

const CoreSolution = () => {
  const aiModels = [
    { icon: <TrendingUp size={18} />, label: "Predictive AI", position: "top-[10%] left-[20%]" },
    { icon: <Search size={18} />, label: "Diagnostic AI", position: "top-[20%] right-[15%]" },
    { icon: <FlaskConical size={18} />, label: "Research AI", position: "bottom-[20%] left-[15%]" },
    { icon: <Stethoscope size={18} />, label: "Clinical AI", position: "bottom-[15%] right-[20%]" },
    { icon: <Pill size={18} />, label: "Pharma AI", position: "bottom-[35%] right-[10%]" },
  ];

  return (
    <div className="mx-auto py-8 relative">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-5 text-center">AI Processing Hub</h3>
      
      <motion.div 
        className="relative mx-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Main AI Hub */}
        <div className={`w-32 h-32 mx-auto rounded-xl border border-[${DIAGRAM_COLORS.primary}]/30 bg-[${DIAGRAM_COLORS.secondary}] shadow-md flex items-center justify-center relative z-10`}>
          <div className={`absolute inset-0 bg-gradient-to-br from-[${DIAGRAM_COLORS.secondary}] to-[${DIAGRAM_COLORS.secondary}] rounded-xl`} />
          <div className={`w-20 h-20 rounded-full bg-[${DIAGRAM_COLORS.secondary}] flex items-center justify-center`}>
            <Brain size={36} className={`text-[${DIAGRAM_COLORS.primary}]`} />
          </div>
        </div>
        
        {/* Label */}
        <div className={`text-center mt-4 font-semibold text-[${DIAGRAM_COLORS.primary}]`}>
          Akeno AI Core
        </div>
        
        {/* AI Models */}
        {aiModels.map((model, index) => (
          <motion.div 
            key={index}
            className={`absolute ${model.position} bg-white p-2 rounded-lg shadow-sm border border-[${DIAGRAM_COLORS.primary}]/20 flex items-center gap-2`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
          >
            <div className={`text-[${DIAGRAM_COLORS.primary}]`}>{model.icon}</div>
            <span className="text-xs font-medium">{model.label}</span>
          </motion.div>
        ))}
        
        {/* Decorative elements */}
        <div className={`absolute inset-0 border border-dashed border-[${DIAGRAM_COLORS.primary}]/30 rounded-xl rotate-6 -z-10`} />
        <div className={`absolute inset-0 border border-dashed border-[${DIAGRAM_COLORS.primary}]/30 rounded-xl -rotate-3 -z-10`} />
        
        {/* Circular data flow indicator */}
        <div className={`absolute -inset-4 border-2 border-dashed border-[${DIAGRAM_COLORS.primary}]/10 rounded-full animate-spin-slow`} style={{animationDuration: '30s'}} />
        <div className={`absolute -inset-8 border border-dashed border-[${DIAGRAM_COLORS.primary}]/5 rounded-full animate-spin-slow`} style={{animationDuration: '40s', animationDirection: 'reverse'}} />
      </motion.div>
    </div>
  );
};

export default CoreSolution;
