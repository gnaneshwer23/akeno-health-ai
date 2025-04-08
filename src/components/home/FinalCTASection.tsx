
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building, Play, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export const FinalCTASection: React.FC = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request Registered",
      description: "Thank you for your interest. A team member will contact you shortly to schedule a demo.",
    });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-primary/20 to-health-secondary/20 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-health-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-health-secondary/5 blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
          Join the Future of AI-Driven Healthcare
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Partner with Akeno Health to transform healthcare delivery, improve patient outcomes, and drive innovation across the healthcare ecosystem.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Button 
            size="lg" 
            className="text-white bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-primary/90 hover:to-health-secondary/90 flex gap-2"
            asChild
          >
            <Link to="/contact">
              <Building size={18} />
              Partner with Us
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-health-primary/30 hover:border-health-primary flex gap-2"
            onClick={handleDemo}
          >
            <Play size={18} />
            Book a Demo
          </Button>
          
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-health-primary hover:bg-white/90 flex gap-2"
            asChild
          >
            <Link to="/patient-solutions">
              <User size={18} />
              Try Akeno for Patients
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
