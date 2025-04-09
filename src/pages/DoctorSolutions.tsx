
import React from 'react';
import { Navbar } from '@/components/Navbar';
import DoctorSolutionsHero from '@/components/doctor-solutions/DoctorSolutionsHero';
import SolutionsOverview from '@/components/doctor-solutions/SolutionsOverview';
import AIDiagnostics from '@/components/doctor-solutions/AIDiagnostics';
import HealthReports from '@/components/doctor-solutions/HealthReports';
import RemoteMonitoring from '@/components/doctor-solutions/RemoteMonitoring';
import DoctorSolutionsCTA from '@/components/doctor-solutions/DoctorSolutionsCTA';
import { Footer } from '@/components/Footer';
import DoctorJourney from '@/components/doctor-solutions/DoctorJourney';
import EHRIntegration from '@/components/doctor-solutions/EHRIntegration';
import DigitalTwinSection from '@/components/doctor-solutions/DigitalTwinSection';
import VirtualAssistant from '@/components/doctor-solutions/VirtualAssistant';
import ComplianceSection from '@/components/doctor-solutions/ComplianceSection';
import PatientCommunication from '@/components/doctor-solutions/PatientCommunication';
import { motion } from 'framer-motion';
import ResponsiveDoctorServiceFlow from '@/components/doctor-solutions/ResponsiveDoctorServiceFlow';

const DoctorSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-health-light/50 to-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-white to-health-light">
          <DoctorSolutionsHero />
        </div>
        
        {/* Solutions Overview with enhanced spacing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-health-primary/5 to-health-secondary/5 py-12 border-t border-b border-gray-100"
        >
          <SolutionsOverview />
        </motion.div>
        
        {/* NEW: Service Flow Diagram */}
        <div className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 bg-health-primary/10 text-health-primary rounded-full font-medium text-sm mb-4"
              >
                Data Infrastructure
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-health-dark mb-4"
              >
                Your Practice Powered By Advanced Health Data
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Akeno's comprehensive health database system integrates multiple data sources to power your clinical decision making.
              </motion.p>
            </div>
            
            <ResponsiveDoctorServiceFlow />
          </div>
        </div>
        
        {/* Doctor Journey Section with subtle background */}
        <div className="bg-white relative overflow-hidden py-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 via-white to-white -z-10"></div>
          <DoctorJourney />
        </div>
        
        {/* AI Diagnostics Section with improved visuals */}
        <div className="bg-gradient-to-r from-white to-health-light/70 relative overflow-hidden py-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
          <AIDiagnostics />
        </div>
        
        {/* EHR Integration Section */}
        <div className="bg-white shadow-inner relative overflow-hidden py-20 border-t border-b border-gray-100">
          <div className="absolute top-20 left-20 w-64 h-64 bg-health-secondary/5 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl -z-10"></div>
          <EHRIntegration />
        </div>
        
        {/* Digital Twin Section */}
        <div className="bg-gradient-to-br from-health-light to-white relative overflow-hidden py-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>
          <DigitalTwinSection />
        </div>
        
        {/* Health Reports & Remote Patient Monitoring with card-style layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white py-20 border-t border-gray-100"
        >
          <div className="relative">
            <div className="absolute top-20 left-20 w-64 h-64 bg-health-secondary/5 rounded-full blur-2xl -z-10"></div>
            <HealthReports />
          </div>
          
          <div className="bg-gradient-to-br from-health-light to-white relative overflow-hidden py-20 mt-10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-health-primary/5 opacity-30 -z-10"></div>
            <RemoteMonitoring />
          </div>
        </motion.div>
        
        {/* Virtual Assistant with interactive elements */}
        <div className="bg-white relative overflow-hidden py-20 border-t border-gray-100">
          <div className="absolute top-20 right-20 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl -z-10"></div>
          <VirtualAssistant />
        </div>
        
        {/* Patient Communication with improved visualization */}
        <div className="bg-gradient-to-br from-health-light/50 to-white relative overflow-hidden py-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
          <PatientCommunication />
        </div>
        
        {/* Compliance Section with enhanced trust signals */}
        <div className="bg-white relative overflow-hidden py-20 border-t border-gray-100">
          <div className="absolute top-20 right-20 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl -z-10"></div>
          <ComplianceSection />
        </div>
        
        {/* CTA Section with gradient background */}
        <div className="bg-gradient-to-t from-health-primary/10 to-health-light relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent -z-10"></div>
          <DoctorSolutionsCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorSolutions;
