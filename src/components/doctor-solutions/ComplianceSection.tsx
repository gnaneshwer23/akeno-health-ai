
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Eye, History } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

const ComplianceSection = () => {
  const complianceFeatures = [
    {
      icon: <ShieldCheck size={24} className="text-health-primary" />,
      title: "Full Regulatory Compliance",
      description: "Compliant with NHSX, MHRA AI guidelines, GDPR, HIPAA, and other global healthcare regulations."
    },
    {
      icon: <FileText size={24} className="text-health-primary" />,
      title: "Audit Logs & Governance",
      description: "Comprehensive audit trails for all AI decisions and recommendations with auto-generated governance reports."
    },
    {
      icon: <Eye size={24} className="text-health-primary" />,
      title: "Explainable AI",
      description: "Transparent rationale for all AI suggestions with citations from peer-reviewed literature and guidelines."
    },
    {
      icon: <History size={24} className="text-health-primary" />,
      title: "Version Control",
      description: "Complete history of AI model versions, training data, and performance metrics for full traceability."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 font-medium">
            Trust & Transparency
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Compliance, Ethics, and Transparency
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trustworthy AI designed for clinicians, not coders
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] p-6 border border-blue-100 group"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-health-dark mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden"
          >
            <div className="bg-blue-50 p-4 border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Eye size={18} className="text-blue-700" />
                <h3 className="font-medium text-blue-700">AI Explainability Report</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-health-dark font-medium mb-2">Diagnosis Suggestion: Community-Acquired Pneumonia</h4>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Evidence Supporting This Recommendation:</h5>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Patient presents with fever (38.7°C), productive cough, and dyspnea</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Chest X-ray shows right lower lobe infiltrate consistent with bacterial pneumonia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Elevated WBC count (14.2 K/μL) with neutrophil predominance (82%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>O2 saturation of 94% on room air suggests mild hypoxemia</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-health-dark font-medium mb-2">Treatment Recommendation: Amoxicillin-Clavulanate</h4>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Clinical Guidelines Referenced:</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">1.</span>
                      <div>
                        <p className="text-gray-800">British Thoracic Society Guidelines (2019)</p>
                        <p className="text-gray-600">Recommendation for oral amoxicillin-clavulanate as first-line therapy for community-acquired pneumonia in patients with comorbidities.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">2.</span>
                      <div>
                        <p className="text-gray-800">NICE Guideline [NG138] (2023)</p>
                        <p className="text-gray-600">Antimicrobial prescribing for community-acquired pneumonia in adults with moderate severity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                <span className="text-sm text-blue-700">AI Confidence Score:</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-3 bg-gray-200 rounded-full">
                    <div className="h-full w-[89%] bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-blue-700">89%</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-inner"
          >
            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
              <ShieldCheck size={28} className="text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-health-dark mb-4">Your data, your control</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Akeno Health is committed to creating AI that serves clinicians with complete transparency. 
              We believe there's no place for "black box" algorithms in healthcare.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check />
                </div>
                <p className="text-muted-foreground">
                  All decisions are traceable and explainable, compliant with the most stringent healthcare AI regulations
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check />
                </div>
                <p className="text-muted-foreground">
                  Clinical audit logs and explainability reports are auto-generated for governance and quality improvement
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check />
                </div>
                <p className="text-muted-foreground">
                  Doctors always maintain final decision-making authority, with AI serving as a supportive tool
                </p>
              </div>
            </div>
            
            <CustomButton
              variant="default"
              to="/how-it-works"
              withArrow
            >
              Learn More About Our Ethics Framework
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Simple Check icon component
const Check = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5L4.33333 8L11 1" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ComplianceSection;
