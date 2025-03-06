import React from 'react';
import { Shield, Sparkles, Heart, Target, Lightbulb, Glasses, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const VisionMission = () => {
  const pillars = [
    {
      icon: <Shield size={24} />,
      title: "AI-Powered Predictive Healthcare",
      description: "Early disease detection through advanced biomarker analysis and AI modeling, preventing conditions before they manifest."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Personalized Medicine & Therapy Optimization",
      description: "Leveraging AI to fine-tune treatments based on real-time biological changes, genomic insights, and epigenetic modifications."
    },
    {
      icon: <Heart size={24} />,
      title: "Continuous Health Monitoring & Adaptive Therapy",
      description: "Using AI-driven analytics to dynamically update treatment plans in response to physiological and lifestyle changes."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Accelerating Biotech & Drug Discovery",
      description: "AI-powered biomarker research, drug repurposing, and clinical trial optimization for faster and more effective therapeutic innovations."
    },
    {
      icon: <Glasses size={24} />,
      title: "Empowering Patients & Clinicians",
      description: "Delivering actionable AI-driven insights that support personalized health decisions, optimized treatments, and improved patient engagement."
    },
    {
      icon: <Cpu size={24} />,
      title: "Quantum Computing Integration",
      description: "Harnessing quantum capabilities to solve complex healthcare problems, accelerate drug discovery, and enable unprecedented advances in personalized medicine."
    }
  ];

  return (
    <section id="vision" className="mb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-16">
          {/* Vision Column */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center">
                <Target size={24} className="text-health-primary" />
              </div>
              <h2 className="text-3xl font-bold text-health-dark">Our Vision</h2>
            </div>
            
            <Card className="bg-health-light border-none">
              <CardContent className="p-6">
                <p className="text-health-dark/80 mb-6">
                  At Akeno Health AI, our vision is to reshape the future of healthcare by seamlessly integrating artificial intelligence, 
                  multi-omics analysis, and real-time digital twin simulations. We envision a healthcare ecosystem where diseases are 
                  identified at their earliest stages, treatments are uniquely tailored to an individual's genetic, epigenetic, 
                  and immune profile, and healthcare decisions are continuously optimized through AI-driven insights.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Mission Column */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center">
                <Lightbulb size={24} className="text-health-primary" />
              </div>
              <h2 className="text-3xl font-bold text-health-dark">Our Mission</h2>
            </div>
            
            <Card className="bg-health-light border-none">
              <CardContent className="p-6">
                <p className="text-health-dark/80">
                  We are committed to bridging the gap between conventional medicine and AI-powered precision healthcare. 
                  Our mission is to develop a proactive, predictive, and highly personalized approach to patient care, 
                  ensuring that individuals receive treatments and interventions that are tailored to their unique biology. 
                  By harnessing the power of AI-driven diagnostics, wearable health monitoring, and molecular-level analytics, 
                  we empower patients, clinicians, and researchers to take control of health outcomes and drive life-changing 
                  innovations in medicine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Key Pillars */}
        <h3 className="text-2xl font-semibold text-health-dark mb-8 text-center">Our Key Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center flex-shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h4 className="font-medium text-health-dark mb-2">{pillar.title}</h4>
                <p className="text-health-dark/70 text-sm">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-health-primary italic">
            At Akeno Health AI, we don't just follow the future of healthcare—we create it.
          </p>
        </div>
      </div>
    </section>
  );
};
