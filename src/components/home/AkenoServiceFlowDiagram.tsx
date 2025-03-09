
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Database, 
  Dna, 
  Stethoscope, 
  Brain, 
  Users, 
  User, 
  UserRound, 
  CalendarCheck, 
  CheckCheck, 
  ListCheck 
} from 'lucide-react';

const DataSource = ({ title, icon, color, delay = 0 }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-16 h-16 rounded-md border border-${color}/30 bg-${color}/10 flex items-center justify-center mb-2`}>
      {icon}
    </div>
    <span className="text-xs font-medium text-center max-w-[80px]">{title}</span>
  </motion.div>
);

const CoreSolution = () => (
  <motion.div 
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="w-28 h-28 rounded-xl border border-health-primary/30 bg-white shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-health-primary/5 to-health-secondary/5 rounded-xl" />
      <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center">
        <Brain size={32} className="text-health-primary" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-health-primary/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-health-secondary/30 rounded-xl -rotate-3 -z-10" />
    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-health-primary whitespace-nowrap">
      AkenoAI Platform
    </div>
  </motion.div>
);

const Stakeholder = ({ title, icon, delay = 0 }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="w-14 h-14 rounded-full bg-white border border-health-secondary/30 shadow-sm flex items-center justify-center mb-1">
      {icon}
    </div>
    <span className="text-xs font-medium text-center max-w-[90px]">{title}</span>
  </motion.div>
);

const Outcome = ({ title, delay = 0 }) => (
  <motion.div 
    className="flex items-center gap-2 bg-health-light/80 px-4 py-2 rounded-full shadow-sm border border-health-primary/20"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <CheckCheck size={16} className="text-health-primary" />
    <span className="text-xs font-medium">{title}</span>
  </motion.div>
);

const Connection = ({ start, end, animated = false, dotted = false, delay = 0 }) => (
  <svg 
    className="absolute pointer-events-none" 
    style={{ left: start.x, top: start.y, width: end.x - start.x, height: end.y - start.y }}
  >
    <motion.path
      d={`M0,0 C${(end.x - start.x) * 0.6},0 ${(end.x - start.x) * 0.4},${end.y - start.y} ${end.x - start.x},${end.y - start.y}`}
      fill="none"
      stroke={animated ? "url(#gradient)" : "#6366f1"}
      strokeWidth="1.5"
      strokeOpacity="0.3"
      strokeDasharray={dotted ? "5,5" : "0"}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay }}
    />
    {animated && (
      <motion.circle 
        r="4" 
        fill="#6366f1"
        initial={{ offset: 0 }}
        animate={{ offset: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path={`M0,0 C${(end.x - start.x) * 0.6},0 ${(end.x - start.x) * 0.4},${end.y - start.y} ${end.x - start.x},${end.y - start.y}`}
        />
      </motion.circle>
    )}
  </svg>
);

const AkenoServiceFlowDiagram = () => {
  return (
    <div className="w-full py-12 px-4 max-w-6xl mx-auto">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-health-primary/10 text-health-primary font-medium mb-4">
          <Users size={16} className="text-health-primary" />
          <span>EMPOWERING ALL HEALTHCARE STAKEHOLDERS</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Integrated AI Healthcare Ecosystem
        </h2>
      </motion.div>

      <div className="relative min-h-[500px] w-full">
        {/* Data Sources - Left Side */}
        <div className="absolute left-0 top-1/4 space-y-16">
          <DataSource 
            title="Electronic Health Records" 
            icon={<FileText size={28} className="text-health-primary" />} 
            color="health-primary"
            delay={0.1}
          />
          <DataSource 
            title="Biomarker Data" 
            icon={<Dna size={28} className="text-health-secondary" />} 
            color="health-secondary"
            delay={0.2}
          />
          <DataSource 
            title="Medical Imaging" 
            icon={<Database size={28} className="text-health-accent" />} 
            color="health-accent"
            delay={0.3}
          />
        </div>

        {/* Core Solution - Center */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CoreSolution />
        </div>

        {/* Stakeholders - Right Center */}
        <div className="absolute right-[35%] top-1/4 flex flex-col space-y-16">
          <Stakeholder 
            title="Clinical Providers" 
            icon={<Stethoscope size={24} className="text-health-primary" />}
            delay={0.5}
          />
          <Stakeholder 
            title="Hospital Systems" 
            icon={<Users size={24} className="text-health-secondary" />}
            delay={0.6}
          />
          <Stakeholder 
            title="Patients" 
            icon={<UserRound size={24} className="text-health-accent" />}
            delay={0.7}
          />
        </div>

        {/* Outcomes - Far Right */}
        <div className="absolute right-0 top-1/4 flex flex-col space-y-16">
          <Outcome title="Precision Diagnostics" delay={0.8} />
          <Outcome title="Resource Optimization" delay={0.9} />
          <Outcome title="Personalized Care" delay={1.0} />
        </div>

        {/* Connections - Data Sources to AI */}
        <Connection 
          start={{ x: 80, y: 40 }} 
          end={{ x: 300, y: 250 }} 
          animated={true}
          delay={0.2}
        />
        <Connection 
          start={{ x: 80, y: 145 }} 
          end={{ x: 300, y: 250 }} 
          animated={true}
          delay={0.3}
        />
        <Connection 
          start={{ x: 80, y: 250 }} 
          end={{ x: 300, y: 250 }} 
          animated={true}
          delay={0.4}
        />

        {/* Connections - AI to Stakeholders */}
        <Connection 
          start={{ x: 350, y: 250 }} 
          end={{ x: 500, y: 40 }} 
          delay={0.5}
        />
        <Connection 
          start={{ x: 350, y: 250 }} 
          end={{ x: 500, y: 145 }} 
          delay={0.6}
        />
        <Connection 
          start={{ x: 350, y: 250 }} 
          end={{ x: 500, y: 250 }} 
          delay={0.7}
        />

        {/* Connections - Stakeholders to Outcomes */}
        <Connection 
          start={{ x: 530, y: 40 }} 
          end={{ x: 650, y: 40 }} 
          delay={0.8}
        />
        <Connection 
          start={{ x: 530, y: 145 }} 
          end={{ x: 650, y: 145 }} 
          delay={0.9}
        />
        <Connection 
          start={{ x: 530, y: 250 }} 
          end={{ x: 650, y: 250 }} 
          delay={1.0}
        />

        {/* SVG Definitions */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AkenoServiceFlowDiagram;
