
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';

const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-health-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 top-40 w-72 h-72 bg-health-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-health-primary/10 text-health-primary font-medium mb-6">
            <Sparkles size={16} className="text-health-primary" />
            <span>Knowledge Hub</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6">
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              Case Studies & Insights
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10">
            Explore how Akeno Health AI is transforming healthcare through AI, quantum computing, 
            multi-omics analysis, and digital twin simulations with real-world case studies and 
            thought leadership content.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="primary" size="lg" as="Link" to="/contact" className="group">
              Get in Touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" as="Link" to="/quantum-computing">
              Explore Quantum Computing
            </Button>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center text-white font-medium">AI</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-white flex items-center justify-center text-white font-medium">QC</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-white flex items-center justify-center text-white font-medium">DT</div>
            </div>
            <p className="text-sm text-muted-foreground">Join <strong>5,000+</strong> healthcare professionals getting the latest insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
