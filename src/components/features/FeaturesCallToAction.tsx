
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesCallToAction: React.FC = () => {
  return (
    <div className="text-center mb-20 relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-health-primary/20 to-transparent -z-10"></div>
      
      <div className="bg-white/90 backdrop-blur-sm px-6 py-8 rounded-xl border border-health-primary/10 shadow-lg max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-health-primary/10 text-health-primary text-sm font-medium mb-5">
          <Sparkles size={16} className="text-health-primary" />
          <span>Why Akeno Health?</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-health-dark mb-4">
          The Gold Standard in AI Healthcare
        </h3>
        
        <p className="text-lg text-health-dark/70 mb-8 max-w-3xl mx-auto">
          Akeno Health is the first AI-driven ecosystem that integrates real-time disease forecasting, 
          AI-powered diagnostics, hyper-personalised treatments, and clinical research acceleration.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          <div className="bg-health-primary/5 px-4 py-3 rounded-lg text-sm font-medium text-health-dark">
            AI-Driven Continuous Monitoring
          </div>
          <div className="bg-health-primary/5 px-4 py-3 rounded-lg text-sm font-medium text-health-dark">
            Precision Medicine Technology
          </div>
          <div className="bg-health-primary/5 px-4 py-3 rounded-lg text-sm font-medium text-health-dark">
            Blockchain-Powered Health Records
          </div>
          <div className="bg-health-primary/5 px-4 py-3 rounded-lg text-sm font-medium text-health-dark">
            AI Clinical Decision Support
          </div>
          <div className="bg-health-primary/5 px-4 py-3 rounded-lg text-sm font-medium text-health-dark">
            Accelerated Drug Discovery
          </div>
          <div className="bg-health-primary/5 px-4 py-3 rounded-lg text-sm font-medium text-health-dark">
            Federated Learning & Edge AI
          </div>
        </div>
        
        <p className="text-xl font-medium text-health-dark mb-8">
          Akeno Health is not just improving healthcare – we are redefining it.
        </p>
        
        <Button 
          size="lg" 
          className="relative overflow-hidden bg-health-primary hover:bg-health-secondary group"
          asChild
        >
          <Link to="/how-it-works" className="flex items-center gap-2">
            Experience the Future of AI Healthcare Today
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
