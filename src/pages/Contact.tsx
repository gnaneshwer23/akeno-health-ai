
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-health-light/30">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        
        {/* Quick Navigation */}
        <div className="bg-white/80 backdrop-blur-md py-6 sticky top-0 z-10 shadow-md border-b border-health-primary/10">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#ai-chatbot" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors p-2 rounded-lg hover:bg-health-primary/5">
                  <div className="bg-health-primary/10 p-1.5 rounded-full mb-1">
                    <MessageCircle className="h-4 w-4 text-health-primary" />
                  </div>
                  <span>AI Chatbot</span>
                </a>
              </li>
              <li>
                <a href="#telehealth" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors p-2 rounded-lg hover:bg-health-primary/5">
                  <div className="bg-health-primary/10 p-1.5 rounded-full mb-1">
                    <Video className="h-4 w-4 text-health-primary" />
                  </div>
                  <span>Telehealth</span>
                </a>
              </li>
              <li>
                <a href="#support-team" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors p-2 rounded-lg hover:bg-health-primary/5">
                  <div className="bg-health-primary/10 p-1.5 rounded-full mb-1">
                    <Headset className="h-4 w-4 text-health-primary" />
                  </div>
                  <span>Support Team</span>
                </a>
              </li>
              <li>
                <a href="#enterprise-partnerships" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors p-2 rounded-lg hover:bg-health-primary/5">
                  <div className="bg-health-primary/10 p-1.5 rounded-full mb-1">
                    <Building className="h-4 w-4 text-health-primary" />
                  </div>
                  <span>Partnerships</span>
                </a>
              </li>
              <li>
                <a href="#self-help" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors p-2 rounded-lg hover:bg-health-primary/5">
                  <div className="bg-health-primary/10 p-1.5 rounded-full mb-1">
                    <Book className="h-4 w-4 text-health-primary" />
                  </div>
                  <span>Self-Help</span>
                </a>
              </li>
              <li>
                <a href="#contact-form" className="flex flex-col items-center text-sm text-gray-600 hover:text-health-primary transition-colors p-2 rounded-lg hover:bg-health-primary/5">
                  <div className="bg-health-primary/10 p-1.5 rounded-full mb-1">
                    <Mail className="h-4 w-4 text-health-primary" />
                  </div>
                  <span>Contact Form</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 space-y-32">
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
