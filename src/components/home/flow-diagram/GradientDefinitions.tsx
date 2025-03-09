
import React from 'react';

const GradientDefinitions = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient id="gradient-8571DD" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8571DD" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#8571DD" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#8571DD" stopOpacity="0.3" />
      </linearGradient>
      
      <linearGradient id="data-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8571DD" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B19EFF" stopOpacity="0.8" />
      </linearGradient>
      
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  </svg>
);

export default GradientDefinitions;
