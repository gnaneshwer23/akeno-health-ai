
import React from 'react';
import { Play, Users } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';

export const ActionButtons = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request Received",
      description: "Thank you for your interest. A team member will reach out to schedule your demo.",
    });
  };
  
  const handlePartnership = () => {
    toast({
      title: "Partnership Inquiry",
      description: "Thank you for your interest in partnering with us. Our team will contact you shortly.",
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <CustomButton
        size="lg"
        variant="primary"
        to="/contact"
        withArrow
        className="w-full sm:w-auto"
      >
        Join the Future of AI Healthcare
      </CustomButton>
      
      <CustomButton
        variant="outline"
        size="lg"
        className="border-health-primary/30 hover:border-health-primary/60 w-full sm:w-auto"
        onClick={handleDemo}
        icon={<Play size={16} className="text-health-primary" />}
      >
        Request a Demo
      </CustomButton>
      
      <CustomButton
        variant="ghost"
        size="lg"
        className="hover:bg-health-primary/5 w-full sm:w-auto"
        onClick={handlePartnership}
        icon={<Users size={16} className="text-health-primary" />}
      >
        Partner With Us
      </CustomButton>
    </div>
  );
};
