
import React from 'react';
import { motion } from 'framer-motion';

interface ConnectionProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  animated?: boolean;
  dotted?: boolean;
  color?: string;
  delay?: number;
}

const Connection: React.FC<ConnectionProps> = ({ 
  start, 
  end, 
  animated = false, 
  dotted = false, 
  color = "#9b87f5", 
  delay = 0 
}) => (
  <svg 
    className="absolute pointer-events-none" 
    style={{ left: start.x, top: start.y, width: end.x - start.x, height: end.y - start.y }}
  >
    <motion.path
      d={`M0,0 C${(end.x - start.x) * 0.6},0 ${(end.x - start.x) * 0.4},${end.y - start.y} ${end.x - start.x},${end.y - start.y}`}
      fill="none"
      stroke={animated ? `url(#gradient-${color.replace('#', '')})` : color}
      strokeWidth="1.5"
      strokeOpacity="0.4"
      strokeDasharray={dotted ? "5,5" : "0"}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay }}
    />
    {animated && (
      <motion.circle 
        r="4" 
        fill={color}
        initial={{ offset: 0 }}
        animate={{ offset: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path={`M0,0 C${(end.x - start.x) * 0.6},0 ${(end.x - start.x) * 0.4},${end.y - start.y} ${end.x - start.x},${end.y - start.y}`}
        />
      </motion.circle>
    )}
  </svg>
);

export default Connection;
