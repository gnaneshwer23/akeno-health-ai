
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { CustomButton } from '@/components/ui/custom-button';
import { Package, ChemicalTech, Dna, Shield, Microscope, Network } from 'lucide-react';
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
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50">
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
                    <ChemicalTech className="text-indigo-600" />
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
        <section className="py-16 bg-white">
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
