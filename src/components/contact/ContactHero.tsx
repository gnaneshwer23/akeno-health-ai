
import React from 'react';
import { Headset, MessageSquare, Phone, Mail } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-health-primary/90 to-health-secondary/90 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-white/10 animate-pulse"></div>
              <Headset className="h-20 w-20 relative z-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact & Support
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            We're committed to providing exceptional support for patients, healthcare providers, 
            researchers, and industry partners through AI-powered and human-led solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center hover:bg-white/20 transition-colors">
              <MessageSquare className="h-8 w-8 mb-2" />
              <span className="font-medium">AI Chatbot</span>
              <span className="text-sm opacity-80">24/7 Support</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center hover:bg-white/20 transition-colors">
              <Phone className="h-8 w-8 mb-2" />
              <span className="font-medium">Phone Support</span>
              <span className="text-sm opacity-80">Talk to an Expert</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center hover:bg-white/20 transition-colors">
              <Mail className="h-8 w-8 mb-2" />
              <span className="font-medium">Email Support</span>
              <span className="text-sm opacity-80">24-48hr Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
