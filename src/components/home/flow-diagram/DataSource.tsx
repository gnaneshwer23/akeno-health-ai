
import React from 'react';
import DiagramItem from './common/DiagramItem';
import { DiagramItemProps } from './utils/diagramUtils';

const DataSource = ({ title, icon, color, delay = 0 }: DiagramItemProps) => (
  <DiagramItem
    title={title}
    icon={icon}
    color={color}
    delay={delay}
    variant="icon"
    textClassName="max-w-[160px]"
    iconContainerClassName="p-4"
  />
);

export default DataSource;
