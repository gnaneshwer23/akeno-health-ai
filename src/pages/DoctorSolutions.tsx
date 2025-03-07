
import React from 'react';
import { Navbar } from '@/components/Navbar';
import DoctorSolutionsHero from '@/components/doctor-solutions/DoctorSolutionsHero';
import SolutionsOverview from '@/components/doctor-solutions/SolutionsOverview';
import AIDiagnostics from '@/components/doctor-solutions/AIDiagnostics';
import HealthReports from '@/components/doctor-solutions/HealthReports';
import RemoteMonitoring from '@/components/doctor-solutions/RemoteMonitoring';
import DoctorSolutionsCTA from '@/components/doctor-solutions/DoctorSolutionsCTA';
import { Footer } from '@/components/Footer';

const DoctorSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-health-light/50 to-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-white to-health-light">
          <DoctorSolutionsHero />
        </div>
        
        <div className="bg-gradient-to-br from-health-primary/5 to-health-secondary/5 py-4">
          <SolutionsOverview />
        </div>
        
        <div className="bg-gradient-to-r from-white to-health-light/70 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
          <AIDiagnostics />
        </div>
        
        <div className="bg-white shadow-inner relative overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-health-secondary/5 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl -z-10"></div>
          <HealthReports />
        </div>
        
        <div className="bg-gradient-to-br from-health-light to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-health-primary/5 opacity-30 -z-10"></div>
          <RemoteMonitoring />
        </div>
        
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
