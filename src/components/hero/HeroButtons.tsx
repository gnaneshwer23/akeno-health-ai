
import React from 'react';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
      <Button 
        size="lg" 
        variant="primary" 
        className="sm:w-auto w-full group relative overflow-hidden"
        as="Link"
        to="/contact"
      >
        <span className="relative z-10 flex items-center gap-2">
          Get Started
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-health-primary to-health-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="sm:w-auto w-full relative overflow-hidden group border-health-primary/30 hover:border-health-primary/60"
        as="Link"
        to="/contact"
      >
        <span className="relative z-10">Request a Demo</span>
        <span className="absolute inset-0 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </Button>
      <Button 
        size="lg" 
        variant="ghost" 
        className="sm:w-auto w-full relative overflow-hidden group hover:bg-health-primary/5"
        as="Link"
        to="/contact"
      >
        <span className="relative z-10">Join Our Network</span>
        <span className="absolute inset-0 bg-gradient-to-r from-health-primary/5 to-health-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </Button>
    </div>
  );
};
