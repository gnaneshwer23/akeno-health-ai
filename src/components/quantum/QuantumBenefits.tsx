
import React from 'react';
import { CheckCircle2, Zap, Lock, Brain, LineChart } from 'lucide-react';

export const QuantumBenefits = () => {
  const benefits = [
    {
      icon: <Zap size={24} className="text-blue-500" />,
      title: "Exponential speed-up in biomedical simulations and drug development",
      description: "Process complex molecular interactions in minutes instead of months."
    },
    {
      icon: <Brain size={24} className="text-purple-500" />,
      title: "Advanced disease prediction and prevention based on quantum-enhanced AI models",
      description: "Identify disease patterns before symptoms appear, enabling preventative interventions."
    },
    {
      icon: <CheckCircle2 size={24} className="text-green-500" />,
      title: "Hyper-personalized medicine tailored to an individual's genetic and immune landscape",
      description: "Customize treatments with unprecedented precision to maximize efficacy and minimize side effects."
    },
    {
      icon: <Lock size={24} className="text-red-500" />,
      title: "Secure quantum encryption for privacy-first patient data management",
      description: "Protect sensitive health information with advanced quantum cryptography."
    },
    {
      icon: <LineChart size={24} className="text-amber-500" />,
      title: "Enhanced AI-driven diagnostics and medical imaging analytics",
      description: "Detect abnormalities and diagnose conditions with greater accuracy and speed."
    }
  ];

  return (
    <section className="mb-16 px-6 py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-4">Why Quantum Computing for Healthcare?</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Traditional computing struggles to analyze the massive complexity of biological systems, making disease modeling and drug discovery slow and expensive. Quantum computing enables Akeno Health AI to <span className="font-medium">process exponentially more data at unprecedented speeds</span>, allowing for real-time medical breakthroughs and enhanced precision healthcare.
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-health-dark mb-8 text-center">Key Benefits of Quantum AI in Healthcare:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-indigo-100">
              <div className="flex items-start gap-4 h-full">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-health-dark mb-2">{benefit.title}</h4>
                  <p className="text-health-dark/70">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
