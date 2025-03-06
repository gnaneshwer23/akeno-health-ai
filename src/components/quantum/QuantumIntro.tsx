
import React from 'react';
import { Atom, Zap, Braces } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const QuantumIntro = () => {
  return (
    <section className="mb-16 py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-4">What is Quantum Computing?</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Quantum computing uses <strong>quantum bits (qubits)</strong> to perform calculations that traditional computers struggle with. 
            Unlike classical computers, which process data in binary (0s and 1s), quantum computers leverage 
            <strong> superposition and entanglement</strong> to solve multi-dimensional problems exponentially faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Atom size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-2">Superposition</h3>
              <p className="text-health-dark/70">
                Qubits can exist in multiple states simultaneously, allowing quantum computers to process vast possibilities at once rather than sequentially.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-2">Entanglement</h3>
              <p className="text-health-dark/70">
                Quantum entanglement links qubits so that the state of one instantly affects others, enabling complex problem-solving across the entire system.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Braces size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-2">Quantum Advantage</h3>
              <p className="text-health-dark/70">
                This computational power is particularly beneficial in healthcare fields like genomics, drug development, and AI-driven diagnostics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
