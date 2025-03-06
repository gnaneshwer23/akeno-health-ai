import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import { Check, ArrowRight, Sparkles, Shield, Activity, BarChart2, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.05');
        const xOffset = x * speed * 50;
        const yOffset = y * speed * 50;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const features = [
    {
      text: "AI-Powered Early Disease Detection",
      icon: <Activity size={16} className="text-health-primary" />
    },
    {
      text: "Personalized Medicine with Multi-Omics Integration",
      icon: <BarChart2 size={16} className="text-health-primary" />
    },
    {
      text: "Continuous AI Monitoring & Adaptive Therapy",
      icon: <Shield size={16} className="text-health-primary" />
    },
    {
      text: "Digital Twin Technology for Predictive Modelling",
      icon: <Sparkles size={16} className="text-health-primary" />
    },
    {
      text: "AI-Driven Insights & Preventive Strategies",
      icon: <Check size={16} className="text-health-primary" />
    },
    {
      text: "Neural Network-Based Health Optimization",
      icon: <Brain size={16} className="text-health-primary" />
    }
  ];
  
  return (
    <section ref={heroRef} className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl parallax" data-speed="0.03"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl parallax" data-speed="0.02"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-health-accent opacity-5 rounded-full blur-2xl parallax" data-speed="0.04"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(6).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-health-primary/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium gap-2 fade-up-1">
          <Sparkles size={16} />
          <span>The Future of Healthcare Is Here</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-health-dark mb-6 leading-tight fade-up-2">
          <span className="inline-block">Transforming Healthcare</span>{" "}
          <span className="inline-block relative">
            with AI
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-health-primary to-health-secondary opacity-70"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed fade-up-3">
          Imagine a world where diseases are predicted before symptoms appear, treatments are personalized based on your genetic and immune profile, and AI continuously adapts your healthcare plan—this is the future with Akeno Health AI.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 fade-up-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-left">
              <div className="mt-0.5 flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-health-primary/20 text-health-primary">
                  {feature.icon}
                </div>
              </div>
              <span className="text-health-dark">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 fade-up-5 mb-12">
          <Button 
            size="lg" 
            variant="primary" 
            className="sm:w-auto w-full group relative overflow-hidden"
            as="Link"
            to="/patient-solutions"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-health-primary to-health-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-health-primary/50 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-health-primary/50 animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="w-2 h-2 rounded-full bg-health-primary/50 animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 animate-pulse-slow">
        <span className="text-sm text-health-dark/70 mb-2">Scroll to explore</span>
        <div className="w-1 h-8 bg-gradient-to-b from-health-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export { Hero };
