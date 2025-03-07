
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';

const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 bg-gradient-to-tr from-pink-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-bl from-teal-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-600 font-medium mb-6 border border-indigo-200 shadow-sm">
            <Sparkles size={16} className="text-purple-500" />
            <span>Knowledge Hub</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Case Studies & Insights
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-indigo-900/70 max-w-3xl mb-10">
            Explore how Akeno Health AI is transforming healthcare through AI, quantum computing, 
            multi-omics analysis, and digital twin simulations with real-world case studies and 
            thought leadership content.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="primary" size="lg" as="Link" to="/contact" className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Get in Touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" as="Link" to="/quantum-computing" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
              Explore Quantum Computing
            </Button>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-indigo-100">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white flex items-center justify-center text-white font-medium shadow-md">AI</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white font-medium shadow-md">QC</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white font-medium shadow-md">DT</div>
            </div>
            <p className="text-sm text-indigo-700">Join <strong className="text-purple-700">5,000+</strong> healthcare professionals getting the latest insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
