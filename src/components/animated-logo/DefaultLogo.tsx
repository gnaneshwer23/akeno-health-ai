
import React from 'react';
import { AnimatedCanvas } from './AnimatedCanvas';
import { HumanBodySilhouette } from './HumanBodySilhouette';
import { Brain, Activity, Cpu, Atom, HeartPulse, Dna } from 'lucide-react';
import { motion } from 'framer-motion';

const DefaultLogo: React.FC = () => {
  return (
    <>
      <AnimatedCanvas width={120} height={120} />
      
      {/* Background pulsing circle */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0.7 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [0.9, 1, 0.9]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-health-primary via-health-secondary to-health-accent"></div>
      </motion.div>
      
      {/* Rotating circle */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear"
        }}
      >
        <div className="w-2/3 h-2/3 rounded-full border-t-2 border-l-2 border-white opacity-60"></div>
      </motion.div>
      
      {/* Pulsing inner circle */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="w-1/2 h-1/2 rounded-full bg-white"></div>
      </motion.div>
      
      {/* Human silhouette container with its own animation */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.03, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="w-2/5 h-2/5 flex items-center justify-center relative">
          {/* Human silhouette at center */}
          <HumanBodySilhouette />
          
          {/* Health data and AI nodes surrounding the human */}
          <div className="absolute inset-0">
            {/* Animated connections between human and health/AI elements */}
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain size={12} className="text-health-secondary" />
              <motion.div 
                className="absolute h-5 w-px bg-health-secondary/60 bottom-full left-1/2 transform -translate-x-1/2"
                animate={{ height: [20, 22, 20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <Activity size={12} className="text-health-primary" />
              <motion.div 
                className="absolute h-5 w-px bg-health-primary/60 top-full left-1/2 transform -translate-x-1/2"
                animate={{ height: [20, 22, 20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full"
              animate={{ x: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <HeartPulse size={12} className="text-health-accent" />
              <motion.div 
                className="absolute w-5 h-px bg-health-accent/60 right-full top-1/2 transform -translate-y-1/2"
                animate={{ width: [20, 22, 20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full"
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            >
              <Atom size={12} className="text-health-secondary" />
              <motion.div 
                className="absolute w-5 h-px bg-health-secondary/60 left-full top-1/2 transform -translate-y-1/2"
                animate={{ width: [20, 22, 20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
              animate={{ 
                x: [0, 1, 0],
                y: [0, -1, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <Cpu size={12} className="text-health-primary" />
              <motion.div 
                className="absolute h-4 w-px bg-health-primary/60 rotate-45 bottom-full right-1/2"
                animate={{ height: [16, 18, 16] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"
              animate={{ 
                x: [0, -1, 0],
                y: [0, 1, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <Dna size={12} className="text-health-accent" />
              <motion.div 
                className="absolute h-4 w-px bg-health-accent/60 rotate-45 top-full left-1/2"
                animate={{ height: [16, 18, 16] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { DefaultLogo };
