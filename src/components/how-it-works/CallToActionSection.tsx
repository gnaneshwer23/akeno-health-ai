
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, HeartPulse, Activity } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6 text-center">
          The Future of Healthcare is Here
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-health-primary/10 text-center">
            <div className="text-health-primary mb-4">
              <Brain className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="font-medium mb-2">Proactive Care</h3>
            <p className="text-sm text-muted-foreground">Detect and address health issues before they become serious</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-health-primary/10 text-center">
            <div className="text-health-primary mb-4">
              <HeartPulse className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="font-medium mb-2">Personalized Medicine</h3>
            <p className="text-sm text-muted-foreground">Treatments tailored to your unique biological profile</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-health-primary/10 text-center">
            <div className="text-health-primary mb-4">
              <Activity className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="font-medium mb-2">Continuous Optimization</h3>
            <p className="text-sm text-muted-foreground">Real-time adjustments to maximize treatment effectiveness</p>
          </div>
        </div>
        
        <div className="p-6 mb-10 rounded-xl bg-health-primary/10 border border-health-primary/20 text-center">
          <p className="text-health-dark font-medium">
            Join us in shaping the future of medicine—where AI-driven precision healthcare transforms lives.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button className="bg-health-primary hover:bg-health-primary/90">
            Start your AI health journey
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToActionSection;
