
import React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import AkenoServiceFlowDiagram from './AkenoServiceFlowDiagram';
import AkenoServiceFlowMobile from './AkenoServiceFlowMobile';

const ResponsiveServiceFlow: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  return (
    <div className="w-full">
      {isDesktop ? <AkenoServiceFlowDiagram /> : <AkenoServiceFlowMobile />}
    </div>
  );
};

export default ResponsiveServiceFlow;
