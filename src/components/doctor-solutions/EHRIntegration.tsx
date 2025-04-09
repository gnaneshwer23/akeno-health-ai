
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, RefreshCcw, Zap } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

const EHRIntegration = () => {
  const features = [
    {
      icon: <FileText size={24} className="text-health-primary" />,
      title: "Auto-SOAP Generation",
      description: "Generate clinical notes automatically from patient interactions, saving hours of documentation time."
    },
    {
      icon: <RefreshCcw size={24} className="text-health-primary" />,
      title: "Real-time EHR Integration",
      description: "Seamless integration with leading EHR platforms (FHIR/HL7 compliant) for instant data access."
    },
    {
      icon: <ClipboardCheck size={24} className="text-health-primary" />,
      title: "Smart Summarisation",
      description: "Get concise summaries of past notes, lab history, and referrals before each consultation."
    },
    {
      icon: <Zap size={24} className="text-health-primary" />,
      title: "Rapid Documentation",
      description: "Voice-to-text dictation with automatic formatting and clinical terminology recognition."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-100 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-2xl"></div>
            
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                EHR Integration
              </span>
              <h2 className="text-3xl font-bold text-health-dark mb-4">
                Seamless and Automated Documentation
              </h2>
              <p className="text-muted-foreground mb-6">
                Akeno Health integrates directly with your existing EHR systems to streamline documentation,
                reduce administrative burden, and enhance clinical workflow efficiency.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-health-dark text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <CustomButton
                variant="primary"
                to="/contact"
                withArrow
              >
                Request EHR Integration Demo
              </CustomButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden"
          >
            <div className="border-b border-gray-100 py-4 px-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="ml-3 text-sm font-medium text-gray-500">EHR Integration Preview</div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-blue-50/50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-medium text-blue-700 mb-2">Patient Summary</h4>
                <p className="text-xs text-gray-600">
                  Male, 58 years old. History of hypertension, type 2 diabetes, and hyperlipidemia.
                  Last visit: 3 months ago. Current medications: Metformin, Lisinopril, Atorvastatin.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">AI-Generated SOAP Note</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-700 block">S:</span>
                    <p className="text-xs text-gray-600">
                      Patient presents with increasing fatigue over the past 2 weeks, also reporting polyuria
                      and polydipsia. No fever, chest pain, or shortness of breath. No recent medication changes.
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-blue-700 block">O:</span>
                    <p className="text-xs text-gray-600">
                      BP: 142/88 mmHg, HR: 84 bpm, RR: 16, Temp: 36.7°C, O2: 98% on RA.
                      Weight 87kg (up 2kg from last visit). Fasting glucose: 9.8 mmol/L. HbA1c: 8.2%.
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-blue-700 block">A:</span>
                    <p className="text-xs text-gray-600">
                      Uncontrolled Type 2 Diabetes Mellitus with hyperglycemia.
                      Hypertension, stable on current medication.
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-blue-700 block">P:</span>
                    <p className="text-xs text-gray-600">
                      1. Increase Metformin to 1000mg twice daily.
                      2. Add GLP-1 receptor agonist.
                      3. Review diabetic diet and exercise plan.
                      4. Follow up in 2 weeks to assess response.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50/50 rounded-lg p-4 mb-4 flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-700 mb-1">Documentation Complete</h4>
                  <p className="text-xs text-gray-600">
                    SOAP note automatically generated and saved to EHR. Time saved: approximately 8 minutes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-health-dark mb-3">
            Spend less time typing and more time treating
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered EHR integration can save the average clinician up to 2 hours per day on documentation,
            allowing more time for direct patient care and reducing burnout.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Helper icon component
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3L4.5 8.5L2 6" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default EHRIntegration;
