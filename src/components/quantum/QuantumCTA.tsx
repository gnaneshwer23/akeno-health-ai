
import React from 'react';
import { Button } from '@/components/ui/button';
import { Atom, ArrowRight, Brain, Shield, Activity } from 'lucide-react';
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-700 text-sm font-medium mb-5">
                <Atom size={16} className="text-purple-600 mr-2" />
                <span>Quantum Computing in Healthcare</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                Join the Quantum AI Revolution in Healthcare
              </h2>
              <p className="text-health-dark/70 mb-6">
                Be part of the next breakthrough in AI-driven medicine. Partner with Akeno Health to build the future of 
                AI-powered, quantum-accelerated, and blockchain-secured healthcare that will transform patient outcomes worldwide.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-purple-300/30">
                  <Brain size={18} className="text-purple-600" />
                  <span className="text-sm font-medium">Enhanced AI Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-purple-300/30">
                  <Activity size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">Drug Discovery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-purple-300/30">
                  <Shield size={18} className="text-indigo-600" />
                  <span className="text-sm font-medium">Secure Health Data</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:w-auto w-full gap-3">
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Link to="/register">Join the Network</Link>
              </Button>
              
              <Button 
                variant="outline"
                asChild 
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Link to="/quantum-computing">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
