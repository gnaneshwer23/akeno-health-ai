
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, Share, Check } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

const PatientCommunication = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-green-100 text-green-700 font-medium">
              Patient Communication
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
              Shared Decision Tools
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Enhance patient understanding, satisfaction, and compliance with tools that improve 
              communication, visualize treatment impacts, and create patient-friendly summaries.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Patient-Friendly Summaries</h3>
                  <p className="text-muted-foreground">
                    Auto-generate clear, jargon-free summaries of conditions, treatment plans, and instructions
                    that patients can easily understand and reference.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <Share size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Visual Decision Tools</h3>
                  <p className="text-muted-foreground">
                    Use interactive visual tools during consultations to help patients understand their 
                    condition, treatment options, and expected outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-health-dark mb-2">Secure Messaging</h3>
                  <p className="text-muted-foreground">
                    Securely message patients, receive AI-triaged queries, and maintain ongoing communication
                    with patients in between visits.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <CustomButton
                variant="primary"
                to="/contact"
                withArrow
              >
                Explore Communication Tools
              </CustomButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Patient Summary Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-green-50 p-4 border-b border-green-100">
                <h3 className="font-medium text-green-700">Patient-Friendly Treatment Summary</h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={20} className="text-green-600" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium text-health-dark mb-3">Your Type 2 Diabetes Treatment Plan</h4>
                    
                    <div className="prose prose-sm text-gray-600 max-w-none mb-4">
                      <p>
                        Your blood sugar levels have been higher than the target range we discussed. 
                        To help bring them back under control, we're making these changes to your treatment:
                      </p>
                      
                      <div className="mt-4 space-y-3">
                        <div className="flex items-start gap-2">
                          <Check size={16} className="text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-health-dark">Medication Change</p>
                            <p>Increasing your Metformin to 1000mg twice daily with meals.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Check size={16} className="text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-health-dark">New Medication</p>
                            <p>Adding a GLP-1 medication called Semaglutide (weekly injection) to help control blood sugar and support weight management.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Check size={16} className="text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-health-dark">Diet & Exercise</p>
                            <p>Please follow the Mediterranean diet plan we discussed and aim for 30 minutes of walking 5 days per week.</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="mt-4">
                        Please schedule a follow-up appointment in 2 weeks so we can check how you're responding to these changes.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Auto-translated to Hindi</span>
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Medication videos attached</span>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">Reading level: Grade 8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Decision Tool */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-blue-50 p-4 border-b border-blue-100">
                <h3 className="font-medium text-blue-700">Treatment Impact Visualization</h3>
              </div>
              
              <div className="p-6">
                <h4 className="font-medium text-health-dark mb-3">Expected Outcomes Comparison</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">No Treatment Changes</h5>
                    <div className="h-36 relative">
                      <div className="absolute bottom-0 left-0 w-full h-4/5 bg-red-100 rounded"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-red-300 rounded"></div>
                      <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-gray-400"></div>
                      <div className="absolute top-1/4 left-0 -translate-y-full text-xs text-gray-500">Target</div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-600">HbA1c: 8.2% (in 3 months)</p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-blue-700 mb-2">Medication Changes Only</h5>
                    <div className="h-36 relative">
                      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-yellow-100 rounded"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-yellow-300 rounded"></div>
                      <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-gray-400"></div>
                      <div className="absolute top-1/4 left-0 -translate-y-full text-xs text-gray-500">Target</div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-600">HbA1c: 7.1% (in 3 months)</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-green-700 mb-2">Complete Plan</h5>
                    <div className="h-36 relative">
                      <div className="absolute bottom-0 left-0 w-full h-2/5 bg-green-100 rounded"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1/5 bg-green-300 rounded"></div>
                      <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-gray-400"></div>
                      <div className="absolute top-1/4 left-0 -translate-y-full text-xs text-gray-500">Target</div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-600">HbA1c: 6.4% (in 3 months)</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    This visualization shows how the complete treatment plan (medications + lifestyle changes)
                    can help you reach your blood sugar goals faster and more effectively than medications alone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-health-dark mb-3">
            Improve patient understanding, satisfaction, and compliance
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Studies show that patients who clearly understand their condition and treatment plan are 30% more likely to adhere to recommendations
            and report higher satisfaction with their care experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientCommunication;
