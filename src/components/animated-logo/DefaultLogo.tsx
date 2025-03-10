import React from 'react';
import { AnimatedCanvas } from './AnimatedCanvas';
import { HumanBodySilhouette } from './HumanBodySilhouette';
import { Brain, Activity, HeartPulse, Dna, Cpu, Atom, CircleDot } from 'lucide-react';
import { motion } from 'framer-motion';

const DefaultLogo: React.FC = () => {
  return (
    <>
      <AnimatedCanvas width={120} height={120} />
      
      {/* Background gradient circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-health-primary/40 via-health-secondary/30 to-health-accent/40"></div>
      </div>
      
      {/* Pulsing circle */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          scale: [0.85, 0.9, 0.85],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-3/4 h-3/4 rounded-full border-2 border-white/30"></div>
      </motion.div>
      
      {/* Human silhouette and icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-2/3 h-2/3">
          {/* Human silhouette at center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2">
              <HumanBodySilhouette />
            </div>
          </div>
          
          {/* AI Connecting dots */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-health-accent/50 rounded-full"
                style={{
                  left: `${50 + 35 * Math.cos(2 * Math.PI * i / 8)}%`,
                  top: `${50 + 35 * Math.sin(2 * Math.PI * i / 8)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          
          {/* Medical/Health icons arranged in a larger circle around the human */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain size={16} className="text-health-primary" />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/4 right-0 transform translate-x-full -translate-y-1/2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <Cpu size={16} className="text-health-secondary" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 right-0 transform translate-x-full translate-y-1/2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <Atom size={16} className="text-health-accent" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            >
              <Activity size={16} className="text-health-primary" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 left-0 transform -translate-x-full translate-y-1/2"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <HeartPulse size={16} className="text-health-secondary" />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/4 left-0 transform -translate-x-full -translate-y-1/2"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <Dna size={16} className="text-health-accent" />
            </motion.div>

            {/* AI Circuit Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="url(#circuit-gradient)"
                strokeWidth="0.5"
                strokeDasharray="4,4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--health-primary)" />
                  <stop offset="50%" stopColor="var(--health-secondary)" />
                  <stop offset="100%" stopColor="var(--health-accent)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Inner circle - transparent with subtle glow */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ 
          scale: [0.3, 0.32, 0.3],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm"></div>
      </motion.div>
      
      {/* Connecting lines between icons and human silhouette */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-20">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--health-primary)" />
              <stop offset="50%" stopColor="var(--health-secondary)" />
              <stop offset="100%" stopColor="var(--health-accent)" />
            </linearGradient>
          </defs>
          
          <motion.g
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="50" y1="50" x2="50" y2="15" stroke="url(#line-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="85" y2="37.5" stroke="url(#line-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="85" y2="62.5" stroke="url(#line-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="50" y2="85" stroke="url(#line-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="15" y2="62.5" stroke="url(#line-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="15" y2="37.5" stroke="url(#line-gradient)" strokeWidth="0.5" />
          </motion.g>
        </svg>
      </div>
    </>
  );
};

export { DefaultLogo };
