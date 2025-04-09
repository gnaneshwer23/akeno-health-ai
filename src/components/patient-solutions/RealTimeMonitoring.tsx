
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, AlertCircle, Moon, Droplet, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RealTimeMonitoring = () => {
  const monitoringFeatures = [
    {
      icon: <Heart className="h-5 w-5 text-red-500" />,
      title: "Heart Rate & ECG",
      description: "Continuous monitoring of heart rate, variability, and rhythm patterns"
    },
    {
      icon: <Activity className="h-5 w-5 text-blue-500" />,
      title: "Blood Pressure & Oxygen",
      description: "Track SpO2 levels and blood pressure trends over time"
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
      title: "Early Warning System",
      description: "AI-powered alerts for concerning health changes before symptoms appear"
    },
    {
      icon: <Moon className="h-5 w-5 text-indigo-500" />,
      title: "Sleep Analysis",
      description: "Detailed sleep metrics including stages, quality, and breathing patterns"
    },
    {
      icon: <Droplet className="h-5 w-5 text-cyan-500" />,
      title: "Hydration & Nutrition",
      description: "Smart tracking of water intake, meal timing, and nutritional balance"
    },
    {
      icon: <PieChart className="h-5 w-5 text-green-500" />,
      title: "Lifestyle Feedback",
      description: "Activity, stress, recovery, and energy level monitoring throughout the day"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 relative">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-medium">
              Real-Time Health Data
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
              Real-Time Monitoring & Alerts
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Your vitals and health metrics monitored continuously, with AI-powered alerts that keep you 
              and your healthcare providers informed of any concerning changes – before they become serious issues.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mb-8">
              {monitoringFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="mt-1 bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-health-dark">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-blue-100 mb-6">
              <p className="text-health-dark">
                <span className="font-medium">Outcome:</span> Stay informed, in control, and one step ahead of potential illness.
              </p>
            </div>
            
            <Button 
              className="gap-2 bg-blue-600 hover:bg-blue-700" 
              asChild
            >
              <Link to="/how-it-works">
                See How Monitoring Works
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Activity size={22} className="text-blue-600" />
                  <h3 className="font-medium">Health Dashboard</h3>
                </div>
                <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                  Live
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="text-xs text-red-700 mb-1">Heart Rate</div>
                  <div className="flex justify-between items-end">
                    <div className="text-2xl font-semibold">72 <span className="text-xs">bpm</span></div>
                    <svg className="h-10 w-16" viewBox="0 0 100 30">
                      <path
                        d="M0,15 Q10,15 15,5 T30,15 T45,15 T60,5 T75,20 T90,10 T100,15"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-xs text-blue-700 mb-1">Blood Oxygen</div>
                  <div className="flex justify-between items-end">
                    <div className="text-2xl font-semibold">98<span className="text-xs">%</span></div>
                    <div className="h-10 w-16 flex items-end">
                      <div className="w-3 h-8 bg-blue-200 rounded-sm"></div>
                      <div className="w-3 h-9 bg-blue-300 rounded-sm ml-1"></div>
                      <div className="w-3 h-10 bg-blue-400 rounded-sm ml-1"></div>
                      <div className="w-3 h-7 bg-blue-300 rounded-sm ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-lg p-3">
                  <div className="text-xs text-amber-700 mb-1">Stress Level</div>
                  <div className="flex justify-between items-end">
                    <div className="text-2xl font-semibold">34<span className="text-xs">/100</span></div>
                    <div className="h-10 w-16 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-4 border-amber-200 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-amber-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3">
                  <div className="text-xs text-indigo-700 mb-1">Sleep Quality</div>
                  <div className="flex justify-between items-end">
                    <div className="text-2xl font-semibold">7.2<span className="text-xs">h</span></div>
                    <div className="h-10 w-16 flex items-end justify-between">
                      <div className="w-2 h-4 bg-indigo-200 rounded-t-sm"></div>
                      <div className="w-2 h-7 bg-indigo-300 rounded-t-sm"></div>
                      <div className="w-2 h-10 bg-indigo-500 rounded-t-sm"></div>
                      <div className="w-2 h-8 bg-indigo-400 rounded-t-sm"></div>
                      <div className="w-2 h-5 bg-indigo-300 rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 mb-4 flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <AlertCircle size={20} className="text-yellow-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-yellow-800 mb-0.5">Early Warning Alert</div>
                  <div className="text-xs text-yellow-700">
                    Stress levels have been elevated for 3 consecutive days. Consider mindfulness activities.
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="outline" size="sm" className="text-sm">
                  View Detailed Metrics
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeMonitoring;
