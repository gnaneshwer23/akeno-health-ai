
import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import { Check, ArrowRight, Sparkles, Shield, Activity, BarChart2, Brain, Cpu, Atom, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from './animated-logo';

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
      text: "Continuous Health Monitoring",
      icon: <Activity size={18} className="text-health-primary" />
    },
    {
      text: "AI-Driven Diagnostics",
      icon: <Brain size={18} className="text-health-primary" />
    },
    {
      text: "Clinical Trial Matching",
      icon: <FlaskConical size={18} className="text-health-primary" />
    },
    {
      text: "Digital Twin Technology",
      icon: <Cpu size={18} className="text-health-primary" />
    },
    {
      text: "Blockchain Health Records",
      icon: <Shield size={18} className="text-health-primary" />
    },
    {
      text: "Quantum Computing Solutions",
      icon: <Atom size={18} className="text-health-primary" />
    }
  ];
  
  return (
    <section ref={heroRef} className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 via-white/80 to-white"></div>
      
      {/* Colorful background shapes */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500 opacity-5 rounded-full blur-3xl parallax" data-speed="0.03"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl parallax" data-speed="0.02"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-2xl parallax" data-speed="0.04"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-40 left-20 w-24 h-24 border-2 border-health-primary/20 rounded-xl rotate-12 parallax" data-speed="0.05"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-health-secondary/20 rounded-full -rotate-12 parallax" data-speed="0.06"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-health-accent/30 rotate-45 parallax" data-speed="0.07"></div>
      
      {/* DNA helix animation - healthcare specific element */}
      <div className="absolute top-1/3 right-1/6 w-12 h-64 parallax" data-speed="0.04">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-4 h-4 rounded-full bg-health-primary/20"
            style={{ 
              top: `${i * 16}px`,
              left: `${Math.sin(i * 0.5) * 10}px`,
              animationDelay: `${i * 0.1}s`,
              animation: 'pulse 3s infinite ease-in-out'
            }}
          ></div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-4 h-4 rounded-full bg-health-secondary/20"
            style={{ 
              top: `${i * 16 + 8}px`,
              left: `${Math.sin((i + 0.5) * 0.5) * -10}px`,
              animationDelay: `${i * 0.1 + 0.05}s`,
              animation: 'pulse 3s infinite ease-in-out'
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Logo Animation */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <AnimatedLogo size="xl" className="mb-2 relative z-10" />
            <div className="absolute -inset-8 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
        
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium backdrop-blur-sm border border-health-primary/20">
          <Sparkles size={18} className="text-health-primary" />
          <span>The Future of AI-Driven Healthcare</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">Transforming Healthcare</span> with <span className="text-health-primary">AI</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-health-dark/80 mb-6">
          Predict • Prevent • Personalise • Empower
        </h2>
        
        <div className="flex justify-center mb-6">
          <div className="h-1.5 w-32 bg-gradient-to-r from-health-primary via-health-secondary to-health-accent rounded-full"></div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Pioneering the most advanced AI-driven healthcare ecosystem, delivering real-time disease prediction, hyper-personalised treatment recommendations, and seamless clinical connectivity.
        </p>
        
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-health-primary/5 to-health-secondary/5 rounded-2xl -z-10 blur-xl"></div>
          
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-left bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="mt-0.5 flex-shrink-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-health-primary/20 to-health-secondary/20 text-health-primary">
                  {feature.icon}
                </div>
              </div>
              <span className="text-health-dark font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <p className="text-lg text-health-primary/80 font-medium mb-8">
          Smarter Healthcare. Faster Treatments. Better Outcomes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            size="lg" 
            variant="primary" 
            className="sm:w-auto w-full group relative overflow-hidden"
            as="Link"
            to="/contact"
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
            className="sm:w-auto w-full relative overflow-hidden group border-health-primary/30 hover:border-health-primary/60"
            as="Link"
            to="/contact"
          >
            <span className="relative z-10">Request a Demo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="sm:w-auto w-full relative overflow-hidden group hover:bg-health-primary/5"
            as="Link"
            to="/contact"
          >
            <span className="relative z-10">Join Our Network</span>
            <span className="absolute inset-0 bg-gradient-to-r from-health-primary/5 to-health-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
        </div>
        
        {/* Animated typing text - healthcare specific element */}
        <div className="hidden md:flex items-center justify-center gap-2 text-health-primary/70 mb-6 font-mono text-sm">
          <span>AI analyzing</span>
          <span className="relative w-28 h-5 overflow-hidden">
            {["biomarkers", "genomics", "symptoms", "imaging", "vitals"].map((text, index) => (
              <span 
                key={index} 
                className="absolute inset-0 animate-fade-up" 
                style={{ 
                  animationDelay: `${index * 3}s`, 
                  animationDuration: '15s',
                  animationIterationCount: 'infinite'
                }}
              >
                {text}
              </span>
            ))}
          </span>
          <span>...</span>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-2 h-2 rounded-full bg-health-primary/60 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-health-secondary/60 animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="w-2 h-2 rounded-full bg-health-accent/60 animate-pulse" style={{animationDelay: '0.6s'}}></div>
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
