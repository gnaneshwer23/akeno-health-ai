
import React from 'react';
import { Database, Brain, LineChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PharmaServiceFlowDiagram = () => {
  return (
    <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-center text-health-dark mb-8">How Akeno's Platform Powers Biotech & Pharma Research</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Data Sources */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full md:w-1/3 p-5 bg-blue-50 rounded-xl border border-blue-100 relative"
        >
          <div className="mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <Database size={24} />
            </div>
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Research Data Sources</h4>
          </div>
          
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-blue-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-blue-600" />
              </div>
              <span className="ml-2">Genomic data samples (3.8K+)</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-blue-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-blue-600" />
              </div>
              <span className="ml-2">Electronic health records</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-blue-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-blue-600" />
              </div>
              <span className="ml-2">Medical imaging datasets</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-blue-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-blue-600" />
              </div>
              <span className="ml-2">Wearable device metrics</span>
            </li>
          </ul>
          
          <div className="text-xs text-gray-500">
            Connected to real patient data with robust security and privacy controls
          </div>
          
          {/* Arrow for desktop */}
          <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
            <div className="bg-white p-1 rounded-full shadow-md">
              <ArrowRight size={20} className="text-health-primary" />
            </div>
          </div>
        </motion.div>
        
        {/* Arrow for mobile */}
        <div className="md:hidden my-4">
          <div className="transform rotate-90">
            <ArrowRight size={20} className="text-health-primary" />
          </div>
        </div>
        
        {/* AI Processing */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/3 p-5 bg-purple-50 rounded-xl border border-purple-100 md:mx-6 relative"
        >
          <div className="mb-4">
            <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
              <Brain size={24} />
            </div>
            <h4 className="text-xl font-semibold text-purple-700 mb-2">AI Processing Engine</h4>
          </div>
          
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-purple-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-purple-600" />
              </div>
              <span className="ml-2">Multi-omics data integration</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-purple-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-purple-600" />
              </div>
              <span className="ml-2">Drug target identification</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-purple-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-purple-600" />
              </div>
              <span className="ml-2">Clinical trial optimization</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-purple-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-purple-600" />
              </div>
              <span className="ml-2">Predictive biomarker discovery</span>
            </li>
          </ul>
          
          <div className="text-xs text-gray-500">
            Powered by advanced machine learning algorithms and digital twin technology
          </div>
          
          {/* Arrow for desktop */}
          <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
            <div className="bg-white p-1 rounded-full shadow-md">
              <ArrowRight size={20} className="text-health-primary" />
            </div>
          </div>
        </motion.div>
        
        {/* Arrow for mobile */}
        <div className="md:hidden my-4">
          <div className="transform rotate-90">
            <ArrowRight size={20} className="text-health-primary" />
          </div>
        </div>
        
        {/* Research Outputs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full md:w-1/3 p-5 bg-teal-50 rounded-xl border border-teal-100"
        >
          <div className="mb-4">
            <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-3">
              <LineChart size={24} />
            </div>
            <h4 className="text-xl font-semibold text-teal-700 mb-2">Research Insights & Tools</h4>
          </div>
          
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-teal-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-teal-600" />
              </div>
              <span className="ml-2">Drug discovery acceleration</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-teal-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-teal-600" />
              </div>
              <span className="ml-2">Clinical trial optimization</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-teal-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-teal-600" />
              </div>
              <span className="ml-2">Real-world evidence analytics</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-5 mt-1 rounded-full bg-teal-200 p-0.5 flex items-center justify-center">
                <ArrowRight size={10} className="text-teal-600" />
              </div>
              <span className="ml-2">AI-guided synthetic biology</span>
            </li>
          </ul>
          
          <div className="text-xs text-gray-500">
            Providing actionable insights that accelerate research timeframes by 80%+
          </div>
        </motion.div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          HIPAA-compliant, secure, and designed for pharmaceutical research excellence
        </p>
      </div>
    </div>
  );
};

export default PharmaServiceFlowDiagram;
