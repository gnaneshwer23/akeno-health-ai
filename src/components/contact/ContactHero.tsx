
import React from 'react';
import { Headset, MessageSquare, Phone, Mail, Sparkles } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-health-primary/90 via-health-secondary/90 to-health-accent/90 text-white py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-white/10 animate-pulse"></div>
              <div className="absolute -inset-12 rounded-full bg-white/5 animate-pulse [animation-delay:1s]"></div>
              <Headset className="h-20 w-20 relative z-10 drop-shadow-lg" />
            </div>
          </div>
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 shadow-lg">
            <Sparkles size={16} className="text-white animate-pulse" />
            <span>Support & Assistance</span>
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight drop-shadow-md">
            Connecting Through <span className="text-health-light/90 underline decoration-wavy decoration-2 decoration-health-light/30 underline-offset-8">AI</span> & <span className="text-health-light/90 underline decoration-wavy decoration-2 decoration-health-light/30 underline-offset-8">Human Support</span>
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
            We're committed to providing exceptional support for patients, healthcare providers, 
            researchers, and industry partners through AI-powered and human-led solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center hover:bg-white/20 transition-colors border border-white/10 shadow-lg hover:shadow-xl hover:translate-y-[-3px] transition-all duration-300 group">
              <div className="bg-white/20 p-3 rounded-full mb-3 group-hover:bg-white/30 transition-colors">
                <MessageSquare className="h-8 w-8 group-hover:text-health-light transition-colors" />
              </div>
              <span className="font-medium">AI Chatbot</span>
              <span className="text-sm opacity-80">24/7 Support</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center hover:bg-white/20 transition-colors border border-white/10 shadow-lg hover:shadow-xl hover:translate-y-[-3px] transition-all duration-300 group">
              <div className="bg-white/20 p-3 rounded-full mb-3 group-hover:bg-white/30 transition-colors">
                <Phone className="h-8 w-8 group-hover:text-health-light transition-colors" />
              </div>
              <span className="font-medium">Phone Support</span>
              <span className="text-sm opacity-80">Talk to an Expert</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center hover:bg-white/20 transition-colors border border-white/10 shadow-lg hover:shadow-xl hover:translate-y-[-3px] transition-all duration-300 group">
              <div className="bg-white/20 p-3 rounded-full mb-3 group-hover:bg-white/30 transition-colors">
                <Mail className="h-8 w-8 group-hover:text-health-light transition-colors" />
              </div>
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
