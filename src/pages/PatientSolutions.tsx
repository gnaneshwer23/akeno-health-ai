
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import PatientSolutionsHero from '@/components/patient-solutions/PatientSolutionsHero';
import PatientJourney from '@/components/patient-solutions/PatientJourney';
import RealTimeMonitoring from '@/components/patient-solutions/RealTimeMonitoring';
import HealthMonitoring from '@/components/patient-solutions/HealthMonitoring';
import DigitalTwin from '@/components/patient-solutions/DigitalTwin';
import PatientPrivacy from '@/components/patient-solutions/PatientPrivacy';
import ClinicalTrialsAccess from '@/components/patient-solutions/ClinicalTrialsAccess';
import PatientTestimonials from '@/components/patient-solutions/PatientTestimonials';
import PatientSolutionsCTA from '@/components/patient-solutions/PatientSolutionsCTA';

const PatientSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-purple-50/30">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with purpose statement */}
        <PatientSolutionsHero />
        
        {/* How Akeno Health Works for You */}
        <PatientJourney />
        
        {/* Real-Time Monitoring & Alerts */}
        <RealTimeMonitoring />
        
        {/* AI-Powered Health Insights & Care Plans */}
        <HealthMonitoring />
        
        {/* Digital Twin Technology */}
        <DigitalTwin />
        
        {/* Your Data, Protected by Blockchain */}
        <PatientPrivacy />
        
        {/* Clinical Trials Access */}
        <ClinicalTrialsAccess />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 -z-10"></div>
          <PatientTestimonials />
        </div>
        
        {/* Call to Action */}
        <PatientSolutionsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientSolutions;
