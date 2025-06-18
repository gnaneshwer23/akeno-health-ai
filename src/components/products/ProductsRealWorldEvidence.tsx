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
  CheckCircle,
  ArrowRight,
  Shield,
  BarChart3
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import RealWorldEvidenceDemo from './RealWorldEvidenceDemo';

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

  const features = [
    {
      icon: <BarChart3 size={24} className="text-blue-500" />,
      title: "Patient Outcome Analysis",
      description: "Track real-world outcomes across diverse patient populations to validate treatment effectiveness beyond clinical trials"
    },
    {
      icon: <Shield size={24} className="text-green-500" />,
      title: "Regulatory Compliance",
      description: "Generate FDA/EMA-compliant evidence packages with comprehensive audit trails and documentation"
    },
    {
      icon: <Database size={24} className="text-purple-500" />,
      title: "Federated Data Analysis",
      description: "Analyze distributed datasets across institutions without compromising patient privacy or data security"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main content section */}
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
                    <div className="mb-4 bg-gray-100 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-semibold text-gray-700">Clinical Outcomes Analysis</h3>
                        <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">Live</span>
                      </div>
                      <div className="relative h-32 bg-white rounded border border-gray-200 p-2">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-24 flex items-end justify-around px-2">
                            <div className="w-1/6 bg-blue-500 h-[65%] rounded-t"></div>
                            <div className="w-1/6 bg-blue-600 h-[45%] rounded-t"></div>
                            <div className="w-1/6 bg-blue-700 h-[75%] rounded-t"></div>
                            <div className="w-1/6 bg-blue-800 h-[55%] rounded-t"></div>
                            <div className="w-1/6 bg-blue-900 h-[85%] rounded-t"></div>
                            <div className="w-1/6 bg-indigo-600 h-[60%] rounded-t"></div>
                          </div>
                        </div>
                      </div>
                    </div>
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

          {/* Interactive Demo Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Interactive Demo</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Experience our Real-World Evidence platform with simulated data from a global healthcare study.
              </p>
            </div>
            <RealWorldEvidenceDemo />
          </motion.div>
          
          {/* Key Capabilities */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Key Capabilities</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Real-World Evidence Module provides comprehensive tools for researchers,
              healthcare providers, and pharmaceutical companies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <CustomButton
                variant="primary"
                size="lg"
                to="/real-world-evidence"
                className="px-8"
                withArrow={true}
              >
                Explore Full Capabilities
              </CustomButton>
              <CustomButton
                variant="outline"
                size="lg"
                to="/simulated-data-manager"
                className="px-8"
              >
                <Database className="h-4 w-4 mr-2" />
                Try Demo Data
              </CustomButton>
            </div>
          </motion.div>
          
          {/* Global Impact Section */}
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-blue-400/10 flex items-center justify-center">
                  <Globe size={40} className="text-blue-600" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-semibold mb-2">Global Healthcare Impact</h4>
                <p className="text-gray-600 mb-4">
                  Our Real-World Evidence module is helping healthcare organizations across 26 countries 
                  transform care delivery and improve patient outcomes through evidence-based decision making.
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-500">Currently processing over 5.2 million patient records daily</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsRealWorldEvidence;
