
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const CTAButtons = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request Received",
      description: "Thank you for your interest. A team member will contact you shortly to schedule a demo.",
    });
  };
  
  const handlePartnership = () => {
    toast({
      title: "Partnership Inquiry",
      description: "Thank you for your interest in partnering with us. Our team will reach out to discuss collaboration opportunities.",
    });
  };

  const handleMainAction = () => {
    toast({
      title: "Getting Started",
      description: "Welcome to Akeno Health! We're excited to have you join our healthcare revolution.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-3">
        <CustomButton
          size="lg"
          variant="primary"
          className="w-full"
          onClick={handleMainAction}
          icon={<ArrowRight size={18} />}
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
