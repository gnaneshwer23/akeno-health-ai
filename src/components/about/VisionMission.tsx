
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Sparkles, Target, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const VisionMission = () => {
  const missionPoints = [
    "Empower individuals with continuous AI-driven health insights",
    "Support healthcare providers with real-time, AI-powered clinical decision support",
    "Enable pharmaceutical companies to accelerate drug discovery and optimise clinical trials",
    "Secure health data ownership through blockchain-powered patient records",
    "Create a global, decentralised, and intelligent healthcare network"
  ];

  return (
    <section id="vision" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-health-light/20 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-health-primary/5 to-health-secondary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-96 bg-gradient-to-tr from-health-primary/5 to-health-secondary/5 blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up-1">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-indigo-700 text-sm font-medium mb-5">
            <Sparkles size={16} className="text-purple-500 mr-2" />
            Our Vision & Mission – Transforming Healthcare with AI
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-8">
            Revolutionising Healthcare with AI
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
          </div>
          
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-4">
            At <span className="font-semibold">Akeno Health</span>, we believe that <span className="font-semibold">healthcare should be predictive, personalised, and accessible to everyone</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-xl bg-gradient-to-br from-white to-indigo-50/50 hover:shadow-2xl transition-shadow duration-500 fade-up-2">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-t-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-white/10 rounded-full"></div>
                
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-health-dark/80 leading-relaxed">
                  A world where <span className="font-semibold">diseases are predicted before they occur, treatments are tailored to each individual, and medical research accelerates breakthroughs that save lives.</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-xl bg-gradient-to-br from-white to-purple-50/50 hover:shadow-2xl transition-shadow duration-500 fade-up-3">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-purple-600 to-fuchsia-700 p-6 rounded-t-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-white/10 rounded-full"></div>
                
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                    <Rocket size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-health-dark/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16 fade-up-4">
          <p className="text-xl font-medium text-health-dark mb-8">
            We are not just improving healthcare – we are redefining it.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 group"
            asChild
          >
            <Link to="/contact" className="flex items-center gap-2">
              Join Us in the AI Healthcare Revolution
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
