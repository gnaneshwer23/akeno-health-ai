
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { CustomButton } from '@/components/ui/custom-button';

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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Healthcare Products
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  Explore Akeno Health's innovative healthcare technology products designed to revolutionize precision medicine.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <CustomButton 
                    size="lg" 
                    variant="primary" 
                    onClick={handleButtonClick}
                  >
                    View All Products
                  </CustomButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Products Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Products</h2>
              <p className="text-lg text-gray-600">
                Cutting-edge solutions that integrate seamlessly with healthcare systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* AI Studio Card */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="bg-blue-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Studio</h3>
                  <p className="text-gray-600 mb-4">
                    The brain behind predictive precision medicine. Build, train, and deploy healthcare AI models.
                  </p>
                  <CustomButton 
                    variant="link" 
                    className="text-blue-600 p-0 hover:text-blue-700"
                    onClick={() => window.location.href = "/ai-studio"}
                  >
                    Learn more →
                  </CustomButton>
                </div>
              </motion.div>
              
              {/* Placeholder for future product */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="bg-purple-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Digital Twin Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Create personalized patient digital twins for simulation, testing, and predictive healthcare.
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
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Healthcare?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore our products and discover how Akeno Health is revolutionizing precision medicine.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
