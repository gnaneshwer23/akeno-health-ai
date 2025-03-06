
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
          The Future of AI-Powered Healthcare is Here!
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          At Akeno Health AI, we believe in <span className="font-medium">proactive, personalized, and AI-enhanced healthcare solutions</span> that transform patient lives, optimize therapies, and advance medical innovation. By combining <span className="font-medium">machine learning, biometrics, genomics, and continuous monitoring</span>, we create a comprehensive, AI-powered healthcare ecosystem that empowers individuals, supports clinicians, and accelerates pharmaceutical breakthroughs.
        </p>
        
        <div className="p-6 mb-10 rounded-xl bg-health-primary/10 border border-health-primary/20">
          <p className="text-health-dark font-medium">
            Join us in shaping the future of medicine—where AI-driven precision healthcare redefines disease prevention, treatment personalization, and long-term well-being.
          </p>
        </div>
        
        <Button size="lg" variant="primary">
          Join us in shaping the future of medicine
          <ArrowRight size={16} />
        </Button>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToActionSection;
