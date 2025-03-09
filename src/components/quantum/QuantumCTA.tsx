
import React from 'react';
import { Button } from '@/components/ui/button';
import { Atom, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuantumCTA = () => {
  return (
    <section className="mb-16 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl z-0"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                Join the Quantum AI Revolution
              </h2>
              <p className="text-health-dark/70 mb-6">
                Are you a researcher, healthcare professional, or investor looking to be part of the next breakthrough in AI-driven medicine? Partner with Akeno Health and help us build the future of AI-powered, quantum-accelerated, and blockchain-secured healthcare.
              </p>
              <p className="text-health-dark/70 mb-6 font-medium">
                Akeno Health isn't just leading healthcare innovation – we're redefining it for the future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <Atom size={16} />
                    Contact Us Today
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                  asChild
                >
                  <Link to="/case-studies" className="flex items-center gap-2">
                    <ArrowRight size={16} />
                    Explore Our Research
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-10 animate-pulse"></div>
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-700 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-14 rounded-full bg-gradient-to-r from-purple-700 to-blue-800 opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Atom size={40} className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
