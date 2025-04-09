
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, LineChart, ArrowDown } from 'lucide-react';

const PharmaServiceFlowMobile = () => {
  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-xl font-bold text-health-dark text-center mb-6">How Akeno's Platform Powers Biotech & Pharma Research</h3>
      
      <div className="space-y-8">
        {/* Data Sources */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 bg-blue-50 rounded-xl border border-blue-100"
        >
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
              <Database size={16} />
            </div>
            <h4 className="text-lg font-semibold text-blue-700">Research Data Sources</h4>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            Genomic data samples, clinical trial results, medical imaging datasets, and wearable device metrics - all securely integrated.
          </p>
        </motion.div>
        
        <div className="flex justify-center">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
        
        {/* AI Processing */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 bg-purple-50 rounded-xl border border-purple-100"
        >
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
              <Brain size={16} />
            </div>
            <h4 className="text-lg font-semibold text-purple-700">AI Processing Engine</h4>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            Advanced algorithms integrate multi-omics data, identify drug targets, optimize clinical trials, and discover predictive biomarkers.
          </p>
        </motion.div>
        
        <div className="flex justify-center">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
        
        {/* Research Outputs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-teal-50 rounded-xl border border-teal-100"
        >
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-2">
              <LineChart size={16} />
            </div>
            <h4 className="text-lg font-semibold text-teal-700">Research Insights & Tools</h4>
          </div>
          
          <p className="text-sm text-gray-600">
            Comprehensive dashboards, drug discovery acceleration, clinical trial optimization, and real-world evidence analytics for research excellence.
          </p>
        </motion.div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          HIPAA-compliant, secure, and designed for pharmaceutical research excellence
        </p>
      </div>
    </div>
  );
};

export default PharmaServiceFlowMobile;
