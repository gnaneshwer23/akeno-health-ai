
import React from 'react';
import { cn } from '@/lib/utils';
import { Smartphone, Database, Brain, FlaskConical, Activity, HeartPulse, Beaker } from 'lucide-react';

const InfographicSection = () => {
  const journeySteps = [
    {
      step: 1,
      title: "Data Integration",
      content: "Sync wearables, medical records, and genetic data with our platform",
      icon: <Smartphone size={24} />
    },
    {
      step: 2,
      title: "Continuous Analysis",
      content: "AI interprets your health data in real-time",
      icon: <Database size={24} />
    },
    {
      step: 3,
      title: "Risk Assessment",
      content: "Your Digital Twin predicts health risks with high accuracy",
      icon: <Brain size={24} />
    },
    {
      step: 4,
      title: "Custom Treatments",
      content: "Receive personalized therapy recommendations",
      icon: <FlaskConical size={24} />
    },
    {
      step: 5,
      title: "Adaptive Care",
      content: "Treatment adjustments based on your response",
      icon: <Activity size={24} />
    },
    {
      step: 6,
      title: "Clinical Insights",
      content: "Your doctor receives AI-driven treatment guidance",
      icon: <HeartPulse size={24} />
    },
    {
      step: 7,
      title: "Research Impact",
      content: "Your anonymized data helps advance medical breakthroughs",
      icon: <Beaker size={24} />
    }
  ];

  return (
    <section className="py-20 px-6 bg-health-light/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Your Health Journey with Akeno AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How our technology transforms your healthcare experience
          </p>
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
                      <div>
                        <h4 className="font-medium text-health-dark mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
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
