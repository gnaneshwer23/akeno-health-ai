
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
import SolutionsOverview from '@/components/patient-solutions/SolutionsOverview';
import PageHeader from '@/components/ui/page-header';
import { motion } from 'framer-motion';

const PatientSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with purpose statement */}
        <PatientSolutionsHero />
        
        {/* Solutions Overview */}
        <SolutionsOverview />
        
        {/* How Akeno Health Works for You */}
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 via-white to-white -z-10"></div>
          <PatientJourney />
        </div>
        
        {/* Sections with alternating backgrounds */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Real-Time Monitoring & Alerts */}
          <RealTimeMonitoring />
          
          {/* AI-Powered Health Insights & Care Plans */}
          <div className="relative">
            <div className="absolute inset-0 bg-white -z-10"></div>
            <HealthMonitoring />
          </div>
          
          {/* Digital Twin Technology */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white -z-10"></div>
            <DigitalTwin />
          </div>
          
          {/* Your Data, Protected by Blockchain */}
          <div className="relative">
            <div className="absolute inset-0 bg-white -z-10"></div>
            <PatientPrivacy />
          </div>
          
          {/* Clinical Trials Access */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-indigo-50/30 -z-10"></div>
            <ClinicalTrialsAccess />
          </div>
        </motion.div>
        
        {/* Testimonials section */}
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
