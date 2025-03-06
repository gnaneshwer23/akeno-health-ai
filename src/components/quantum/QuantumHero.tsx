
import React from 'react';
import { Atom, Sparkles } from 'lucide-react';

export const QuantumHero = () => {
  return (
    <section className="relative mb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            <Atom size={16} className="text-health-primary" />
            <span>Next-Generation Technology</span>
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6">Quantum Computing & Akeno Health AI</h1>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
          
          <p className="text-xl text-health-dark/70 max-w-3xl mx-auto mb-10">
            Redefining healthcare through the power of quantum computing, unlocking new possibilities in precision medicine, drug discovery, and AI-driven diagnostics.
          </p>
        </div>
      </div>
      
      <div className="absolute top-20 right-0 w-72 h-72 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
