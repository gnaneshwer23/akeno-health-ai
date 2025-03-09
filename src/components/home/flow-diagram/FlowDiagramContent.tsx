
import React from 'react';
import { 
  FileText, 
  Database, 
  Dna, 
  Stethoscope, 
  UserRound, 
  Building, 
  CheckCheck,
  Zap,
  HeartPulse,
  TestTube
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
      <div className="absolute left-0 top-[60px] flex flex-col space-y-32">
        <DataSource 
          title="Patient Health Records & Biomarkers" 
          icon={<FileText size={32} className="text-[#8571DD]" />} 
          color="[#8571DD]"
          delay={0.1}
        />
        <DataSource 
          title="Real-Time Biometrics & Wearables" 
          icon={<HeartPulse size={32} className="text-[#8571DD]" />} 
          color="[#8571DD]"
          delay={0.2}
        />
        <DataSource 
          title="Medical Imaging & Lab Data" 
          icon={<Database size={32} className="text-[#8571DD]" />} 
          color="[#8571DD]"
          delay={0.3}
        />
      </div>

      {/* Core Solution - Center */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CoreSolution />
      </div>

      {/* Stakeholders - Right Center */}
      <div className="absolute right-[45%] top-[80px] flex flex-col space-y-28">
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
          title="Hospitals & Healthcare Providers" 
          icon={<Building size={28} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.7}
        />
      </div>

      {/* Outcomes - Far Right */}
      <div className="absolute right-0 top-[60px] flex flex-col space-y-[48px]">
        <Outcome 
          title="Personalised Care Plans" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.8} 
        />
        <Outcome 
          title="AI-Enhanced Clinical Decisions" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={0.9} 
        />
        <Outcome 
          title="Optimized Resource Management" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.0} 
        />
        <Outcome 
          title="Accelerated Trial Matching" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.1} 
        />
        <Outcome 
          title="Real-Time Health Monitoring" 
          icon={<CheckCheck size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.2} 
        />
        <Outcome 
          title="Predictive Disease Detection" 
          icon={<Zap size={16} className="text-[#8571DD]" />}
          color="[#8571DD]"
          delay={1.3} 
        />
      </div>

      {/* Connections - Data Sources to AI */}
      <Connection 
        start={{ x: 90, y: 90 }} 
        end={{ x: 340, y: 250 }} 
        animated={false}
        color="#8571DD"
        delay={0.2}
      />
      <Connection 
        start={{ x: 90, y: 220 }} 
        end={{ x: 340, y: 250 }} 
        animated={false}
        color="#8571DD"
        delay={0.3}
      />
      <Connection 
        start={{ x: 90, y: 350 }} 
        end={{ x: 340, y: 250 }} 
        animated={false}
        color="#8571DD"
        delay={0.4}
      />

      {/* Connections - AI to Stakeholders */}
      <Connection 
        start={{ x: 400, y: 250 }} 
        end={{ x: 480, y: 100 }} 
        color="#8571DD"
        delay={0.6}
      />
      <Connection 
        start={{ x: 400, y: 250 }} 
        end={{ x: 480, y: 220 }} 
        color="#8571DD"
        delay={0.7}
      />
      <Connection 
        start={{ x: 400, y: 250 }} 
        end={{ x: 480, y: 340 }} 
        color="#8571DD"
        delay={0.8}
      />

      {/* Connections - Stakeholders to Outcomes */}
      <Connection 
        start={{ x: 510, y: 100 }} 
        end={{ x: 650, y: 70 }} 
        color="#8571DD"
        delay={1.0}
      />
      <Connection 
        start={{ x: 510, y: 100 }} 
        end={{ x: 650, y: 285 }} 
        color="#8571DD"
        delay={1.1}
      />
      <Connection 
        start={{ x: 510, y: 220 }} 
        end={{ x: 650, y: 125 }} 
        color="#8571DD"
        delay={1.2}
      />
      <Connection 
        start={{ x: 510, y: 220 }} 
        end={{ x: 650, y: 340 }} 
        color="#8571DD"
        delay={1.3}
      />
      <Connection 
        start={{ x: 510, y: 340 }} 
        end={{ x: 650, y: 180 }} 
        color="#8571DD"
        delay={1.4}
      />
      <Connection 
        start={{ x: 510, y: 340 }} 
        end={{ x: 650, y: 230 }} 
        color="#8571DD"
        delay={1.5}
      />

      {/* SVG Definitions */}
      <GradientDefinitions />
    </div>
  );
};

export default FlowDiagramContent;
