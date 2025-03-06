
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-health-light/50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium fade-up-1">
          Our Technology
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-health-dark mb-8 leading-tight fade-up-2">
          Transforming Healthcare with AI-Powered Precision Medicine
        </h1>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed fade-up-3">
          At Akeno Health AI, we are redefining healthcare by integrating <span className="font-medium">AI-driven diagnostics, multi-omics analysis, quantum computing, and real-time digital twin simulations</span>. Our goal is to create a highly personalized, data-driven healthcare experience.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-health-primary/10 max-w-3xl mx-auto mb-10 text-left shadow-sm fade-up-4">
          <p className="text-muted-foreground leading-relaxed">
            Our <span className="font-medium">AI-powered platform</span> combines <span className="font-medium">deep learning, predictive analytics, and real-time health tracking</span> to empower patients, clinicians, and researchers with actionable insights. By analyzing vast datasets from <span className="font-medium">wearables, genomics, and multi-omics sources</span>, we provide early disease detection, precision therapies, and adaptive care.
          </p>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
