
import React from 'react';
import { motion } from 'framer-motion';

export const ConnectedDots = () => {
  return (
    <svg className="absolute inset-0 w-full h-full -z-10 opacity-10 pointer-events-none">
      <defs>
        <linearGradient id="visionLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {[...Array(8)].map((_, i) => (
        <g key={i}>
          <motion.circle
            cx={`${10 + i * 12}%`}
            cy={`${30 + (i % 4) * 15}%`}
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
          {i < 7 && (
            <motion.line
              x1={`${10 + i * 12}%`}
              y1={`${30 + (i % 4) * 15}%`}
              x2={`${10 + (i+1) * 12}%`}
              y2={`${30 + ((i+1) % 4) * 15}%`}
              stroke="url(#visionLineGradient)"
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
