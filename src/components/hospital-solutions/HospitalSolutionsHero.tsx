
import React from 'react';
import { Button } from '@/components/ui/button';
import { Hospital, Zap, ArrowRight, LineChart, Activity, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';

const HospitalSolutionsHero = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium"
            >
              <Hospital size={16} className="text-health-primary" />
              <span>For Hospitals & Healthcare Providers</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-health-dark mb-6 tracking-tight"
            >
              AI-Driven <span className="text-health-primary">Healthcare</span> Optimisation
            </motion.h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mb-6"></div>
            
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-health-dark/70 mb-8 leading-relaxed"
            >
              Empower your teams, patients, and systems with intelligent automation, 
              real-time risk management, and predictive insights. Our turnkey AI-powered platform 
              turns data into action, improving efficiency, safety, and outcomes across your facility.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <CustomButton
                variant="primary"
                size="lg"
                to="/contact"
                withArrow
              >
                Request Demo
              </CustomButton>
              <CustomButton
                variant="outline"
                size="lg"
                to="/how-it-works"
              >
                Learn More
              </CustomButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Activity size={20} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-600">30% reduction in ICU admissions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <LineChart size={20} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-600">40% faster ED discharge</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Shield size={20} className="text-purple-600" />
                </div>
                <span className="text-sm text-gray-600">NHS & GDPR compliant</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first md:order-last"
          >
            <div className="relative">
              {/* Hospital Dashboard UI */}
              <div className="rounded-2xl shadow-xl bg-white p-6 border border-health-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center">
                      <Hospital size={24} className="text-health-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-health-dark">Hospital Management Dashboard</h3>
                      <p className="text-xs text-muted-foreground">AI-powered insights</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Live Data</span>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {/* Metric Cards */}
                    <MetricCard 
                      label="Patient Flow" 
                      value="87%" 
                      trend="+" 
                      status="Optimized"
                    />
                    <MetricCard 
                      label="Bed Utilization" 
                      value="92%" 
                      trend="+" 
                      status="Efficient"
                    />
                    <MetricCard 
                      label="Cost Savings" 
                      value="£1.2M" 
                      trend="+" 
                      status="Annual"
                    />
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-lg">
                    <h4 className="font-medium mb-2">AI Recommendations</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-health-primary rounded-full"></span>
                        <span>Optimize ICU staff allocation for night shift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-health-primary rounded-full"></span>
                        <span>Review high-risk patient discharge plans</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-health-primary rounded-full"></span>
                        <span>Schedule additional imaging staff for Thursday</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-700 mb-2">
                      <Zap size={18} />
                      <h4 className="font-medium">Early Warning Alert</h4>
                    </div>
                    <p className="text-sm text-yellow-800">
                      3 patients at risk of deterioration in Ward B. 
                      Recommended action: clinical review within 30 minutes.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-health-secondary/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-health-primary/10 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ label, value, trend, status }: { label: string; value: string; trend: string; status: string }) => (
  <div className="p-3 rounded-lg bg-white/50 border border-health-primary/10 shadow-sm">
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <p className="text-xl font-bold">{value}</p>
    <p className="text-xs text-green-600">{trend} {status}</p>
  </div>
);

export default HospitalSolutionsHero;
