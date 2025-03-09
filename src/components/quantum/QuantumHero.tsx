
import React from 'react';
import { Atom, Sparkles } from 'lucide-react';

export const QuantumHero = () => {
  return (
    <section className="relative mb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-700 font-medium">
            <Atom size={16} className="text-purple-600" />
            <span>Next-Generation Technology</span>
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Quantum Computing & AI – The Future of Healthcare Innovation
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          
          <p className="text-xl text-health-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Revolutionising Medicine, Drug Discovery, and Personalised Healthcare through unprecedented computational power to solve the most complex challenges in healthcare.
          </p>
        </div>
      </div>
      
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
