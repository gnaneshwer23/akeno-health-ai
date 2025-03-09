
import React from 'react';
import DiagramItem from './common/DiagramItem';
import { DiagramItemProps } from './utils/diagramUtils';

interface StakeholderProps extends DiagramItemProps {}

const Stakeholder = ({ title, icon, color = "#8571DD", delay = 0, className }: StakeholderProps) => (
  <DiagramItem
    title={title}
    icon={icon}
    color={color}
    delay={delay}
    variant="avatar"
    className={className}
    animationDirection="x"
  />
);

export default Stakeholder;
