
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Stethoscope, FileText, Bell, ArrowRight, Brain, Shield, Database, Image } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <Brain size={24} />,
      title: "AI-Powered Clinical Decision Support",
      description: "Get instant differential diagnoses powered by our electronic health records and genomic databases. AI-recommended treatment plans, safety-first alerts for drug interactions, and evidence-based citations from peer-reviewed studies."
    },
    {
      icon: <Image size={24} />,
      title: "Advanced Medical Imaging Analysis",
      description: "AI-assisted image interpretation of your patients' MRIs, CT scans, and X-rays stored in our medical images database, with smart reporting tools and explainable diagnostics with visual heatmaps."
    },
    {
      icon: <FileText size={24} />,
      title: "EHR Integration & Documentation",
      description: "Auto-SOAP generation from patient interactions, real-time integration with leading EHR platforms, and smart summarisation of medical histories from our comprehensive electronic health records database."
    },
    {
      icon: <Bell size={24} />,
      title: "Patient Monitoring & Alerts",
      description: "Receive AI-powered alerts for deteriorating patients based on real-time wearable data analysis, configure clinical escalation protocols, and monitor remote patients via comprehensive wearables dashboards."
    },
    {
      icon: <Database size={24} />,
      title: "Comprehensive Data Integration",
      description: "Access patients' electronic health records, genomic data, biomarker trends, and medical imaging - all in one unified platform with powerful search and analysis capabilities."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white/80 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-health-primary/10 text-health-primary rounded-full font-medium text-sm mb-4"
          >
            Clinical Solutions
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-health-dark mb-4"
          >
            AI-Powered Solutions for Healthcare Professionals
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our platform integrates your patients' comprehensive health data with AI-powered analytics to deliver diagnostics assistance, real-time insights, and treatment recommendations to transform medicine into a more predictive, proactive, and precision-based system.
          </motion.p>
        </div>
        
        {/* Solutions Process Flow - Redesigned with visual connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center mb-16 max-w-4xl mx-auto"
        >
          <ProcessStep 
            icon={<Brain size={28} />} 
            label="Diagnose" 
            description="AI helps identify potential conditions based on EHR, genomics, and imaging" 
            number={1}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-0.5 bg-health-primary/30"></div>
            <ArrowRight size={20} className="text-health-primary mx-1" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<Shield size={28} />} 
            label="Decide" 
            description="Evidence-based treatment options with safety checks" 
            number={2}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-0.5 bg-health-primary/30"></div>
            <ArrowRight size={20} className="text-health-primary mx-1" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<FileText size={28} />} 
            label="Document" 
            description="Automated clinical notes using patient data" 
            number={3}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-0.5 bg-health-primary/30"></div>
            <ArrowRight size={20} className="text-health-primary mx-1" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<Bell size={28} />} 
            label="Monitor" 
            description="Ongoing tracking with wearable data and alerts" 
            number={4}
          />
        </motion.div>
        
        {/* Feature Cards - Now with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <FeatureCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                index={index}
                className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-100 shadow-sm">
            <span className="block text-lg font-semibold mb-1">🎯 All powered by our secure health database infrastructure</span>
            <span className="text-sm">Electronic Health Records + Genomic Data + Medical Imaging + Wearable Data</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessStep = ({ 
  icon, 
  label, 
  description,
  number 
}: { 
  icon: React.ReactNode; 
  label: string; 
  description: string;
  number: number;
}) => (
  <div className="flex flex-col items-center p-4 text-center relative">
    <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-health-primary flex items-center justify-center text-white text-xs font-bold">
      {number}
    </div>
    <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-3 hover:bg-health-primary/20 transition-colors group-hover:scale-105 duration-300">
      <div className="text-health-primary">{icon}</div>
    </div>
    <span className="text-base font-semibold text-health-dark mb-1">{label}</span>
    <span className="text-xs text-muted-foreground max-w-[140px]">{description}</span>
  </div>
);

export default SolutionsOverview;
