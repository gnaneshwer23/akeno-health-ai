
import React from 'react';
import { ArrowRight, Play, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
      <Button
        size="lg"
        className="group bg-health-primary hover:bg-health-secondary w-full sm:w-auto"
        asChild
      >
        <Link to="/contact" className="flex items-center gap-2">
          Join the Future of AI Healthcare
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        className="border-health-primary/30 hover:border-health-primary/60 w-full sm:w-auto"
        onClick={handleDemo}
      >
        <div className="flex items-center gap-2">
          <Play size={16} className="text-health-primary" />
          Request a Demo
        </div>
      </Button>
      
      <Button
        variant="ghost"
        size="lg"
        className="hover:bg-health-primary/5 w-full sm:w-auto"
        onClick={handlePartnership}
      >
        <div className="flex items-center gap-2">
          <Users size={16} className="text-health-primary" />
          Partner With Us
        </div>
      </Button>
    </div>
  );
};
