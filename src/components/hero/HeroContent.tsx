
import React from 'react';
import { AnimatedLogo } from '../animated-logo';
import { Sparkles, Shield, Brain, Activity, Zap } from 'lucide-react';
import { HeroFeatureGrid } from './HeroFeatureGrid';
import { HeroButtons } from './HeroButtons';
import { HeroAnimatedTypingText } from './HeroAnimatedTypingText';

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
      
      <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium backdrop-blur-sm border border-health-primary/20">
        <Shield size={18} className="text-health-primary" />
        <span>Pioneering the Next Generation of AI Healthcare</span>
      </div>
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-health-primary/15 to-health-secondary/15 text-health-primary font-medium backdrop-blur-sm border border-health-primary/20">
        <span className="text-sm">Patented Technology</span>
        <span className="px-2 py-0.5 bg-health-accent text-white text-xs rounded-full font-bold">No. 439306</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
        <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">Transforming Healthcare</span> with <span className="text-health-primary">AI</span>
      </h1>
      
      <h2 className="text-xl md:text-2xl font-medium text-health-dark/80 mb-6">
        Predict • Prevent • Personalise • Empower
      </h2>
      
      <div className="flex justify-center mb-6">
        <div className="h-1.5 w-32 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent rounded-full"></div>
      </div>
      
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
        Pioneering the most advanced AI-driven healthcare ecosystem, delivering real-time disease prediction, hyper-personalised treatment recommendations, and seamless clinical connectivity.
      </p>
      
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
      
      <HeroFeatureGrid />
      
      <p className="text-lg text-health-primary/80 font-medium mb-8">
        Smarter Healthcare. Faster Treatments. Better Outcomes.
      </p>
      
      <HeroButtons />
      
      <div className="mt-6 text-sm text-health-dark/60 font-medium">
        Your Health, Your Data, Your Future – Powered by AI
      </div>
      
      <HeroAnimatedTypingText />
    </div>
  );
};
