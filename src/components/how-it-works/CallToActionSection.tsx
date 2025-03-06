
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
          At Akeno Health AI, we believe in proactive, personalized, and AI-enhanced healthcare solutions that transform patient lives, optimize therapies, and advance medical innovation. By combining machine learning, biometrics, genomics, and continuous monitoring, we create a comprehensive, AI-powered healthcare ecosystem that empowers individuals, supports clinicians, and accelerates pharmaceutical breakthroughs.
        </p>
        
        <Button size="lg" variant="primary">
          Join us in shaping the future of medicine
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
