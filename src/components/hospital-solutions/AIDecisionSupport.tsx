
import React from 'react';
import DecisionSupportFeaturesList from './decision-support/DecisionSupportFeaturesList';
import DecisionSupportDashboard from './decision-support/DecisionSupportDashboard';

const AIDecisionSupport = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <DecisionSupportDashboard />
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Solution 2
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              Improved Patient Outcomes with AI-Driven Decision Support
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Akeno Health empowers hospitals with real-time AI-driven insights, helping doctors, nurses, and administrators make faster, more informed decisions.
            </p>
            
            <DecisionSupportFeaturesList />
            
            <div className="p-6 bg-health-primary/10 border border-health-primary/10 rounded-lg shadow-inner mt-8">
              <p className="font-medium text-health-dark mb-2">Outcome:</p>
              <p className="text-muted-foreground">Reduce diagnostic errors, improve patient safety, and enhance overall healthcare quality with AI-powered decision support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDecisionSupport;
