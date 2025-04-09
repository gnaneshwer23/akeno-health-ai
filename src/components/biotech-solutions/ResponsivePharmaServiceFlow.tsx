
import React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import PharmaServiceFlowDiagram from './PharmaServiceFlowDiagram';
import PharmaServiceFlowMobile from './PharmaServiceFlowMobile';

const ResponsivePharmaServiceFlow: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  return (
    <div className="w-full">
      {isDesktop ? <PharmaServiceFlowDiagram /> : <PharmaServiceFlowMobile />}
    </div>
  );
};

export default ResponsivePharmaServiceFlow;
