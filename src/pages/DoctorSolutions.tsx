
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-health-light">
      <Navbar />
      
      <main className="flex-grow">
        <DoctorSolutionsHero />
        
        <div className="bg-health-primary/5 py-4">
          <SolutionsOverview />
        </div>
        
        <div className="bg-gradient-to-r from-health-light to-white">
          <AIDiagnostics />
        </div>
        
        <div className="bg-white shadow-inner">
          <HealthReports />
        </div>
        
        <div className="bg-gradient-to-br from-health-primary/5 to-health-secondary/5">
          <RemoteMonitoring />
        </div>
        
        <div className="bg-health-muted">
          <DoctorSolutionsCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorSolutions;
