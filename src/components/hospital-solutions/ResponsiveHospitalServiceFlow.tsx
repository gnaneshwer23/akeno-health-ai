
import React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import HospitalServiceFlowDiagram from './HospitalServiceFlowDiagram';
import HospitalServiceFlowMobile from './HospitalServiceFlowMobile';

const ResponsiveHospitalServiceFlow: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  return (
    <div className="w-full">
      {isDesktop ? <HospitalServiceFlowDiagram /> : <HospitalServiceFlowMobile />}
    </div>
  );
};

export default ResponsiveHospitalServiceFlow;
