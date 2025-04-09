
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import BiomarkerAnalyticsComponent from '@/components/products/BiomarkerAnalytics';
import CallToAction from '@/components/products/CallToAction';

const BiomarkerAnalytics = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <MainLayout>
      <main className="flex-grow pt-8 md:pt-12 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Biomarker Analytics Suite</h1>
        </div>
        
        {/* Main Content */}
        <BiomarkerAnalyticsComponent />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </MainLayout>
  );
};

export default BiomarkerAnalytics;
