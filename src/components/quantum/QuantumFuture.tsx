
import React from 'react';
import { ArrowRight, BrainCircuit, Network, Users, Lightbulb } from 'lucide-react';

export const QuantumFuture = () => {
  const futureInitiatives = [
    {
      icon: <BrainCircuit size={24} className="text-blue-500" />,
      title: "Developing hybrid AI-quantum computing models",
      description: "Building advanced systems that combine the strengths of classical AI and quantum computing to solve complex healthcare challenges."
    },
    {
      icon: <Users size={24} className="text-purple-500" />,
      title: "Partnering with leading quantum computing firms",
      description: "Collaborating with industry pioneers to accelerate drug discovery and genomics research through quantum technologies."
    },
    {
      icon: <Lightbulb size={24} className="text-amber-500" />,
      title: "Optimizing AI-powered clinical decision-making",
      description: "Enhancing clinical decision support systems with quantum algorithms to ensure faster, more accurate medical insights."
    }
  ];

  return (
    <section className="mb-16 py-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-4">The Future of Quantum-Powered Healthcare</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            As quantum computing continues to evolve, Akeno Health AI is committed to pushing the boundaries of <strong>personalized medicine, disease prediction, and real-time patient monitoring</strong>. We are actively working on pioneering technologies that will shape the future of healthcare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {futureInitiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col h-full border border-indigo-100">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center mb-4">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-3">{initiative.title}</h3>
              <p className="text-health-dark/70">{initiative.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Redefining the Future of Precision Medicine</h3>
            <p className="mb-6">
              By integrating quantum computing, Akeno Health AI is ensuring faster breakthroughs, optimized treatments, and enhanced healthcare outcomes for patients worldwide.
            </p>
            <Network size={48} className="mx-auto mb-4 text-indigo-200" />
            <p className="italic font-medium">
              "Quantum computing is the next frontier in AI-driven medical innovation."
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-health-primary hover:text-health-primary/80 transition-colors font-medium">
            <span>Learn more about our quantum research initiatives</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
