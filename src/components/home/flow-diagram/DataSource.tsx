
import React from 'react';
import DiagramItem from './common/DiagramItem';
import { DiagramItemProps } from './utils/diagramUtils';

interface DataSourceProps extends DiagramItemProps {}

const DataSource = ({ title, icon, color = "#8571DD", delay = 0, className }: DataSourceProps) => (
  <DiagramItem
    title={title}
    icon={icon}
    color={color}
    delay={delay}
    variant="icon"
    className={className}
    textClassName="max-w-[160px]"
    iconContainerClassName="p-4"
    animationDirection="x"
  />
);

export default DataSource;
