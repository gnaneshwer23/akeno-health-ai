
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Ambulance, Map, Users } from 'lucide-react';

const EmergencyResponseSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full font-medium text-sm mb-4">
            Critical Response
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            AI-Powered Emergency Response
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Save minutes. Save lives. Save resources with AI-powered emergency triage, 
            response optimization, and predictive resource allocation during critical scenarios.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <EmergencyFeatureCard
                icon={<AlertCircle size={24} className="text-red-500" />}
                title="A&E Triage Assistants"
                description="Flag critical cases, optimize staff rotation, and assist with fast-track routing to improve emergency department flow and patient outcomes."
              />
              
              <EmergencyFeatureCard
                icon={<Map size={24} className="text-red-500" />}
                title="Predictive Heatmaps"
                description="Visualize resource needs and patient surges during mass-casualty or outbreak scenarios to prepare and allocate staff and equipment efficiently."
              />
              
              <EmergencyFeatureCard
                icon={<Ambulance size={24} className="text-red-500" />}
                title="Integrated Emergency Response"
                description="Link ambulance feeds, geospatial alerts, and nearby ICU availability to create a unified emergency response system across your healthcare network."
              />
            </div>
            
            <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-red-800 font-medium">
                🎯 Outcome: Save minutes. Save lives. Save resources.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-red-50 p-4 border-b border-red-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle size={20} className="text-red-600" />
                  <h3 className="font-medium text-red-700">Emergency Response Dashboard</h3>
                </div>
                <div className="px-2 py-1 bg-red-200 text-red-800 rounded text-xs font-medium">
                  LIVE
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-800 mb-1">A&E Current Status</h4>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-amber-800">High Volume</span>
                    <span className="text-xs text-amber-800">+32% capacity</span>
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="text-sm font-medium text-green-800 mb-1">Available Resources</h4>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-green-800">3 Trauma Rooms</span>
                    <span className="text-xs text-green-800">1 available</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Incoming Emergency Cases</h4>
                <div className="space-y-3">
                  <div className="p-2.5 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                      <Ambulance size={18} className="text-red-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-red-800">Major Trauma</span>
                        <span className="px-1.5 py-0.5 bg-red-200 text-red-800 rounded text-xs">ETA 3 min</span>
                      </div>
                      <p className="text-xs text-red-700 mt-1">MVA, male, 42. Suspected internal bleeding. Trauma Team notified.</p>
                    </div>
                  </div>
                  
                  <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0">
                      <Ambulance size={18} className="text-amber-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-amber-800">Cardiac</span>
                        <span className="px-1.5 py-0.5 bg-amber-200 text-amber-800 rounded text-xs">ETA 7 min</span>
                      </div>
                      <p className="text-xs text-amber-700 mt-1">Female, 68. Chest pain, suspected ACS. Cath lab notified.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">AI Resource Recommendations</h4>
                <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-800 space-y-2">
                  <div className="flex items-start gap-2">
                    <Users size={16} className="text-blue-600 mt-0.5" />
                    <span>Request additional ED staff from Ward 4 (low census) within next 30 minutes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Map size={16} className="text-blue-600 mt-0.5" />
                    <span>Redirect minor cases to Urgent Care Centre (1.2 miles away)</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium">Emergency Network Status</h4>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <p className="text-gray-600">All systems operational. Regional trauma network coordinated.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EmergencyFeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-health-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default EmergencyResponseSection;
