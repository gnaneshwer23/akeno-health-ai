
import React from 'react';
import { motion } from 'framer-motion';

export const HeroAnimatedElements = () => {
  return (
    <>
      {/* Animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(12).fill(0).map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute rounded-full ${
              i % 6 === 0 ? "bg-purple-400/30" : 
              i % 6 === 1 ? "bg-indigo-400/30" : 
              i % 6 === 2 ? "bg-blue-400/30" : 
              i % 6 === 3 ? "bg-emerald-400/30" : 
              i % 6 === 4 ? "bg-amber-400/30" :
              "bg-pink-400/30"
            }`}
            style={{
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.4, 0.8, 0.4]
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
