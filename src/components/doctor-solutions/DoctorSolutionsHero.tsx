
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const DoctorSolutionsHero = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
          Doctor-Centered Solutions
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-health-dark mb-6 leading-tight">
          <span className="inline-block">AI-Powered Healthcare</span>{" "}
          <span className="inline-block">Solutions for Doctors</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          At Akeno Health AI, we empower healthcare providers with cutting-edge AI-driven solutions that enhance diagnostics, clinical decision-making, and patient monitoring.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="primary" className="sm:w-auto w-full">
            Explore Solutions
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" className="sm:w-auto w-full">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSolutionsHero;
