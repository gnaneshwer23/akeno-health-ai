
import React from 'react';
import { Navbar } from '@/components/Navbar';
import HospitalSolutionsHero from '@/components/hospital-solutions/HospitalSolutionsHero';
import SolutionsOverview from '@/components/hospital-solutions/SolutionsOverview';
import AIIntegration from '@/components/hospital-solutions/AIIntegration';
import AIDecisionSupport from '@/components/hospital-solutions/AIDecisionSupport';
import CostEfficiency from '@/components/hospital-solutions/CostEfficiency';
import CaseStudies from '@/components/hospital-solutions/CaseStudies';
import HospitalSolutionsCTA from '@/components/hospital-solutions/HospitalSolutionsCTA';
import ResourceOptimization from '@/components/hospital-solutions/ResourceOptimization';
import PatientDischargeSection from '@/components/hospital-solutions/PatientDischargeSection';
import EmergencyResponseSection from '@/components/hospital-solutions/EmergencyResponseSection';
import ComplianceSection from '@/components/hospital-solutions/ComplianceSection';
import HospitalAnalytics from '@/components/hospital-solutions/HospitalAnalytics';
import ResponsiveHospitalServiceFlow from '@/components/hospital-solutions/ResponsiveHospitalServiceFlow';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

const HospitalSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-health-light/50 to-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with enhanced gradient */}
        <div className="bg-gradient-to-r from-white to-health-light">
          <HospitalSolutionsHero />
        </div>
        
        {/* Solutions Overview with animations */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-health-primary/5 to-health-secondary/5 py-12 border-t border-b border-gray-100"
        >
          <SolutionsOverview />
        </motion.div>
        
        {/* Data Pipeline Visualization */}
        <div className="bg-white pt-16 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-4">Hospital Data Intelligence Pipeline</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our secure integration platform transforms hospital data into actionable intelligence through advanced AI processing
              </p>
            </div>
            <ResponsiveHospitalServiceFlow />
          </div>
        </div>
        
        {/* Patient Management & Risk Prediction */}
        <div className="bg-white relative overflow-hidden py-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 via-white to-white -z-10"></div>
          <AIIntegration />
        </div>
        
        {/* AI-Powered Clinical Decision Support */}
        <div className="bg-gradient-to-r from-white to-health-light/70 relative overflow-hidden py-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
          <AIDecisionSupport />
        </div>
        
        {/* Resource & Workflow Automation */}
        <div className="bg-white shadow-inner relative overflow-hidden py-20 border-t border-b border-gray-100">
          <div className="absolute top-20 left-20 w-64 h-64 bg-health-secondary/5 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl -z-10"></div>
          <ResourceOptimization />
        </div>
        
        {/* Hospital Analytics Section */}
        <div className="bg-gradient-to-br from-health-light to-white relative overflow-hidden py-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>
          <HospitalAnalytics />
        </div>
        
        {/* Predictive Discharge & Follow-Up Pathways */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white py-20 border-t border-gray-100"
        >
          <div className="relative">
            <div className="absolute top-20 left-20 w-64 h-64 bg-health-secondary/5 rounded-full blur-2xl -z-10"></div>
            <PatientDischargeSection />
          </div>
        </motion.div>
        
        {/* EHR Integration */}
        <div className="bg-gradient-to-br from-health-light/50 to-white relative overflow-hidden py-20">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-health-primary/5 opacity-30 -z-10"></div>
          <CostEfficiency />
        </div>
        
        {/* Emergency Response Section */}
        <div className="bg-white relative overflow-hidden py-20 border-t border-gray-100">
          <div className="absolute top-20 right-20 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl -z-10"></div>
          <EmergencyResponseSection />
        </div>
        
        {/* Compliance Section */}
        <div className="bg-gradient-to-br from-health-light/50 to-white relative overflow-hidden py-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
          <ComplianceSection />
        </div>
        
        {/* Case Studies Section */}
        <div className="bg-white relative overflow-hidden py-20 border-t border-gray-100">
          <div className="absolute top-20 right-20 w-64 h-64 bg-health-primary/5 rounded-full blur-2xl -z-10"></div>
          <CaseStudies />
        </div>
        
        {/* CTA Section with gradient background */}
        <div className="bg-gradient-to-t from-health-primary/10 to-health-light relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent -z-10"></div>
          <HospitalSolutionsCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HospitalSolutions;
