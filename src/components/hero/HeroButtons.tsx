
import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { Play, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export const HeroButtons: React.FC = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request Registered",
      description: "Thank you for your interest. A team member will contact you shortly to schedule a demo.",
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <CustomButton 
        size="lg" 
        variant="primary" 
        to="/patient-solutions"
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
        icon={<Building size={16} className="text-health-primary" />}
      >
        Request a Demo
      </CustomButton>
    </div>
  );
};
