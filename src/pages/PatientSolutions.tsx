
import React from 'react';
import { Navbar } from '@/components/Navbar';
import PatientSolutionsHero from '@/components/patient-solutions/PatientSolutionsHero';
import PatientHowItWorks from '@/components/patient-solutions/PatientHowItWorks';
import HealthMonitoring from '@/components/patient-solutions/HealthMonitoring';
import DigitalTwin from '@/components/patient-solutions/DigitalTwin';
import PatientPrivacy from '@/components/patient-solutions/PatientPrivacy';
import ClinicalTrialsAccess from '@/components/patient-solutions/ClinicalTrialsAccess';
import PatientTestimonials from '@/components/patient-solutions/PatientTestimonials';
import PatientSolutionsCTA from '@/components/patient-solutions/PatientSolutionsCTA';
import { Footer } from '@/components/Footer';

const PatientSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-purple-50/30">
      <Navbar />
      
      <main className="flex-grow">
        <PatientSolutionsHero />
        
        <div className="relative py-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-300/20 to-blue-300/20 rounded-full blur-3xl -z-10"></div>
          <PatientHowItWorks />
        </div>
        
        <HealthMonitoring />
        <DigitalTwin />
        <PatientPrivacy />
        <ClinicalTrialsAccess />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 -z-10"></div>
          <PatientTestimonials />
        </div>
        
        <PatientSolutionsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientSolutions;
