
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Stethoscope, FileText, Bell, ArrowRight, Brain, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <Brain size={24} />,
      title: "AI-Powered Clinical Decision Support",
      description: "Get instant differential diagnoses, AI-recommended treatment plans, safety-first alerts for drug interactions, and evidence-based citations from peer-reviewed studies."
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Diagnostic Intelligence",
      description: "AI-assisted image interpretation, smart reporting tools for radiology and clinical notes, and explainable outputs with heatmaps and diagnostic rationales."
    },
    {
      icon: <FileText size={24} />,
      title: "EHR Integration & Documentation",
      description: "Auto-SOAP generation from patient interactions, real-time integration with leading EHR platforms, and smart summarisation of medical histories."
    },
    {
      icon: <Bell size={24} />,
      title: "Patient Monitoring & Alerts",
      description: "Receive AI-powered alerts for deteriorating patients, configure clinical escalation protocols, and monitor remote patients via wearables dashboards."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent opacity-50"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
          >
            AI-Powered Solutions for Healthcare Professionals
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our platform integrates AI-powered diagnostics, real-time data insights, and treatment recommendations to transform medicine into a more predictive, proactive, and precision-based system.
          </motion.p>
        </div>
        
        {/* Solutions Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center mb-14 max-w-4xl mx-auto"
        >
          <ProcessStep 
            icon={<Brain size={28} />} 
            label="Diagnose" 
            description="AI helps identify potential conditions based on symptoms, history, and tests" 
          />
          
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight size={24} className="text-health-primary/30 mx-4" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<Shield size={28} />} 
            label="Decide" 
            description="Evidence-based treatment options with safety checks and guidelines" 
          />
          
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight size={24} className="text-health-primary/30 mx-4" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<FileText size={28} />} 
            label="Document" 
            description="Automated clinical notes and documentation with full transparency" 
          />
          
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight size={24} className="text-health-primary/30 mx-4" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<Bell size={28} />} 
            label="Monitor" 
            description="Ongoing patient monitoring with smart alerts and follow-ups" 
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
            🎯 Outcome: You make the final call — faster, safer, and more confidently.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessStep = ({ icon, label, description }: { icon: React.ReactNode; label: string; description: string }) => (
  <div className="flex flex-col items-center p-4 text-center">
    <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2 hover:bg-health-primary/20 transition-colors group">
      <div className="text-health-primary">{icon}</div>
    </div>
    <span className="text-base font-semibold text-health-dark mb-1">{label}</span>
    <span className="text-xs text-muted-foreground max-w-[120px]">{description}</span>
  </div>
);

export default SolutionsOverview;
