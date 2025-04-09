
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { CustomButton } from '@/components/ui/custom-button';
import { 
  Brain, 
  LineChart, 
  Microscope, 
  FileCode, 
  ShieldCheck, 
  Rocket, 
  Puzzle, 
  Database, 
  Flask, 
  MessageSquare
} from 'lucide-react';

const AIStudio = () => {
  const { toast } = useToast();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "This is a demo website. Buttons are intentionally non-functional.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-500/10 p-4 rounded-full">
                    <Brain size={48} className="text-blue-600" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AI Studio – The Brain Behind Predictive Precision Medicine
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  Empowering researchers, data scientists, and clinicians to explore, build, and deploy 
                  explainable healthcare AI with confidence and control.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <CustomButton 
                    size="lg" 
                    variant="primary" 
                    onClick={handleButtonClick}
                  >
                    Launch AI Studio
                  </CustomButton>
                  <CustomButton 
                    size="lg" 
                    variant="outline" 
                    onClick={handleButtonClick}
                  >
                    Explore Sample Models
                  </CustomButton>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <svg className="absolute top-0 right-0 text-blue-500/5" width="400" height="400" viewBox="0 0 100 100">
              <defs>
                <pattern id="polka-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle fill="currentColor" cx="2.5" cy="2.5" r="0.8" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
            </svg>
            
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-indigo-300/10 rounded-full blur-3xl"></div>
          </div>
        </section>
        
        {/* Purpose Section */}
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
        
        {/* Feature Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Key Sections & Features
              </motion.h2>
            </div>
            
            {/* 1. Model Management Hub */}
            <FeatureSection
              icon={<Database />}
              color="blue"
              title="Model Management Hub"
              subtitle="Manage every stage of the model lifecycle with complete transparency."
              features={[
                "Model Dashboard: Overview of all active models, their current deployment status, and usage stats.",
                "Train / Re-Train: Upload new data, fine-tune existing models using federated or synthetic data.",
                "Audit Logs: Version history and model change tracking.",
                "Performance Metrics: ROC, AUC, F1, and cohort-specific analysis."
              ]}
              useCase="Use Case: Fine-tune the sepsis risk prediction model based on ICU real-time vitals across 3 hospitals."
              index={0}
            />
            
            {/* 2. Explainability Engine */}
            <FeatureSection
              icon={<Brain />}
              color="purple"
              title="Explainability Engine"
              subtitle="Make AI understandable — even to non-data scientists."
              features={[
                "Visual Explainability Layer with SHAP Values, LIME, and Grad-CAM for Imaging AI",
                "Clinical Notes Generator: Converts AI outputs into human-readable rationale for doctors."
              ]}
              useCase="Use Case: Explain why a model predicted early-stage pancreatic cancer in a 42-year-old male."
              index={1}
            />
            
            {/* 3. Cohort Prediction Tools */}
            <FeatureSection
              icon={<LineChart />}
              color="teal"
              title="Cohort Prediction Tools"
              subtitle="Build, test, and compare model performance across patient groups."
              features={[
                "Cohort Builder Interface: Filter by comorbidities, age, gender, genetic markers, region, etc.",
                "Compare model performance by cohort.",
                "Outcome Simulation: Run what-if scenarios like 'What if this cohort received Drug X instead of Drug Y?'"
              ]}
              useCase="Use Case: Simulate cardiovascular risk improvement across diabetic patients aged 55+ with specific SNP markers."
              index={2}
            />
            
            {/* 4. Notebook Mode */}
            <FeatureSection
              icon={<FileCode />}
              color="indigo"
              title="Notebook Mode (Code-Friendly Zone)"
              subtitle="For in-house data science teams and research collaborators."
              features={[
                "Access secure, cloud-based Jupyter-style notebooks",
                "Use Python, R, or Julia environments with built-in medical libraries",
                "Integrated with hospital EHRs via FHIR APIs (read-only or sandbox mode)",
                "Includes anonymised or synthetic datasets for training & testing"
              ]}
              useCase="Use Case: A pharma partner runs a machine learning pipeline on anonymised Indian population data to discover gene-drug interactions."
              index={3}
            />
            
            {/* 5. Governance & Compliance Panel */}
            <FeatureSection
              icon={<ShieldCheck />}
              color="red"
              title="Governance & Compliance Panel"
              subtitle="Ensure safety, reproducibility, and accountability in healthcare AI."
              features={[
                "Regulatory Readiness Flags: Mark models requiring FDA/EMA/ICMR validation.",
                "Audit Trail Generator: Export all training logs and data lineage for compliance submission.",
                "Smart Consent Tracker: Ensure training datasets include patient-consented samples.",
                "Zero-Knowledge Proof Mode: Let external parties validate model output without seeing raw data."
              ]}
              useCase="Use Case: Generate audit documents for an AI being submitted to MHRA for CE certification."
              index={4}
            />
            
            {/* 6. Deployment Portal */}
            <FeatureSection
              icon={<Rocket />}
              color="green"
              title="Deployment Portal"
              subtitle="Push live models to patient apps, hospital systems, and clinical dashboards."
              features={[
                "Drag-and-drop deployment to: Patient monitoring AI, Doctor CDS systems, Drug discovery pipelines, and Clinical trial recruitment engine",
                "Real-time model health monitoring with alerts (e.g., drift detection, underperformance)"
              ]}
              useCase="Use Case: Update Digital Twin simulation models in the field as new biomarkers are discovered."
              index={5}
            />
            
            {/* Bonus: AI Plugin Marketplace */}
            <div className="mt-16">
              <motion.div 
                className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-400 rounded-full"></div>
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-400 rounded-full"></div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-xl mr-4">
                    <Puzzle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">AI Plugin Marketplace</h3>
                </div>
                
                <p className="text-lg mb-6 text-blue-100">
                  Install & extend prebuilt AI modules from trusted research teams and pharma partners.
                </p>
                
                <CustomButton 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                  onClick={handleButtonClick}
                >
                  Explore Marketplace
                </CustomButton>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Start Building Ethical, Explainable AI That Saves Lives
              </motion.h2>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CustomButton 
                  size="lg" 
                  variant="primary" 
                  onClick={handleButtonClick}
                >
                  Launch AI Studio
                </CustomButton>
                <CustomButton 
                  size="lg" 
                  variant="outline" 
                  onClick={handleButtonClick}
                >
                  Explore Sample Models
                </CustomButton>
                <CustomButton 
                  size="lg" 
                  variant="ghost" 
                  onClick={handleButtonClick}
                >
                  Request Collaboration Access
                </CustomButton>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper component for feature sections
interface FeatureSectionProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  subtitle: string;
  features: string[];
  useCase: string;
  index: number;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  icon, 
  color, 
  title, 
  subtitle, 
  features, 
  useCase,
  index 
}) => {
  // Map colors to tailwind classes
  const colorClasses: Record<string, { bg: string, text: string, light: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-600', light: 'bg-teal-50' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', light: 'bg-indigo-50' },
    red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-50' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50' },
  };
  
  const colorClass = colorClasses[color] || colorClasses.blue;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`py-12 ${isEven ? 'bg-white' : 'bg-gray-50'} rounded-xl mb-8`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
          <div className="md:w-1/3 flex justify-center">
            <div className={`p-6 ${colorClass.light} rounded-full inline-block`}>
              <div className={`p-6 ${colorClass.bg} rounded-full text-white`}>
                {React.cloneElement(icon as React.ReactElement, { size: 48 })}
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className={`text-2xl font-bold mb-3 ${colorClass.text}`}>{title}</h3>
            <p className="text-lg text-gray-700 mb-6 italic">{subtitle}</p>
            
            <ul className="space-y-3 mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className={`${colorClass.text} mt-1 mr-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className={`p-4 ${colorClass.light} rounded-lg border-l-4 ${colorClass.bg}`}>
              <p className="text-gray-700">
                <span className="font-medium">👨‍🔬 </span>
                {useCase}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIStudio;
