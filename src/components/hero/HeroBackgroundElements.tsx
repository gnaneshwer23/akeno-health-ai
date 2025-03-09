
import React from 'react';

interface HeroBackgroundElementsProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

export const HeroBackgroundElements: React.FC<HeroBackgroundElementsProps> = ({ heroRef }) => {
  return (
    <>
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 via-white/80 to-white"></div>
      
      {/* Colorful background shapes */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500 opacity-5 rounded-full blur-3xl parallax" data-speed="0.03"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl parallax" data-speed="0.02"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-2xl parallax" data-speed="0.04"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-40 left-20 w-24 h-24 border-2 border-health-primary/20 rounded-xl rotate-12 parallax" data-speed="0.05"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-health-secondary/20 rounded-full -rotate-12 parallax" data-speed="0.06"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-health-accent/30 rotate-45 parallax" data-speed="0.07"></div>
      
      {/* DNA helix animation - healthcare specific element */}
      <div className="absolute top-1/3 right-1/6 w-12 h-64 parallax" data-speed="0.04">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-4 h-4 rounded-full bg-health-primary/20"
            style={{ 
              top: `${i * 16}px`,
              left: `${Math.sin(i * 0.5) * 10}px`,
              animationDelay: `${i * 0.1}s`,
              animation: 'pulse 3s infinite ease-in-out'
            }}
          ></div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-4 h-4 rounded-full bg-health-secondary/20"
            style={{ 
              top: `${i * 16 + 8}px`,
              left: `${Math.sin((i + 0.5) * 0.5) * -10}px`,
              animationDelay: `${i * 0.1 + 0.05}s`,
              animation: 'pulse 3s infinite ease-in-out'
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
