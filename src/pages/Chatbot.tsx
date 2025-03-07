
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ChatbotInterface from '@/components/chatbot/ChatbotInterface';

const Chatbot = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-health-light/20">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6 text-center">
            AI-Powered Health Assistant
          </h1>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Get instant answers to your healthcare questions, learn more about our solutions, 
            or receive guidance on using our platform.
          </p>
          
          <ChatbotInterface />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;
