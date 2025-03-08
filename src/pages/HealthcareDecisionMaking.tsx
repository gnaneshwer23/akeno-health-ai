
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import HealthcareDecisionInsights from '@/components/ai-insights/HealthcareDecisionInsights';

const HealthcareDecisionMaking = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-purple-50/30">
      <Navbar />
      
      <main className="flex-grow">
        <HealthcareDecisionInsights />
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthcareDecisionMaking;
