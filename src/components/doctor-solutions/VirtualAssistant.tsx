
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calculator, Clock, PlusSquare } from 'lucide-react';

const VirtualAssistant = () => {
  const assistantQueries = [
    "Summarise Mr. Gupta's last three lab reports.",
    "What are latest NICE guidelines for atrial fibrillation in over-70s?",
    "Draft discharge summary for Mrs. Patel.",
    "Calculate MELD score for patient with following parameters...",
    "Set reminder for follow-up with patient #78392 in 2 weeks."
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 text-indigo-700 font-medium">
              Virtual Assistant
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
              Your AI Clinical Workflow Assistant
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Akeno's voice-enabled AI assistant is always ready to help with clinical tasks, information retrieval,
              and administrative workflows - making your day more productive and less stressful.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Natural Language Interface</h3>
                  <p className="text-muted-foreground">
                    Just ask questions in plain English. No need to learn commands or navigate complex menus.
                    The assistant understands medical terminology and context.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Calculator size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Medical Calculations & Risk Scores</h3>
                  <p className="text-muted-foreground">
                    Quickly calculate clinical scores like CHA₂DS₂-VASc, MELD, Wells, and more
                    with automatic data extraction from patient records.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Reminders & Task Management</h3>
                  <p className="text-muted-foreground">
                    Set clinical reminders, follow-ups, and manage your workflow with voice commands
                    that integrate directly with your calendar and task list.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-700 font-medium">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-health-dark">Outcome</h3>
              </div>
              <p className="text-muted-foreground">
                A co-pilot in your clinical journey — always available, never in the way. 
                The assistant learns your preferences and practice patterns over time to provide 
                increasingly personalized support.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 border-b border-indigo-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      A
                    </div>
                    <h3 className="font-medium text-indigo-700">Akeno Assistant</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-600">Online</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {/* Assistant message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-medium">A</span>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">
                        Good morning, Dr. Chen. How can I assist you today?
                      </p>
                    </div>
                  </div>
                  
                  {/* Doctor message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">
                        Show me the latest lab results for patient Sarah Johnson
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-medium">D</span>
                    </div>
                  </div>
                  
                  {/* Assistant response with lab results */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-medium">A</span>
                    </div>
                    <div className="space-y-3 max-w-[80%]">
                      <div className="bg-indigo-50 rounded-lg p-3">
                        <p className="text-sm text-gray-800 mb-2">
                          Here are Sarah Johnson's latest lab results from 03/04/2025:
                        </p>
                        <div className="bg-white rounded p-2 text-xs space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Hemoglobin:</span>
                            <span className="font-medium text-gray-900">12.8 g/dL</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">White Blood Cells:</span>
                            <span className="font-medium text-gray-900">6.2 K/μL</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Platelets:</span>
                            <span className="font-medium text-gray-900">287 K/μL</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Glucose:</span>
                            <span className="font-medium text-red-600">146 mg/dL (High)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">HbA1c:</span>
                            <span className="font-medium text-red-600">7.2% (High)</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-3">
                        <p className="text-sm text-gray-800">
                          The patient's glucose and HbA1c levels remain elevated compared to previous results. 
                          Would you like me to show the trend analysis or draft a treatment adjustment note?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Common queries buttons */}
                <div className="mt-8">
                  <h4 className="text-xs font-medium text-gray-500 mb-3">COMMON QUERIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {assistantQueries.map((query, index) => (
                      <div 
                        key={index}
                        className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-700 cursor-pointer transition-colors"
                      >
                        {query}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Input field */}
                <div className="mt-6 flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Ask me anything..." 
                    className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                  <button className="h-9 w-9 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    <PlusSquare size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistant;
