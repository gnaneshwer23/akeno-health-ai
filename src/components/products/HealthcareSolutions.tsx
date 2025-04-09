
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { FlaskConical, Package, Dna, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HealthcareSolutions = () => {
  const { toast } = useToast();
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "This is a demo website. Buttons are intentionally non-functional.",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Healthcare Solutions</h2>
          <p className="text-lg text-gray-600">
            Specialized products designed for specific healthcare stakeholders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Clinical Decision Support */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <div className="bg-indigo-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FlaskConical className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clinical Decision Support</h3>
              <p className="text-gray-600 mb-4">
                AI-powered decision support for clinicians, integrating patient data with the latest research evidence to suggest optimal treatment paths.
              </p>
              <CustomButton 
                variant="link" 
                className="text-indigo-600 p-0 hover:text-indigo-700"
                onClick={handleButtonClick}
              >
                Explore Solution →
              </CustomButton>
            </div>
          </motion.div>
          
          {/* Health Data Integration Platform */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="bg-green-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Package className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Data Integration Platform</h3>
              <p className="text-gray-600 mb-4">
                Secure, compliant data integration platform that connects EHRs, wearables, genomic data, and laboratory results for a unified health record.
              </p>
              <CustomButton 
                variant="link" 
                className="text-green-600 p-0 hover:text-green-700"
                onClick={handleButtonClick}
              >
                Explore Solution →
              </CustomButton>
            </div>
          </motion.div>
          
          {/* Genomic Analysis Toolkit */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              <div className="bg-amber-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Dna className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genomic Analysis Toolkit</h3>
              <p className="text-gray-600 mb-4">
                Advanced genomic sequencing analysis tools for research institutions and pharmaceutical companies developing personalized therapeutics.
              </p>
              <CustomButton 
                variant="link" 
                className="text-amber-600 p-0 hover:text-amber-700"
                onClick={handleButtonClick}
              >
                Explore Solution →
              </CustomButton>
            </div>
          </motion.div>
          
          {/* Health Data Security Framework */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-6">
              <div className="bg-red-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Data Security Framework</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security solution for healthcare organizations, ensuring HIPAA compliance and protecting sensitive patient information.
              </p>
              <CustomButton 
                variant="link" 
                className="text-red-600 p-0 hover:text-red-700"
                onClick={handleButtonClick}
              >
                Explore Solution →
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSolutions;
