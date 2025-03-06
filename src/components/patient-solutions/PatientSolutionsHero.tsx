
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Activity, BrainCircuit, Shield, Sparkles } from 'lucide-react';

const PatientSolutionsHero = () => {
  const benefits = [
    {
      icon: <Activity size={20} className="text-health-primary" />,
      text: "Continuous health monitoring"
    },
    {
      icon: <BrainCircuit size={20} className="text-health-primary" />,
      text: "AI-powered health insights"
    },
    {
      icon: <Shield size={20} className="text-health-primary" />,
      text: "Secure, private health data"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
          <Sparkles size={16} className="text-health-primary" />
          <span>Patient-Centered Solutions</span>
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6 tracking-tight">
          Empowering Patients with <span className="text-health-primary">AI</span> & <span className="text-health-secondary">Digital Health</span>
        </h1>
        
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
        </div>
        
        <p className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          At Akeno Health AI, we are redefining precision medicine by providing AI-driven solutions that empower patients with personalized healthcare experiences and preventive insights.
        </p>
        
        <div className="flex justify-center gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              {benefit.icon}
              <span className="text-sm font-medium text-health-dark">{benefit.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="primary" className="sm:w-auto w-full">
            Explore Solutions
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" className="sm:w-auto w-full">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientSolutionsHero;
