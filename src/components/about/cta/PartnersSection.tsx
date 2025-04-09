
import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="text-health-dark/60 font-medium">{name}</div>
  </div>
);

export const PartnersSection = () => {
  return (
    <div className="mb-16">
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
