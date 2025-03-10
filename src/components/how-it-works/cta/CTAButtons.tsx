
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTAButtons = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-3">
        <Button
          size="lg"
          className="group bg-health-primary hover:bg-health-secondary w-full"
          asChild
        >
          <Link to="/contact" className="flex items-center justify-center gap-2">
            Join the Future of AI Healthcare
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="border-indigo-300/30 hover:border-indigo-300/60 text-white w-full"
          asChild
        >
          <Link to="/contact">Request a Demo</Link>
        </Button>
        
        <Button
          variant="ghost"
          size="lg"
          className="hover:bg-indigo-500/10 text-white w-full"
          asChild
        >
          <Link to="/contact">Partner With Us</Link>
        </Button>
      </div>
      
      <motion.p 
        className="text-indigo-200/70 italic text-center text-sm mt-4"
      >
        "The future of healthcare is here. Join thousands of patients and healthcare providers already benefiting from Akeno Health's innovations."
      </motion.p>
    </div>
  );
};

export default CTAButtons;
