
import React from 'react';
import DiagramItem from './common/DiagramItem';
import { DiagramItemProps } from './utils/diagramUtils';

interface OutcomeProps extends DiagramItemProps {}

const Outcome = ({ title, icon, color = "#8571DD", delay = 0, className }: OutcomeProps) => (
  <DiagramItem
    title={title}
    icon={icon}
    color={color}
    delay={delay}
    variant="outcome"
    className={`bg-[#F1F0FB] px-5 py-3.5 rounded-full shadow-sm border border-[${color}]/10 ${className || ''}`}
    animationDirection="x"
  />
);

export default Outcome;
