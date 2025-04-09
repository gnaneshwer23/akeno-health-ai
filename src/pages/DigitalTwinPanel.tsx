
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import DigitalTwinPanelComponent from '@/components/products/DigitalTwinPanel';
import CallToAction from '@/components/products/CallToAction';

const DigitalTwinPanel = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <MainLayout>
      <main className="flex-grow pt-8 md:pt-12 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Digital Twin Panel</h1>
        </div>
        
        {/* Main Content */}
        <DigitalTwinPanelComponent />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </MainLayout>
  );
};

export default DigitalTwinPanel;
