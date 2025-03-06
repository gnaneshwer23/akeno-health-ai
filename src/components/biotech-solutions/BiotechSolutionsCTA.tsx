
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const BiotechSolutionsCTA = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/30 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
          Transform Your Biotech & Pharma Research with AI
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
          With Akeno Health AI, biotech and pharmaceutical companies gain access to AI-powered solutions that transform drug discovery, optimize clinical trials, and enhance real-world data analytics—accelerating innovation and improving global healthcare outcomes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="primary" className="sm:w-auto w-full">
            Schedule a Demo
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" className="sm:w-auto w-full">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BiotechSolutionsCTA;
