
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <Button 
        size="lg" 
        className="sm:w-auto w-full group relative overflow-hidden bg-health-primary hover:bg-health-secondary"
        asChild
      >
        <Link to="/contact" className="flex items-center gap-2">
          Get Started
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="sm:w-auto w-full relative overflow-hidden group border-health-primary/30 hover:border-health-primary/60"
        asChild
      >
        <Link to="/contact" className="flex items-center gap-2">
          <Play size={16} className="text-health-primary" />
          Request a Demo
        </Link>
      </Button>
      
      <Button 
        size="lg" 
        variant="ghost" 
        className="sm:w-auto w-full relative overflow-hidden group hover:bg-health-primary/5"
        asChild
      >
        <Link to="/contact" className="flex items-center gap-2">
          <Users size={16} className="text-health-primary" />
          Join Our Network
        </Link>
      </Button>
    </div>
  );
};
