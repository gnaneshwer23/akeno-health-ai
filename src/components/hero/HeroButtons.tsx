
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <Button 
        size="lg" 
        className="sm:w-auto w-full group relative overflow-hidden bg-health-primary hover:bg-health-secondary"
        asChild
      >
        <Link to="/contact" className="flex items-center gap-2">
          Get Started
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="sm:w-auto w-full relative overflow-hidden group border-health-primary/30 hover:border-health-primary/60"
        onClick={handleDemo}
      >
        <div className="flex items-center gap-2">
          <Play size={16} className="text-health-primary" />
          Request a Demo
        </div>
      </Button>
      
      <Button 
        size="lg" 
        variant="ghost" 
        className="sm:w-auto w-full relative overflow-hidden group hover:bg-health-primary/5"
        onClick={handleNetwork}
      >
        <div className="flex items-center gap-2">
          <Users size={16} className="text-health-primary" />
          Join Our Network
        </div>
      </Button>
    </div>
  );
};
