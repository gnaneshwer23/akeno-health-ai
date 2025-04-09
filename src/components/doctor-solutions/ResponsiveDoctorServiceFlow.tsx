
import React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import DoctorServiceFlowDiagram from './DoctorServiceFlowDiagram';
import DoctorServiceFlowMobile from './DoctorServiceFlowMobile';

const ResponsiveDoctorServiceFlow: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  return (
    <div className="w-full">
      {isDesktop ? <DoctorServiceFlowDiagram /> : <DoctorServiceFlowMobile />}
    </div>
  );
};

export default ResponsiveDoctorServiceFlow;
