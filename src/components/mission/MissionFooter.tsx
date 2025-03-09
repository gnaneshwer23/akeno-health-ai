
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MissionFooter: React.FC = () => {
  return (
    <div className="text-center">
      <div className="mb-8 p-6 bg-gradient-to-r from-health-primary/5 to-health-secondary/5 backdrop-blur-sm border border-health-primary/10 rounded-xl max-w-4xl mx-auto shadow-sm">
        <p className="text-xl font-medium bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent">
          Join the Akeno Health revolution – bridging healthcare, AI, and patient-centric innovation.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          className="group bg-health-primary hover:bg-health-secondary"
          size="lg"
          asChild
        >
          <Link to="/how-it-works" className="flex items-center gap-2">
            Learn More
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-health-primary/30 hover:border-health-primary/60"
          asChild
        >
          <Link to="/contact" className="flex items-center gap-2">
            Join the Future of Healthcare
          </Link>
        </Button>
      </div>
    </div>
  );
};
