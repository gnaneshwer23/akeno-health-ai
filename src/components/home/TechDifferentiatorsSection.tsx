
import React from 'react';
import { Shield, Dna, Brain, Atom, Link } from 'lucide-react';

export const TechDifferentiatorsSection: React.FC = () => {
  const differentiators = [
    {
      icon: <Dna size={24} className="text-health-primary" />,
      title: "Digital Twin Technology",
      description: "Patient-specific simulations built from wearables, genomics, and EHR."
    },
    {
      icon: <Shield size={24} className="text-health-secondary" />,
      title: "Federated Learning",
      description: "Privacy-first AI models trained without ever moving sensitive data."
    },
    {
      icon: <Brain size={24} className="text-health-accent" />,
      title: "Explainable AI",
      description: "Trust built in – clinicians see why AI recommends what it does."
    },
    {
      icon: <Atom size={24} className="text-indigo-500" />,
      title: "Quantum Drug Simulation",
      description: "Faster molecule screening using quantum-enhanced predictions."
    },
    {
      icon: <Link size={24} className="text-blue-500" />,
      title: "Blockchain Consent Layer",
      description: "You decide when, how, and by whom your data is accessed."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-health-primary/10 text-health-primary font-medium mb-4">
            <Atom size={16} className="mr-2" />
            Our Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Tech Differentiators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What sets Akeno apart from traditional healthcare solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Panel: Feature Summary */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-health-primary/10">
            <h3 className="text-xl font-medium mb-6">Summary of Features</h3>
            
            <div className="space-y-6">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                    {diff.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{diff.title}</h4>
                    <p className="text-sm text-muted-foreground">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Panel: Interactive Flowchart */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-health-primary/10">
            <h3 className="text-xl font-medium mb-6">Data Flow Architecture</h3>
            
            <div className="relative h-80 overflow-hidden">
              {/* Simplified flowchart visualization */}
              <div className="absolute inset-4">
                <div className="h-full w-full flex flex-col items-center justify-between">
                  {/* Data Collection */}
                  <div className="w-full bg-health-primary/10 rounded-lg p-4 text-center">
                    <h4 className="font-medium text-health-primary">Data Collection</h4>
                    <p className="text-xs text-muted-foreground">Wearables, EHR, Labs, Imaging</p>
                  </div>
                  
                  {/* Arrows */}
                  <div className="h-8 w-0.5 bg-health-primary/50"></div>
                  
                  {/* Processing Layer */}
                  <div className="w-full bg-health-secondary/10 rounded-lg p-4 text-center">
                    <h4 className="font-medium text-health-secondary">Secure Processing</h4>
                    <p className="text-xs text-muted-foreground">Federated Learning, Blockchain Authentication</p>
                  </div>
                  
                  {/* Arrows */}
                  <div className="h-8 w-0.5 bg-health-secondary/50"></div>
                  
                  {/* Insight Generation */}
                  <div className="w-full bg-health-accent/10 rounded-lg p-4 text-center">
                    <h4 className="font-medium text-health-accent">Insight Generation</h4>
                    <p className="text-xs text-muted-foreground">AI Models, Digital Twin Simulation</p>
                  </div>
                  
                  {/* Arrows */}
                  <div className="h-8 w-0.5 bg-health-accent/50"></div>
                  
                  {/* Solutions */}
                  <div className="w-full bg-blue-500/10 rounded-lg p-4 text-center">
                    <h4 className="font-medium text-blue-500">Actionable Solutions</h4>
                    <p className="text-xs text-muted-foreground">Predictions, Alerts, Treatment Recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
