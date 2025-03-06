
import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/Button';
import { Link } from 'react-router-dom';

const SupportTeam = () => {
  return (
    <section id="support-team" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
          Dedicated Support Team
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our experienced healthcare and technical specialists are ready to assist you through 
          multiple channels, ensuring personalized support for all your needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-health-primary/10 text-health-primary mb-4">
            <Phone className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
          <p className="text-gray-600 mb-4">
            Speak directly with our healthcare and technical specialists for immediate assistance.
          </p>
          <p className="text-health-primary font-medium">+1 (800) 123-4567</p>
          <p className="text-sm text-gray-500">Mon-Fri: 8AM-8PM EST</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-health-primary/10 text-health-primary mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600 mb-4">
            Send detailed inquiries for personalized responses from our expert team.
          </p>
          <p className="text-health-primary font-medium">support@akenohealth.ai</p>
          <p className="text-sm text-gray-500">24-48 hour response time</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-health-primary/10 text-health-primary mb-4">
            <MapPin className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Office Locations</h3>
          <p className="text-gray-600 mb-4">
            Visit our offices for in-person consultations and business partnerships.
          </p>
          <p className="text-health-primary font-medium">Global Headquarters</p>
          <p className="text-sm text-gray-500">San Francisco • New York • London • Tokyo</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-health-primary/10 text-health-primary mb-4">
            <Globe className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Global Support</h3>
          <p className="text-gray-600 mb-4">
            Multi-language assistance across time zones for international clients.
          </p>
          <p className="text-health-primary font-medium">12+ Languages</p>
          <p className="text-sm text-gray-500">24/7 International Support</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Button as="Link" to="/contact">
          Contact Our Team
        </Button>
      </div>
    </section>
  );
};

export default SupportTeam;
