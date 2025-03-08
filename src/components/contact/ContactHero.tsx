
import React from 'react';
import { Headset, Sparkles } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-health-primary/90 via-health-secondary/90 to-health-accent/90 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-white/10 animate-pulse"></div>
              <Headset className="h-16 w-16 relative z-10 drop-shadow-lg" />
            </div>
          </div>
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 shadow-lg">
            <Sparkles size={16} className="text-white animate-pulse" />
            <span>We're Here to Help</span>
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight drop-shadow-md">
            Get in Touch with Akeno Health
          </h1>
          
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our team is ready to assist you with any questions about our AI healthcare solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
