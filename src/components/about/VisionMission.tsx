
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Sparkles, Target, Rocket, Brain, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisionMission = () => {
  const missionPoints = [
    "Empower individuals with continuous AI-driven health insights",
    "Support healthcare providers with real-time, AI-powered clinical decision support",
    "Enable pharmaceutical companies to accelerate drug discovery and optimise clinical trials",
    "Secure health data ownership through blockchain-powered patient records",
    "Create a global, decentralised, and intelligent healthcare network"
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pioneering AI healthcare solutions that reshape the future of medicine",
      icon: <Brain className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards in data privacy and healthcare",
      icon: <Shield className="h-5 w-5 text-purple-500" />
    },
    {
      title: "Inclusion",
      description: "Making advanced healthcare accessible to everyone, everywhere",
      icon: <Heart className="h-5 w-5 text-rose-500" />
    }
  ];

  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-health-light/10 to-white -z-10"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-health-primary/5 to-health-secondary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-health-primary/5 to-health-secondary/5 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-400/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 text-sm font-medium mb-5">
            <Sparkles size={16} className="text-indigo-500 mr-2" />
            Our Vision & Mission
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
            Transforming Healthcare with AI
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
          
          <p className="text-xl text-health-dark/70 max-w-3xl mx-auto mb-4">
            At <span className="font-semibold">Akeno Health</span>, we believe that <span className="font-semibold">healthcare should be predictive, personalised, and accessible to everyone</span>.
          </p>
        </div>
        
        {/* Vision and Mission Cards with Shared Background */}
        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 to-purple-400 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* Vision Card */}
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/30 rounded-3xl blur-lg transform group-hover:scale-105 transition-transform duration-500 opacity-80"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-indigo-100 h-full transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg mr-4">
                    <Target size={30} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-900">Our Vision</h3>
                </div>
                
                <div className="prose prose-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A world where <span className="font-semibold text-indigo-700">diseases are predicted before they occur</span>, treatments are tailored to each individual, and medical research accelerates breakthroughs that save lives.
                  </p>
                  <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                    We envision healthcare that is <span className="font-semibold text-indigo-700">proactive rather than reactive</span>, leveraging the power of AI to identify health risks before they become serious conditions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mission Card */}
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/30 rounded-3xl blur-lg transform group-hover:scale-105 transition-transform duration-500 opacity-80"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100 h-full transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-700 flex items-center justify-center shadow-lg mr-4">
                    <Rocket size={30} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">Our Mission</h3>
                </div>
                
                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="min-w-6 mt-1">
                        <Check size={20} className="text-purple-600" />
                      </div>
                      <span className="text-lg text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-health-dark mb-8">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-health-dark">{value.title}</h4>
                </div>
                <p className="text-health-dark/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
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
