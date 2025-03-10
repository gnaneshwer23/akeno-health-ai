
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partners = [
    { name: "Medical Research Institute", logo: "MRI", color: "bg-blue-50 border-blue-200 text-blue-600" },
    { name: "Global Health Partners", logo: "GHP", color: "bg-indigo-50 border-indigo-200 text-indigo-600" },
    { name: "BioTech Innovations", logo: "BTI", color: "bg-purple-50 border-purple-200 text-purple-600" },
    { name: "Healthcare Analytics Group", logo: "HAG", color: "bg-emerald-50 border-emerald-200 text-emerald-600" },
    { name: "Precision Medicine Alliance", logo: "PMA", color: "bg-amber-50 border-amber-200 text-amber-600" },
    { name: "Digital Health Network", logo: "DHN", color: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-health-primary/10 text-health-primary font-medium gap-2">
              <Shield size={16} className="text-health-primary" />
              <span>Enterprise Collaborations</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-4 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Trusted by Leading Organizations
          </h2>
          
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge AI healthcare solutions are deployed by renowned institutions worldwide, transforming patient care and medical research.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-health-primary/20 to-transparent w-full max-w-4xl"></div>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className={`group flex flex-col items-center justify-center h-24 ${partner.color} rounded-lg border shadow-sm hover:shadow-md transition-all p-4`}
                variants={itemVariants}
              >
                <div className="text-2xl font-bold group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <div className="text-xs mt-2 opacity-70 font-medium text-center">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex items-center justify-center mt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-health-primary/20 to-transparent w-full max-w-4xl"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-health-primary/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Industry Leaders</h3>
            <p className="text-muted-foreground text-sm">
              Partnered with top healthcare institutions, biotech companies, and research centers globally.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-health-primary/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
            <p className="text-muted-foreground text-sm">
              Our partners report improved patient outcomes, enhanced operational efficiency, and significant cost savings.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-health-primary/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trusted Security</h3>
            <p className="text-muted-foreground text-sm">
              Enterprise-grade data security and privacy compliance trusted by healthcare organizations worldwide.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-health-primary text-white font-medium hover:bg-health-primary/90 transition-colors">
            Become a Partner
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
