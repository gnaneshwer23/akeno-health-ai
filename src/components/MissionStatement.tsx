
import React from 'react';
import { cn } from '@/lib/utils';

interface MissionStatementProps {
  className?: string;
}

const MissionStatement: React.FC<MissionStatementProps> = ({ className }) => {
  return (
    <section className={cn("py-20 px-6 relative overflow-hidden", className)}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light to-white opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 fade-up-1">
        <div className="inline-block mb-4 px-3 py-1 bg-health-primary/10 rounded-full text-health-primary text-sm font-medium">
          Our Mission
        </div>
        
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6 text-balance leading-tight">
          AI-Powered Precision Healthcare for a Smarter Future
        </h2>
        
        <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            We are revolutionizing healthcare through AI-driven diagnostics, multi-omics analysis, and digital twin simulations to provide early disease detection, personalized treatments, and real-time adaptive care.
          </p>
          <p>
            Our mission is to shift healthcare from reactive treatments to proactive, precision-driven solutions that improve patient outcomes, reduce healthcare costs, and empower individuals with real-time health insights.
          </p>
          <p>
            With cutting-edge AI and predictive analytics, we aim to bridge the gap between data and actionable healthcare strategies, ensuring that individuals receive highly personalized care based on genetic, epigenetic, and lifestyle factors.
          </p>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export { MissionStatement };
