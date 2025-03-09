
// Common utilities for diagram components

export interface DiagramCoordinates {
  x: number;
  y: number;
}

export interface DiagramItemProps {
  title: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
}

export const DIAGRAM_COLORS = {
  primary: "8571DD",
  secondary: "F1F0FB",
  border: "8571DD/20",
  highlight: "8571DD/30",
  text: "1A1F2C",
};
