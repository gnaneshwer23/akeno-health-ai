
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { 
  UserCircle, 
  FlaskConical, 
  LineChart, 
  Users, 
  RefreshCw, 
  Dna, 
  Target 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DigitalTwinPanel = () => {
  const { toast } = useToast();
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "This is a demo website. Buttons are intentionally non-functional.",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Digital Twin Panel
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Simulate the Future of Health, Today
          </motion.p>
          <motion.div 
            className="mt-6 bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-700 italic">
              "AI-powered dynamic replicas of each individual's biological and behavioural profile — built for precision care, treatment prediction, and continuous optimisation."
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Patient Twin Dashboard */}
          <DigitalTwinFeature
            icon={<UserCircle className="text-purple-600" />}
            iconBgClass="bg-purple-500/10"
            title="Patient Twin Dashboard"
            description="View, manage, and explore real-time digital twin replicas for each patient with personalized vitals, genomic profiles, and risk indicators."
            onClick={handleButtonClick}
            index={0}
          />
          
          {/* Treatment Simulation Engine */}
          <DigitalTwinFeature
            icon={<FlaskConical className="text-green-600" />}
            iconBgClass="bg-green-500/10"
            title="Treatment Simulation Engine"
            description="Simulate different care paths with 'Try-a-Treatment' Mode to compare outcomes before prescribing, visualizing predicted outcomes and side effects."
            onClick={handleButtonClick}
            index={1}
          />
          
          {/* Risk Forecast Map */}
          <DigitalTwinFeature
            icon={<LineChart className="text-blue-600" />}
            iconBgClass="bg-blue-500/10"
            title="Risk Forecast Map"
            description="Real-time predictive charting of health risks over time with 12-month forecasts, tipping point markers, and auto-adaptive AI alerts."
            onClick={handleButtonClick}
            index={2}
          />
          
          {/* Twin-Clinician Interaction Mode */}
          <DigitalTwinFeature
            icon={<Users className="text-indigo-600" />}
            iconBgClass="bg-indigo-500/10"
            title="Twin-Clinician Interaction"
            description="Empower clinicians to fine-tune simulations with override panels, outcome visualizations, and a co-pilot system combining human judgment with AI."
            onClick={handleButtonClick}
            index={3}
          />
          
          {/* Adaptive Learning Loop */}
          <DigitalTwinFeature
            icon={<RefreshCw className="text-amber-600" />}
            iconBgClass="bg-amber-500/10"
            title="Adaptive Learning Loop"
            description="Continuously refine twin models with closed-loop updates, federated learning from all twins, and drift detection to flag prediction deviations."
            onClick={handleButtonClick}
            index={4}
          />
          
          {/* Variant-Aware Simulation Panel */}
          <DigitalTwinFeature
            icon={<Dna className="text-red-600" />}
            iconBgClass="bg-red-500/10"
            title="Variant-Aware Simulation"
            description="Account for genetic variation in therapy outcomes with gene/protein target maps, polygenic risk modifiers, and pharmacogenomic adjustments."
            onClick={handleButtonClick}
            index={5}
          />
          
          {/* Twin-to-Twin Comparisons */}
          <DigitalTwinFeature
            icon={<Target className="text-teal-600" />}
            iconBgClass="bg-teal-500/10"
            title="Twin-to-Twin Comparisons"
            description="Compare individuals or create synthetic cohorts to identify digital twin siblings for benchmarking and simulating efficacy across demographics."
            onClick={handleButtonClick}
            index={6}
          />
        </div>
        
        <motion.div 
          className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Security & Consent</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <div className="text-green-500 mr-3">✓</div>
              <span>Patient Control Panel for access permissions to digital twin</span>
            </li>
            <li className="flex items-center text-gray-700">
              <div className="text-green-500 mr-3">✓</div>
              <span>Comprehensive audit trails for all simulations</span>
            </li>
            <li className="flex items-center text-gray-700">
              <div className="text-green-500 mr-3">✓</div>
              <span>Zero-Knowledge Proofs to verify predictions without exposing data</span>
            </li>
          </ul>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CustomButton 
              size="lg" 
              variant="primary" 
              onClick={handleButtonClick}
            >
              Try Twin Simulation
            </CustomButton>
            <CustomButton 
              size="lg" 
              variant="outline" 
              onClick={handleButtonClick}
            >
              Create a New Twin Model
            </CustomButton>
            <CustomButton 
              size="lg" 
              variant="ghost" 
              onClick={handleButtonClick}
            >
              View Real-Time Forecast
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper component for Digital Twin features
const DigitalTwinFeature = ({ 
  icon, 
  iconBgClass, 
  title, 
  description, 
  onClick, 
  index = 0 
}: {
  icon: React.ReactNode;
  iconBgClass: string;
  title: string;
  description: string;
  onClick: () => void;
  index?: number;
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className={`${iconBgClass} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <CustomButton 
          variant="link" 
          className={iconBgClass.replace('bg-', 'text-').replace('/10', '') + ' p-0 hover:' + iconBgClass.replace('bg-', 'text-').replace('/10', '/70')}
          onClick={onClick}
        >
          Explore Feature →
        </CustomButton>
      </div>
    </motion.div>
  );
};

export default DigitalTwinPanel;
