
import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { toast } from 'sonner';

export const ActionButtons = () => {
  const handleJoinTeam = () => {
    toast.success("Join Team Request Received", {
      description: "Thank you for your interest in joining our team. We'll review your application and get back to you soon.",
      duration: 5000,
    });
  };
  
  const handlePartnership = () => {
    toast.success("Partnership Inquiry", {
      description: "Thank you for your interest in partnering with us. Our team will contact you shortly.",
      duration: 5000,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <CustomButton
        size="lg"
        variant="primary"
        onClick={handleJoinTeam}
        withArrow
        className="w-full sm:w-auto bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-secondary hover:to-health-primary transition-all duration-300"
      >
        Join Our Team
      </CustomButton>
      
      <CustomButton
        variant="outline"
        size="lg" 
        className="border-health-primary/30 hover:border-health-primary/60 bg-white hover:bg-white/90 w-full sm:w-auto transition-colors duration-300"
        onClick={handlePartnership}
        icon={<Users size={18} className="text-health-primary" />}
      >
        Become a Partner
      </CustomButton>
    </div>
  );
};
