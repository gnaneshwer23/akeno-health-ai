
import React from 'react';
import { CareersHeader } from './careers/CareersHeader';
import { CultureValuesGrid } from './careers/CultureValuesGrid';
import { BenefitsSection } from './careers/BenefitsSection';
import { TeamStatsGrid } from './careers/TeamStatsGrid';
import { CareersFooter } from './careers/CareersFooter';
import { CareersBackground } from './careers/CareersBackground';

export const CareersSection = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" id="careers">
      {/* Background elements */}
      <CareersBackground />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <CareersHeader />

        {/* Culture values grid */}
        <CultureValuesGrid />

        {/* Benefits section */}
        <BenefitsSection />
        
        {/* Key stats section */}
        <TeamStatsGrid />
        
        {/* Footer with CTA */}
        <CareersFooter />
      </div>
    </section>
  );
};
