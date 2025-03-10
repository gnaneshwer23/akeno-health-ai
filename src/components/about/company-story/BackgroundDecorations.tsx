
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundDecorations: React.FC = () => {
  return (
    <>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-health-light/10 to-white -z-10"></div>
      
      {/* AI-inspired pattern in background */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 5 === 0 ? "bg-amber-400/30" : 
              i % 5 === 1 ? "bg-indigo-400/30" : 
              i % 5 === 2 ? "bg-purple-400/30" : 
              i % 5 === 3 ? "bg-emerald-400/30" : 
              "bg-blue-400/30"
            }`}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.7, 0.3]
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
    </>
  );
};
