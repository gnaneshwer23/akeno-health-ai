
import React from 'react';
import { Heart, Sparkles, ChevronDown, Clock, Globe, Shield, Cpu } from 'lucide-react';

export const AboutHero = () => {
  return (
    <section className="relative mb-16 px-6 pt-8 pb-16 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 left-10 w-64 h-64 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-health-primary/10 rounded-full blur-xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium animate-fade-in">
            <Heart size={16} className="text-health-primary" />
            <span>About Akeno Health AI</span>
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6 tracking-tight fade-up-1">
            Revolutionizing Healthcare with <span className="text-health-primary">AI</span> & <span className="text-health-secondary">Quantum Computing</span>
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-32 bg-gradient-to-r from-health-primary to-health-secondary fade-up-2"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-health-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed fade-up-3">
            Pioneering the future of precision healthcare through artificial intelligence, quantum computing, 
            multi-omics analysis, and data-driven medicine.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 fade-up-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-3">
                <Clock size={28} className="text-health-primary" />
              </div>
              <p className="text-health-dark/80 font-medium">Est. 2021</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-3">
                <Sparkles size={28} className="text-health-primary" />
              </div>
              <p className="text-health-dark/80 font-medium">AI-Driven Innovation</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-3">
                <Globe size={28} className="text-health-primary" />
              </div>
              <p className="text-health-dark/80 font-medium">Global Impact</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-3">
                <Shield size={28} className="text-health-primary" />
              </div>
              <p className="text-health-dark/80 font-medium">Precision Medicine</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-3">
                <Cpu size={28} className="text-health-primary" />
              </div>
              <p className="text-health-dark/80 font-medium">Quantum Computing</p>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center fade-up-5">
            <a href="#vision" className="flex flex-col items-center text-health-primary/70 hover:text-health-primary transition-colors">
              <span className="text-sm mb-2">Discover More</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(8).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-health-primary/20"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};
