
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Clock, ArrowRight, Hospital } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

const ResourceOptimization = () => {
  const features = [
    {
      icon: <Users size={24} className="text-health-primary" />,
      title: "Predictive Staffing Models",
      description: "AI optimization based on historical admissions, seasonal trends, and acuity levels."
    },
    {
      icon: <Calendar size={24} className="text-health-primary" />,
      title: "AI-Driven Surgery Scheduling",
      description: "Minimize theatre downtime and maximize throughput with intelligent scheduling."
    },
    {
      icon: <Clock size={24} className="text-health-primary" />,
      title: "Automated Triage & Bed Management",
      description: "Optimize bed utilization using severity scores and discharge probabilities."
    }
  ];

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
          <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full font-medium text-sm mb-4">
            Resource & Workflow Optimization
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            AI-Optimised Resource & Workflow Automation
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your hospital operations with intelligent resource allocation and workflow 
            optimization that reduces costs, eliminates delays, and boosts staff satisfaction.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-health-dark mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <CustomButton
                variant="outline"
                to="/how-it-works"
                withArrow
              >
                Learn More About Resource Optimization
              </CustomButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-health-primary/10 overflow-hidden p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b">
              <Hospital size={24} className="text-health-primary" />
              <h3 className="font-medium">Hospital Resource Management</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <ResourceCard
                  title="Staff Utilization"
                  value="93%"
                  trend="+12%"
                  color="bg-green-100"
                  textColor="text-green-800"
                />
                <ResourceCard
                  title="Theatre Efficiency"
                  value="87%"
                  trend="+16%"
                  color="bg-blue-100"
                  textColor="text-blue-800"
                />
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">AI Scheduling Insights</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Emergency Department</span>
                    <span className="text-green-600">+3 staff needed (Wed 15:00-23:00)</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-full w-3/4 bg-green-500 rounded"></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mt-3">
                    <span>Surgery Scheduling</span>
                    <span className="text-amber-600">Theatre 3 underutilized</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-full w-1/2 bg-amber-500 rounded"></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mt-3">
                    <span>Bed Allocation</span>
                    <span className="text-blue-600">Optimal</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-full w-11/12 bg-blue-500 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <p className="text-sm text-purple-800 font-medium">
                  🎯 Outcome: Reduce costs, eliminate delays, and boost staff satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ 
  title, 
  value, 
  trend,
  color,
  textColor
}: { 
  title: string; 
  value: string; 
  trend: string;
  color: string;
  textColor: string;
}) => (
  <div className={`${color} ${textColor} p-4 rounded-lg`}>
    <h4 className="font-medium mb-2">{title}</h4>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm font-medium">{trend}</span>
    </div>
  </div>
);

export default ResourceOptimization;
