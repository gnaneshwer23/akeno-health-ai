
import React from 'react';
import { ArrowRight, BrainCircuit, Network, Users, Lightbulb, CircuitBoard } from 'lucide-react';

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
    <section className="mb-16 py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">The Future of Quantum-Powered Healthcare</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>
            <p className="text-lg text-health-dark/70 mb-8">
              As quantum computing continues to evolve, Akeno Health AI is committed to pushing the boundaries of <strong>personalized medicine, disease prediction, and real-time patient monitoring</strong>. We are actively working on pioneering technologies that will shape the future of healthcare.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-all">
                <h3 className="font-medium text-blue-800 mb-2">2023</h3>
                <p className="text-sm text-blue-700">Initial quantum models for drug discovery</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 hover:shadow-md transition-all">
                <h3 className="font-medium text-purple-800 mb-2">2024</h3>
                <p className="text-sm text-purple-700">Quantum-enhanced diagnostics launch</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-all">
                <h3 className="font-medium text-green-800 mb-2">2025</h3>
                <p className="text-sm text-green-700">Advanced hybrid AI-quantum systems</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 hover:shadow-md transition-all">
                <h3 className="font-medium text-amber-800 mb-2">2026</h3>
                <p className="text-sm text-amber-700">Full quantum integration across platforms</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-purple-100 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 bg-blue-100 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-purple-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <CircuitBoard size={80} className="text-purple-600" />
              </div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0" width="256" height="256">
                <circle cx="128" cy="128" r="100" fill="none" stroke="rgba(147, 51, 234, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
                <circle cx="128" cy="128" r="80" fill="none" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                <circle cx="128" cy="128" r="60" fill="none" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Nodes */}
                <circle cx="200" cy="128" r="4" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="56" cy="128" r="4" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="128" cy="200" r="4" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="128" cy="56" r="4" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="173" cy="173" r="4" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="173" cy="83" r="4" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="83" cy="173" r="4" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="83" cy="83" r="4" fill="rgba(147, 51, 234, 0.6)" />
                
                {/* Connection lines */}
                <line x1="128" y1="128" x2="200" y2="128" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <line x1="128" y1="128" x2="56" y2="128" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <line x1="128" y1="128" x2="128" y2="200" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <line x1="128" y1="128" x2="128" y2="56" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <line x1="128" y1="128" x2="173" y2="173" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <line x1="128" y1="128" x2="173" y2="83" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <line x1="128" y1="128" x2="83" y2="173" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <line x1="128" y1="128" x2="83" y2="83" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {futureInitiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-purple-100">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center mb-4">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-bold text-health-dark mb-3">{initiative.title}</h3>
                <p className="text-health-dark/70 mb-4">{initiative.description}</p>
                <div className="mt-auto pt-4">
                  <div className="w-full h-1 bg-gray-200 rounded-full">
                    <div className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-1/2"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>In progress</span>
                    <span>Future state</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Redefining the Future of Precision Medicine</h3>
            <p className="mb-6">
              By integrating quantum computing, Akeno Health AI is ensuring faster breakthroughs, optimized treatments, and enhanced healthcare outcomes for patients worldwide.
            </p>
            <Network size={48} className="mx-auto mb-4 text-blue-200" />
            <p className="italic font-medium">
              "Quantum computing is the next frontier in AI-driven medical innovation."
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors font-medium">
            <span>Learn more about our quantum research initiatives</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
