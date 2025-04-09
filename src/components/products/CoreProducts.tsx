
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Network, Dna, Microscope, Globe, TestTube, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CustomButton } from '@/components/ui/custom-button';

const CoreProducts = () => {
  const { toast } = useToast();
  
  const handleButtonClick = () => {
    toast({
      title: "Product Info",
      description: "Thank you for your interest. Product details have been sent to your inbox.",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
            Our Core Products
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Cutting-edge solutions that integrate seamlessly with healthcare systems
            to enable precise diagnostics, personalized treatments, and improved patient outcomes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* AI Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProductCard
              icon={<Network className="text-blue-600" />}
              iconBgClass="bg-blue-500/10"
              title="AI Studio"
              description="The brain behind predictive precision medicine. Build, train, and deploy healthcare AI models with explainable insights for clinical applications."
              linkTo="/ai-studio"
              onClick={handleButtonClick}
            />
          </motion.div>
          
          {/* Digital Twin Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProductCard
              icon={<Dna className="text-purple-600" />}
              iconBgClass="bg-purple-500/10"
              title="Digital Twin Platform"
              description="Create personalized patient digital twins for simulation, testing, and predictive healthcare. Model real-world biological responses for better patient outcomes."
              linkTo="/digital-twin-panel"
              onClick={handleButtonClick}
            />
          </motion.div>

          {/* Biomarker Analytics Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProductCard
              icon={<TestTube className="text-teal-600" />}
              iconBgClass="bg-teal-500/10"
              title="Biomarker Analytics Suite"
              description="Comprehensive platform for analyzing multi-omic biomarkers and discovering connections between genomic, proteomic, and metabolomic data."
              linkTo="/biomarker-analytics"
              onClick={handleButtonClick}
            />
          </motion.div>

          {/* Real-World Evidence Module */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ProductCard
              icon={<Globe className="text-green-600" />}
              iconBgClass="bg-green-500/10"
              title="Real-World Evidence Module"
              description="Unlock the power of longitudinal health data to inform treatment outcomes, drug efficacy, and personalized interventions from real-world clinical practice."
              linkTo="/real-world-evidence"
              onClick={handleButtonClick}
            />
          </motion.div>

          {/* Clinical Decision Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ProductCard
              icon={<Microscope className="text-indigo-600" />}
              iconBgClass="bg-indigo-500/10"
              title="Clinical Decision Support"
              description="AI-powered decision support for clinicians, integrating patient data with the latest research evidence to suggest optimal treatment paths."
              linkTo="/clinical-decision-support"
              onClick={handleButtonClick}
            />
          </motion.div>
          
          {/* Quantum Computing Module */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ProductCard
              icon={<ArrowUpRight className="text-amber-600" />}
              iconBgClass="bg-amber-500/10"
              title="Quantum Computing Module"
              description="Harness quantum algorithms for complex protein folding simulations, drug interaction modeling, and advanced pattern recognition in multimodal health data."
              linkTo="/quantum-computing"
              onClick={handleButtonClick}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <CustomButton
            variant="primary"
            size="lg"
            to="/products/all"
            className="min-w-[220px]"
          >
            View All Products
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreProducts;
