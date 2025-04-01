
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
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
        <CustomButton
          size="lg"
          variant="primary"
          to="/contact"
          withArrow
          className="w-full"
        >
          Join the Future of AI Healthcare
        </CustomButton>
        
        <CustomButton
          variant="outline"
          size="lg"
          className="border-indigo-300/30 hover:border-indigo-300/60 text-white w-full"
          onClick={handleDemo}
        >
          Request a Demo
        </CustomButton>
        
        <CustomButton
          variant="ghost"
          size="lg"
          className="hover:bg-indigo-500/10 text-white w-full"
          onClick={handlePartnership}
        >
          Partner With Us
        </CustomButton>
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
