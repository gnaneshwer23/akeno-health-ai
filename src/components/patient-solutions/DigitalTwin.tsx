
import React from 'react';
import { Brain, Dna, AlertCircle, Target, BarChart2 } from 'lucide-react';

const DigitalTwin = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "AI-Generated Digital Twin",
      description: "A dynamic, real-time virtual replica of the patient's body, simulating how biological changes, diseases, and treatments interact over time."
    },
    {
      icon: <Dna size={24} />,
      title: "Predictive Modeling for Personalized Medicine",
      description: "AI forecasts how an individual's unique genetic, immune, and metabolic profile responds to specific therapies."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Early Disease Detection",
      description: "Digital twins help simulate the progression of diseases, allowing for earlier, data-driven interventions and risk mitigation."
    },
    {
      icon: <Target size={24} />,
      title: "Precision Therapy Simulation & Optimization",
      description: "AI evaluates multiple treatment options virtually before real-world application, reducing trial-and-error approaches."
    },
    {
      icon: <BarChart2 size={24} />,
      title: "AI-Driven Treatment Adaptation",
      description: "AI continuously monitors treatment response and dynamically modifies therapy regimens in real-time."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="order-2 md:order-1 relative">
            <div className="bg-health-light/10 rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6 min-h-[650px]">
              <div className="h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
                    <Brain size={24} className="text-health-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-health-dark">Digital Twin Simulation</h3>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-health-primary font-medium mb-2">Treatment Simulation</div>
                    <div className="flex gap-4 items-center">
                      <div className="relative w-16 h-16 bg-health-primary/5 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-health-primary/30 animate-spin" style={{animationDuration: '15s'}}></div>
                        <div className="h-10 w-10 rounded-full bg-health-primary/20 flex items-center justify-center">
                          <Brain size={20} className="text-health-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-health-dark mb-1">Therapy A Efficacy</div>
                        <div className="h-2 bg-health-primary/10 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-health-primary rounded-full"></div>
                        </div>
                        <div className="mt-1 text-xs text-right text-health-dark">76% effective</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-health-primary font-medium mb-2">Predicted Outcomes</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded bg-health-primary/5 text-center">
                        <div className="text-xs text-health-dark font-medium">Therapy A</div>
                        <div className="text-lg font-medium text-health-primary">76%</div>
                      </div>
                      <div className="p-2 rounded bg-health-primary/5 text-center">
                        <div className="text-xs text-health-dark font-medium">Therapy B</div>
                        <div className="text-lg font-medium text-health-primary">62%</div>
                      </div>
                      <div className="p-2 rounded bg-health-primary/5 text-center">
                        <div className="text-xs text-health-dark font-medium">Therapy C</div>
                        <div className="text-lg font-medium text-health-primary">89%</div>
                      </div>
                      <div className="p-2 rounded bg-health-primary/5 text-center">
                        <div className="text-xs text-health-dark font-medium">Combination</div>
                        <div className="text-lg font-medium text-health-primary">94%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-health-primary/10 rounded-xl p-4">
                    <div className="text-sm text-health-primary font-medium mb-2">AI Recommendation</div>
                    <div className="text-sm text-health-dark">
                      Based on your digital twin simulation, the combination therapy (C+A) shows 94% efficacy with minimal side effects. Recommended dosage: 75mg twice daily.
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-health-primary font-medium mb-2">Organ Systems Analysis</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 rounded bg-health-primary/5 text-center">
                        <div className="text-xs text-health-dark font-medium">Cardiovascular</div>
                        <div className="h-1.5 bg-health-primary/10 rounded-full overflow-hidden mt-1">
                          <div className="h-full w-[85%] bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs mt-1 text-green-600">Optimal</div>
                      </div>
                      <div className="p-2 rounded bg-health-primary/5 text-center">
                        <div className="text-xs text-health-dark font-medium">Neurological</div>
                        <div className="h-1.5 bg-health-primary/10 rounded-full overflow-hidden mt-1">
                          <div className="h-full w-[90%] bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs mt-1 text-green-600">Optimal</div>
                      </div>
                      <div className="p-2 rounded bg-health-primary/5 text-center">
                        <div className="text-xs text-health-dark font-medium">Immune</div>
                        <div className="h-1.5 bg-health-primary/10 rounded-full overflow-hidden mt-1">
                          <div className="h-full w-[65%] bg-yellow-500 rounded-full"></div>
                        </div>
                        <div className="text-xs mt-1 text-yellow-600">Good</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-health-primary font-medium mb-2">Side Effect Likelihood</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-health-dark">Fatigue</span>
                        <div className="w-20 h-1.5 bg-health-primary/10 rounded-full overflow-hidden">
                          <div className="h-full w-[15%] bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-health-dark">Headache</span>
                        <div className="w-20 h-1.5 bg-health-primary/10 rounded-full overflow-hidden">
                          <div className="h-full w-[10%] bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-health-dark">Insomnia</span>
                        <div className="w-20 h-1.5 bg-health-primary/10 rounded-full overflow-hidden">
                          <div className="h-full w-[5%] bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-health-dark">GI Issues</span>
                        <div className="w-20 h-1.5 bg-health-primary/10 rounded-full overflow-hidden">
                          <div className="h-full w-[25%] bg-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto text-center text-sm text-health-primary">
                    Digital twin simulation completed with 98.7% confidence
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Solution 2
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              Digital Twin for Disease Prediction & Therapy Optimization
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Our AI-powered digital twin technology creates a virtual model of your body to simulate disease progression and optimize treatment plans with unprecedented precision.
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
              <p className="text-muted-foreground">Digital Twin technology provides highly accurate, AI-driven predictive modelling, ensuring tailored therapy plans, disease prevention, and long-term health optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
