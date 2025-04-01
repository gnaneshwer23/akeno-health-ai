
import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { Play, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const HeroButtons: React.FC = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request Registered",
      description: "Thank you for your interest. A team member will contact you shortly to schedule a demo.",
    });
  };
  
  const handleNetwork = () => {
    toast({
      title: "Network Registration",
      description: "Thank you for joining our network. Check your email for confirmation and next steps.",
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <CustomButton 
        size="lg" 
        variant="primary" 
        to="/contact"
        withArrow
        className="sm:w-auto w-full"
      >
        Get Started
      </CustomButton>
      
      <CustomButton 
        size="lg" 
        variant="outline" 
        className="sm:w-auto w-full border-health-primary/30 hover:border-health-primary/60"
        onClick={handleDemo}
        icon={<Play size={16} className="text-health-primary" />}
      >
        Request a Demo
      </CustomButton>
      
      <CustomButton 
        size="lg" 
        variant="ghost" 
        className="sm:w-auto w-full hover:bg-health-primary/5"
        onClick={handleNetwork}
        icon={<Users size={16} className="text-health-primary" />}
      >
        Join Our Network
      </CustomButton>
    </div>
  );
};
