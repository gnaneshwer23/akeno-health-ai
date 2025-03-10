
import React from 'react';
import { motion } from 'framer-motion';

export const TeamSectionBackground: React.FC = () => {
  return (
    <>
      {/* Enhanced background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-600/5 rounded-full blur-xl -z-10"
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      
      {/* Connected dots network */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-5 pointer-events-none">
        <defs>
          <linearGradient id="teamLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <g key={i}>
            <motion.circle
              cx={`${10 + i * 9}%`}
              cy={`${30 + (i % 5) * 12}%`}
              r="2"
              fill={i % 2 === 0 ? "#6366f1" : "#8b5cf6"}
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
            {i < 9 && (
              <motion.line
                x1={`${10 + i * 9}%`}
                y1={`${30 + (i % 5) * 12}%`}
                x2={`${10 + (i+1) * 9}%`}
                y2={`${30 + ((i+1) % 5) * 12}%`}
                stroke="url(#teamLineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            )}
          </g>
        ))}
      </svg>
    </>
  );
};
