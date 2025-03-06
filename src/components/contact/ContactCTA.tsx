
import React from 'react';
import { Button } from '@/components/Button';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-health-primary to-health-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-8 p-2 bg-white/10 backdrop-blur-sm rounded-full">
          <div className="flex space-x-4 p-1">
            <div className="bg-white/20 p-3 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <MessageCircle className="h-6 w-6" />
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Our team is here to help you harness the power of AI for better health outcomes
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 group" 
            icon={<Phone className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="tel:+18001234567"
          >
            Call Us
          </Button>
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 group" 
            icon={<Mail className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="mailto:support@akenohealth.ai"
          >
            Email Support
          </Button>
          <Button 
            className="bg-white text-health-primary hover:bg-gray-100 shadow-lg transform transition-transform hover:-translate-y-1 group" 
            icon={<MessageCircle className="h-5 w-5 group-hover:animate-pulse" />}
            as="a"
            href="#contact-form"
          >
            Live Chat
          </Button>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
          <div className="flex items-center justify-center bg-white/10 rounded-full p-3">
            <ArrowRight className="h-6 w-6" />
          </div>
          <p className="text-lg">
            Don't see what you need? <span className="font-semibold">Our team is ready to help with custom solutions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
