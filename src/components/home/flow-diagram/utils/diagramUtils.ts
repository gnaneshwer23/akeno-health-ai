
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
  className?: string;
}

export interface ConnectionProps {
  start: DiagramCoordinates;
  end: DiagramCoordinates;
  animated?: boolean;
  dotted?: boolean;
  color?: string;
  delay?: number;
}

export const DIAGRAM_COLORS = {
  primary: "#8571DD",          // Main purple for primary elements
  secondary: "#F1F0FB",        // Light purple for backgrounds
  border: "rgba(133, 113, 221, 0.2)",  // Border color with transparency
  highlight: "rgba(133, 113, 221, 0.3)", // Highlight color with transparency
  text: "#1A1F2C",             // Text color
  shadow: "rgba(133, 113, 221, 0.1)", // Shadow color
};

// Layout constants for the diagram
export const DIAGRAM_LAYOUT = {
  // Data Sources (Left)
  dataSources: {
    x: 90,
    spacing: 90,
    startY: 90
  },
  // AI Core (Center)
  aiCore: {
    x: 390, 
    y: 160
  },
  // AI Modules
  aiModules: {
    topRow: { y: 100 },
    bottomRow: { y: 220 },
    leftColumn: { x: 345 },
    rightColumn: { x: 435 }
  },
  // Stakeholders (Right-Center)
  stakeholders: {
    x: 470,
    spacing: 80,
    startY: 80
  },
  // Outcomes (Far Right)
  outcomes: {
    x: 650,
    spacing: 65,
    startY: 60
  }
};
