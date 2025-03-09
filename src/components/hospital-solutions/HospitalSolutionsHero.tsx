
import React from 'react';
import { Button } from '@/components/ui/button';
import { Hospital, Zap, ArrowRight } from 'lucide-react';

const HospitalSolutionsHero = () => {
  return (
    <section className="py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-health-primary/10 text-health-primary mb-6">
              <Hospital size={18} className="mr-2" />
              <span className="font-medium">Hospital & Healthcare Providers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-health-dark mb-6 leading-tight">
              Revolutionising Patient Care with{' '}
              <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent inline-block">
                AI-Powered Innovation
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Transform your hospital operations, enhance patient outcomes, and reduce costs with 
              Akeno Health's comprehensive AI-powered healthcare ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Request Demo <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More <Zap size={18} />
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-health-primary/20 to-health-secondary/20 rounded-full blur-3xl opacity-60"></div>
            <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-full max-w-md relative z-10 border border-health-primary/20">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6 pb-4 border-b">
                  <h3 className="font-medium flex items-center">
                    <Hospital size={20} className="text-health-primary mr-2" />
                    AI Hospital Management
                  </h3>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Live Data
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-health-primary/5 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-health-primary/10 flex items-center justify-center mr-4">
                      <Zap size={24} className="text-health-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">AI Early Warning Alert</h4>
                      <p className="text-sm text-muted-foreground">3 patients require attention</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-health-light/50 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Patient Flow</h5>
                      <p className="text-xl font-bold">87%</p>
                      <p className="text-xs text-green-600">+12% Optimized</p>
                    </div>
                    <div className="p-3 bg-health-light/50 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Resource Usage</h5>
                      <p className="text-xl font-bold">93%</p>
                      <p className="text-xs text-green-600">+16% Efficient</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-lg">
                    <h4 className="font-medium mb-1">AI-Powered Recommendations</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-health-primary rounded-full mr-2"></span>
                        Optimize ICU staff allocation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-health-primary rounded-full mr-2"></span>
                        Review diagnostic alerts in Radiology
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalSolutionsHero;
