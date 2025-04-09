
import React from 'react';
import { AnimatedCanvas } from './AnimatedCanvas';
import { HumanBodySilhouette } from './HumanBodySilhouette';
import { Brain, Activity, HeartPulse, Dna, Cpu, Atom } from 'lucide-react';
import { motion } from 'framer-motion';

const DefaultLogo: React.FC = () => {
  // Create positions for icons ensuring they stay within circle bounds
  const iconConfigs = [
    { icon: Brain, color: 'text-indigo-500', gradient: 'from-indigo-500/20 to-indigo-500/10' },
    { icon: Activity, color: 'text-blue-500', gradient: 'from-blue-500/20 to-blue-500/10' },
    { icon: HeartPulse, color: 'text-purple-500', gradient: 'from-purple-500/20 to-purple-500/10' },
    { icon: Dna, color: 'text-sky-500', gradient: 'from-sky-500/20 to-sky-500/10' },
    { icon: Cpu, color: 'text-violet-500', gradient: 'from-violet-500/20 to-violet-500/10' },
    { icon: Atom, color: 'text-blue-400', gradient: 'from-blue-400/20 to-blue-400/10' },
  ];

  return (
    <div className="relative w-full h-full">
      <AnimatedCanvas width={120} height={120} />
      
      {/* Main circular container */}
      <div className="absolute inset-0">
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-health-primary/20 via-health-secondary/15 to-health-accent/20 blur-sm"></div>
        
        {/* Icons distributed around the circle - with constrained radius */}
        {iconConfigs.map((config, index) => {
          // Use a smaller radius to ensure icons stay inside the circle
          const angle = (index * 60) * (Math.PI / 180); // 60 degrees spacing
          const radius = 38; // Reduced from 42 to keep icons inside
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          
          const Icon = config.icon;
          
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: 1
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
              }}
            >
              <div className={`p-1.5 rounded-full bg-gradient-to-br ${config.gradient} backdrop-blur-sm shadow-lg`}>
                <Icon size={14} className={`${config.color}`} />
              </div>
            </motion.div>
          );
        })}

        {/* Center human silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-1/3 h-1/3"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [0.95, 1, 0.95]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <HumanBodySilhouette />
          </motion.div>
        </div>

        {/* Connecting lines - with constrained radius */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {iconConfigs.map((_, index) => {
            const angle = (index * 60) * (Math.PI / 180);
            const radius = 38; // Reduced from 42 to match icon positions
            const endX = 50 + radius * Math.cos(angle);
            const endY = 50 + radius * Math.sin(angle);
            
            return (
              <motion.line
                key={`line-${index}`}
                x1="50"
                y1="50"
                x2={endX}
                y2={endY}
                stroke="url(#grad)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
              />
            );
          })}
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--health-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--health-accent)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export { DefaultLogo };
