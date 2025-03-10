
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUsConnectedDots: React.FC = () => {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-20">
      <defs>
        <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="var(--health-primary)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--health-primary)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--health-primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--health-secondary)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={`${20 + i * 15}%`}
          cy={`${30 + i * 8}%`}
          r="2"
          fill="url(#dotGradient)"
          animate={{
            opacity: [0.7, 0.9, 0.7],
            cx: [`${20 + i * 15}%`, `${22 + i * 15}%`, `${20 + i * 15}%`],
            cy: [`${30 + i * 8}%`, `${32 + i * 8}%`, `${30 + i * 8}%`],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut"
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.line
          key={`line-${i}`}
          x1={`${20 + i * 15}%`}
          y1={`${30 + i * 8}%`}
          x2={`${20 + (i+1) * 15}%`}
          y2={`${30 + (i+1) * 8}%`}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  );
};
