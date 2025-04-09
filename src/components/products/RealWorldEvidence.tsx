
import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { CustomButton } from '@/components/ui/custom-button';
import { FileBarChart, Users, LineChart, Database, Globe, FileSearch } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RealWorldEvidence = () => {
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
          <h2 className="text-3xl font-bold mb-4">Real-World Evidence Module</h2>
          <p className="text-lg text-gray-600">
            AI-Powered Insights from Daily Clinical Practice
          </p>
          <div className="mt-6 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 italic">
              "Make real-world decisions using real-world data — responsibly, securely, and intelligently."
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Post-Market Surveillance Dashboard */}
          <FeatureCard
            icon={<FileBarChart className="text-indigo-600" />}
            iconBgClass="bg-indigo-500/10"
            title="Post-Market Surveillance Dashboard"
            description="Track and analyze real-world safety and efficacy of approved drugs with usage trends, adverse event analysis, and comparative effectiveness studies."
            onClick={handleButtonClick}
            index={0}
          />
          
          {/* Cohort Builder Tool */}
          <FeatureCard
            icon={<Users className="text-green-600" />}
            iconBgClass="bg-green-500/10"
            title="Cohort Builder Tool"
            description="Create and analyze patient cohorts based on custom filters like age, gender, genetic markers, diagnoses, and wearable data patterns."
            onClick={handleButtonClick}
            index={1}
          />
          
          {/* AI-Enhanced Outcome Correlation Engine */}
          <FeatureCard
            icon={<LineChart className="text-amber-600" />}
            iconBgClass="bg-amber-500/10"
            title="AI-Enhanced Outcome Correlation Engine"
            description="Reveal unseen patterns between treatments, genetics, lifestyle, and long-term health with correlation mapping and outcome trajectory prediction."
            onClick={handleButtonClick}
            index={2}
          />
          
          {/* Custom Data Query & Export Module */}
          <FeatureCard
            icon={<Database className="text-red-600" />}
            iconBgClass="bg-red-500/10"
            title="Custom Data Query & Export Module"
            description="No-code or low-code interface to run advanced analyses with query templates for drug adherence, mortality rates, and treatment dropouts."
            onClick={handleButtonClick}
            index={3}
          />
          
          {/* Real-Time Data Feed Integration */}
          <FeatureCard
            icon={<Globe className="text-blue-600" />}
            iconBgClass="bg-blue-500/10"
            title="Real-Time Data Feed Integration"
            description="Always current with live feeds from wearables, hospitals, and partner institutions, plus alert systems for signal anomalies."
            onClick={handleButtonClick}
            index={4}
          />
          
          {/* RWE Regulatory Toolkit */}
          <FeatureCard
            icon={<FileSearch className="text-purple-600" />}
            iconBgClass="bg-purple-500/10"
            title="RWE Regulatory Toolkit"
            description="Ready-to-submit insights and export templates for FDA, EMA, MHRA, CDSCO with exportable evidence packages and audit trails."
            onClick={handleButtonClick}
            index={5}
          />
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Integration & Interoperability</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <div className="text-green-500 mr-3">✓</div>
              <span>Compatible with FHIR, OMOP, HL7 standards</span>
            </li>
            <li className="flex items-center text-gray-700">
              <div className="text-green-500 mr-3">✓</div>
              <span>Works with hospital EHR systems & wearable APIs</span>
            </li>
            <li className="flex items-center text-gray-700">
              <div className="text-green-500 mr-3">✓</div>
              <span>Secure federated RWE collaboration (across borders)</span>
            </li>
          </ul>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CustomButton 
              size="lg" 
              variant="primary" 
              onClick={handleButtonClick}
            >
              Build a Cohort
            </CustomButton>
            <CustomButton 
              size="lg" 
              variant="outline" 
              onClick={handleButtonClick}
            >
              View AI Correlation Dashboard
            </CustomButton>
            <CustomButton 
              size="lg" 
              variant="ghost" 
              onClick={handleButtonClick}
            >
              Request Partner Access
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldEvidence;
