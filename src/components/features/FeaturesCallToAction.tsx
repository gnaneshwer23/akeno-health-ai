
import React from 'react';
import { Button } from '@/components/ui/button';
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
          size="lg"
          className="relative overflow-hidden bg-health-primary hover:bg-health-secondary group"
          asChild
        >
          <Link to="/contact" className="flex items-center gap-2">
            Join the AI Healthcare Revolution
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="group border-health-primary/30 hover:border-health-primary/60"
          asChild
        >
          <Link to="/contact">Request a Demo</Link>
        </Button>
        
        <Button
          variant="ghost"
          size="lg"
          className="group hover:bg-health-primary/5"
          asChild
        >
          <Link to="/contact">Partner With Us</Link>
        </Button>
      </div>
    </div>
  );
};
