
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Stethoscope, FileText, Bell, ArrowRight } from 'lucide-react';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <Stethoscope size={24} />,
      title: "AI-Powered Clinical Decision Support",
      description: "Enhanced clinical expertise with real-time, evidence-based AI assistance for patient diagnosis, risk stratification, and evidence-based treatment suggestions."
    },
    {
      icon: <FileText size={24} />,
      title: "EHR Integration & Patient Insights",
      description: "Seamless integration with your existing systems providing instant AI analysis of EHRs, imaging data, lab results, and genomics with automated documentation."
    },
    {
      icon: <Bell size={24} />,
      title: "AI Treatment Recommendations",
      description: "Personalized, evidence-based treatment plans leveraging AI and precision medicine with automatic alerts for drug interactions and safety concerns."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            AI-Powered Solutions for Healthcare Professionals
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform integrates AI-powered diagnostics, real-time data insights, and treatment recommendations to transform medicine into a more predictive, proactive, and precision-based system.
          </p>
        </div>
        
        {/* Solutions Process Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-14 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2">
              <Stethoscope size={28} className="text-health-primary" />
            </div>
            <span className="text-sm font-medium text-health-dark">Diagnose</span>
          </div>
          <ArrowRight size={24} className="hidden md:block text-health-primary/30 mx-2" />
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2">
              <FileText size={28} className="text-health-primary" />
            </div>
            <span className="text-sm font-medium text-health-dark">Analyze</span>
          </div>
          <ArrowRight size={24} className="hidden md:block text-health-primary/30 mx-2" />
          <div className="w-0.5 h-6 bg-health-primary/30 md:hidden my-2"></div>
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2">
              <Bell size={28} className="text-health-primary" />
            </div>
            <span className="text-sm font-medium text-health-dark">Treat</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
