
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Brain, 
  Hospital, 
  ChevronRight, 
  Activity, 
  Clock,
  LineChart,
  Bed,
  Users,
  AlertCircle  
} from 'lucide-react';

const HospitalServiceFlowDiagram = () => {
  const dataSources = [
    {
      icon: <Database size={24} />,
      title: "EHR Integration",
      description: "Complete patient records from your existing systems"
    },
    {
      icon: <Database size={24} />,
      title: "Resource Data",
      description: "Staff, equipment and supply management data"
    },
    {
      icon: <Database size={24} />,
      title: "Financial Systems",
      description: "Billing, cost management and revenue data"
    },
    {
      icon: <Database size={24} />,
      title: "Patient Monitoring",
      description: "Real-time vitals and clinical information"
    }
  ];
  
  const aiProcessing = [
    {
      icon: <Brain size={24} />,
      title: "Predictive Analytics",
      description: "Forecast patient volumes and resource needs"
    },
    {
      icon: <Brain size={24} />,
      title: "Risk Stratification",
      description: "Identify high-risk patients requiring intervention"
    },
    {
      icon: <Brain size={24} />,
      title: "Efficiency Optimization",
      description: "AI-driven workflow and resource allocation"
    }
  ];
  
  const hospitalTools = [
    {
      icon: <Hospital size={24} />,
      title: "Administrative Dashboard",
      description: "Real-time hospital metrics and KPIs"
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Early Warning System",
      description: "Critical alerts for patient deterioration"
    },
    {
      icon: <LineChart size={24} />,
      title: "Cost Analytics",
      description: "Financial optimization and reporting"
    },
    {
      icon: <Users size={24} />,
      title: "Staff Allocation",
      description: "AI-optimized scheduling and assignments"
    }
  ];

  return (
    <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-health-dark text-center mb-8">How Akeno's Health Intelligence Platform Powers Your Hospital</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Data Sources */}
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
              <Database size={20} />
            </div>
            <h4 className="text-xl font-semibold text-blue-700">Hospital Data Sources</h4>
          </div>
          
          <div className="space-y-4 mt-6">
            {dataSources.map((item, index) => (
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
            <h4 className="text-xl font-semibold text-purple-700">AI Processing Engine</h4>
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
        
        {/* Hospital Tools */}
        <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3">
              <Hospital size={20} />
            </div>
            <h4 className="text-xl font-semibold text-teal-700">Hospital Management Tools</h4>
          </div>
          
          <div className="space-y-4 mt-6">
            {hospitalTools.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (0.1 * index) }}
                className="flex bg-white p-3 rounded-lg border border-teal-100 shadow-sm"
              >
                <div className="h-8 w-8 bg-teal-50 rounded text-teal-600 flex items-center justify-center mr-3 flex-shrink-0">
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
          Akeno's integrated platform connects disparate hospital systems into one intelligent ecosystem,
          turning siloed data into actionable insights that optimize operations, improve care, and reduce costs.
        </p>
      </div>
    </div>
  );
};

export default HospitalServiceFlowDiagram;
