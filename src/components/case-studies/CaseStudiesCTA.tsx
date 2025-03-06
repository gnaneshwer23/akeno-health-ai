
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
          Stay Updated & Join the AI Healthcare Revolution!
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Akeno Health AI is at the forefront of AI-powered medical breakthroughs, integrating quantum computing, 
          multi-omics analysis, and precision diagnostics into next-generation healthcare solutions. 
          Stay ahead with our expert insights, case studies, and in-depth articles!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="primary" as="Link" to="/contact">
            Subscribe to Our Blog
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" as="Link" to="/contact">
            <Mail size={16} />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;
