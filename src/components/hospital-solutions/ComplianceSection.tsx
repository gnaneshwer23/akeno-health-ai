
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Eye, Lock } from 'lucide-react';

const ComplianceSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm mb-4">
            Trust & Security
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Built for NHS & Global Compliance
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Confidence in every insight. Transparency in every action with fully compliant AI
            that meets all regulatory requirements for healthcare.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: <ShieldCheck size={24} className="text-indigo-600" />,
              title: "Complete NHS Digital Compliance",
              description: "Meets all NHS Digital security standards, interoperability requirements, and data governance frameworks."
            },
            {
              icon: <Lock size={24} className="text-indigo-600" />,
              title: "GDPR & HIPAA Compliant",
              description: "Fully compliant with GDPR, HIPAA, and all relevant data protection regulations in healthcare."
            },
            {
              icon: <Eye size={24} className="text-indigo-600" />,
              title: "MHRA AI Guidance Adherence",
              description: "All AI functionality follows Medicines and Healthcare products Regulatory Agency AI guidelines."
            },
            {
              icon: <FileText size={24} className="text-indigo-600" />,
              title: "Audit-Ready Documentation",
              description: "Complete clinical logs, explainable AI outputs, and comprehensive data usage reports for audits."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 border border-indigo-100 group"
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-health-dark mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-indigo-50 rounded-xl p-8 border border-indigo-100 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                <ShieldCheck size={28} className="text-indigo-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-health-dark mb-4">Your data, your control</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Akeno Health is committed to the highest standards of data security, 
                privacy, and compliance in healthcare AI.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-muted-foreground">
                    All patient data is encrypted at rest and in transit with hospital-controlled access
                  </p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-muted-foreground">
                    Regular security audits, penetration testing, and compliance assessments
                  </p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-muted-foreground">
                    Complete data sovereignty with options for on-premises deployment
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden"
          >
            <div className="bg-indigo-50 p-4 border-b border-indigo-100">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-indigo-600" />
                <h3 className="font-medium text-indigo-700">Compliance Documentation</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-medium text-health-dark mb-3">Available Compliance Documents</h4>
                <div className="space-y-3">
                  <ComplianceDocumentRow
                    title="NHS Digital DSP Toolkit Assessment"
                    status="Completed"
                    date="January 2025"
                  />
                  <ComplianceDocumentRow
                    title="GDPR Data Protection Impact Assessment"
                    status="Completed"
                    date="February 2025"
                  />
                  <ComplianceDocumentRow
                    title="ISO 27001 Information Security Certification"
                    status="Certified"
                    date="November 2024"
                  />
                  <ComplianceDocumentRow
                    title="MHRA AI/ML Risk Assessment"
                    status="Approved"
                    date="December 2024"
                  />
                </div>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-1">Full Compliance Guarantee</h5>
                    <p className="text-sm text-green-700">
                      We provide all necessary documentation and support during audits and regulatory inspections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-4 py-3 bg-indigo-50 text-indigo-800 rounded-lg font-medium border border-indigo-100">
            🎯 Outcome: Confidence in every insight. Transparency in every action.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5L4.33333 8L11 1" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ComplianceDocumentRow = ({ title, status, date }: { title: string; status: string; date: string }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
        <FileText size={16} className="text-indigo-600" />
      </div>
      <span className="font-medium text-gray-700">{title}</span>
    </div>
    <div className="text-right">
      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{status}</span>
      <p className="text-xs text-gray-500 mt-1">{date}</p>
    </div>
  </div>
);

export default ComplianceSection;
