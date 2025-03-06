
import React from 'react';
import { Microscope, Rocket, Link } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const CompanyStory = () => {
  const storyMilestones = [
    {
      icon: <Microscope size={28} className="text-health-primary" />,
      title: "The Breakthrough Moment",
      description: "Recognizing that AI could revolutionize how health data is interpreted, we envisioned an intelligent AI-driven platform capable of analysing real-time health data, detecting early disease markers, and optimizing treatments with unmatched precision. By integrating multi-omics science, advanced machine learning models, and real-time wearable monitoring, we saw an opportunity to reshape how diseases are diagnosed, prevented, and treated."
    },
    {
      icon: <Rocket size={28} className="text-health-primary" />,
      title: "Turning Vision into Reality",
      description: "Years of dedicated research, development, and collaboration with leading healthcare institutions, biotech companies, and regulatory organizations led us to build a cutting-edge AI-powered healthcare ecosystem. Today, Akeno Health AI is a pioneering force in precision medicine, delivering transformative tools for patients, healthcare providers, biotech innovators, and pharmaceutical researchers worldwide."
    },
    {
      icon: <Link size={28} className="text-health-primary" />,
      title: "Commitment to Continuous Innovation",
      description: "We continue to push the frontiers of AI-driven diagnostics, real-time digital twin modelling, personalized therapy recommendations, and AI-enhanced drug discovery. Our unwavering commitment ensures that healthcare evolves into a more predictive, efficient, and personalized system—empowering individuals with real-time insights, customized treatments, and improved health outcomes."
    }
  ];

  return (
    <section className="mb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-6">Our Story</h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
        </div>
        
        <Card className="bg-health-light border-none mb-12">
          <CardContent className="p-6">
            <p className="text-health-dark/80">
              The foundation of Akeno Health AI was built upon a simple but powerful belief: healthcare should be 
              predictive, not reactive. Our journey began when a team of AI researchers, medical doctors, biotech 
              professionals, and digital health entrepreneurs recognized the limitations of traditional medicine—diseases 
              were often detected too late, treatments followed a one-size-fits-all model, and the drug development 
              process remained lengthy, costly, and inefficient.
            </p>
          </CardContent>
        </Card>
        
        {/* Timeline visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-health-primary/20 hidden md:block"></div>
          
          <div className="space-y-10">
            {storyMilestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex items-start justify-center">
                  <div className="h-16 w-16 rounded-full bg-health-primary/10 flex items-center justify-center flex-shrink-0">
                    {milestone.icon}
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-health-dark mb-3">{milestone.title}</h3>
                  <p className="text-health-dark/70 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold text-health-primary">
            📢 Join us on our journey to redefine healthcare—because the future of medicine is powered by AI, 
            driven by data, and designed for precision.
          </p>
        </div>
      </div>
    </section>
  );
};
