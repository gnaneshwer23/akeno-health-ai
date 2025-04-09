
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const partners = [
  { name: 'Johns Hopkins', logo: '/institutions/johns-hopkins.svg' },
  { name: 'NVIDIA', logo: '/institutions/nvidia.svg' },
  { name: 'Alphabet', logo: '/institutions/alphabet.svg' },
  { name: 'Microsoft', logo: '/institutions/microsoft.svg' },
  { name: 'Oxford University', logo: '/institutions/oxford.svg' },
  { name: 'NHS', logo: '/institutions/nhs.svg' },
  { name: 'GSK', logo: '/institutions/gsk.svg' },
];

// The partner logos are for demonstration purposes only
const PartnerLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-16 w-40 bg-white/50 rounded-lg shadow-sm border border-blue-100 backdrop-blur-sm">
    <div className="text-health-dark/60 font-medium whitespace-nowrap">{name}</div>
  </div>
);

export const PartnersSection = () => {
  return (
    <div className="mb-16 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
          <Globe size={18} /> Global Partnerships
        </div>
        <h2 className="text-3xl font-bold text-health-dark mb-6">
          Working Together for Better Healthcare
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-health-dark/70 max-w-2xl mx-auto">
          We collaborate with leading institutions around the world to advance healthcare through AI innovation.
        </p>
      </motion.div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)",
                scale: 1.05 
              }}
            >
              <PartnerLogo name={partner.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
