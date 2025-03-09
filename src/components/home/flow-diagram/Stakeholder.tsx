
import React from 'react';
import DiagramItem from './common/DiagramItem';
import { DiagramItemProps } from './utils/diagramUtils';

const Stakeholder = ({ title, icon, color, delay = 0 }: DiagramItemProps) => (
  <DiagramItem
    title={title}
    icon={icon}
    color={color}
    delay={delay}
    variant="avatar"
  />
);

export default Stakeholder;
