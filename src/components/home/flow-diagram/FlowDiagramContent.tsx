
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
      <GradientDefinitions />
    </div>
  );
};

export default FlowDiagramContent;
