
import React from 'react';
import { motion } from 'framer-motion';
import { DiagramCoordinates } from './utils/diagramUtils';

interface ConnectionProps {
  start: DiagramCoordinates;
  end: DiagramCoordinates;
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
  color = "#8571DD", 
  delay = 0 
}) => {
  // Calculate width and height
  const width = end.x - start.x;
  const height = end.y - start.y;
  
  // Determine direction for proper curve
  const isGoingUp = end.y < start.y;
  const isGoingRight = end.x > start.x;
  
  // Calculate control points for bezier curve
  let controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y;
  
  if (isGoingRight) {
    controlPoint1X = start.x + width * 0.4;
    controlPoint2X = start.x + width * 0.6;
  } else {
    controlPoint1X = start.x - width * 0.4;
    controlPoint2X = start.x - width * 0.6;
  }
  
  if (isGoingUp) {
    controlPoint1Y = start.y - Math.abs(height) * 0.1;
    controlPoint2Y = end.y + Math.abs(height) * 0.1;
  } else {
    controlPoint1Y = start.y + Math.abs(height) * 0.1;
    controlPoint2Y = end.y - Math.abs(height) * 0.1;
  }
  
  // Create path for SVG
  const path = `M${0},${0} C${controlPoint1X - start.x},${controlPoint1Y - start.y} ${controlPoint2X - start.x},${controlPoint2Y - start.y} ${width},${height}`;

  return (
    <svg 
      className="absolute pointer-events-none" 
      style={{ left: start.x, top: start.y, width: Math.abs(width), height: Math.abs(height) }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.4"
        strokeDasharray={dotted ? "5,5" : "0"}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay }}
      />
      {animated && (
        <motion.circle 
          r="3" 
          fill={color}
          opacity="0.7"
          initial={{ offset: 0 }}
          animate={{ offset: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay }}
        >
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path={path}
          />
        </motion.circle>
      )}
    </svg>
  );
};

export default Connection;
