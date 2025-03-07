
import React from 'react';
import { Shield, Sparkles, Heart, Target, Lightbulb, Glasses, Cpu, Brain, FlaskConical, Activity, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const VisionMission = () => {
  const pillars = [
    {
      icon: <Shield size={24} className="text-purple-600" />,
      title: "AI-Powered Predictive Healthcare",
      description: "Early disease detection through advanced biomarker analysis and AI modeling, preventing conditions before they manifest and enabling proactive interventions.",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      borderColor: "border-purple-200"
    },
    {
      icon: <Sparkles size={24} className="text-blue-600" />,
      title: "Personalized Medicine & Quantum-Driven Therapy",
      description: "Leveraging AI to fine-tune treatments based on real-time biological changes, genomic insights, epigenetic modifications, and individual immune profiles.",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      borderColor: "border-blue-200"
    },
    {
      icon: <Heart size={24} className="text-rose-600" />,
      title: "Continuous Health Monitoring & Adaptive Therapy",
      description: "Using AI-driven analytics to dynamically update treatment plans in response to physiological, lifestyle, and environmental changes.",
      bgColor: "bg-gradient-to-br from-rose-100 to-rose-200",
      borderColor: "border-rose-200"
    },
    {
      icon: <Lightbulb size={24} className="text-amber-600" />,
      title: "Quantum Computing for Drug Discovery",
      description: "AI-powered biomarker research, drug repurposing, and clinical trial optimization for faster development of life-saving treatments.",
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
      borderColor: "border-amber-200"
    },
    {
      icon: <Glasses size={24} className="text-emerald-600" />,
      title: "Empowering Patients & Clinicians",
      description: "Delivering real-time, actionable AI-driven health insights that support personalized decisions, optimize treatments, and improve patient engagement.",
      bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Cpu size={24} className="text-indigo-600" />,
      title: "Quantum Computing Integration",
      description: "Harnessing quantum capabilities to solve complex healthcare problems, accelerate drug discovery, and enable unprecedented advances in personalized medicine.",
      bgColor: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section id="vision" className="mb-20 px-6 py-16 bg-gradient-to-b from-white to-health-light relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-health-accent/5 rounded-full blur-2xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-16">
          {/* Vision Column */}
          <div className="md:w-1/2 fade-up-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Target size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-health-dark">Our Vision</h2>
            </div>
            
            <Card className="bg-gradient-to-br from-white to-indigo-50 border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-health-dark/80 mb-6 leading-relaxed">
                  At Akeno Health AI, our vision is to reshape the future of healthcare by seamlessly integrating artificial intelligence, 
                  multi-omics analysis, quantum computing, and real-time digital twin simulations. We envision a predictive, personalized, 
                  and adaptive healthcare ecosystem where diseases are identified at their earliest stages, treatments are uniquely tailored 
                  to an individual's genetic, epigenetic, and immune profile, and healthcare decisions are continuously optimized through 
                  AI-driven insights.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Mission Column */}
          <div className="md:w-1/2 fade-up-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Lightbulb size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-health-dark">Our Mission</h2>
            </div>
            
            <Card className="bg-gradient-to-br from-white to-amber-50 border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-health-dark/80 leading-relaxed">
                  We are committed to bridging the gap between traditional medicine and next-generation AI-powered healthcare. 
                  Our mission is to develop a proactive, predictive, and highly personalized approach to patient care, 
                  ensuring that individuals receive treatments and interventions that are tailored to their unique biology. 
                  By harnessing the power of AI-driven diagnostics, continuous health monitoring, and molecular-level analytics, 
                  we empower patients, clinicians, and researchers to take control of health outcomes and drive life-changing 
                  innovations in medicine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Key Pillars */}
        <div className="text-center mb-12 fade-up-3">
          <h3 className="text-2xl font-semibold text-health-dark mb-4">How We're Transforming Healthcare</h3>
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-8"></div>
          <p className="text-health-dark/70 max-w-3xl mx-auto mb-10">
            Our approach to transforming healthcare is built on six fundamental pillars that guide our research, 
            development, and implementation of AI-driven healthcare solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 p-6 ${pillar.bgColor} rounded-xl shadow-sm border ${pillar.borderColor}
                hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 fade-up-${Math.min(index % 5 + 2, 5)}`}
            >
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                {pillar.icon}
              </div>
              <div>
                <h4 className="font-semibold text-health-dark mb-2">{pillar.title}</h4>
                <p className="text-health-dark/70">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-up-5">
          <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 border border-purple-200 mb-4">
            <p className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic">
              At Akeno Health AI, we don't just follow the future of healthcare—we create it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
