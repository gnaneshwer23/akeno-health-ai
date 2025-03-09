
import React from 'react';
import { Sparkles } from 'lucide-react';

export const MissionHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary text-sm font-medium mb-5">
        <Sparkles size={16} className="mr-2" />
        AI-Powered Healthcare, Redefined
      </div>
      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent mb-6">What We Do</h3>
      <div className="w-24 h-1.5 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-6"></div>
      <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
        Akeno Health integrates cutting-edge AI, real-time health analytics, and blockchain security to revolutionise healthcare. Our platform provides:
      </p>
    </div>
  );
};
