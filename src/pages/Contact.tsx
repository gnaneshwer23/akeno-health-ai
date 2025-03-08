
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <ContactHero />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Support Options */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-health-dark mb-8 text-center">How Can We Help You?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-health-primary/10 p-3 rounded-full mb-4">
                      <MessageCircle className="h-6 w-6 text-health-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
                    <p className="text-gray-600 mb-4">Get instant answers to your questions with our AI assistant.</p>
                    <Button
                      onClick={() => document.getElementById('floating-chatbot-button')?.click()}
                      variant="outline"
                      className="mt-auto"
                    >
                      Start Chat
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-health-primary/10 p-3 rounded-full mb-4">
                      <Phone className="h-6 w-6 text-health-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-4">Speak directly with our support team for complex inquiries.</p>
                    <Button
                      variant="outline"
                      className="mt-auto"
                      onClick={() => window.location.href = 'tel:+18001234567'}
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-health-primary/10 p-3 rounded-full mb-4">
                      <Mail className="h-6 w-6 text-health-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-4">Send us an email for non-urgent questions and inquiries.</p>
                    <Button
                      variant="outline"
                      className="mt-auto"
                      onClick={() => window.location.href = 'mailto:support@akenohealth.ai'}
                    >
                      Email Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="pt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
