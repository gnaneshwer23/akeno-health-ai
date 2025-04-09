
import React from 'react';
import { FileText, HeartPulse, Microscope, Database } from 'lucide-react';
import { User, Stethoscope, Building, Heart, Brain } from 'lucide-react';
import { CheckCircle, Zap, TrendingUp, LineChart, FlaskConical, Activity, Users } from 'lucide-react';
import FlowHeader from './FlowHeader';
import Divider from './Divider';

import { motion } from 'framer-motion';

const FlowContent = () => {
  // Data sources with icons
  const dataSources = [
    { icon: <FileText size={22} />, title: "Patient Health Records" },
    { icon: <HeartPulse size={22} />, title: "Real-Time Wearables" },
    { icon: <Microscope size={22} />, title: "Medical Imaging" },
    { icon: <Database size={22} />, title: "Genomic Data" }
  ];
  
  // AI models
  const aiModels = [
    { icon: <TrendingUp size={22} />, title: "Predictive AI" },
    { icon: <Microscope size={22} />, title: "Diagnostic AI" },
    { icon: <FlaskConical size={22} />, title: "Research AI" },
    { icon: <Stethoscope size={22} />, title: "Clinical AI" }
  ];
  
  // Stakeholders
  const stakeholders = [
    { icon: <User size={20} />, title: "Patients" },
    { icon: <Stethoscope size={20} />, title: "Doctors & Clinicians" },
    { icon: <Building size={20} />, title: "Hospitals & Healthcare" },
    { icon: <Heart size={20} />, title: "Pharma & Research" }
  ];
  
  // Outcomes
  const outcomes = [
    { icon: <CheckCircle size={16} />, title: "Personalized Care Plans" },
    { icon: <Zap size={16} />, title: "AI-Enhanced Diagnosis" },
    { icon: <TrendingUp size={16} />, title: "Predictive Disease Detection" },
    { icon: <LineChart size={16} />, title: "Resource Optimization" },
    { icon: <FlaskConical size={16} />, title: "Accelerated Drug Discovery" },
    { icon: <Activity size={16} />, title: "Real-Time Monitoring" },
    { icon: <Users size={16} />, title: "Clinical Trial Matching" }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-[#8571DD]/10">
      <FlowHeader />
      
      {/* Layer 1: Data Collection */}
      <div className="bg-gradient-to-r from-[#F7F5FF] to-white p-5 rounded-lg border border-[#8571DD]/10 mb-6">
        <h3 className="text-sm font-semibold text-[#8571DD] mb-4">Data Sources</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {dataSources.map((source, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-14 h-14 rounded-md bg-white border border-[#8571DD]/20 flex items-center justify-center shadow-sm">
                <div className="text-[#8571DD]">{source.icon}</div>
              </div>
              <span className="text-sm font-medium text-[#1A1F2C] whitespace-nowrap">{source.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Divider delay={0.4} />
      
      {/* Layer 2: AI Processing */}
      <div className="bg-gradient-to-r from-white to-[#F7F5FF] p-5 rounded-lg border border-[#8571DD]/10 mb-6">
        <h3 className="text-sm font-semibold text-[#8571DD] mb-4 text-center">AI Processing Hub</h3>
        
        <motion.div 
          className="flex flex-col items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Main AI Hub */}
          <div className="relative w-24 h-24 rounded-full bg-[#F1F0FB] flex items-center justify-center shadow-md border border-[#8571DD]/20 z-10 mb-2">
            <Brain size={36} className="text-[#8571DD]" />
            <div className="absolute -inset-3 border border-dashed border-[#8571DD]/20 rounded-full" />
            <div className="absolute -inset-6 border border-dashed border-[#8571DD]/10 rounded-full" />
          </div>
          
          <p className="text-sm font-medium text-[#1A1F2C] mt-1">Akeno AI Core</p>
        </motion.div>
        
        {/* AI Models */}
        <div className="grid grid-cols-2 gap-4">
          {aiModels.map((model, index) => (
            <motion.div 
              key={index}
              className="bg-white p-3 rounded-lg shadow-sm border border-[#8571DD]/10 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
            >
              <div className="text-[#8571DD]">{model.icon}</div>
              <span className="text-xs font-medium whitespace-nowrap">{model.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Divider delay={0.8} />
      
      {/* Layer 3: Stakeholders */}
      <div className="bg-gradient-to-r from-[#F7F5FF] to-white p-5 rounded-lg border border-[#8571DD]/10 mb-6">
        <h3 className="text-sm font-semibold text-[#8571DD] mb-4">Stakeholders</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {stakeholders.map((stakeholder, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + (0.1 * index) }}
            >
              <div className="w-10 h-10 rounded-full bg-white border border-[#8571DD]/20 flex items-center justify-center shadow-sm">
                <div className="text-[#8571DD]">{stakeholder.icon}</div>
              </div>
              <span className="text-sm font-medium text-[#1A1F2C] whitespace-nowrap">{stakeholder.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Divider delay={1.3} />
      
      {/* Layer 4: Healthcare Impacts */}
      <div className="bg-gradient-to-r from-white to-[#F7F5FF] p-5 rounded-lg border border-[#8571DD]/10">
        <h3 className="text-sm font-semibold text-[#8571DD] mb-4">Healthcare Impacts</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {outcomes.map((outcome, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-3 bg-[#F1F0FB] px-4 py-2.5 rounded-full shadow-sm border border-[#8571DD]/10"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.4 + (index * 0.1) }}
            >
              <div className="text-[#8571DD] flex-shrink-0">{outcome.icon}</div>
              <span className="text-sm font-medium text-[#1A1F2C] whitespace-nowrap">{outcome.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowContent;
