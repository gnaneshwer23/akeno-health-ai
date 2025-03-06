
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoctorSolutionsCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
          Transform Your Clinical Practice with AI
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          With Akeno Health AI, doctors and healthcare providers gain access to powerful AI-driven tools that optimize diagnostics, improve patient risk assessments, and enable continuous remote monitoring—leading to smarter, faster, and more effective patient care. By integrating AI with real-world clinical applications, we are transforming medicine into a more predictive, proactive, and precision-based system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="primary" as="Link" to="/contact">
            Get Started Now
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" as="Link" to="/contact">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSolutionsCTA;
