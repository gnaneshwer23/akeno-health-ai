
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, TrendingUp, FlaskConical, Stethoscope, Pill } from 'lucide-react';
import { DIAGRAM_COLORS } from './utils/diagramUtils';

const CoreSolution = () => {
  const aiModels = [
    { icon: <TrendingUp size={20} />, label: "Predictive AI", x: -55, y: -45 },
    { icon: <Search size={20} />, label: "Diagnostic AI", x: 55, y: -45 },
    { icon: <FlaskConical size={20} />, label: "Research AI", x: -55, y: 45 },
    { icon: <Stethoscope size={20} />, label: "Clinical AI", x: 55, y: 45 },
    { icon: <Pill size={20} />, label: "Pharma AI", x: 0, y: 75 },
  ];

  return (
    <motion.div 
      className="relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Main AI Hub */}
      <div className="w-36 h-36 rounded-xl border border-[#8571DD]/30 bg-[#F1F0FB] shadow-md flex items-center justify-center relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F1F0FB] to-[#F1F0FB] rounded-xl" />
        <div className="w-20 h-20 rounded-full bg-[#F1F0FB] flex items-center justify-center">
          <Brain size={42} className="text-[#8571DD]" />
        </div>
      </div>
      
      {/* Label */}
      <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-base font-semibold text-[#8571DD] whitespace-nowrap">
        Akeno AI Platform
      </div>
      
      {/* AI Models */}
      {aiModels.map((model, index) => (
        <motion.div 
          key={index}
          className="absolute bg-white p-2 rounded-lg shadow-sm border border-[#8571DD]/20 flex items-center gap-2"
          style={{ 
            left: '50%', 
            top: '50%', 
            transform: `translate(${model.x}px, ${model.y}px)` 
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
        >
          <div className="text-[#8571DD]">{model.icon}</div>
          <span className="text-xs font-medium whitespace-nowrap">{model.label}</span>
        </motion.div>
      ))}
      
      {/* Decorative elements */}
      <div className="absolute inset-0 border border-dashed border-[#8571DD]/30 rounded-xl rotate-6 -z-10" />
      <div className="absolute inset-0 border border-dashed border-[#8571DD]/30 rounded-xl -rotate-3 -z-10" />
      
      {/* Circular data flow indicator */}
      <div className="absolute -inset-8 border-2 border-dashed border-[#8571DD]/10 rounded-full animate-spin-slow" style={{animationDuration: '30s'}} />
      <div className="absolute -inset-12 border border-dashed border-[#8571DD]/5 rounded-full animate-spin-slow" style={{animationDuration: '40s', animationDirection: 'reverse'}} />
    </motion.div>
  );
};

export default CoreSolution;
