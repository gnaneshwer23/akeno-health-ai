
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuantumHero } from '@/components/quantum/QuantumHero';
import { QuantumIntro } from '@/components/quantum/QuantumIntro';
import { QuantumApplications } from '@/components/quantum/QuantumApplications';
import { QuantumFuture } from '@/components/quantum/QuantumFuture';
import { QuantumCTA } from '@/components/quantum/QuantumCTA';
import { QuantumBenefits } from '@/components/quantum/QuantumBenefits';

const QuantumComputing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <QuantumHero />
        <QuantumIntro />
        <QuantumApplications />
        <QuantumBenefits />
        <QuantumFuture />
        <QuantumCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default QuantumComputing;
