
import React from 'react';
import { Atom, Zap, Braces, Dna } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const QuantumIntro = () => {
  return (
    <section className="mb-16 py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-4">Revolutionizing Healthcare with Quantum AI</h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Quantum computing is transforming precision medicine by accelerating drug discovery, optimizing diagnostics, and revolutionizing personalized healthcare. Akeno Health AI is at the forefront of integrating quantum computing to tackle some of the most complex challenges in medical research and patient care.
          </p>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto mt-4 font-medium">
            By harnessing quantum algorithms, we can enhance medical simulations, multi-omics analysis, and AI-driven treatment personalization, bringing forth an era of <span className="text-health-primary">hyper-efficient, data-driven precision medicine.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none hover:shadow-md transition-shadow">
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
          
          <Card className="bg-white border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-health-dark mb-2">AI Integration</h3>
              <p className="text-health-dark/70">
                Combining quantum computing with AI to analyze complex medical data, identify patterns, and make predictions with unprecedented accuracy and speed.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none hover:shadow-md transition-shadow">
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
