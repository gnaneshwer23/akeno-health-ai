
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const PatientSolutionsCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
          Experience the Power of AI in Healthcare Today
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          With Akeno Health AI, patients experience the future of healthcare—where AI transforms personal health monitoring, digital twin simulations revolutionize disease prediction, and real-time AI feedback enhances everyday well-being. By integrating advanced AI technology, predictive analytics, and real-time biometric monitoring, we empower individuals to make informed health decisions, optimize therapy outcomes, and improve long-term well-being.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="primary">
            Get Started Now
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientSolutionsCTA;
