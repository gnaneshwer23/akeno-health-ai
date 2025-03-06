
import React from 'react';
import { Navbar } from '@/components/Navbar';
import PatientSolutionsHero from '@/components/patient-solutions/PatientSolutionsHero';
import SolutionsOverview from '@/components/patient-solutions/SolutionsOverview';
import HealthMonitoring from '@/components/patient-solutions/HealthMonitoring';
import DigitalTwin from '@/components/patient-solutions/DigitalTwin';
import MobileHealthApp from '@/components/patient-solutions/MobileHealthApp';
import PatientTestimonials from '@/components/patient-solutions/PatientTestimonials';
import PatientSolutionsCTA from '@/components/patient-solutions/PatientSolutionsCTA';
import { Footer } from '@/components/Footer';

const PatientSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <PatientSolutionsHero />
        <SolutionsOverview />
        <HealthMonitoring />
        <DigitalTwin />
        <MobileHealthApp />
        <PatientTestimonials />
        <PatientSolutionsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientSolutions;
