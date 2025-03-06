
import React from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';

export const AboutHero = () => {
  return (
    <section className="relative mb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            <Heart size={16} className="text-health-primary" />
            <span>Our Story</span>
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6">About Akeno Health AI</h1>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
          
          <p className="text-xl text-health-dark/70 max-w-3xl mx-auto mb-10">
            Pioneering the future of precision healthcare through artificial intelligence and data-driven medicine.
          </p>
          
          <div className="hidden md:flex justify-center">
            <a href="#vision" className="flex flex-col items-center text-health-primary/70 hover:text-health-primary transition-colors">
              <span className="text-sm mb-2">Discover More</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
