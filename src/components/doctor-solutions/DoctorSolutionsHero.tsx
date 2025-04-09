
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Stethoscope, Brain, Search, Activity, Sparkles, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';

const DoctorSolutionsHero = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium"
            >
              <Sparkles size={16} className="text-health-primary" />
              <span>For Doctors</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-health-dark mb-6 tracking-tight"
            >
              AI That <span className="text-health-primary">Supports</span> Your Expertise
            </motion.h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mb-6"></div>
            
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-health-dark/70 mb-8 leading-relaxed"
            >
              You didn't become a doctor to spend hours on documentation and data analysis. Akeno Health gives you back your time — with AI that learns from every case, guides diagnosis, and helps optimize outcomes, all while staying transparent, compliant, and clinician-driven.
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
                Explore Solutions
              </CustomButton>
              <CustomButton
                variant="outline"
                size="lg"
                to="/contact"
              >
                Request a Demo
              </CustomButton>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first md:order-last"
          >
            <div className="relative">
              {/* Interactive Dashboard UI */}
              <div className="rounded-2xl shadow-xl bg-white p-6 border border-health-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center">
                      <Brain size={24} className="text-health-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-health-dark">AI Diagnostic Assistant</h3>
                      <p className="text-xs text-muted-foreground">Clinical decision support</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Feature Icons */}
                    <FeatureIcon icon={<Clock size={24} />} label="Save Time" />
                    <FeatureIcon icon={<Brain size={24} />} label="Improve Accuracy" />
                    <FeatureIcon icon={<Activity size={24} />} label="Better Outcomes" />
                    <FeatureIcon icon={<Shield size={24} />} label="Clinical Support" />
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

const FeatureIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-health-primary/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
    <div className="w-10 h-10 rounded-full bg-health-primary/10 flex items-center justify-center group-hover:bg-health-primary/20 transition-colors">
      <div className="text-health-primary">
        {icon}
      </div>
    </div>
    <span className="text-sm font-medium text-health-dark">{label}</span>
  </div>
);

export default DoctorSolutionsHero;
