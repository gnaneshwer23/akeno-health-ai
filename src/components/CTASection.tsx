
import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTYwIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTE2Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptLTMyIDBjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-health-primary/30 rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-health-secondary/30 rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
          Join the Future of Healthcare
        </h2>
        
        <p className="text-lg text-health-dark/80 max-w-3xl mx-auto mb-8">
          Akeno Health is revolutionising patient care, diagnostics, and medical innovation with cutting-edge AI technology.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-health-primary/10">
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Patients</h3>
            <p className="mb-4 text-health-dark/70">Looking for smarter healthcare with AI-powered continuous monitoring?</p>
            <Button variant="ghost" size="sm" as="Link" to="/patient-solutions" className="w-full justify-center group">
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-health-primary/10">
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Doctors</h3>
            <p className="mb-4 text-health-dark/70">Seeking AI-powered clinical insights and decision support tools?</p>
            <Button variant="ghost" size="sm" as="Link" to="/doctor-solutions" className="w-full justify-center group">
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-health-primary/10">
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Partners</h3>
            <p className="mb-4 text-health-dark/70">Ready to optimise healthcare solutions with our AI ecosystem?</p>
            <Button variant="ghost" size="sm" as="Link" to="/biotech-solutions" className="w-full justify-center group">
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <p className="text-xl font-medium text-health-dark mb-6">
          The future of AI healthcare starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            variant="primary"
            size="lg"
            as="Link"
            to="/contact"
            className="group"
          >
            Get Started
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            as="Link"
            to="/contact"
          >
            Request a Demo
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            as="Link"
            to="/contact"
          >
            Join Our Network
          </Button>
        </div>
        
        <p className="text-sm text-health-dark/60 mt-12">
          Akeno Health – Smarter, Faster, More Personalised Healthcare. Powered by AI.
        </p>
      </div>
    </section>
  );
};

export { CTASection };
