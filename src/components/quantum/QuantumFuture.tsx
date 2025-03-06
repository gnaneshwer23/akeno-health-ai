
import React from 'react';
import { ArrowRight, BrainCircuit, Pill, Shield, Dna } from 'lucide-react';

export const QuantumFuture = () => {
  const futureApplications = [
    {
      icon: <BrainCircuit size={24} className="text-blue-500" />,
      title: "Real-time Biological System Simulation",
      description: "Simulating entire biological systems to test new treatments instantly."
    },
    {
      icon: <Pill size={24} className="text-purple-500" />,
      title: "Quantum-powered Drug Repurposing",
      description: "Finding new applications for existing medications through quantum analysis."
    },
    {
      icon: <Shield size={24} className="text-green-500" />,
      title: "AI-driven Quantum Encryption",
      description: "Securing patient data with quantum-enhanced encryption methods."
    },
    {
      icon: <Dna size={24} className="text-red-500" />,
      title: "Precision CRISPR Gene Editing",
      description: "Reducing unintended genetic modifications in gene therapy through quantum simulation."
    }
  ];

  return (
    <section className="mb-16 py-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-4">The Future of Quantum Computing in Healthcare</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            The intersection of <strong>quantum computing, AI, and healthcare</strong> will pave the way for breakthroughs that were once unimaginable. As quantum computing matures, its potential to transform healthcare will continue to expand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureApplications.map((app, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center">
                {app.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-health-dark mb-2">{app.title}</h3>
                <p className="text-health-dark/70">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-health-primary hover:text-health-primary/80 transition-colors font-medium">
            <span>Learn more about our quantum research</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
