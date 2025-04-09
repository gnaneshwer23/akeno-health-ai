
import React from 'react';
import { motion } from 'framer-motion';

export const HeroConnectedDots = () => {
  return (
    <svg className="absolute inset-0 w-full h-full -z-10 opacity-10 pointer-events-none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {[...Array(6)].map((_, i) => (
        <g key={i}>
          <motion.circle
            cx={`${15 + i * 15}%`}
            cy={`${20 + (i % 3) * 25}%`}
            r="2"
            fill={i % 2 === 0 ? "#6366f1" : "#8b5cf6"}
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
          {i < 5 && (
            <motion.line
              x1={`${15 + i * 15}%`}
              y1={`${20 + (i % 3) * 25}%`}
              x2={`${15 + (i+1) * 15}%`}
              y2={`${20 + ((i+1) % 3) * 25}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          )}
        </g>
      ))}
    </svg>
  );
};
