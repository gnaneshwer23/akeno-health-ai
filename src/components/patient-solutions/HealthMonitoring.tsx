
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { ChartLine, Activity, Dna, AlertTriangle, Brain } from 'lucide-react';

const HealthMonitoring = () => {
  const features = [
    {
      icon: <ChartLine size={24} />,
      title: "Real-Time AI Health Analysis",
      description: "Continuously tracks biometrics, genetics, epigenetics, and lifestyle factors to provide actionable health insights."
    },
    {
      icon: <Activity size={24} />,
      title: "Wearable & Sensor Integration",
      description: "Syncs with smartwatches, CGMs, ECG devices, HRV monitors, and sleep trackers for comprehensive monitoring."
    },
    {
      icon: <Dna size={24} />,
      title: "Multi-Omics Data Analysis",
      description: "Uses AI-powered genomic, epigenetic, and proteomic analysis to predict disease risks and optimize treatment plans."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Proactive Risk Prediction",
      description: "Identifies early warning signs of chronic diseases before symptoms appear for timely intervention."
    },
    {
      icon: <Brain size={24} />,
      title: "Behavioral & Lifestyle Optimization",
      description: "AI assesses sleep, activity, stress, and diet to provide actionable recommendations for improving health."
    }
  ];

  return (
    <section className="py-20 px-6 bg-health-light/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Solution 1
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              AI-Powered Personalized Health Monitoring
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Our advanced AI continuously analyzes your health data, providing personalized insights and proactive recommendations to optimize your wellbeing.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-health-primary/20 text-health-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-health-dark">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-health-primary/5 border border-health-primary/10 rounded-lg">
              <p className="font-medium text-health-dark">Outcome:</p>
              <p className="text-muted-foreground">Patients gain full control over their health, receiving real-time, AI-generated insights that facilitate early intervention, preventive measures, and continuous health improvements.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6 min-h-[700px]">
              <div className="h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
                    <Activity size={24} className="text-health-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-health-dark">Health Dashboard</h3>
                </div>
                
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-health-light/20 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-1">Heart Rate</div>
                    <div className="text-2xl font-medium text-health-dark">72 bpm</div>
                    <div className="mt-2 h-10 relative">
                      <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none" className="text-health-primary opacity-75">
                        <path d="M0,15 L10,10 L20,20 L30,5 L40,25 L50,10 L60,20 L70,15 L80,20 L90,5 L100,15" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-health-light/20 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-1">Sleep Quality</div>
                    <div className="text-2xl font-medium text-health-dark">7.5 hrs</div>
                    <div className="mt-2 flex gap-1">
                      <div className="h-2 flex-1 bg-health-primary/20 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-health-primary rounded-full"></div>
                      </div>
                      <div className="h-2 flex-1 bg-health-primary/20 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-health-primary rounded-full"></div>
                      </div>
                      <div className="h-2 flex-1 bg-health-primary/20 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-health-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-health-light/20 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-1">Stress Level</div>
                    <div className="text-2xl font-medium text-health-dark">Low</div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span>Low</span>
                      <span>Med</span>
                      <span>High</span>
                    </div>
                    <div className="h-2 bg-health-primary/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-health-light/20 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-1">AI Insights</div>
                    <div className="text-sm text-health-dark">
                      Sleep cycle optimal. Consider hydrating in the morning.
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-health-primary/10 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-1">Risk Assessment</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
                        <div className="h-full w-[15%] bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">Low</span>
                    </div>
                    <div className="mt-2 text-xs text-health-dark">
                      AI Prediction: 87% lower risk of cardiovascular events compared to peer group
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-health-light/20 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-1">Weekly Activity</div>
                    <div className="grid grid-cols-7 gap-1 mt-2">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xs mb-1">{day}</div>
                          <div className={`mx-auto h-16 w-4 rounded-full overflow-hidden bg-health-primary/10 relative`}>
                            <div 
                              className="absolute bottom-0 w-full bg-health-primary" 
                              style={{ height: `${[60, 40, 75, 50, 80, 30, 55][i]}%` }}
                            ></div>
                          </div>
                          <div className="text-xs mt-1">{[6, 4, 8, 5, 9, 3, 6][i]}k</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-health-primary/10 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-1">AI Recommendation</div>
                    <div className="text-sm text-health-dark">
                      Based on your recent activity patterns and sleep quality, we recommend increasing your hydration by 20% and adding a 15-minute morning stretching routine to optimize your stress levels and energy throughout the day.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthMonitoring;
