
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

const CaseStudiesHero = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-white to-health-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6">
            Case Studies & Blog Content
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            Explore how Akeno Health AI is transforming healthcare through AI, quantum computing, 
            multi-omics analysis, and digital twin simulations with real-world case studies and 
            thought leadership content.
          </p>
          <Button variant="primary" size="lg" as="Link" to="/contact">
            Get in Touch
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
