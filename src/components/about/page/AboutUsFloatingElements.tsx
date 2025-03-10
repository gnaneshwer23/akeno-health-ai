
import React from 'react';

export const AboutUsFloatingElements: React.FC = () => {
  return (
    <>
      {/* Animated floating elements */}
      <div className="fixed top-[10%] left-[10%] w-20 h-20 rounded-xl bg-health-primary/10 animate-float -z-10" style={{animationDelay: '0.3s'}}></div>
      <div className="fixed top-[30%] right-[15%] w-24 h-24 rounded-full bg-health-secondary/10 animate-float -z-10" style={{animationDelay: '1.5s'}}></div>
      <div className="fixed top-[70%] left-[20%] w-16 h-16 rounded-2xl bg-health-accent/10 animate-float -z-10" style={{animationDelay: '2.8s'}}></div>
      <div className="fixed top-[45%] right-[8%] w-12 h-12 rounded-lg bg-purple-400/10 animate-float -z-10" style={{animationDelay: '4.2s'}}></div>
      <div className="fixed top-[85%] right-[25%] w-14 h-14 rounded-full bg-blue-400/10 animate-float -z-10" style={{animationDelay: '3.7s'}}></div>
    </>
  );
};
