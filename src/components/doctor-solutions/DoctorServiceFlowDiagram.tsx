
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, FileText, Bell, Stethoscope, ChevronRight } from 'lucide-react';

const DoctorServiceFlowDiagram = () => {
  const dataTypes = [
    {
      icon: <Database size={24} />,
      title: "Electronic Health Records",
      description: "Complete patient histories, diagnoses, and medications"
    },
    {
      icon: <Database size={24} />,
      title: "Genomic Data",
      description: "Genetic profiles for personalized medicine"
    },
    {
      icon: <Database size={24} />,
      title: "Medical Images",
      description: "MRIs, CT scans, X-rays with AI analysis"
    },
    {
      icon: <Database size={24} />,
      title: "Wearable Data",
      description: "Real-time vitals and biomarkers from devices"
    }
  ];
  
  const aiProcessing = [
    {
      icon: <Brain size={24} />,
      title: "Pattern Recognition",
      description: "Identify anomalies across multiple data sources"
    },
    {
      icon: <Brain size={24} />,
      title: "Predictive Analytics",
      description: "Forecast health trajectories and outcomes"
    },
    {
      icon: <Brain size={24} />,
      title: "Medical Literature Analysis",
      description: "Compare findings with research evidence"
    }
  ];
  
  const doctorTools = [
    {
      icon: <Stethoscope size={24} />,
      title: "Clinical Decision Support",
      description: "Evidence-based diagnosis suggestions"
    },
    {
      icon: <FileText size={24} />,
      title: "Smart Documentation",
      description: "AI-assisted clinical notes and reporting"
    },
    {
      icon: <Bell size={24} />,
      title: "Monitoring Dashboard",
      description: "Real-time patient status and alerts"
    }
  ];

  return (
    <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-health-dark text-center mb-8">How Akeno's Secure Data Pipeline Powers Your Practice</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Data Sources */}
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
              <Database size={20} />
            </div>
            <h4 className="text-xl font-semibold text-blue-700">Secure Health Data</h4>
          </div>
          
          <div className="space-y-4 mt-6">
            {dataTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex bg-white p-3 rounded-lg border border-blue-100 shadow-sm"
              >
                <div className="h-8 w-8 bg-blue-50 rounded text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-medium text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:flex justify-center hidden">
            <ChevronRight size={40} className="text-blue-300 mt-6" />
          </div>
        </div>
        
        {/* AI Processing */}
        <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
              <Brain size={20} />
            </div>
            <h4 className="text-xl font-semibold text-purple-700">AI Processing</h4>
          </div>
          
          <div className="space-y-4 mt-6">
            {aiProcessing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (0.1 * index) }}
                className="flex bg-white p-3 rounded-lg border border-purple-100 shadow-sm"
              >
                <div className="h-8 w-8 bg-purple-50 rounded text-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-medium text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:flex justify-center hidden">
            <ChevronRight size={40} className="text-purple-300 mt-6" />
          </div>
        </div>
        
        {/* Doctor Tools */}
        <div className="p-6 bg-green-50 rounded-xl border border-green-100">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
              <Stethoscope size={20} />
            </div>
            <h4 className="text-xl font-semibold text-green-700">Your Physician Tools</h4>
          </div>
          
          <div className="space-y-4 mt-6">
            {doctorTools.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (0.1 * index) }}
                className="flex bg-white p-3 rounded-lg border border-green-100 shadow-sm"
              >
                <div className="h-8 w-8 bg-green-50 rounded text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-medium text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Akeno's secure data pipeline transforms disparate health data sources into actionable clinical insights,
          leveraging our database of electronic health records, genomic data, medical imaging, and wearable metrics.
        </p>
      </div>
    </div>
  );
};

export default DoctorServiceFlowDiagram;
