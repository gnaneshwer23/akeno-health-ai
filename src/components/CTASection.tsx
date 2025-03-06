
import React from 'react';
import { Button } from './Button';
import { ChevronRight, LineChart, Activity, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className }) => {
  return (
    <section className={cn("py-20 px-6 relative overflow-hidden", className)}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-light via-white to-health-light/50 opacity-70"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-health-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-health-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left side */}
          <div className="flex-1 fade-up-1">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Call-to-Action
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              Get Your AI Health Report Now
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                  <LineChart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-health-dark mb-1">Understand Your Health Like Never Before</h3>
                  <p className="text-muted-foreground">AI-driven insights based on your biomarkers, lifestyle patterns, genetic predisposition, and real-time health monitoring.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-health-dark mb-1">Personalized Recommendations</h3>
                  <p className="text-muted-foreground">Get tailored advice for disease prevention, optimized treatments, and proactive health management.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-health-dark mb-1">Complete Health Picture</h3>
                  <p className="text-muted-foreground">Gain a complete picture of your health with real-time AI-driven insights!</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Sign Up Now
              <ChevronRight size={16} />
            </Button>
          </div>
          
          {/* Right side - Mockup */}
          <div className="flex-1 fade-up-2">
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="rounded-[40px] border-8 border-health-dark/90 overflow-hidden shadow-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-health-primary/10 to-health-secondary/10 p-4 relative">
                  {/* Status bar */}
                  <div className="flex justify-between text-xs text-health-dark mb-2">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-full overflow-hidden border border-white/40 shadow-sm p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full bg-health-primary"></div>
                        </div>
                        <span className="font-medium text-health-dark">Akeno Health</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-health-light flex items-center justify-center">
                        <div className="h-1 w-1 rounded-full bg-health-primary animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="bg-health-light rounded-xl p-3 mb-3">
                      <div className="text-xs text-health-primary font-medium mb-1">Health Score</div>
                      <div className="text-2xl font-medium text-health-dark">87/100</div>
                      <div className="w-full h-2 bg-white/50 rounded-full mt-2">
                        <div className="h-full w-[87%] bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-health-light rounded-xl p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-health-primary font-medium">Heart Rate</div>
                          <div className="text-lg font-medium text-health-dark">72 bpm</div>
                        </div>
                        <div className="h-12 w-16 bg-white/80 rounded-lg flex items-center justify-center overflow-hidden">
                          <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                            <path d="M0,20 L10,15 L20,25 L30,5 L40,35 L50,10 L60,30 L70,20 L80,25 L90,10 L100,20" fill="none" stroke="#6366f1" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="bg-health-light rounded-xl p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-health-primary font-medium">Sleep Quality</div>
                          <div className="text-lg font-medium text-health-dark">7.2 hrs</div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/80 flex items-center justify-center text-health-primary">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 4V12L16 16" />
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="bg-health-light rounded-xl p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-health-primary font-medium">Stress Level</div>
                          <div className="text-lg font-medium text-health-dark">Low</div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/80 flex items-center justify-center text-green-500">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17L4 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-health-primary/30 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-health-secondary/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
