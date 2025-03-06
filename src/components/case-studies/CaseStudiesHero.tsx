
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-white to-health-light/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-health-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 top-40 w-72 h-72 bg-health-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block bg-health-light/80 text-health-primary px-4 py-1 rounded-full mb-6 border border-health-primary/10">
            <span className="text-sm font-medium">Knowledge Sharing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6 fade-up-1">
            Case Studies & Blog Content
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 fade-up-2">
            Explore how Akeno Health AI is transforming healthcare through AI, quantum computing, 
            multi-omics analysis, and digital twin simulations with real-world case studies and 
            thought leadership content.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center fade-up-3">
            <Button variant="primary" size="lg" as="Link" to="/contact">
              Get in Touch
              <ArrowRight size={16} />
            </Button>
            
            <Button variant="outline" size="lg" as="Link" to="/quantum-computing">
              Explore Quantum Computing
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-12 fade-up-4">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white font-medium">AI</div>
              <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white font-medium">QC</div>
              <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white font-medium">DT</div>
            </div>
            <p className="text-sm text-muted-foreground">Join 5,000+ healthcare professionals getting the latest insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
