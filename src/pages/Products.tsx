
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';

// Import refactored components
import ProductsHero from '@/components/products/ProductsHero';
import CoreProducts from '@/components/products/CoreProducts';
import HealthcareSolutions from '@/components/products/HealthcareSolutions';
import BenefitsSection from '@/components/products/BenefitsSection';
import CallToAction from '@/components/products/CallToAction';

const Products = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <MainLayout>
      <main className="flex-grow pt-8 md:pt-12 pb-16" id="products-page">
        {/* Hero Section */}
        <ProductsHero />
        
        {/* Products Overview Section */}
        <CoreProducts />

        {/* Featured Products Section */}
        <HealthcareSolutions />
        
        {/* Benefits Section */}
        <BenefitsSection />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </MainLayout>
  );
};

export default Products;
