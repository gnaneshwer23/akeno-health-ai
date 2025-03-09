
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
    className="relative flex items-center justify-center py-6"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="w-20 h-20 rounded-xl border border-health-primary/30 bg-white shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-health-primary/5 to-health-secondary/5 rounded-xl" />
      <div className="w-12 h-12 rounded-full bg-health-primary/10 flex items-center justify-center">
        <Brain size={24} className="text-health-primary" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-health-primary/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-health-secondary/30 rounded-xl -rotate-3 -z-10" />
    <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 text-sm font-medium text-health-primary">
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
    <div className="w-12 h-12 rounded-full bg-white border border-health-secondary/30 shadow-sm flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium">{title}</span>
  </motion.div>
);

const Outcome = ({ title, icon, delay = 0 }) => (
  <motion.div 
    className="flex items-center gap-2 bg-health-light/80 px-4 py-2 rounded-full shadow-sm border border-health-primary/20"
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
    className="flex justify-center py-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay }}
  >
    <ArrowDown size={20} className="text-health-primary/40" />
  </motion.div>
);

const AkenoServiceFlowMobile = () => {
  return (
    <div className="w-full py-8 px-4">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-health-primary/10 text-health-primary font-medium text-xs mb-3">
          <Users size={14} className="text-health-primary" />
          <span>AI-POWERED HEALTHCARE</span>
        </div>
        <h2 className="text-xl font-bold">
          Empowering All Healthcare Stakeholders
        </h2>
      </motion.div>

      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-health-primary/10">
        <div className="space-y-3 mb-4">
          <h3 className="text-sm font-semibold text-health-primary">Data Sources</h3>
          <DataSource 
            title="Patient Health Records" 
            icon={<FileText size={20} className="text-health-primary" />} 
            color="health-primary"
            delay={0.1}
          />
          <DataSource 
            title="Real-Time Biometrics" 
            icon={<HeartPulse size={20} className="text-health-secondary" />} 
            color="health-secondary"
            delay={0.2}
          />
          <DataSource 
            title="Medical Imaging & Lab Data" 
            icon={<Database size={20} className="text-health-accent" />} 
            color="health-accent"
            delay={0.3}
          />
          <DataSource 
            title="Clinical Trial Data" 
            icon={<TestTube size={20} className="text-purple-500" />} 
            color="purple"
            delay={0.4}
          />
        </div>

        <Divider delay={0.4} />
        <CoreSolution />
        <Divider delay={0.5} />

        <div className="space-y-3 mb-4">
          <h3 className="text-sm font-semibold text-health-primary">Stakeholders</h3>
          <Stakeholder 
            title="Patients" 
            icon={<UserRound size={20} className="text-health-primary" />}
            delay={0.6}
          />
          <Stakeholder 
            title="Doctors & Clinicians" 
            icon={<Stethoscope size={20} className="text-health-secondary" />}
            delay={0.7}
          />
          <Stakeholder 
            title="Hospitals & Providers" 
            icon={<Users size={20} className="text-health-accent" />}
            delay={0.8}
          />
          <Stakeholder 
            title="Biotech & Pharma" 
            icon={<Building size={20} className="text-purple-500" />}
            delay={0.9}
          />
        </div>

        <Divider delay={0.9} />

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-health-primary">AI-Driven Outcomes</h3>
          <div className="flex flex-wrap gap-2">
            <Outcome 
              title="Personalised Care" 
              icon={<CheckCheck size={16} className="text-health-primary" />}
              delay={1.0} 
            />
            <Outcome 
              title="Clinical Decision Support" 
              icon={<Zap size={16} className="text-health-secondary" />}
              delay={1.1} 
            />
            <Outcome 
              title="Resource Optimization" 
              icon={<CheckCheck size={16} className="text-health-accent" />}
              delay={1.2} 
            />
            <Outcome 
              title="Predictive Analytics" 
              icon={<Zap size={16} className="text-purple-500" />}
              delay={1.3} 
            />
            <Outcome 
              title="Real-Time Monitoring" 
              icon={<CheckCheck size={16} className="text-health-primary" />}
              delay={1.4} 
            />
            <Outcome 
              title="Trial Matching" 
              icon={<Zap size={16} className="text-health-secondary" />}
              delay={1.5} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkenoServiceFlowMobile;
