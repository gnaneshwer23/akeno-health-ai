
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

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
          variant="primary"
          size="lg"
          as="Link"
          to="/how-it-works"
          className="group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Learn More
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-health-primary to-health-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          as="Link"
          to="/contact"
          className="border-health-primary/30 hover:border-health-primary/60"
        >
          Join the Future of Healthcare
        </Button>
      </div>
    </div>
  );
};
