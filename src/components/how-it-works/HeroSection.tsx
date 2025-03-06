
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-health-light/50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
          Our Technology
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-health-dark mb-8 leading-tight">
          AI-Powered Precision Medicine
        </h1>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Transforming healthcare through <span className="font-medium">AI-driven diagnostics, multi-omics analysis</span>, and <span className="font-medium">real-time digital twin simulations</span> for personalized, data-driven healthcare.
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
