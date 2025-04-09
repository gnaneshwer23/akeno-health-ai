
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Database, Brain, FlaskConical, 
  Activity, Zap, Lock
} from 'lucide-react';

const AnimatedJourneyFlow = () => {
  const steps = [
    { icon: <Smartphone size={24} />, label: "Data Collection", color: "bg-indigo-500" },
    { icon: <Brain size={24} />, label: "AI Risk Detection", color: "bg-purple-500" },
    { icon: <Database size={24} />, label: "Clinical Intelligence", color: "bg-blue-500" },
    { icon: <FlaskConical size={24} />, label: "Digital Twin", color: "bg-cyan-500" },
    { icon: <Activity size={24} />, label: "Adaptive Care", color: "bg-teal-500" },
    { icon: <Zap size={24} />, label: "Trial Matching", color: "bg-pink-500" },
    { icon: <Lock size={24} />, label: "Blockchain Security", color: "bg-amber-500" }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-health-dark">
          The Complete Journey - From Wearables to Wellness
        </h3>
        
        {/* Flow diagram for larger screens */}
        <div className="hidden lg:block relative pt-10 pb-16">
          {/* Horizontal connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 transform -translate-y-1/2"></div>
          
          {/* Step circles */}
          <div className="flex justify-between relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${step.color} text-white shadow-lg`}
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {step.icon}
                </motion.div>
                <span className="mt-3 text-sm font-medium">{step.label}</span>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="absolute bottom-0 transform translate-y-full"
                >
                  <div className="h-8 w-px bg-gray-300"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Animated particle along the flow */}
          <motion.div
            className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-white shadow-md border-2 border-health-primary transform -translate-y-1/2"
            initial={{ left: "0%" }}
            animate={{ 
              left: "100%",
              transition: { duration: 5, repeat: Infinity, ease: "linear" }
            }}
          />
        </div>
        
        {/* Mobile view - vertical flow */}
        <div className="lg:hidden">
          <div className="relative pl-12">
            {/* Vertical connecting line */}
            <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-amber-400"></div>
            
            {/* Step circles */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative mb-8 z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${step.color} text-white shadow-md`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.icon}
                  </motion.div>
                  <span className="font-medium">{step.label}</span>
                </div>
                
                {/* Animated particle for mobile */}
                {index === 0 && (
                  <motion.div
                    className="absolute top-6 left-6 w-3 h-3 rounded-full bg-white shadow-md border-2 border-health-primary transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ top: "0%" }}
                    animate={{ 
                      top: "700%",
                      transition: { duration: 5, repeat: Infinity, ease: "linear" }
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-medium text-health-dark">
            Akeno Health seamlessly connects every step of your healthcare journey with AI-powered precision.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedJourneyFlow;
