
import React from 'react';
import { CheckCircle2, Zap, Lock, Brain, LineChart, BarChart3 } from 'lucide-react';

export const QuantumBenefits = () => {
  const benefits = [
    {
      icon: <Zap size={24} className="text-blue-500" />,
      title: "Exponential speed-up in biomedical simulations and drug development",
      description: "Process complex molecular interactions in minutes instead of months.",
      percentage: 85
    },
    {
      icon: <Brain size={24} className="text-purple-500" />,
      title: "Advanced disease prediction and prevention based on quantum-enhanced AI models",
      description: "Identify disease patterns before symptoms appear, enabling preventative interventions.",
      percentage: 78
    },
    {
      icon: <CheckCircle2 size={24} className="text-green-500" />,
      title: "Hyper-personalized medicine tailored to an individual's genetic and immune landscape",
      description: "Customize treatments with unprecedented precision to maximize efficacy and minimize side effects.",
      percentage: 92
    },
    {
      icon: <Lock size={24} className="text-red-500" />,
      title: "Secure quantum encryption for privacy-first patient data management",
      description: "Protect sensitive health information with advanced quantum cryptography.",
      percentage: 88
    },
    {
      icon: <LineChart size={24} className="text-amber-500" />,
      title: "Enhanced AI-driven diagnostics and medical imaging analytics",
      description: "Detect abnormalities and diagnose conditions with greater accuracy and speed.",
      percentage: 80
    }
  ];

  return (
    <section className="mb-16 px-6 py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-health-dark mb-4">Why Quantum Computing for Healthcare?</h2>
            <div className="h-1 w-20 bg-health-primary mb-6"></div>
            <p className="text-lg text-health-dark/70 mb-4">
              Traditional computing struggles to analyze the massive complexity of biological systems, making disease modeling and drug discovery slow and expensive.
            </p>
            <p className="text-lg text-health-dark/70 mb-6">
              Quantum computing enables Akeno Health AI to <span className="font-medium">process exponentially more data at unprecedented speeds</span>, allowing for real-time medical breakthroughs and enhanced precision healthcare.
            </p>
            
            <div className="hidden md:block relative mt-10">
              <div className="w-full h-40 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <BarChart3 size={80} className="text-indigo-500/30" />
                  <BarChart3 size={80} className="absolute top-0 left-0 text-indigo-600 animate-pulse" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)' }} />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-health-primary flex items-center justify-center text-white font-bold">10x</div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-health-dark mb-8 md:mt-0 mt-6">Key Benefits of Quantum AI in Healthcare:</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-indigo-100">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-health-dark pr-4">{benefit.title}</h4>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                          {benefit.percentage}% improvement
                        </span>
                      </div>
                      <p className="text-health-dark/70">{benefit.description}</p>
                      <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                        <div className="h-2 bg-indigo-500 rounded-full" style={{ width: `${benefit.percentage}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
