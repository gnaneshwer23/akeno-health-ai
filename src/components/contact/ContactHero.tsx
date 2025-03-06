
import React from 'react';
import { Headset } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-health-primary/90 to-health-secondary/90 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Headset className="h-20 w-20" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact & Support
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            We're committed to providing exceptional support for patients, healthcare providers, 
            researchers, and industry partners through AI-powered and human-led solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
