
import React from 'react';
import { Sparkles } from 'lucide-react';

export const FeaturesHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary text-sm font-medium mb-5">
        <Sparkles size={16} className="text-health-primary mr-2" />
        What We Do – AI-Powered Healthcare, Redefined
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-health-dark mb-6">Our Solutions</h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-6"></div>
      <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
        Akeno Health integrates cutting-edge AI, real-time health analytics, and blockchain security to revolutionise healthcare.
      </p>
    </div>
  );
};
