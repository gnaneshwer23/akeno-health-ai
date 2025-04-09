
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Import enhanced components
import ProductsHero from '@/components/products/ProductsHero';
import CoreProducts from '@/components/products/CoreProducts';
import HealthcareSolutions from '@/components/products/HealthcareSolutions';
import BenefitsSection from '@/components/products/BenefitsSection';
import CallToAction from '@/components/products/CallToAction';
import ProductsRealWorldEvidence from '@/components/products/ProductsRealWorldEvidence';

// Import layout components
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Products = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Healthcare Products - Akeno Health AI';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="products-page"
      >
        {/* Hero Section */}
        <ProductsHero />
        
        {/* Products Overview Section */}
        <CoreProducts />

        {/* Featured RWE Module Section */}
        <ProductsRealWorldEvidence />
        
        {/* Healthcare Solutions Section */}
        <HealthcareSolutions />
        
        {/* Benefits Section */}
        <BenefitsSection />
        
        {/* Call to Action */}
        <CallToAction />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Products;
