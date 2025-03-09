
import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-health-light/20" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary text-sm font-medium mb-5">
            The Akeno Health Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-health-dark mb-6">Our Solutions</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Revolutionising Healthcare with AI-Powered Precision, Security, and Seamless Connectivity
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-3xl p-8 mb-16 border border-indigo-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-health-dark">Why Akeno Health is the Future of Healthcare</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white font-semibold text-xs">✓</div>
              <p className="text-health-dark/80">First-of-Its-Kind Fully AI-Driven Healthcare Ecosystem</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white font-semibold text-xs">✓</div>
              <p className="text-health-dark/80">Continuous, AI-Powered Disease Monitoring & Early Detection</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white font-semibold text-xs">✓</div>
              <p className="text-health-dark/80">Hyper-Personalised Treatment Plans via Digital Twin & Precision Medicine</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white font-semibold text-xs">✓</div>
              <p className="text-health-dark/80">AI & Quantum Computing-Driven Drug Discovery & Clinical Trials</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white font-semibold text-xs">✓</div>
              <p className="text-health-dark/80">Blockchain-Powered, Patient-Controlled Health Data Protection</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white font-semibold text-xs">✓</div>
              <p className="text-health-dark/80">Seamless Connectivity Between Patients, Doctors, and Pharma</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl font-medium text-health-dark mb-8">
            Akeno Health isn't just improving healthcare – we're building the world's smartest AI-powered healthcare system.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/contact"
              className="group"
            >
              Join the AI Healthcare Revolution
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              as="Link"
              to="/contact"
              className="group"
            >
              Request a Demo
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              as="Link"
              to="/contact"
              className="group"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
