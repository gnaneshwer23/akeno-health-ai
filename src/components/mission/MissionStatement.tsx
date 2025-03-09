
import React from 'react';
import { MissionHeader } from './MissionHeader';
import { MissionServicesGrid } from './MissionServicesGrid';
import { MissionFooter } from './MissionFooter';

const MissionStatement: React.FC = () => {
  return (
    <section id="mission" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient and decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-health-light/20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-health-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-health-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Healthcare-specific decorative elements */}
      <div className="absolute left-10 top-1/4 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M2 8.5C3.38071 8.5 4.5 7.38071 4.5 6C4.5 7.38071 5.61929 8.5 7 8.5C5.61929 8.5 4.5 9.61929 4.5 11C4.5 9.61929 3.38071 8.5 2 8.5Z" stroke="currentColor" strokeWidth="2" className="text-health-secondary"/>
          <path d="M17 6.5C18.3807 6.5 19.5 5.38071 19.5 4C19.5 5.38071 20.6193 6.5 22 6.5C20.6193 6.5 19.5 7.61929 19.5 9C19.5 7.61929 18.3807 6.5 17 6.5Z" stroke="currentColor" strokeWidth="2" className="text-health-accent"/>
          <path d="M12 2V8" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M10 4H14" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
        </svg>
      </div>
      
      <div className="absolute right-10 bottom-1/4 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M16 12H8" stroke="currentColor" strokeWidth="2" className="text-health-primary"/>
          <path d="M4 4L20 20" stroke="currentColor" strokeWidth="2" className="text-health-secondary"/>
        </svg>
      </div>
      
      {/* Side decorative bars */}
      <div className="absolute left-0 top-1/3 bottom-1/3 w-2 bg-gradient-to-b from-health-primary/40 to-health-secondary/40 rounded-r-lg"></div>
      <div className="absolute right-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-t from-health-primary/40 to-health-secondary/40 rounded-l-lg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <MissionHeader />
        
        {/* Category tabs indicator */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white/50 backdrop-blur-sm rounded-full border border-health-primary/10 shadow-sm">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-health-primary to-health-secondary text-white font-medium">
              Our Core Services
            </span>
          </div>
        </div>
        
        <MissionServicesGrid />
        <MissionFooter />
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#6366f1" fillOpacity="0.5" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,224C672,224,768,192,864,192C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export { MissionStatement };
