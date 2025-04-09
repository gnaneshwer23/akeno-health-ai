
import React from 'react';
import ProductCard from './ProductCard';
import { Network, Dna, Microscope, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CoreProducts = () => {
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
          <h2 className="text-3xl font-bold mb-4">Our Core Products</h2>
          <p className="text-lg text-gray-600">
            Cutting-edge solutions that integrate seamlessly with healthcare systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* AI Studio Card */}
          <ProductCard
            icon={<Network className="text-blue-600" />}
            iconBgClass="bg-blue-500/10"
            title="AI Studio"
            description="The brain behind predictive precision medicine. Build, train, and deploy healthcare AI models with explainable insights for clinical applications."
            linkTo="/ai-studio"
          />
          
          {/* Digital Twin Platform */}
          <ProductCard
            icon={<Dna className="text-purple-600" />}
            iconBgClass="bg-purple-500/10"
            title="Digital Twin Platform"
            description="Create personalized patient digital twins for simulation, testing, and predictive healthcare. Model real-world biological responses for better patient outcomes."
            linkTo="/digital-twin-panel"
          />

          {/* Biomarker Analytics Suite */}
          <ProductCard
            icon={<Microscope className="text-teal-600" />}
            iconBgClass="bg-teal-500/10"
            title="Biomarker Analytics Suite"
            description="Comprehensive platform for analyzing multi-omic biomarkers and discovering connections between genomic, proteomic, and metabolomic data."
            linkText="Coming Soon →"
            onClick={handleButtonClick}
          />

          {/* Real-World Evidence Module */}
          <ProductCard
            icon={<Globe className="text-green-600" />}
            iconBgClass="bg-green-500/10"
            title="Real-World Evidence Module"
            description="Unlock the power of longitudinal health data to inform treatment outcomes, drug efficacy, and personalized interventions from real-world clinical practice."
            linkTo="/real-world-evidence"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreProducts;
