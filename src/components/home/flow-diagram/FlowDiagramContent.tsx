import React from 'react';
import { 
  FileText, 
  Database, 
  Heart, 
  Stethoscope, 
  UserRound, 
  Building, 
  CheckCheck,
  Zap,
  HeartPulse,
  Brain,
  FlaskConical,
  Microscope,
  Tablet,
  Activity
} from 'lucide-react';

import DataSource from './DataSource';
import CoreSolution from './CoreSolution';
import Stakeholder from './Stakeholder';
import Outcome from './Outcome';
import Connection from './Connection';
import GradientDefinitions from './GradientDefinitions';

const FlowDiagramContent = () => {
  return (
    <div className="relative min-h-[580px] w-full">
      {/* Data Sources - Left Side */}
      <div className="absolute left-0 top-[40px] flex flex-col space-y-24">
        <DataSource 
          title="Patient Health Records" 
          icon={<FileText size={32} className="text-[#8571DD]" />} 
          color="[#8571DD]"
          delay={0.1}
        />
        <DataSource 
          title="Real-Time Wearables" 
          icon={<HeartPulse size={32} className="text-[#8571DD]" />} 
          color="[#8571DD]"
          delay={0.2}
        />
        <DataSource 
          title="Medical Imaging" 
          icon={<Microscope size={32} className="text-[#8571DD]" />} 
          color="[#8571DD]"
          delay={0.3}
        />
        <DataSource 
          title="Genomic Data" 
          icon={<Database size={32} className="text-[#8571DD]" />} 
          color="[#8571DD]"
          delay={0.4}
        />
      </div>

      {/* AI Modules - Center */}
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <CoreSolution />
      </div>
      
      {/* AI Sub-modules - Around Core */}
      <div className="absolute left-[40%] top-[18%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <Activity size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Predictive AI</span>
      </div>
      
      <div className="absolute left-[56%] top-[18%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <Brain size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Diagnostic AI</span>
      </div>
      
      <div className="absolute left-[40%] top-[42%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <FlaskConical size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Research AI</span>
      </div>
      
      <div className="absolute left-[56%] top-[42%]">
        <div className="w-16 h-16 rounded-full bg-[#F1F0FB] shadow-sm border border-[#8571DD]/20 flex items-center justify-center">
          <Tablet size={24} className="text-[#8571DD]" />
        </div>
        <span className="text-xs font-medium mt-1 block text-center">Clinical AI</span>
      </div>

      {/* Stakeholders - Right Center */}
      <div className="absolute right-[42%] top-[50px] flex flex-col space-y-24">
        <Stakeholder 
          title="Patients" 
          icon={<UserRound size={28} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.5}
        />
        <Stakeholder 
          title="Doctors & Clinicians" 
          icon={<Stethoscope size={28} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.6}
        />
        <Stakeholder 
          title="Hospitals & Healthcare" 
          icon={<Building size={28} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.7}
        />
        <Stakeholder 
          title="Pharmaceutical & Research" 
          icon={<Heart size={28} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.8}
        />
      </div>

      {/* Outcomes - Far Right */}
      <div className="absolute right-0 top-[40px] flex flex-col space-y-[42px]">
        <Outcome 
          title="Personalized Care Plans" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.9} 
        />
        <Outcome 
          title="AI-Enhanced Diagnosis" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.0} 
        />
        <Outcome 
          title="Predictive Disease Detection" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.1} 
        />
        <Outcome 
          title="Resource Optimization" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.2} 
        />
        <Outcome 
          title="Accelerated Drug Discovery" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.3} 
        />
        <Outcome 
          title="Real-Time Monitoring" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.4} 
        />
        <Outcome 
          title="Clinical Trial Matching" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.5} 
        />
        <Outcome 
          title="Advanced Treatment Insights" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.6} 
        />
      </div>

      {/* Connections - Data Sources to AI */}
      <Connection 
        start={{ x: 90, y: 90 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.2}
      />
      <Connection 
        start={{ x: 90, y: 180 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.3}
      />
      <Connection 
        start={{ x: 90, y: 270 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.4}
      />
      <Connection 
        start={{ x: 90, y: 360 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.5}
      />

      {/* Connections - AI Sub-Modules */}
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 345, y: 100 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.6}
      />
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 435, y: 100 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.7}
      />
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 345, y: 220 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.8}
      />
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 435, y: 220 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.9}
      />

      {/* Connections - AI to Stakeholders */}
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 80 }} 
        animated={true}
        color="#8571DD"
        delay={1.0}
      />
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 160 }} 
        animated={true}
        color="#8571DD"
        delay={1.1}
      />
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 240 }} 
        animated={true}
        color="#8571DD"
        delay={1.2}
      />
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 320 }} 
        animated={true}
        color="#8571DD"
        delay={1.3}
      />

      {/* Connections - Stakeholders to Outcomes */}
      <Connection 
        start={{ x: 510, y: 80 }} 
        end={{ x: 650, y: 60 }} 
        animated={true}
        color="#8571DD"
        delay={1.4}
      />
      <Connection 
        start={{ x: 510, y: 80 }} 
        end={{ x: 650, y: 190 }} 
        animated={true}
        color="#8571DD"
        delay={1.5}
      />
      
      <Connection 
        start={{ x: 510, y: 160 }} 
        end={{ x: 650, y: 125 }} 
        animated={true}
        color="#8571DD"
        delay={1.6}
      />
      <Connection 
        start={{ x: 510, y: 160 }} 
        end={{ x: 650, y: 255 }} 
        animated={true}
        color="#8571DD"
        delay={1.7}
      />
      
      <Connection 
        start={{ x: 510, y: 240 }} 
        end={{ x: 650, y: 320 }} 
        animated={true}
        color="#8571DD"
        delay={1.8}
      />
      <Connection 
        start={{ x: 510, y: 240 }} 
        end={{ x: 650, y: 385 }} 
        animated={true}
        color="#8571DD"
        delay={1.9}
      />
      
      <Connection 
        start={{ x: 510, y: 320 }} 
        end={{ x: 650, y: 450 }} 
        animated={true}
        color="#8571DD"
        delay={2.0}
      />
      <Connection 
        start={{ x: 510, y: 320 }} 
        end={{ x: 650, y: 515 }} 
        animated={true}
        color="#8571DD"
        delay={2.1}
      />

      {/* SVG Definitions */}
      <GradientDefinitions />
    </div>
  );
};

export default FlowDiagramContent;
