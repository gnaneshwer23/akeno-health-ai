
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HealthcareAIImpactGraph from '@/components/analytics/HealthcareAIImpactGraph';
import '@/styles/analytics/impact-graph.css';

const HealthcareAIImpactDemo = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Healthcare AI Impact Analytics</h1>
        <p className="text-lg mb-8">
          Visualizing the transformative potential of AI across different healthcare domains.
        </p>
        
        <div className="max-w-7xl mx-auto">
          <HealthcareAIImpactGraph />
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About This Analytics Tool</h2>
          <p className="mb-4">
            This visualization tool showcases how Akeno AI bridges data, intelligence, and care across the healthcare ecosystem.
            The graph measures the impact of artificial intelligence across five key healthcare domains, with data flowing from various
            sources through our AI processing engine to deliver meaningful benefits.
          </p>
          <p>
            Use this dashboard to identify high-impact areas for your healthcare organization's AI strategy and 
            investment priorities, providing an at-a-glance view of where AI is making the most 
            significant difference in healthcare delivery and outcomes.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default HealthcareAIImpactDemo;
