
import React from 'react';
import { Brain, FlaskConical, Activity, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-health-light/50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
          <Sparkles size={16} className="text-health-primary" />
          <span>Our Technology</span>
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6 tracking-tight">
          Transforming Healthcare with <span className="text-health-primary">AI</span> & <span className="text-health-secondary">Precision Medicine</span>
        </h1>
        
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
        </div>
        
        <p className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          Harnessing AI-driven diagnostics, multi-omics analysis, and real-time digital twin simulations for personalized, data-driven healthcare.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-health-primary/10 w-full md:w-[30%] shadow-sm">
            <div className="text-health-primary mb-2">
              <Brain className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="font-medium text-lg mb-1">Early Detection</h3>
            <p className="text-sm text-muted-foreground">Identify disease risks years before symptoms appear</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-health-primary/10 w-full md:w-[30%] shadow-sm">
            <div className="text-health-primary mb-2">
              <FlaskConical className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="font-medium text-lg mb-1">Precision Therapy</h3>
            <p className="text-sm text-muted-foreground">Treatments tailored to your unique biological profile</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-health-primary/10 w-full md:w-[30%] shadow-sm">
            <div className="text-health-primary mb-2">
              <Activity className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="font-medium text-lg mb-1">Continuous Monitoring</h3>
            <p className="text-sm text-muted-foreground">Real-time adjustments to optimize your health outcomes</p>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
