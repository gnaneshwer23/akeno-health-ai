
import React from 'react';
import { Button } from './Button';
import { ChevronRight, LineChart, Activity, Brain, Sparkles, Atom } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className }) => {
  return (
    <section className={cn("py-20 px-6 relative overflow-hidden", className)}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-70"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-health-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-health-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-8 border-health-primary/5 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-8 border-health-secondary/5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-health-primary/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left side */}
          <div className="flex-1 fade-up-1 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium gap-2">
              <Sparkles size={16} className="text-health-primary" />
              <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Call-to-Action</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
              Get Your AI Health Report Now
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                  <LineChart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-health-dark mb-1">Understand Your Health Like Never Before</h3>
                  <p className="text-muted-foreground">AI-driven insights based on your biomarkers, genetic predisposition, lifestyle patterns, and real-time health monitoring.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-purple-500 flex items-center justify-center text-white">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-health-dark mb-1">Personalized Recommendations</h3>
                  <p className="text-muted-foreground">Get tailored advice for disease prevention, optimized treatments, and proactive health management strategies.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border border-teal-100">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-teal-500 flex items-center justify-center text-white">
                  <Atom size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-health-dark mb-1">Quantum-Powered Health Solutions</h3>
                  <p className="text-muted-foreground">Benefit from quantum computing insights that accelerate drug discovery and treatment optimization just for you.</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              variant="primary" 
              className="w-full sm:w-auto group relative overflow-hidden"
              as="Link"
              to="/contact"
            >
              <span className="flex items-center gap-2">
                Start Your AI-Powered Health Journey
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
          </div>
          
          {/* Right side - Mockup */}
          <div className="flex-1 fade-up-2">
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="rounded-[40px] border-8 border-gray-950 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="aspect-[9/19] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 relative">
                  {/* Status bar */}
                  <div className="flex justify-between text-xs text-health-dark mb-2">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl h-full overflow-hidden border border-white shadow-sm p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full bg-white"></div>
                        </div>
                        <span className="font-bold text-health-dark">Akeno Health</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-health-light flex items-center justify-center">
                        <div className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 mb-3">
                      <div className="text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">Health Score</div>
                      <div className="text-2xl font-bold text-health-dark">87/100</div>
                      <div className="w-full h-3 bg-white rounded-full mt-2">
                        <div className="h-full w-[87%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs font-bold text-blue-600 mb-1">Heart Rate</div>
                          <div className="text-lg font-bold text-health-dark">72 bpm</div>
                        </div>
                        <div className="h-12 w-16 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                          <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                            <path d="M0,20 L10,15 L20,25 L30,5 L40,35 L50,10 L60,30 L70,20 L80,25 L90,10 L100,20" fill="none" stroke="#6366f1" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs font-bold text-green-600 mb-1">Genetic Risk</div>
                          <div className="text-lg font-bold text-health-dark">Low</div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-green-500 shadow-sm">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17L4 12" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs font-bold text-purple-600 mb-1">AI Recommendations</div>
                          <div className="text-lg font-bold text-health-dark">3 New</div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold text-white">New</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
