
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CTAButtons = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request Received",
      description: "Thank you for your interest. A team member will contact you to schedule a demo.",
    });
  };
  
  const handlePartnership = () => {
    toast({
      title: "Partnership Inquiry",
      description: "We're excited about potential collaboration. A team member will reach out shortly.",
    });
  };

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
          onClick={handleDemo}
        >
          Request a Demo
        </Button>
        
        <Button
          variant="ghost"
          size="lg"
          className="hover:bg-indigo-500/10 text-white w-full"
          onClick={handlePartnership}
        >
          Partner With Us
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
