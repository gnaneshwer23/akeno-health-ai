import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Brain, Activity, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const DoctorSolutionsCTA = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request",
      description: "Thank you for your interest in our doctor solutions. A team member will contact you shortly.",
    });
  };
  
  const handleLearnMore = () => {
    // This already links to how-it-works page, so we'll keep it as is
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-health-primary to-health-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern-grid opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Akeno Doctor Network
        </h2>
        
        <p className="text-xl font-light max-w-3xl mx-auto mb-10 text-blue-100">
          Harness the power of AI to enhance your expertise, not replace it. Join thousands of forward-thinking doctors using AI to revolutionize patient care.
        </p>
        
        <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Clock size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Save Time</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Brain size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Improve Accuracy</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Activity size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Enhance Patient Outcomes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
            <Shield size={28} className="text-blue-200 mb-3" />
            <p className="text-sm">Real-Time AI Support</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-white text-health-primary hover:bg-blue-50"
          >
            <Link to="/register">Sign Up Now <ArrowRight size={16} /></Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
            onClick={handleDemo}
          >
            Request a Demo
          </Button>
          
          <Button 
            variant="ghost" 
            asChild
            className="text-white hover:bg-white/10"
          >
            <Link to="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSolutionsCTA;
