
import React from 'react';
import { FeaturesHeader } from './FeaturesHeader';
import { FeaturesGrid } from './FeaturesGrid';
import { FeaturesCallToAction } from './FeaturesCallToAction';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-health-light/20" id="solutions">
      <div className="max-w-7xl mx-auto">
        <FeaturesHeader />
        <FeaturesGrid />
        <FeaturesCallToAction />
      </div>
    </section>
  );
};

export { FeaturesSection };
