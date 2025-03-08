
import React from 'react';
import { AnimatedCanvas } from './AnimatedCanvas';
import { HumanBodySilhouette } from './HumanBodySilhouette';
import { Brain, Activity, Cpu, Atom, HeartPulse, Dna } from 'lucide-react';

const DefaultLogo: React.FC = () => {
  return (
    <>
      <AnimatedCanvas width={120} height={120} />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-health-primary via-health-secondary to-health-accent opacity-70 animate-pulse-slow"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/3 h-2/3 rounded-full border-t-2 border-l-2 border-white opacity-60 animate-rotate-slow"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 rounded-full bg-white opacity-90 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/5 h-2/5 flex items-center justify-center relative">
          {/* Human silhouette at center */}
          <HumanBodySilhouette />
          
          {/* Health data and AI nodes surrounding the human */}
          <div className="absolute inset-0">
            {/* Animated connections between human and health/AI elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <Brain size={12} className="text-health-secondary" />
              <div className="absolute h-5 w-px bg-health-secondary/60 bottom-full left-1/2 transform -translate-x-1/2"></div>
            </div>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <Activity size={12} className="text-health-primary" />
              <div className="absolute h-5 w-px bg-health-primary/60 top-full left-1/2 transform -translate-x-1/2"></div>
            </div>
            
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
              <HeartPulse size={12} className="text-health-accent" />
              <div className="absolute w-5 h-px bg-health-accent/60 right-full top-1/2 transform -translate-y-1/2"></div>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
              <Atom size={12} className="text-health-secondary" />
              <div className="absolute w-5 h-px bg-health-secondary/60 left-full top-1/2 transform -translate-y-1/2"></div>
            </div>
            
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              <Cpu size={12} className="text-health-primary" />
              <div className="absolute h-4 w-px bg-health-primary/60 rotate-45 bottom-full right-1/2"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
              <Dna size={12} className="text-health-accent" />
              <div className="absolute h-4 w-px bg-health-accent/60 rotate-45 top-full left-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DefaultLogo };
