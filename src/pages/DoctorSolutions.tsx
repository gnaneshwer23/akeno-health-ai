
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <DoctorSolutionsHero />
        <SolutionsOverview />
        <AIDiagnostics />
        <HealthReports />
        <RemoteMonitoring />
        <DoctorSolutionsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorSolutions;
