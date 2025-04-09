
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Activity, AlertTriangle } from 'lucide-react';

const PatientDischargeSection = () => {
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
          <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full font-medium text-sm mb-4">
            Patient Care Continuity
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Predictive Discharge & Follow-Up Pathways
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Free up beds sooner, reduce avoidable readmissions, and ensure continuity of care
            with AI-powered discharge planning and post-discharge monitoring.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative"
          >
            <div className="bg-green-50 p-4 border-b border-green-100">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-green-600" />
                <h3 className="font-medium text-green-700">Discharge Planning Dashboard</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Patient: Sarah Johnson, 68</h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm">
                    Primary: CHF
                  </div>
                  <div className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm">
                    Secondary: Type 2 Diabetes
                  </div>
                  <div className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm">
                    LOS: 4 days
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-green-600" />
                    <h5 className="font-medium text-green-700">Optimal Discharge</h5>
                  </div>
                  <p className="text-2xl font-bold">Tomorrow</p>
                  <p className="text-sm text-green-700">10:00 AM</p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={18} className="text-amber-600" />
                    <h5 className="font-medium text-amber-700">Readmission Risk</h5>
                  </div>
                  <p className="text-2xl font-bold">22%</p>
                  <p className="text-sm text-amber-700">Medium risk</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-medium">AI-Generated Discharge Plan</h5>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Daily weight monitoring and fluid restriction (1.5L)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Virtual follow-up in 3 days with Dr. Matthews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Home care visits 2x weekly for first two weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Remote monitoring via Akeno Health mobile app</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Activity size={18} className="text-purple-600" />
                  <h5 className="font-medium text-purple-700">Intervention Alert</h5>
                </div>
                <p className="text-sm text-purple-700">
                  Consider cardiology consult before discharge due to new arrhythmia detected on last ECG.
                </p>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 m-3">
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                AI Assisted
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <FeatureCard
                icon={<Calendar size={24} className="text-green-600" />}
                title="AI-Calculated Optimal Discharge Timing"
                description="Our AI analyzes recovery trends, comorbidity risk, and resource needs to determine the ideal discharge timing that balances patient safety and bed availability."
              />
              
              <FeatureCard
                icon={<Activity size={24} className="text-green-600" />}
                title="Post-discharge Remote Monitoring"
                description="Seamless integration with wearables and patient apps enables continuous tracking of vital signs, medication adherence, and symptom development after discharge."
              />
              
              <FeatureCard
                icon={<AlertTriangle size={24} className="text-green-600" />}
                title="Readmission Risk Prevention"
                description="AI identifies high-risk patients and recommends targeted interventions like additional follow-ups, home care visits, or telehealth consultations to prevent avoidable readmissions."
              />
            </div>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium">
                🎯 Outcome: Free up beds sooner, reduce avoidable readmissions, and ensure continuity of care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-health-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default PatientDischargeSection;
