
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Stethoscope, Brain, Search, Activity, Sparkles, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DoctorSolutionsHero = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-health-light/50 to-white"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
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
        
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          You didn't become a doctor to spend hours on documentation and data analysis. Akeno Health gives you back your time — with AI that learns from every case, guides diagnosis, and helps optimize outcomes, all while staying transparent, compliant, and clinician-driven.
        </motion.p>
        
        {/* Icon Feature Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
        >
          <FeatureIcon icon={<Clock size={24} />} label="Save Time" />
          <FeatureIcon icon={<Brain size={24} />} label="Improve Accuracy" />
          <FeatureIcon icon={<Activity size={24} />} label="Better Outcomes" />
          <FeatureIcon icon={<Shield size={24} />} label="Clinical Support" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link to="/contact">Explore Solutions <ArrowRight size={16} /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 border border-health-primary/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
    <div className="w-12 h-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-2 group-hover:bg-health-primary/20 transition-colors">
      <div className="text-health-primary">
        {icon}
      </div>
    </div>
    <span className="text-sm font-medium text-health-dark">{label}</span>
  </div>
);

export default DoctorSolutionsHero;
