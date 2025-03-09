
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Database, 
  Dna, 
  Stethoscope, 
  Brain, 
  Users, 
  UserRound, 
  Building, 
  ArrowDown, 
  CheckCheck, 
  Zap,
  HeartPulse,
  TestTube
} from 'lucide-react';

const DataSource = ({ title, icon, color, delay = 0 }) => (
  <motion.div 
    className="flex items-center gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-12 h-12 rounded-md border border-${color}/30 bg-${color}/10 flex items-center justify-center`}>
      {icon}
    </div>
    <span className="text-sm font-medium">{title}</span>
  </motion.div>
);

const CoreSolution = () => (
  <motion.div 
    className="relative flex items-center justify-center py-8"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="w-24 h-24 rounded-xl border border-health-primary/30 bg-white shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/10 to-[#7E69AB]/10 rounded-xl" />
      <div className="w-16 h-16 rounded-full bg-[#9b87f5]/15 flex items-center justify-center">
        <Brain size={28} className="text-[#7E69AB]" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-[#9b87f5]/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-[#7E69AB]/30 rounded-xl -rotate-3 -z-10" />
    <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-[#7E69AB]">
      Akeno AI Platform
    </div>
  </motion.div>
);

const Stakeholder = ({ title, icon, delay = 0 }) => (
  <motion.div 
    className="flex items-center gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="w-12 h-12 rounded-full bg-white border border-[#6E59A5]/30 shadow-sm flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium">{title}</span>
  </motion.div>
);

const Outcome = ({ title, icon, color = "health-primary", delay = 0 }) => (
  <motion.div 
    className={`flex items-center gap-2 bg-[#F1F0FB] px-4 py-2 rounded-full shadow-sm border border-${color}/20`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {icon}
    <span className="text-xs font-medium">{title}</span>
  </motion.div>
);

const Divider = ({ delay = 0 }) => (
  <motion.div 
    className="flex justify-center py-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay }}
  >
    <ArrowDown size={20} className="text-[#8B5CF6]/50" />
  </motion.div>
);

const AkenoServiceFlowMobile = () => {
  return (
    <div className="w-full py-10 px-4 bg-gradient-to-b from-white to-[#F1F0FB]/30">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9b87f5]/15 text-[#7E69AB] font-medium text-xs mb-3">
          <Users size={14} className="text-[#6E59A5]" />
          <span>AI-POWERED HEALTHCARE</span>
        </div>
        <h2 className="text-xl font-bold text-[#1A1F2C]">
          Empowering All Healthcare Stakeholders
        </h2>
      </motion.div>

      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-[#D6BCFA]/20">
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-semibold text-[#7E69AB] mb-3">Data Sources</h3>
          <DataSource 
            title="Patient Health Records" 
            icon={<FileText size={22} className="text-[#9b87f5]" />} 
            color="[#9b87f5]"
            delay={0.1}
          />
          <DataSource 
            title="Real-Time Biometrics" 
            icon={<HeartPulse size={22} className="text-[#7E69AB]" />} 
            color="[#7E69AB]"
            delay={0.2}
          />
          <DataSource 
            title="Medical Imaging & Lab Data" 
            icon={<Database size={22} className="text-[#6E59A5]" />} 
            color="[#6E59A5]"
            delay={0.3}
          />
          <DataSource 
            title="Clinical Trial Data" 
            icon={<TestTube size={22} className="text-[#8B5CF6]" />} 
            color="[#8B5CF6]"
            delay={0.4}
          />
        </div>

        <Divider delay={0.4} />
        <CoreSolution />
        <Divider delay={0.5} />

        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-semibold text-[#7E69AB] mb-3">Stakeholders</h3>
          <Stakeholder 
            title="Patients" 
            icon={<UserRound size={22} className="text-[#9b87f5]" />}
            delay={0.6}
          />
          <Stakeholder 
            title="Doctors & Clinicians" 
            icon={<Stethoscope size={22} className="text-[#7E69AB]" />}
            delay={0.7}
          />
          <Stakeholder 
            title="Hospitals & Providers" 
            icon={<Building size={22} className="text-[#6E59A5]" />}
            delay={0.8}
          />
          <Stakeholder 
            title="Biotech & Pharma" 
            icon={<Dna size={22} className="text-[#8B5CF6]" />}
            delay={0.9}
          />
        </div>

        <Divider delay={0.9} />

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-[#7E69AB] mb-3">AI-Driven Outcomes</h3>
          <div className="flex flex-wrap gap-2.5">
            <Outcome 
              title="Personalised Care" 
              icon={<CheckCheck size={16} className="text-[#9b87f5]" />}
              color="[#9b87f5]"
              delay={1.0} 
            />
            <Outcome 
              title="Clinical Decision Support" 
              icon={<Zap size={16} className="text-[#7E69AB]" />}
              color="[#7E69AB]"
              delay={1.1} 
            />
            <Outcome 
              title="Resource Optimization" 
              icon={<CheckCheck size={16} className="text-[#6E59A5]" />}
              color="[#6E59A5]"
              delay={1.2} 
            />
            <Outcome 
              title="Predictive Analytics" 
              icon={<Zap size={16} className="text-[#8B5CF6]" />}
              color="[#8B5CF6]"
              delay={1.3} 
            />
            <Outcome 
              title="Real-Time Monitoring" 
              icon={<CheckCheck size={16} className="text-[#9b87f5]" />}
              color="[#9b87f5]"
              delay={1.4} 
            />
            <Outcome 
              title="Trial Matching" 
              icon={<Zap size={16} className="text-[#7E69AB]" />}
              color="[#7E69AB]"
              delay={1.5} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkenoServiceFlowMobile;
