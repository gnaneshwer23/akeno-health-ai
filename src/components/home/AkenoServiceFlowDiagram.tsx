
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
  ArrowRight,
  CheckCheck,
  Zap,
  HeartPulse,
  TestTube
} from 'lucide-react';

const DataSource = ({ title, icon, color, delay = 0 }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-18 h-18 rounded-md border border-${color}/30 bg-${color}/10 flex items-center justify-center mb-3 p-4`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-center max-w-[120px]">{title}</span>
  </motion.div>
);

const CoreSolution = () => (
  <motion.div 
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <div className="w-32 h-32 rounded-xl border border-[#9b87f5]/30 bg-white shadow-md flex items-center justify-center relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/10 to-[#7E69AB]/10 rounded-xl" />
      <div className="w-20 h-20 rounded-full bg-[#9b87f5]/15 flex items-center justify-center">
        <Brain size={36} className="text-[#7E69AB]" />
      </div>
    </div>
    <div className="absolute inset-0 border border-dashed border-[#9b87f5]/30 rounded-xl rotate-6 -z-10" />
    <div className="absolute inset-0 border border-dashed border-[#7E69AB]/30 rounded-xl -rotate-3 -z-10" />
    <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#7E69AB] whitespace-nowrap">
      Akeno AI Platform
    </div>
  </motion.div>
);

const Stakeholder = ({ title, icon, color, delay = 0 }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-16 h-16 rounded-full bg-white border border-${color}/30 shadow-sm flex items-center justify-center mb-2`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-center max-w-[100px]">{title}</span>
  </motion.div>
);

const Outcome = ({ title, icon, color, delay = 0 }) => (
  <motion.div 
    className={`flex items-center gap-2 bg-[#F1F0FB] px-4 py-2.5 rounded-full shadow-sm border border-${color}/20`}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`text-${color}`}>{icon}</div>
    <span className="text-xs font-medium">{title}</span>
  </motion.div>
);

const Connection = ({ start, end, animated = false, dotted = false, color = "#9b87f5", delay = 0 }) => (
  <svg 
    className="absolute pointer-events-none" 
    style={{ left: start.x, top: start.y, width: end.x - start.x, height: end.y - start.y }}
  >
    <motion.path
      d={`M0,0 C${(end.x - start.x) * 0.6},0 ${(end.x - start.x) * 0.4},${end.y - start.y} ${end.x - start.x},${end.y - start.y}`}
      fill="none"
      stroke={animated ? `url(#gradient-${color})` : color}
      strokeWidth="1.5"
      strokeOpacity="0.4"
      strokeDasharray={dotted ? "5,5" : "0"}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay }}
    />
    {animated && (
      <motion.circle 
        r="4" 
        fill={color}
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
    <div className="w-full py-16 px-4 max-w-6xl mx-auto bg-gradient-to-b from-white to-[#F1F0FB]/30">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9b87f5]/15 text-[#7E69AB] font-medium mb-4">
          <Users size={16} className="text-[#6E59A5]" />
          <span>AI-POWERED PATIENT-CENTRIC HEALTHCARE ECOSYSTEM</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C]">
          Empowering All Healthcare Stakeholders with AI
        </h2>
      </motion.div>

      <div className="relative min-h-[520px] w-full">
        {/* Data Sources - Left Side */}
        <div className="absolute left-0 top-[60px] flex flex-col space-y-20">
          <DataSource 
            title="Patient Health Records & Biomarkers" 
            icon={<FileText size={32} className="text-[#9b87f5]" />} 
            color="[#9b87f5]"
            delay={0.1}
          />
          <DataSource 
            title="Real-Time Biometrics & Wearables" 
            icon={<HeartPulse size={32} className="text-[#7E69AB]" />} 
            color="[#7E69AB]"
            delay={0.2}
          />
          <DataSource 
            title="Medical Imaging & Lab Data" 
            icon={<Database size={32} className="text-[#6E59A5]" />} 
            color="[#6E59A5]"
            delay={0.3}
          />
          <DataSource 
            title="Clinical Trial & Research Data" 
            icon={<TestTube size={32} className="text-[#8B5CF6]" />} 
            color="[#8B5CF6]"
            delay={0.4}
          />
        </div>

        {/* Core Solution - Center */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CoreSolution />
        </div>

        {/* Stakeholders - Right Center */}
        <div className="absolute right-[35%] top-[60px] flex flex-col space-y-20">
          <Stakeholder 
            title="Patients" 
            icon={<UserRound size={28} className="text-[#9b87f5]" />}
            color="[#9b87f5]"
            delay={0.5}
          />
          <Stakeholder 
            title="Doctors & Clinicians" 
            icon={<Stethoscope size={28} className="text-[#7E69AB]" />}
            color="[#7E69AB]"
            delay={0.6}
          />
          <Stakeholder 
            title="Hospitals & Healthcare Providers" 
            icon={<Building size={28} className="text-[#6E59A5]" />}
            color="[#6E59A5]"
            delay={0.7}
          />
          <Stakeholder 
            title="Biotech & Pharma" 
            icon={<Dna size={28} className="text-[#8B5CF6]" />}
            color="[#8B5CF6]"
            delay={0.8}
          />
        </div>

        {/* Outcomes - Far Right */}
        <div className="absolute right-0 top-[60px] flex flex-col space-y-[42px]">
          <Outcome 
            title="Personalised Care Plans" 
            icon={<CheckCheck size={16} className="text-[#9b87f5]" />}
            color="[#9b87f5]"
            delay={0.8} 
          />
          <Outcome 
            title="AI-Enhanced Clinical Decisions" 
            icon={<Zap size={16} className="text-[#7E69AB]" />}
            color="[#7E69AB]"
            delay={0.9} 
          />
          <Outcome 
            title="Optimized Resource Management" 
            icon={<CheckCheck size={16} className="text-[#6E59A5]" />}
            color="[#6E59A5]"
            delay={1.0} 
          />
          <Outcome 
            title="Accelerated Trial Matching" 
            icon={<Zap size={16} className="text-[#8B5CF6]" />}
            color="[#8B5CF6]"
            delay={1.1} 
          />
          <Outcome 
            title="Real-Time Health Monitoring" 
            icon={<CheckCheck size={16} className="text-[#9b87f5]" />}
            color="[#9b87f5]"
            delay={1.2} 
          />
          <Outcome 
            title="Predictive Disease Detection" 
            icon={<Zap size={16} className="text-[#7E69AB]" />}
            color="[#7E69AB]"
            delay={1.3} 
          />
        </div>

        {/* Connections - Data Sources to AI */}
        <Connection 
          start={{ x: 90, y: 90 }} 
          end={{ x: 300, y: 250 }} 
          animated={true}
          color="#9b87f5"
          delay={0.2}
        />
        <Connection 
          start={{ x: 90, y: 190 }} 
          end={{ x: 300, y: 250 }} 
          animated={true}
          color="#7E69AB"
          delay={0.3}
        />
        <Connection 
          start={{ x: 90, y: 290 }} 
          end={{ x: 300, y: 250 }} 
          animated={true}
          color="#6E59A5"
          delay={0.4}
        />
        <Connection 
          start={{ x: 90, y: 390 }} 
          end={{ x: 300, y: 250 }} 
          animated={true}
          color="#8B5CF6"
          delay={0.5}
        />

        {/* Connections - AI to Stakeholders */}
        <Connection 
          start={{ x: 360, y: 250 }} 
          end={{ x: 500, y: 90 }} 
          color="#9b87f5"
          delay={0.6}
        />
        <Connection 
          start={{ x: 360, y: 250 }} 
          end={{ x: 500, y: 190 }} 
          color="#7E69AB"
          delay={0.7}
        />
        <Connection 
          start={{ x: 360, y: 250 }} 
          end={{ x: 500, y: 290 }} 
          color="#6E59A5"
          delay={0.8}
        />
        <Connection 
          start={{ x: 360, y: 250 }} 
          end={{ x: 500, y: 390 }} 
          color="#8B5CF6"
          delay={0.9}
        />

        {/* Connections - Stakeholders to Outcomes */}
        <Connection 
          start={{ x: 540, y: 90 }} 
          end={{ x: 650, y: 70 }} 
          color="#9b87f5"
          delay={1.0}
        />
        <Connection 
          start={{ x: 540, y: 90 }} 
          end={{ x: 650, y: 285 }} 
          color="#9b87f5"
          delay={1.1}
        />
        <Connection 
          start={{ x: 540, y: 190 }} 
          end={{ x: 650, y: 125 }} 
          color="#7E69AB"
          delay={1.2}
        />
        <Connection 
          start={{ x: 540, y: 190 }} 
          end={{ x: 650, y: 340 }} 
          color="#7E69AB"
          delay={1.3}
        />
        <Connection 
          start={{ x: 540, y: 290 }} 
          end={{ x: 650, y: 180 }} 
          color="#6E59A5"
          delay={1.4}
        />
        <Connection 
          start={{ x: 540, y: 390 }} 
          end={{ x: 650, y: 230 }} 
          color="#8B5CF6"
          delay={1.5}
        />

        {/* SVG Definitions */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient-#9b87f5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient-#7E69AB" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7E69AB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7E69AB" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient-#6E59A5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6E59A5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6E59A5" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient-#8B5CF6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AkenoServiceFlowDiagram;
