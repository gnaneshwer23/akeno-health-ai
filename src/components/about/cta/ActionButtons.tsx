
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

export const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <Button
        variant="primary"
        size="lg"
        as="Link"
        to="/contact"
        className="group"
      >
        Join the Future of AI Healthcare
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        as="Link"
        to="/contact"
      >
        Request a Demo
      </Button>
      
      <Button
        variant="ghost"
        size="lg"
        as="Link"
        to="/contact"
      >
        Partner With Us
      </Button>
    </div>
  );
};
