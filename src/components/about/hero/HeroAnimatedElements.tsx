
import React from 'react';
import { motion } from 'framer-motion';

export const HeroAnimatedElements = () => {
  const particleCount = 20; // Reduced for better performance
  const colorClasses = [
    "bg-purple-400/30", 
    "bg-indigo-400/30", 
    "bg-blue-400/30", 
    "bg-emerald-400/30", 
    "bg-amber-400/30",
    "bg-rose-400/30"
  ];

  return (
    <>
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(particleCount).fill(0).map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute rounded-full ${colorClasses[i % colorClasses.length]}`}
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15 - Math.random() * 15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, Math.random() * 0.4 + 0.8, 1]
            }}
            transition={{
              duration: Math.random() * 5 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating rings with gradient effect */}
      {[1, 2, 3].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute rounded-full opacity-10 border-4 border-health-primary/30"
          style={{
            width: `${150 + i * 100}px`,
            height: `${150 + i * 100}px`,
            left: `${45 + Math.random() * 10}%`,
            top: `${45 + Math.random() * 10}%`,
            transform: "translate(-50%, -50%)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Light beams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-40 h-[400px] bg-health-primary/5 rotate-45 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-[400px] bg-health-secondary/5 -rotate-45 rounded-full blur-3xl"></div>
      </div>
    </>
  );
};
