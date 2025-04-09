
import React from 'react';
import { motion } from 'framer-motion';

const PurposeSection: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Purpose
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            To provide a fully integrated, secure, and collaborative AI environment for model development,
            validation, explainability, and real-world deployment — all within Akeno's trusted ecosystem.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
