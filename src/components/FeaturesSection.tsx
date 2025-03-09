
import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle, Shield, Brain, Activity, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      text: "First-of-Its-Kind Fully AI-Driven Healthcare Ecosystem",
      icon: <Brain className="text-white" size={14} />
    },
    {
      text: "Continuous, AI-Powered Disease Monitoring & Early Detection",
      icon: <Activity className="text-white" size={14} />
    },
    {
      text: "Hyper-Personalised Treatment Plans via Digital Twin & Precision Medicine",
      icon: <Sparkles className="text-white" size={14} />
    },
    {
      text: "AI & Quantum Computing-Driven Drug Discovery & Clinical Trials",
      icon: <CheckCircle className="text-white" size={14} />
    },
    {
      text: "Blockchain-Powered, Patient-Controlled Health Data Protection",
      icon: <Shield className="text-white" size={14} />
    },
    {
      text: "Seamless Connectivity Between Patients, Doctors, and Pharma",
      icon: <ArrowRight className="text-white" size={14} />
    }
  ];

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

        <div className="bg-gradient-to-r from-health-primary/5 to-health-secondary/5 rounded-3xl p-8 mb-16 border border-health-primary/10 shadow-lg backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Why Akeno Health is the Future of Healthcare</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-health-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-health-primary to-health-secondary flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <p className="text-health-dark/80 font-medium group-hover:text-health-primary transition-colors">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-health-primary/20 to-transparent -z-10"></div>
          <p className="text-xl font-medium text-health-dark mb-8 inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-health-primary/10 shadow-sm">
            Akeno Health isn't just improving healthcare – we're building the world's smartest AI-powered healthcare system.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/contact"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Join the AI Healthcare Revolution
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              as="Link"
              to="/contact"
              className="group border-health-primary/30 hover:border-health-primary/60"
            >
              Request a Demo
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              as="Link"
              to="/contact"
              className="group hover:bg-health-primary/5"
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
