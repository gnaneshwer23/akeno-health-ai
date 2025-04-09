
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Stethoscope, ArrowDown } from 'lucide-react';

const DoctorServiceFlowMobile = () => {
  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-xl font-bold text-health-dark text-center mb-6">How Akeno's Data Pipeline Powers Your Practice</h3>
      
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
            <h4 className="text-lg font-semibold text-blue-700">Secure Health Data</h4>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            Patient EHR records, genomic profiles, medical images, and wearable metrics all securely stored and accessible.
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
            <h4 className="text-lg font-semibold text-purple-700">AI Processing</h4>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            Advanced algorithms analyze patterns across patient data, predict outcomes, and compare with medical literature.
          </p>
        </motion.div>
        
        <div className="flex justify-center">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
        
        {/* Doctor Tools */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-green-50 rounded-xl border border-green-100"
        >
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
              <Stethoscope size={16} />
            </div>
            <h4 className="text-lg font-semibold text-green-700">Your Physician Tools</h4>
          </div>
          
          <p className="text-sm text-gray-600">
            Clinical decision support, smart documentation, and real-time patient monitoring dashboards available at your fingertips.
          </p>
        </motion.div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Secure, compliant, and designed for clinical excellence
        </p>
      </div>
    </div>
  );
};

export default DoctorServiceFlowMobile;
