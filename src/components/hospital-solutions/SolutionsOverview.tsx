
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Hospital, Brain, TrendingDown, ArrowRight, Bell, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <Hospital size={24} />,
      title: "AI-Powered Hospital Integration",
      description: "Seamless integration with hospital systems, EHRs, and clinical workflows, providing scalable AI infrastructure to enhance patient care."
    },
    {
      icon: <Brain size={24} />,
      title: "AI-Driven Decision Support",
      description: "Real-time AI insights help doctors and administrators make faster, more informed decisions, enhancing diagnostic accuracy and patient safety."
    },
    {
      icon: <TrendingDown size={24} />,
      title: "Cost Savings Through AI Automation",
      description: "Reduce administrative costs, optimize hospital resources, and minimize waste with AI-powered workflow automation and predictive resource allocation."
    },
    {
      icon: <Bell size={24} />,
      title: "Predictive Patient Management",
      description: "Early warning systems for patient deterioration, optimized discharge planning, and readmission prevention through AI monitoring."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white/80 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-health-primary/10 text-health-primary rounded-full font-medium text-sm mb-4">
            Hospital Solutions
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            The Future of AI-Enhanced Hospital Operations
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-6"
          />
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Optimize workflows, automate routine tasks, and deliver precision-driven patient care within a seamlessly connected AI-powered healthcare ecosystem.
          </p>
        </motion.div>
        
        {/* Solutions Process Flow with visual enhancements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center mb-16 max-w-4xl mx-auto"
        >
          <ProcessStep 
            icon={<Hospital size={28} className="text-health-primary" />} 
            label="Integrate" 
            description="Seamless integration with existing hospital systems" 
            number={1}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-0.5 bg-health-primary/30"></div>
            <ArrowRight size={20} className="text-health-primary mx-1" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<Brain size={28} className="text-health-primary" />} 
            label="Enhance" 
            description="AI-powered insights and decision support" 
            number={2}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-0.5 bg-health-primary/30"></div>
            <ArrowRight size={20} className="text-health-primary mx-1" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<TrendingDown size={28} className="text-health-primary" />} 
            label="Optimize" 
            description="Resource allocation and cost efficiency" 
            number={3}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-0.5 bg-health-primary/30"></div>
            <ArrowRight size={20} className="text-health-primary mx-1" />
          </div>
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          
          <ProcessStep 
            icon={<FileText size={28} className="text-health-primary" />} 
            label="Monitor" 
            description="Continuous improvement through analytics" 
            number={4}
          />
        </motion.div>
        
        {/* Feature Cards with staggered animation */}
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
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-100 shadow-sm">
            🎯 Outcome: Transform your hospital with AI-driven efficiency and improved patient outcomes.
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
