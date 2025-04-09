
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BadgeCheck, Pill, Activity } from 'lucide-react';

const DigitalTwinSection = () => {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-medium">
              Digital Twin Technology
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
              Digital Twin Simulation
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              View a dynamic model of each patient's health, incorporating vitals, genomics, lifestyle, and medications 
              to simulate different treatment pathways with projected outcomes and risks.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Personalized Patient Models</h3>
                  <p className="text-muted-foreground">
                    See a complete virtual model of your patient's health status, updated in real-time 
                    with new data and personalized to their unique biological profile.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Treatment Pathway Simulation</h3>
                  <p className="text-muted-foreground">
                    Simulate different treatment pathways to visualize predicted outcomes, compare efficacy, 
                    and identify potential adverse effects before implementation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Pill size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Personalized Dosing</h3>
                  <p className="text-muted-foreground">
                    Receive AI-suggested medication dosages based on the patient's unique physiology, 
                    genetic factors, comorbidities, and concurrent medications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck size={20} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-health-dark">Outcome</h3>
              </div>
              <p className="text-muted-foreground">
                Truly precision-driven care without complexity. Make more informed clinical decisions 
                with patient-specific simulations that account for individual variability in genes, 
                environment, and lifestyle.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="p-4 bg-blue-50 border-b border-blue-100">
                <h3 className="font-medium text-blue-700">Digital Twin Simulation Dashboard</h3>
              </div>
              
              <div className="p-6">
                {/* Patient Digital Avatar */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-health-dark">James Wilson, 62</h4>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">Type 2 Diabetes</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Digital Twin ID: DT-78429</p>
                  </div>
                </div>
                
                {/* Treatment Simulation Comparison */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h4 className="font-medium text-health-dark mb-3">Treatment Pathway Comparison</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-700">Metformin + GLP-1</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Recommended</span>
                      </div>
                      <div className="space-y-2">
                        <SimulatedOutcome label="Projected HbA1c Reduction" value="1.8%" positive={true} />
                        <SimulatedOutcome label="Weight Change" value="-4.2kg" positive={true} />
                        <SimulatedOutcome label="Hypoglycemia Risk" value="Low" positive={true} />
                        <SimulatedOutcome label="GI Side Effects" value="Moderate" positive={false} />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Insulin Therapy</span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">Alternative</span>
                      </div>
                      <div className="space-y-2">
                        <SimulatedOutcome label="Projected HbA1c Reduction" value="2.1%" positive={true} />
                        <SimulatedOutcome label="Weight Change" value="+2.8kg" positive={false} />
                        <SimulatedOutcome label="Hypoglycemia Risk" value="High" positive={false} />
                        <SimulatedOutcome label="GI Side Effects" value="Low" positive={true} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Personalized Dosing */}
                <div>
                  <h4 className="font-medium text-health-dark mb-3">Personalized Dosing Recommendation</h4>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Pill className="text-green-600 mt-1" size={18} />
                      <div>
                        <h5 className="font-medium text-green-800">Metformin</h5>
                        <p className="text-sm text-green-700">850mg twice daily (with meals)</p>
                        <p className="text-xs text-green-600 mt-1">
                          Adjusted for eGFR of 68 ml/min/1.73m² and CYP2C9 slow metabolizer status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper component for displaying simulated outcomes
const SimulatedOutcome = ({ label, value, positive }: { label: string; value: string; positive: boolean }) => (
  <div className="flex items-center justify-between">
    <span className="text-xs text-gray-600">{label}</span>
    <span className={`text-xs font-medium ${positive ? 'text-green-700' : 'text-amber-700'}`}>{value}</span>
  </div>
);

export default DigitalTwinSection;
