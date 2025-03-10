
import React from 'react';
import { AnimatedCanvas } from './AnimatedCanvas';
import { HumanBodySilhouette } from './HumanBodySilhouette';
import { Brain, Activity, HeartPulse, Dna, Cpu, Atom, CircleDot } from 'lucide-react';
import { motion } from 'framer-motion';

const DefaultLogo: React.FC = () => {
  // Define a fixed radius for all icons around the silhouette
  const fixedRadius = 35;
  
  // Create positions for icons at equal distances around a circle
  const iconPositions = [
    { icon: <Brain size={16} className="text-health-primary" />, angle: 0 },
    { icon: <Cpu size={16} className="text-health-secondary" />, angle: 60 },
    { icon: <Atom size={16} className="text-health-accent" />, angle: 120 },
    { icon: <Activity size={16} className="text-health-primary" />, angle: 180 },
    { icon: <HeartPulse size={16} className="text-health-secondary" />, angle: 240 },
    { icon: <Dna size={16} className="text-health-accent" />, angle: 300 },
  ];

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
          
          {/* Connecting dots - small dots that appear and disappear between the icons and center */}
          <div className="absolute inset-0">
            {iconPositions.map((_, index) => (
              <React.Fragment key={`dots-${index}`}>
                {[...Array(3)].map((__, dotIndex) => {
                  const angle = iconPositions[index].angle * Math.PI / 180;
                  const dotDistance = fixedRadius * (dotIndex + 1) / 4; // Position dots along the path
                  return (
                    <motion.div
                      key={`dot-${index}-${dotIndex}`}
                      className="absolute w-1 h-1 bg-health-accent/70 rounded-full"
                      style={{
                        left: `${50 + dotDistance * Math.cos(angle)}%`,
                        top: `${50 + dotDistance * Math.sin(angle)}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3 + dotIndex * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          
          {/* Medical/Health icons arranged in a circle at fixed distance around the human */}
          <div className="absolute inset-0">
            {iconPositions.map((item, index) => {
              const angle = item.angle * Math.PI / 180;
              return (
                <motion.div 
                  key={`icon-${index}`}
                  className="absolute"
                  style={{
                    left: `${50 + fixedRadius * Math.cos(angle)}%`,
                    top: `${50 + fixedRadius * Math.sin(angle)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{ 
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
              );
            })}
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
          
          {iconPositions.map((item, index) => {
            const angle = item.angle * Math.PI / 180;
            const endX = 50 + fixedRadius * Math.cos(angle);
            const endY = 50 + fixedRadius * Math.sin(angle);
            
            return (
              <motion.line
                key={`line-${index}`}
                x1="50"
                y1="50"
                x2={endX}
                y2={endY}
                stroke="url(#line-gradient)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  strokeDashoffset: [0, -10]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              />
            );
          })}
        </svg>
      </div>
    </>
  );
};

export { DefaultLogo };
