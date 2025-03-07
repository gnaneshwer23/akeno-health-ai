
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { ChartLine, Activity, Dna, AlertTriangle, Brain } from 'lucide-react';

const HealthMonitoring = () => {
  const features = [
    {
      icon: <ChartLine size={24} className="text-cyan-500" />,
      title: "Real-Time AI Health Analysis",
      description: "Continuously tracks biometrics, genetics, epigenetics, and lifestyle factors to provide actionable health insights."
    },
    {
      icon: <Activity size={24} className="text-pink-500" />,
      title: "Wearable & Sensor Integration",
      description: "Syncs with smartwatches, CGMs, ECG devices, HRV monitors, and sleep trackers for comprehensive monitoring."
    },
    {
      icon: <Dna size={24} className="text-purple-500" />,
      title: "Multi-Omics Data Analysis",
      description: "Uses AI-powered genomic, epigenetic, and proteomic analysis to predict disease risks and optimize treatment plans."
    },
    {
      icon: <AlertTriangle size={24} className="text-amber-500" />,
      title: "Proactive Risk Prediction",
      description: "Identifies early warning signs of chronic diseases before symptoms appear for timely intervention."
    },
    {
      icon: <Brain size={24} className="text-teal-500" />,
      title: "Behavioral & Lifestyle Optimization",
      description: "AI assesses sleep, activity, stress, and diet to provide actionable recommendations for improving health."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute -top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
     
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-700 font-medium">
              Solution 1
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-blue-800 to-cyan-600 text-transparent bg-clip-text mb-6">
              AI-Powered Personalized Health Monitoring
            </h2>
            
            <p className="text-lg text-indigo-900/70 mb-6">
              Our advanced AI continuously analyzes your health data, providing personalized insights and proactive recommendations to optimize your wellbeing.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group hover:bg-blue-50/50 p-2 rounded-lg transition-colors">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 shadow-sm group-hover:shadow-md transition-all">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-indigo-900">{feature.title}</h3>
                    <p className="text-indigo-700/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 border border-blue-200 rounded-lg shadow-inner">
              <p className="font-medium text-indigo-900">Outcome:</p>
              <p className="text-indigo-700/70">Patients gain full control over their health, receiving real-time, AI-generated insights that facilitate early intervention, preventive measures, and continuous health improvements.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl"></div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200 p-6 min-h-[700px]">
              <div className="h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 shadow-md mb-4">
                    <Activity size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-medium text-indigo-900">Health Dashboard</h3>
                </div>
                
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 shadow-sm border border-blue-100">
                    <div className="text-sm text-cyan-700 font-medium mb-1">Heart Rate</div>
                    <div className="text-2xl font-medium text-indigo-900">72 bpm</div>
                    <div className="mt-2 h-10 relative">
                      <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none" className="text-cyan-500 opacity-75">
                        <path d="M0,15 L10,10 L20,20 L30,5 L40,25 L50,10 L60,20 L70,15 L80,20 L90,5 L100,15" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 shadow-sm border border-indigo-100">
                    <div className="text-sm text-indigo-700 font-medium mb-1">Sleep Quality</div>
                    <div className="text-2xl font-medium text-indigo-900">7.5 hrs</div>
                    <div className="mt-2 flex gap-1">
                      <div className="h-2 flex-1 bg-indigo-200 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-3/4 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"></div>
                      </div>
                      <div className="h-2 flex-1 bg-indigo-200 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-4/5 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"></div>
                      </div>
                      <div className="h-2 flex-1 bg-indigo-200 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-2/3 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-4 shadow-sm border border-teal-100">
                    <div className="text-sm text-teal-700 font-medium mb-1">Stress Level</div>
                    <div className="text-2xl font-medium text-indigo-900">Low</div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span>Low</span>
                      <span>Med</span>
                      <span>High</span>
                    </div>
                    <div className="h-2 bg-teal-200 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full w-1/4 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 shadow-sm border border-blue-100">
                    <div className="text-sm text-blue-700 font-medium mb-1">AI Insights</div>
                    <div className="text-sm text-indigo-900">
                      Sleep cycle optimal. Consider hydrating in the morning.
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-xl p-4 shadow-sm border border-blue-200">
                    <div className="text-sm text-blue-700 font-medium mb-1">Risk Assessment</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-[15%] bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">Low</span>
                    </div>
                    <div className="mt-2 text-xs text-indigo-900">
                      AI Prediction: 87% lower risk of cardiovascular events compared to peer group
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 shadow-sm border border-purple-100">
                    <div className="text-sm text-purple-700 font-medium mb-1">Weekly Activity</div>
                    <div className="grid grid-cols-7 gap-1 mt-2">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xs mb-1">{day}</div>
                          <div className={`mx-auto h-16 w-4 rounded-full overflow-hidden bg-indigo-100 relative shadow-inner`}>
                            <div 
                              className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 to-indigo-400" 
                              style={{ height: `${[60, 40, 75, 50, 80, 30, 55][i]}%` }}
                            ></div>
                          </div>
                          <div className="text-xs mt-1">{[6, 4, 8, 5, 9, 3, 6][i]}k</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-2 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 rounded-xl p-4 shadow-sm border border-cyan-200">
                    <div className="text-sm text-cyan-700 font-medium mb-1">AI Recommendation</div>
                    <div className="text-sm text-indigo-900">
                      Based on your recent activity patterns and sleep quality, we recommend increasing your hydration by 20% and adding a 15-minute morning stretching routine to optimize your stress levels and energy throughout the day.
                    </div>
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

export default HealthMonitoring;
