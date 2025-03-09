
import React from 'react';
import { Button } from './Button';
import { ArrowRight, Sparkles, Activity, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from './animated-logo';

const Hero: React.FC = () => {
  const coreFeatures = [
    {
      text: "AI-Driven Diagnostics & Monitoring",
      icon: <Activity size={16} className="text-health-primary" />
    },
    {
      text: "Precision Medicine & Digital Twin",
      icon: <Brain size={16} className="text-health-primary" />
    },
    {
      text: "Secure Blockchain Health Records",
      icon: <Shield size={16} className="text-health-primary" />
    }
  ];
  
  return (
    <section className="pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 via-white/80 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Logo Animation */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <AnimatedLogo size="xl" className="mb-2 relative z-10" />
            <div className="absolute -inset-4 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium backdrop-blur-sm border border-health-primary/20">
          <Sparkles size={18} className="text-health-primary" />
          <span>The Future of AI-Driven Healthcare</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">Transforming Healthcare</span> with <span className="text-health-primary">AI</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-health-dark/80 mb-6">
          Predict • Prevent • Personalise • Empower
        </h2>
        
        <div className="flex justify-center mb-6">
          <div className="h-1.5 w-32 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent rounded-full"></div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Pioneering the most advanced AI-driven healthcare ecosystem, delivering real-time disease prediction, 
          hyper-personalised treatment recommendations, and seamless clinical connectivity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-left bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="mt-0.5 flex-shrink-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-health-primary/20 to-health-secondary/20 text-health-primary">
                  {feature.icon}
                </div>
              </div>
              <span className="text-health-dark font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            variant="primary" 
            className="sm:w-auto w-full group"
            as="Link"
            to="/contact"
          >
            Get Started
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="sm:w-auto w-full"
            as="Link"
            to="/how-it-works"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 animate-pulse-slow">
        <span className="text-sm text-health-dark/80 mb-2 font-medium">Your Health, Your Data, Your Future</span>
        <div className="w-1 h-10 bg-gradient-to-b from-health-primary via-health-secondary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export { Hero };
