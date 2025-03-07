
import React from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Activity, BrainCircuit, Shield, Sparkles } from 'lucide-react';

const PatientSolutionsHero = () => {
  const benefits = [
    {
      icon: <Activity size={20} className="text-teal-500" />,
      text: "Continuous health monitoring"
    },
    {
      icon: <BrainCircuit size={20} className="text-pink-500" />,
      text: "AI-powered health insights"
    },
    {
      icon: <Shield size={20} className="text-blue-500" />,
      text: "Secure, private health data"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-white/80"></div>
      <div className="absolute top-32 right-12 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-12 w-72 h-72 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-yellow-100/30 rounded-full blur-xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-indigo-700 font-medium shadow-sm">
          <Sparkles size={16} className="text-blue-500" />
          <span>Patient-Centered Solutions</span>
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-600 text-transparent bg-clip-text">
          Empowering Patients with <span className="text-pink-600">AI</span> & <span className="text-teal-600">Digital Health</span>
        </h1>
        
        <div className="flex justify-center mb-6">
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <p className="text-lg text-indigo-900/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          At Akeno Health AI, we are redefining precision medicine by providing AI-driven solutions that empower patients with personalized healthcare experiences and preventive insights.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-indigo-100">
              {benefit.icon}
              <span className="text-sm font-medium text-indigo-800">{benefit.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="primary" className="sm:w-auto w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Explore Solutions
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" className="sm:w-auto w-full border-indigo-300 text-indigo-700 hover:bg-indigo-50">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientSolutionsHero;
