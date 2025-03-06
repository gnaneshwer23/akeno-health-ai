
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import AIChatbot from '@/components/contact/AIChatbot';
import TelehealthConsultations from '@/components/contact/TelehealthConsultations';
import SupportTeam from '@/components/contact/SupportTeam';
import EnterprisePartnerships from '@/components/contact/EnterprisePartnerships';
import SelfHelpResources from '@/components/contact/SelfHelpResources';
import ContactCTA from '@/components/contact/ContactCTA';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <div className="container mx-auto px-4 py-12 space-y-24">
          <AIChatbot />
          <TelehealthConsultations />
          <SupportTeam />
          <EnterprisePartnerships />
          <SelfHelpResources />
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
