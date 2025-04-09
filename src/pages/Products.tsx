
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { CustomButton } from '@/components/ui/custom-button';
import { Package, FlaskConical, Dna, Shield, Microscope, Network, FileBarChart, Users, LineChart, Database, Globe, FileSearch } from 'lucide-react';
import PageHeader from '@/components/ui/page-header';

const Products = () => {
  const { toast } = useToast();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "This is a demo website. Buttons are intentionally non-functional.",
    });
  };
  
  return (
    <MainLayout>
      <main className="flex-grow pt-8 md:pt-12 pb-16">
        {/* Hero Section with PageHeader component */}
        <PageHeader 
          title="Our Healthcare Products" 
          description="Explore Akeno Health's innovative healthcare technology products designed to revolutionize precision medicine."
          bgClass="bg-gradient-to-r from-health-primary/5 to-health-secondary/5"
        />
        
        {/* Products Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Products</h2>
              <p className="text-lg text-gray-600">
                Cutting-edge solutions that integrate seamlessly with healthcare systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* AI Studio Card */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full"
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-blue-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Network className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Studio</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    The brain behind predictive precision medicine. Build, train, and deploy healthcare AI models with explainable insights for clinical applications.
                  </p>
                  <CustomButton 
                    variant="link" 
                    to="/ai-studio"
                    className="text-blue-600 p-0 hover:text-blue-700"
                  >
                    Learn more →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Digital Twin Platform */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full"
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-purple-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Dna className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Digital Twin Platform</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Create personalized patient digital twins for simulation, testing, and predictive healthcare. Model real-world biological responses for better patient outcomes.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-purple-600 p-0 hover:text-purple-700"
                    onClick={handleButtonClick}
                  >
                    Coming Soon →
                  </CustomButton>
                </div>
              </motion.div>

              {/* Biomarker Analytics Suite */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full"
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-teal-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Microscope className="text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Biomarker Analytics Suite</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Comprehensive platform for analyzing multi-omic biomarkers and discovering connections between genomic, proteomic, and metabolomic data.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-teal-600 p-0 hover:text-teal-700"
                    onClick={handleButtonClick}
                  >
                    Coming Soon →
                  </CustomButton>
                </div>
              </motion.div>

              {/* Real-World Evidence Module */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full"
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Globe className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-World Evidence Module</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Unlock the power of longitudinal health data to inform treatment outcomes, drug efficacy, and personalized interventions from real-world clinical practice.
                  </p>
                  <CustomButton 
                    variant="link" 
                    to="/real-world-evidence"
                    className="text-green-600 p-0 hover:text-green-700"
                  >
                    Learn more →
                  </CustomButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real-World Evidence Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real-World Evidence Module</h2>
              <p className="text-lg text-gray-600">
                AI-Powered Insights from Daily Clinical Practice
              </p>
              <div className="mt-6 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <p className="text-gray-700 italic">
                  "Make real-world decisions using real-world data — responsibly, securely, and intelligently."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Post-Market Surveillance Dashboard */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <div className="bg-indigo-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FileBarChart className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Post-Market Surveillance Dashboard</h3>
                  <p className="text-gray-600 mb-4">
                    Track and analyze real-world safety and efficacy of approved drugs with usage trends, adverse event analysis, and comparative effectiveness studies.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-indigo-600 p-0 hover:text-indigo-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Cohort Builder Tool */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-6">
                  <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cohort Builder Tool</h3>
                  <p className="text-gray-600 mb-4">
                    Create and analyze patient cohorts based on custom filters like age, gender, genetic markers, diagnoses, and wearable data patterns.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-green-600 p-0 hover:text-green-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* AI-Enhanced Outcome Correlation Engine */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-6">
                  <div className="bg-amber-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <LineChart className="text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Enhanced Outcome Correlation Engine</h3>
                  <p className="text-gray-600 mb-4">
                    Reveal unseen patterns between treatments, genetics, lifestyle, and long-term health with correlation mapping and outcome trajectory prediction.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-amber-600 p-0 hover:text-amber-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Custom Data Query & Export Module */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-6">
                  <div className="bg-red-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Database className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Data Query & Export Module</h3>
                  <p className="text-gray-600 mb-4">
                    No-code or low-code interface to run advanced analyses with query templates for drug adherence, mortality rates, and treatment dropouts.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-red-600 p-0 hover:text-red-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Real-Time Data Feed Integration */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-6">
                  <div className="bg-blue-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Globe className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Data Feed Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Always current with live feeds from wearables, hospitals, and partner institutions, plus alert systems for signal anomalies.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-blue-600 p-0 hover:text-blue-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* RWE Regulatory Toolkit */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="p-6">
                  <div className="bg-purple-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FileSearch className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">RWE Regulatory Toolkit</h3>
                  <p className="text-gray-600 mb-4">
                    Ready-to-submit insights and export templates for FDA, EMA, MHRA, CDSCO with exportable evidence packages and audit trails.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-purple-600 p-0 hover:text-purple-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-center">Integration & Interoperability</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="text-green-500 mr-3">✓</div>
                  <span>Compatible with FHIR, OMOP, HL7 standards</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="text-green-500 mr-3">✓</div>
                  <span>Works with hospital EHR systems & wearable APIs</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="text-green-500 mr-3">✓</div>
                  <span>Secure federated RWE collaboration (across borders)</span>
                </li>
              </ul>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <CustomButton 
                  size="lg" 
                  variant="primary" 
                  onClick={handleButtonClick}
                >
                  Build a Cohort
                </CustomButton>
                <CustomButton 
                  size="lg" 
                  variant="outline" 
                  onClick={handleButtonClick}
                >
                  View AI Correlation Dashboard
                </CustomButton>
                <CustomButton 
                  size="lg" 
                  variant="ghost" 
                  onClick={handleButtonClick}
                >
                  Request Partner Access
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Healthcare Solutions</h2>
              <p className="text-lg text-gray-600">
                Specialized products designed for specific healthcare stakeholders
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Clinical Decision Support */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <div className="bg-indigo-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FlaskConical className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clinical Decision Support</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered decision support for clinicians, integrating patient data with the latest research evidence to suggest optimal treatment paths.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-indigo-600 p-0 hover:text-indigo-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Health Data Integration Platform */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-6">
                  <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Package className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Health Data Integration Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Secure, compliant data integration platform that connects EHRs, wearables, genomic data, and laboratory results for a unified health record.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-green-600 p-0 hover:text-green-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Genomic Analysis Toolkit */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-6">
                  <div className="bg-amber-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Dna className="text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Genomic Analysis Toolkit</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced genomic sequencing analysis tools for research institutions and pharmaceutical companies developing personalized therapeutics.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-amber-600 p-0 hover:text-amber-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Health Data Security Framework */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-6">
                  <div className="bg-red-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Shield className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Health Data Security Framework</h3>
                  <p className="text-gray-600 mb-4">
                    Enterprise-grade security solution for healthcare organizations, ensuring HIPAA compliance and protecting sensitive patient information.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-red-600 p-0 hover:text-red-700"
                    onClick={handleButtonClick}
                  >
                    Explore Solution →
                  </CustomButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Akeno Health Products</h2>
              <p className="text-lg text-gray-600">
                Our solutions are built with healthcare providers and patients in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Benefit 1 */}
              <motion.div
                className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg mb-2 text-health-primary">Comprehensive Data Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrate multiple data sources including EHRs, genomics, wearables, and imaging for a complete patient view.
                </p>
              </motion.div>
              
              {/* Benefit 2 */}
              <motion.div
                className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2 text-health-primary">AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Leverage advanced machine learning algorithms to uncover actionable insights and predict health outcomes with greater accuracy.
                </p>
              </motion.div>
              
              {/* Benefit 3 */}
              <motion.div
                className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-semibold text-lg mb-2 text-health-primary">Enterprise-Grade Security</h3>
                <p className="text-gray-600">
                  Built with HIPAA compliance and advanced encryption to ensure patient data remains secure at all times.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-health-primary/10 to-health-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Transform Healthcare?
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Explore our products and discover how Akeno Health is revolutionizing precision medicine with cutting-edge technology.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CustomButton 
                  size="lg" 
                  variant="primary" 
                  onClick={handleButtonClick}
                >
                  Schedule a Demo
                </CustomButton>
                <CustomButton 
                  size="lg" 
                  variant="outline" 
                  onClick={handleButtonClick}
                >
                  Contact Sales
                </CustomButton>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Products;
