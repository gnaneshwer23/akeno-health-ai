
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Stethoscope, FileText, Bell, ArrowRight } from 'lucide-react';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <Stethoscope size={24} />,
      title: "AI-Assisted Diagnostics",
      description: "Advanced machine learning models analyze medical imaging, pathology reports, laboratory results, and genetic data to provide high-accuracy diagnoses."
    },
    {
      icon: <FileText size={24} />,
      title: "AI-Generated Health Reports",
      description: "AI compiles holistic patient reports by integrating EHRs, biometrics, genomic sequencing, and other data to provide a 360-degree health overview."
    },
    {
      icon: <Bell size={24} />,
      title: "Real-Time Alerts & Monitoring",
      description: "AI continuously monitors patient vitals and biomarkers, issuing instant alerts for critical conditions and enabling remote patient monitoring."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Comprehensive Solutions for Healthcare Providers
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform integrates AI-powered diagnostics, risk assessments, and remote monitoring to transform medicine into a more predictive, proactive, and precision-based system.
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
            <span className="text-sm font-medium text-health-dark">Monitor</span>
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
