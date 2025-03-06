
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import AIChatbot from '@/components/contact/AIChatbot';
import TelehealthConsultations from '@/components/contact/TelehealthConsultations';
import SupportTeam from '@/components/contact/SupportTeam';
import EnterprisePartnerships from '@/components/contact/EnterprisePartnerships';
import SelfHelpResources from '@/components/contact/SelfHelpResources';
import ContactCTA from '@/components/contact/ContactCTA';
import ContactForm from '@/components/contact/ContactForm';
import { MessageCircle, Video, Headset, Building, Book, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        
        {/* Quick Navigation */}
        <div className="bg-gray-50 py-6 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#ai-chatbot" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors">
                  <MessageCircle className="h-5 w-5 mb-1" />
                  <span>AI Chatbot</span>
                </a>
              </li>
              <li>
                <a href="#telehealth" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors">
                  <Video className="h-5 w-5 mb-1" />
                  <span>Telehealth</span>
                </a>
              </li>
              <li>
                <a href="#support-team" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors">
                  <Headset className="h-5 w-5 mb-1" />
                  <span>Support Team</span>
                </a>
              </li>
              <li>
                <a href="#enterprise-partnerships" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors">
                  <Building className="h-5 w-5 mb-1" />
                  <span>Partnerships</span>
                </a>
              </li>
              <li>
                <a href="#self-help" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors">
                  <Book className="h-5 w-5 mb-1" />
                  <span>Self-Help</span>
                </a>
              </li>
              <li>
                <a href="#contact-form" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors">
                  <Mail className="h-5 w-5 mb-1" />
                  <span>Contact Form</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 space-y-24">
          <AIChatbot />
          <TelehealthConsultations />
          <SupportTeam />
          <EnterprisePartnerships />
          <SelfHelpResources />
          <ContactForm />
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
