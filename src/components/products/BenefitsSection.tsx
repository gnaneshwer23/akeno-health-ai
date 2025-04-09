
import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
