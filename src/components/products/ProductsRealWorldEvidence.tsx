
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { 
  FileBarChart, 
  Users, 
  LineChart, 
  Database, 
  Globe, 
  FileSearch,
  ChartBar,
  Laptop,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
    {children}
  </div>
);

const ProductsRealWorldEvidence = () => {
  const { toast } = useToast();
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "Thank you for your interest. A demo will be scheduled shortly.",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row gap-10 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
                  Real-World Evidence Module
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  Translate real-world data into actionable healthcare insights with our comprehensive 
                  Real-World Evidence (RWE) platform.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Our AI-powered RWE module enables healthcare organizations to leverage diverse data sources 
                  for evidence generation, patient outcome analysis, and regulatory submissions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <FeatureIcon><CheckCircle size={20} /></FeatureIcon>
                    <span className="text-gray-700">Turns fragmented healthcare data into integrated evidence</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FeatureIcon><CheckCircle size={20} /></FeatureIcon>
                    <span className="text-gray-700">Enables FDA/EMA-compliant evidence packages</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FeatureIcon><CheckCircle size={20} /></FeatureIcon>
                    <span className="text-gray-700">Secure federated analysis across health systems</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <CustomButton 
                    variant="primary" 
                    size="lg" 
                    onClick={handleButtonClick}
                  >
                    Schedule Live Demo
                  </CustomButton>
                  
                  <CustomButton 
                    variant="outline" 
                    size="lg"
                    to="/real-world-evidence"
                  >
                    Learn More
                  </CustomButton>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex-1 rounded-xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-gray-800 p-3 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="text-gray-400 text-sm ml-2">Real-World Evidence Dashboard</div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="/images/rwe-dashboard.png" 
                      alt="Real-World Evidence Dashboard"
                      className="w-full h-auto rounded-lg shadow-md" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400?text=RWE+Dashboard";
                      }}
                    />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-blue-600 text-lg font-bold">94%</div>
                        <div className="text-xs text-gray-500">Data Compliance</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-green-600 text-lg font-bold">2.4M</div>
                        <div className="text-xs text-gray-500">Patient Records</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-purple-600 text-lg font-bold">76%</div>
                        <div className="text-xs text-gray-500">Prediction Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Key Capabilities</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Real-World Evidence Module provides comprehensive tools for researchers,
              healthcare providers, and pharmaceutical companies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <ChartBar size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Cohort Analysis</h4>
              <p className="text-gray-600">
                Build and analyze patient cohorts with advanced filtering capabilities across multiple 
                data sources including EHRs, claims data, and patient-reported outcomes.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="h-12 w-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Federated Analysis</h4>
              <p className="text-gray-600">
                Conduct studies across multiple healthcare organizations without data movement,
                preserving privacy while enabling large-scale collaborative research.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="h-12 w-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <Laptop size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Regulatory Toolkit</h4>
              <p className="text-gray-600">
                Generate submission-ready documentation for regulatory bodies with comprehensive 
                audit trails, methodology validation, and evidence packages.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsRealWorldEvidence;
