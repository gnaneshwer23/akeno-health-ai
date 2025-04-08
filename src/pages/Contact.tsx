
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">Get in touch with our team for questions, support, or partnership inquiries.</p>
        
        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default Contact;
