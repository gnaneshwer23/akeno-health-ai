
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, Activity, TrendingUp } from 'lucide-react';

const HospitalAnalytics = () => {
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
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium text-sm mb-4">
            Data-Driven Insights
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Hospital-Wide AI Analytics & Quality Metrics
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Live dashboards tracking readmissions, length of stay, infection control, and treatment outcomes
            to improve clinical governance and meet NHS targets more effectively.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-blue-50 p-4 border-b border-blue-100">
              <div className="flex items-center gap-2">
                <BarChart2 size={20} className="text-blue-600" />
                <h3 className="font-medium text-blue-700">Readmission Analytics</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">7-day Readmission Rate</span>
                  <span className="text-sm text-green-600">-12% YoY</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full">
                  <div className="h-full w-[18%] bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Current: 4.8%</span>
                  <span>Target: 4.5%</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">30-day Readmission Rate</span>
                  <span className="text-sm text-green-600">-8% YoY</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full">
                  <div className="h-full w-[35%] bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Current: 9.2%</span>
                  <span>Target: 8.5%</span>
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg mt-4 text-sm text-blue-700">
                <p><strong>AI Insight:</strong> Patients with COPD have 2.3x higher readmission risk in winter months.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-green-50 p-4 border-b border-green-100">
              <div className="flex items-center gap-2">
                <Activity size={20} className="text-green-600" />
                <h3 className="font-medium text-green-700">Length of Stay Optimization</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <h4 className="text-sm text-gray-600 mb-1">Avg. LOS</h4>
                  <p className="text-2xl font-bold text-green-600">3.2</p>
                  <p className="text-xs text-green-700">days</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <h4 className="text-sm text-gray-600 mb-1">Reduction</h4>
                  <p className="text-2xl font-bold text-green-600">16%</p>
                  <p className="text-xs text-green-700">vs. last year</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Department Breakdown</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Cardiology</span>
                      <span>4.1 days (-12%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Orthopedics</span>
                      <span>3.8 days (-18%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full w-[65%] bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg mt-4 text-sm text-green-700">
                <p><strong>AI Insight:</strong> Early mobilization protocols reduced LOS by an average of 1.2 days.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden lg:col-span-1 md:col-span-2"
          >
            <div className="bg-purple-50 p-4 border-b border-purple-100">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-purple-600" />
                <h3 className="font-medium text-purple-700">Hospital Benchmarking</h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-sm font-medium mb-4">Performance vs Similar Hospitals</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Patient Satisfaction</span>
                    <span className="text-sm text-green-600">Top 10%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-full w-[90%] bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Quality Outcomes</span>
                    <span className="text-sm text-green-600">Top 15%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-full w-[85%] bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Cost Efficiency</span>
                    <span className="text-sm text-amber-600">Top 30%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-full w-[70%] bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg mt-6 text-sm text-purple-700">
                <p><strong>AI Insight:</strong> Your hospital performs 22% better than peers in preventing post-op complications.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-4 py-3 bg-blue-50 text-blue-800 rounded-lg font-medium border border-blue-100">
            🎯 Outcome: Improve clinical governance and meet NHS targets more effectively.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalAnalytics;
