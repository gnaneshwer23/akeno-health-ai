
import React from 'react';
import { motion } from 'framer-motion';
import { PartnersSection } from './cta/PartnersSection';

export const PartnersCollaboration = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" id="partners">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-health-dark">
            Our Partners & Collaborations
          </h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            We are honoured to collaborate with forward-thinking organisations shaping the future of healthcare.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <PartnerCategory 
            title="Research & Academic Partners" 
            partners={[
              'Imperial College London',
              'Indian Institute of Science',
              'Mayo Clinic Research Labs'
            ]}
            icon="🧬"
            delay={0}
          />
          
          <PartnerCategory 
            title="Pharma & MedTech Innovators" 
            partners={[
              'Pfizer Innovation',
              'Roche Ventures',
              'Biocon'
            ]}
            icon="💊"
            delay={0.2}
          />
          
          <PartnerCategory 
            title="Technology Partners" 
            partners={[
              'NVIDIA Healthcare AI',
              'Google Cloud for Healthcare',
              'IBM Quantum Research'
            ]}
            icon="🔐"
            delay={0.4}
          />
          
          <PartnerCategory 
            title="Pilot & Regulatory Collaborators" 
            partners={[
              'NHS (UK)',
              'CDSCO (India)',
              'EMA Advisory Access'
            ]}
            icon="🌍"
            delay={0.6}
          />
        </div>
        
        <PartnersSection />
        
        <div className="text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-health-primary font-medium hover:text-health-secondary transition-colors"
            >
              Want to partner with us? Let's Talk →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface PartnerCategoryProps {
  title: string;
  partners: string[];
  icon: string;
  delay: number;
}

const PartnerCategory: React.FC<PartnerCategoryProps> = ({ title, partners, icon, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-semibold text-health-dark">{title}</h3>
      </div>
      
      <ul className="space-y-2 ml-2">
        {partners.map((partner, index) => (
          <li 
            key={index} 
            className="flex items-center gap-2 text-health-dark/80"
          >
            <span className="w-1 h-1 rounded-full bg-health-primary"></span>
            <span>{partner}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
