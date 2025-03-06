
import React from 'react';
import { Button } from '@/components/Button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-health-primary to-health-secondary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Our team is here to help you harness the power of AI for better health outcomes
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button className="bg-white text-health-primary hover:bg-gray-100" icon={<Phone className="h-5 w-5" />}>
            Call Us
          </Button>
          <Button className="bg-white text-health-primary hover:bg-gray-100" icon={<Mail className="h-5 w-5" />}>
            Email Support
          </Button>
          <Button className="bg-white text-health-primary hover:bg-gray-100" icon={<MessageCircle className="h-5 w-5" />}>
            Live Chat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
