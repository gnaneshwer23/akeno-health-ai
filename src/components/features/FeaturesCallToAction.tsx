
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesCallToAction: React.FC = () => {
  return (
    <div className="text-center mb-12 relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-health-primary/20 to-transparent -z-10"></div>
      <p className="text-xl font-medium text-health-dark mb-8 inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-health-primary/10 shadow-sm">
        Akeno Health isn't just improving healthcare – we're building the world's smartest AI-powered healthcare system.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Button
          variant="primary"
          size="lg"
          as="Link"
          to="/contact"
          className="group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Join the AI Healthcare Revolution
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          as="Link"
          to="/contact"
          className="group border-health-primary/30 hover:border-health-primary/60"
        >
          Request a Demo
        </Button>
        
        <Button
          variant="ghost"
          size="lg"
          as="Link"
          to="/contact"
          className="group hover:bg-health-primary/5"
        >
          Partner With Us
        </Button>
      </div>
    </div>
  );
};
