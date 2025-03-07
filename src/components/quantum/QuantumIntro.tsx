
import React from 'react';
import { Atom, Zap, Braces, Dna, BrainCircuit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const QuantumIntro = () => {
  return (
    <section className="mb-16 py-12 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">Revolutionizing Healthcare with Quantum AI</h2>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 relative overflow-hidden border border-purple-100">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-100 rounded-full opacity-30"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full opacity-30"></div>
              
              <div className="relative z-10">
                <p className="text-lg text-health-dark/70 mb-4">
                  Quantum computing is transforming precision medicine by accelerating drug discovery, optimizing diagnostics, and revolutionizing personalized healthcare.
                </p>
                
                <div className="flex justify-center my-6">
                  <div className="relative w-52 h-52">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-40 w-40 rounded-full bg-purple-100/50 animate-pulse"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-28 w-28 rounded-full bg-purple-200/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Atom size={64} className="text-purple-600" />
                    </div>
                    {/* Electron orbits */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-52 w-52 rounded-full border-2 border-dashed border-purple-300/40 animate-spin" style={{ animationDuration: '15s' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-52 w-32 rounded-full border-2 border-dashed border-blue-300/40 animate-spin" style={{ animationDuration: '12s', transform: 'rotate(60deg)' }}></div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-health-dark/70 font-medium">
                  Akeno Health AI harnesses quantum algorithms to bring forth an era of 
                  <span className="text-purple-600"> hyper-efficient, data-driven precision medicine.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-white to-purple-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Atom size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-2">Quantum Computing</h3>
              <p className="text-health-dark/70">
                Leveraging quantum bits (qubits) to perform calculations that traditional computers struggle with, enabling exponentially faster data processing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-blue-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BrainCircuit size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-2">AI Integration</h3>
              <p className="text-health-dark/70">
                Combining quantum computing with AI to analyze complex medical data, identify patterns, and make predictions with unprecedented accuracy and speed.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-green-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Dna size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-2">Healthcare Transformation</h3>
              <p className="text-health-dark/70">
                Redefining healthcare through quantum-powered precision medicine, drastically improving patient outcomes and treatment efficacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
