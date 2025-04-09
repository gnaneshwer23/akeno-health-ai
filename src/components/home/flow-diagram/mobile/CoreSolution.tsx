
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, TrendingUp, FlaskConical, Stethoscope } from 'lucide-react';

const CoreSolution = () => {
  const aiModels = [
    { icon: <TrendingUp size={18} />, label: "Predictive AI", color: "#8571DD" },
    { icon: <Search size={18} />, label: "Diagnostic AI", color: "#8571DD" },
    { icon: <FlaskConical size={18} />, label: "Research AI", color: "#8571DD" },
    { icon: <Stethoscope size={18} />, label: "Clinical AI", color: "#8571DD" },
  ];

  return (
    <div className="py-4">
      <h3 className="text-sm font-semibold text-[#8571DD] mb-6 text-center">AI Processing Hub</h3>
      
      <motion.div 
        className="flex flex-col items-center justify-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Main AI Hub */}
        <motion.div
          className="relative w-24 h-24 rounded-full bg-[#F1F0FB] flex items-center justify-center shadow-md border border-[#8571DD]/20 z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Brain size={36} className="text-[#8571DD]" />
          <div className="absolute -inset-3 border border-dashed border-[#8571DD]/20 rounded-full" />
          <div className="absolute -inset-6 border border-dashed border-[#8571DD]/10 rounded-full" />
        </motion.div>
        
        <p className="text-sm font-medium text-[#1A1F2C] mt-1">Akeno AI Core</p>
        
        {/* AI Models */}
        <div className="grid grid-cols-2 gap-4 mt-4 w-full">
          {aiModels.map((model, index) => (
            <motion.div 
              key={index}
              className="bg-white p-3 rounded-lg shadow-sm border border-[#8571DD]/10 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
            >
              <div className="text-[#8571DD]">{model.icon}</div>
              <span className="text-xs font-medium whitespace-nowrap">{model.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CoreSolution;
