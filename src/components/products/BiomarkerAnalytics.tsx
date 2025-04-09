
import React from 'react';
import { TestTube, Microscope, Dna, BeakerIcon, FlaskConical, BarChart3, Database, Share2, Shield, Brain } from 'lucide-react';

const BiomarkerAnalytics = () => {
  return (
    <>
      {/* Main Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">Comprehensive Multi-Omic Biomarker Analysis Platform</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Biomarker Analytics Suite is a powerful platform for analyzing multi-omic biomarkers and discovering 
              connections between genomic, proteomic, metabolomic, and clinical data. Leverage advanced AI to uncover 
              new insights from complex biological datasets and accelerate precision medicine research.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-blue-800">
                <span className="font-bold">Advanced Analysis:</span> Process and analyze complex biomarker data from multiple sources, 
                including genomics, proteomics, metabolomics, and clinical observations.
              </p>
            </div>
          </div>

          {/* Product Features */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Microscope className="w-6 h-6" />}
                title="Multi-Omic Integration"
                description="Seamlessly integrate genomic, proteomic, transcriptomic, and metabolomic data for comprehensive biological insights."
              />
              <FeatureCard 
                icon={<TestTube className="w-6 h-6" />}
                title="Biomarker Discovery"
                description="AI-powered identification of novel biomarkers from complex biological datasets with statistical validation."
              />
              <FeatureCard 
                icon={<BarChart3 className="w-6 h-6" />}
                title="Interactive Visualization"
                description="Dynamic visualization tools to explore complex multi-omic data relationships and biomarker patterns."
              />
              <FeatureCard 
                icon={<Dna className="w-6 h-6" />}
                title="Pathway Analysis"
                description="Identify affected biological pathways through integration of multi-omic data with pathway databases."
              />
              <FeatureCard 
                icon={<Database className="w-6 h-6" />}
                title="Reference Database"
                description="Access to curated biomarker databases across multiple disease areas and biological systems."
              />
              <FeatureCard 
                icon={<Shield className="w-6 h-6" />}
                title="Secure Data Management"
                description="Enterprise-grade security for sensitive biological and clinical data with compliance controls."
              />
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Applications & Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UseCase 
                title="Clinical Biomarker Validation"
                description="Validate biomarkers across diverse patient populations to ensure clinical utility and accuracy in diagnostic applications."
              />
              <UseCase 
                title="Drug Development"
                description="Identify and validate biomarkers for drug efficacy, safety monitoring, and patient stratification in clinical trials."
              />
              <UseCase 
                title="Disease Progression Monitoring"
                description="Track disease progression and treatment response using comprehensive biomarker panels."
              />
              <UseCase 
                title="Academic Research"
                description="Support multi-omic research projects with powerful analysis tools and visualization capabilities."
              />
            </div>
          </div>
          
          {/* Technical Specs */}
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                  <Brain className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Advanced machine learning algorithms for biomarker pattern recognition</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                  <Share2 className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-gray-700">API integration with major laboratory information systems and databases</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                  <FlaskConical className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Support for common data formats including FASTQ, BAM, VCF, mzML, and custom formats</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                  <Database className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Scalable cloud architecture for processing large multi-omic datasets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Use Case Component
const UseCase = ({ title, description }) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-200 transition-colors">
    <h4 className="text-lg font-semibold mb-2 text-blue-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default BiomarkerAnalytics;
