
import React from 'react';

export const HeroAnimatedTypingText: React.FC = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-2 text-health-primary/70 mb-6 font-mono text-sm">
      <span>AI analyzing</span>
      <span className="relative w-28 h-5 overflow-hidden">
        {["biomarkers", "genomics", "symptoms", "imaging", "vitals"].map((text, index) => (
          <span 
            key={index} 
            className="absolute inset-0 animate-fade-up" 
            style={{ 
              animationDelay: `${index * 3}s`, 
              animationDuration: '15s',
              animationIterationCount: 'infinite'
            }}
          >
            {text}
          </span>
        ))}
      </span>
      <span>...</span>
    </div>
  );
};
