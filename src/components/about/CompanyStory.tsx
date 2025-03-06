
import React from 'react';
import { Microscope, Rocket, Link, CalendarDays, Database, Brain, FlaskConical, Activity, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const CompanyStory = () => {
  const storyMilestones = [
    {
      year: "2021",
      icon: <Microscope size={28} className="text-health-primary" />,
      title: "The Breakthrough Moment",
      description: "Recognizing that AI could revolutionize how health data is interpreted, we envisioned an intelligent AI-driven platform capable of analysing real-time health data, detecting early disease markers, and optimizing treatments with unmatched precision. By integrating multi-omics science, advanced machine learning models, and real-time wearable monitoring, we saw an opportunity to reshape how diseases are diagnosed, prevented, and treated."
    },
    {
      year: "2022-2023",
      icon: <Rocket size={28} className="text-health-primary" />,
      title: "Turning Vision into Reality",
      description: "Years of dedicated research, development, and collaboration with leading healthcare institutions, biotech companies, and regulatory organizations led us to build a cutting-edge AI-powered healthcare ecosystem. Today, Akeno Health AI is a pioneering force in precision medicine, delivering transformative tools for patients, healthcare providers, biotech innovators, and pharmaceutical researchers worldwide."
    },
    {
      year: "2024+",
      icon: <Link size={28} className="text-health-primary" />,
      title: "Commitment to Continuous Innovation",
      description: "We continue to push the frontiers of AI-driven diagnostics, real-time digital twin modelling, personalized therapy recommendations, and AI-enhanced drug discovery. Our unwavering commitment ensures that healthcare evolves into a more predictive, efficient, and personalized system—empowering individuals with real-time insights, customized treatments, and improved health outcomes."
    }
  ];

  const innovationAreas = [
    {
      icon: <Brain size={24} className="text-health-primary" />,
      title: "AI-powered diagnostics",
      description: "Delivering precision at scale through advanced machine learning models"
    },
    {
      icon: <FlaskConical size={24} className="text-health-primary" />,
      title: "Digital twin modeling",
      description: "Creating hyper-personalized treatment simulations that predict therapy outcomes"
    },
    {
      icon: <Cpu size={24} className="text-health-primary" />,
      title: "Quantum computing applications",
      description: "Accelerating drug discovery and disease prediction with quantum algorithms"
    },
    {
      icon: <Database size={24} className="text-health-primary" />,
      title: "Multi-omics analysis",
      description: "Revolutionizing precision medicine through integrated biological data"
    },
    {
      icon: <Activity size={24} className="text-health-primary" />,
      title: "Real-time health monitoring",
      description: "Making proactive care accessible through continuous biomarker assessment"
    }
  ];

  return (
    <section className="mb-20 px-6 pt-16 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-health-light to-white z-0"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-health-accent/5 rounded-full blur-xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 fade-up-1">
          <h2 className="text-3xl font-bold text-health-dark mb-6">Our Story: Turning AI Innovation into Reality</h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
        </div>
        
        <Card className="bg-white border-none shadow-md mb-16 hover:shadow-lg transition-all duration-300 fade-up-2">
          <CardContent className="p-8">
            <p className="text-health-dark/80 text-lg leading-relaxed">
              Akeno Health AI was founded on a simple but powerful belief: healthcare should be predictive, not reactive. 
              Our journey began when a team of AI researchers, medical doctors, biotech professionals, and digital health 
              entrepreneurs recognized the limitations of traditional medicine—diseases were often detected too late, 
              treatments followed a one-size-fits-all model, and the drug development process remained lengthy, 
              costly, and inefficient.
            </p>
          </CardContent>
        </Card>
        
        {/* Timeline visualization */}
        <div className="relative mb-16">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-health-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {storyMilestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-6 fade-up-${index + 3}`}>
                <div className="md:w-16 flex items-start justify-center">
                  <div className="h-16 w-16 rounded-full bg-health-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-health-primary/20">
                    {milestone.icon}
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays size={18} className="text-health-primary" />
                    <span className="text-health-primary font-semibold">{milestone.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-health-dark mb-4">{milestone.title}</h3>
                  <p className="text-health-dark/70 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Innovation Areas */}
        <div className="mb-16 fade-up-5">
          <h3 className="text-2xl font-semibold text-health-dark mb-8 text-center">Our Commitment to Innovation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {innovationAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h4 className="font-semibold text-health-dark mb-2">{area.title}</h4>
                <p className="text-health-dark/70 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center fade-up-5">
          <div className="inline-block px-8 py-5 rounded-lg bg-health-primary/10 transform hover:scale-105 transition-transform">
            <p className="text-xl font-semibold text-health-primary mb-2">
              Join us in shaping the future of AI-powered healthcare
            </p>
            <p className="text-health-dark/80">
              The future of medicine is here—and it's powered by AI, driven by quantum computing, and designed for precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
