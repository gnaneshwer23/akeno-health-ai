
import React from 'react';
import { Button } from '@/components/Button';
import { Atom, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuantumCTA = () => {
  return (
    <section className="mb-16 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-health-primary/5 blur-3xl z-0"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-health-dark mb-4">
                Join Us in Transforming Healthcare
              </h2>
              <p className="text-health-dark/70 mb-6">
                Quantum computing is the next frontier in AI-driven medical innovation. At Akeno Health AI, 
                we are dedicated to leveraging this revolutionary technology to bring smarter, faster, 
                and more personalized healthcare solutions to the world.
              </p>
              <p className="text-health-dark/70 mb-6 font-medium">
                Stay tuned as we continue to pioneer the fusion of AI, quantum computing, and precision medicine.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" as="Link" to="/quantum-computing" className="group" icon={<Atom size={16} />}>
                  Explore Quantum Solutions
                </Button>
                <Button variant="outline" as="Link" to="/contact" icon={<ArrowRight size={16} />}>
                  Contact Our Research Team
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-10 animate-pulse"></div>
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-14 rounded-full bg-gradient-to-r from-blue-700 to-indigo-800 opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Atom size={40} className="text-health-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
