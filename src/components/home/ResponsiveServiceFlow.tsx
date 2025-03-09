
import React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import AkenoServiceFlowDiagram from './AkenoServiceFlowDiagram';
import AkenoServiceFlowMobile from './AkenoServiceFlowMobile';

const ResponsiveServiceFlow = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  return isDesktop ? <AkenoServiceFlowDiagram /> : <AkenoServiceFlowMobile />;
};

export default ResponsiveServiceFlow;
