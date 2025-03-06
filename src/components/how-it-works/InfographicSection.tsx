
import React from 'react';
import { cn } from '@/lib/utils';
import { Smartphone, Database, Brain, FlaskConical, Activity, HeartPulse, Beaker } from 'lucide-react';

const InfographicSection = () => {
  const journeySteps = [
    {
      step: 1,
      content: "Patients onboard by syncing their wearable, EHR, and genetic data into Akeno Health AI.",
      icon: <Smartphone size={24} />
    },
    {
      step: 2,
      content: "AI continuously collects and interprets real-time biometrics, lifestyle inputs, and multi-omics data.",
      icon: <Database size={24} />
    },
    {
      step: 3,
      content: "The Digital Twin AI engine analyses patient health trends, predicting disease risks with unparalleled accuracy.",
      icon: <Brain size={24} />
    },
    {
      step: 4,
      content: "AI provides personalized, real-time therapy recommendations based on genetics, immunology, and biomarker insights.",
      icon: <FlaskConical size={24} />
    },
    {
      step: 5,
      content: "Continuous AI monitoring dynamically adjusts treatment recommendations based on patient responses.",
      icon: <Activity size={24} />
    },
    {
      step: 6,
      content: "Doctors and researchers gain AI-driven insights to refine treatment decisions and optimize healthcare strategies.",
      icon: <HeartPulse size={24} />
    },
    {
      step: 7,
      content: "Pharma and biotech firms leverage AI-driven analytics to power precision drug development and next-gen clinical research.",
      icon: <Beaker size={24} />
    }
  ];

  return (
    <section className="py-20 px-6 bg-health-light/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            The Patient Health Journey with Akeno Health AI
          </h2>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-health-primary/30"></div>
          
          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((item, index) => (
              <div key={index} className={cn(
                "flex flex-col lg:flex-row gap-6 items-center lg:items-start relative",
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              )}>
                <div className="absolute left-4 lg:left-1/2 top-0 transform -translate-x-1/2 z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-health-primary text-white text-sm font-medium">
                    {item.step}
                  </div>
                </div>
                
                <div className={cn(
                  "w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-8",
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                )}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-health-primary/10">
                    <div className={cn(
                      "flex gap-4 items-start",
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    )}>
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                        {item.icon}
                      </div>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
