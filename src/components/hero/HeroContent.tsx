
import React from 'react';
import { AnimatedLogo } from '../animated-logo';
import { Brain, Shield, Zap, Activity, Target, FlaskConical, Lock } from 'lucide-react';
import { HeroFeatureGrid } from './HeroFeatureGrid';
import { HeroButtons } from './HeroButtons';
import { HeroAnimatedTypingText } from './HeroAnimatedTypingText';
import { HeroDataFlow } from './HeroDataFlow';

export const HeroContent: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto text-center relative z-10">
      {/* Logo Animation */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <AnimatedLogo size="xl" className="mb-2 relative z-10" />
          <div className="absolute -inset-8 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-full blur-xl -z-10"></div>
        </div>
      </div>
      
      <div className="text-sm font-medium text-health-primary/80 mb-4">
        Patented Technology
      </div>
      
      <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium backdrop-blur-sm border border-health-primary/20">
        <Brain size={18} className="text-health-primary" />
        <span>AI That Understands You Before Disease Does</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
        <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">AI That Understands You</span> <span className="text-health-primary">Before Disease Does</span>
      </h1>
      
      <h2 className="text-xl md:text-2xl font-medium text-health-dark/80 mb-6">
        Hyper-personalised, predictive, and secure health intelligence – powered by Digital Twins, Quantum AI, and Real-World Data.
      </h2>
      
      <div className="flex justify-center mb-6">
        <div className="h-1.5 w-32 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent rounded-full"></div>
      </div>
      
      {/* Animated Data Flow Visualization */}
      <div className="mb-8">
        <HeroDataFlow />
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-health-primary/10">
          <Activity size={18} className="text-health-primary" />
          <span className="text-sm font-medium">Continuous Health Monitoring</span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-health-primary/10">
          <Brain size={18} className="text-health-secondary" />
          <span className="text-sm font-medium">AI-Driven Diagnostics</span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-health-primary/10">
          <Zap size={18} className="text-health-accent" />
          <span className="text-sm font-medium">Precision Medicine</span>
        </div>
      </div>
      
      <HeroButtons />
      
      <div className="mt-6 text-sm text-health-dark/60 font-medium">
        Your Health, Your Data, Your Future – Powered by AI
      </div>
      
      <HeroAnimatedTypingText />
    </div>
  );
};
