
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Activity, Brain, Check } from 'lucide-react';

const PatientSolutionsHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-400/20 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/5 w-8 h-8 bg-indigo-400/20 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-medium"
            >
              For Patients
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-health-dark"
            >
              Empowering Your Health <span className="text-blue-600">with AI</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-light mb-6 text-health-dark/80"
            >
              Your Health. Your Data. Your Future – <span className="font-medium">Predictable, Preventive, Personalised.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Healthcare shouldn't wait until you feel unwell. Akeno Health helps you understand your body's signals 
              <span className="font-medium"> before symptoms appear</span>, using AI and continuous monitoring to offer 
              proactive, personalised support — every day, in real time.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button 
                size="lg" 
                className="gap-2 bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link to="/register">
                  Create Your Account <ArrowRight size={16} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                asChild
              >
                <Link to="/how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <div className="flex items-center gap-2">
                <Check size={18} className="text-blue-500" />
                <span className="text-sm">Real-Time Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-blue-500" />
                <span className="text-sm">AI-Powered Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-blue-500" />
                <span className="text-sm">Blockchain Protected</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-40 transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Activity size={24} className="text-blue-600" />
                    <span className="font-medium text-lg">Health Dashboard</span>
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Live Updates</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-xs text-blue-700 mb-1">Heart Rate</div>
                    <div className="text-2xl font-semibold mb-2">72 <span className="text-sm font-normal">bpm</span></div>
                    <div className="h-10 bg-blue-100 rounded-md overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-8" viewBox="0 0 100 20">
                          <path
                            d="M0,10 L10,10 C15,10 15,5 20,5 C25,5 25,15 30,15 C35,15 35,8 40,8 C45,8 45,12 50,12 C55,12 55,6 60,6 C65,6 65,10 70,10 C75,10 75,8 80,8 C85,8 85,12 90,12 C95,12 95,9 100,9"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <div className="text-xs text-indigo-700 mb-1">Sleep Quality</div>
                    <div className="text-2xl font-semibold mb-2">86<span className="text-sm font-normal">%</span></div>
                    <div className="flex justify-between items-center">
                      <div className="bg-indigo-200 h-2 w-2 rounded-full"></div>
                      <div className="bg-indigo-300 h-3 w-2 rounded-full"></div>
                      <div className="bg-indigo-400 h-4 w-2 rounded-full"></div>
                      <div className="bg-indigo-500 h-6 w-2 rounded-full"></div>
                      <div className="bg-indigo-600 h-8 w-2 rounded-full"></div>
                      <div className="bg-indigo-700 h-5 w-2 rounded-full"></div>
                      <div className="bg-indigo-500 h-7 w-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain size={20} className="text-indigo-600" />
                    <div className="font-medium">AI Health Insight</div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Your recent activity patterns and heart rate variability suggest improving sleep quality. 
                    Consider reducing screen time 1 hour before bed.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-blue-700">
                    <Shield size={14} />
                    <span>Secured with blockchain encryption</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    View Your Full Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PatientSolutionsHero;
