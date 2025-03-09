
import React from 'react';
import Connection from '../Connection';
import { DIAGRAM_LAYOUT } from '../utils/diagramUtils';

const ConnectionsSection = () => {
  const { dataSources, aiCore, aiModules, stakeholders, outcomes } = DIAGRAM_LAYOUT;
  
  return (
    <>
      {/* Connections - Data Sources to AI */}
      <Connection 
        start={{ x: dataSources.x, y: dataSources.startY }} 
        end={{ x: aiCore.x, y: aiCore.y }} 
        animated={true}
        delay={0.2}
      />
      <Connection 
        start={{ x: dataSources.x, y: dataSources.startY + dataSources.spacing }} 
        end={{ x: aiCore.x, y: aiCore.y }} 
        animated={true}
        delay={0.3}
      />
      <Connection 
        start={{ x: dataSources.x, y: dataSources.startY + (dataSources.spacing * 2) }} 
        end={{ x: aiCore.x, y: aiCore.y }} 
        animated={true}
        delay={0.4}
      />
      <Connection 
        start={{ x: dataSources.x, y: dataSources.startY + (dataSources.spacing * 3) }} 
        end={{ x: aiCore.x, y: aiCore.y }} 
        animated={true}
        delay={0.5}
      />

      {/* Connections - AI Sub-Modules */}
      <Connection 
        start={{ x: aiCore.x, y: aiCore.y - 20 }} 
        end={{ x: aiModules.leftColumn.x, y: aiModules.topRow.y }} 
        animated={false}
        dotted={true}
        delay={0.6}
      />
      <Connection 
        start={{ x: aiCore.x, y: aiCore.y - 20 }} 
        end={{ x: aiModules.rightColumn.x, y: aiModules.topRow.y }} 
        animated={false}
        dotted={true}
        delay={0.7}
      />
      <Connection 
        start={{ x: aiCore.x, y: aiCore.y + 20 }} 
        end={{ x: aiModules.leftColumn.x, y: aiModules.bottomRow.y }} 
        animated={false}
        dotted={true}
        delay={0.8}
      />
      <Connection 
        start={{ x: aiCore.x, y: aiCore.y + 20 }} 
        end={{ x: aiModules.rightColumn.x, y: aiModules.bottomRow.y }} 
        animated={false}
        dotted={true}
        delay={0.9}
      />

      {/* Connections - AI to Stakeholders */}
      <Connection 
        start={{ x: aiCore.x + 10, y: aiCore.y }} 
        end={{ x: stakeholders.x, y: stakeholders.startY }} 
        animated={true}
        delay={1.0}
      />
      <Connection 
        start={{ x: aiCore.x + 10, y: aiCore.y }} 
        end={{ x: stakeholders.x, y: stakeholders.startY + stakeholders.spacing }} 
        animated={true}
        delay={1.1}
      />
      <Connection 
        start={{ x: aiCore.x + 10, y: aiCore.y }} 
        end={{ x: stakeholders.x, y: stakeholders.startY + (stakeholders.spacing * 2) }} 
        animated={true}
        delay={1.2}
      />
      <Connection 
        start={{ x: aiCore.x + 10, y: aiCore.y }} 
        end={{ x: stakeholders.x, y: stakeholders.startY + (stakeholders.spacing * 3) }} 
        animated={true}
        delay={1.3}
      />

      {/* Connections - Stakeholders to Outcomes */}
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY }} 
        end={{ x: outcomes.x, y: outcomes.startY }} 
        animated={true}
        delay={1.4}
      />
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY }} 
        end={{ x: outcomes.x, y: outcomes.startY + (outcomes.spacing * 2) }} 
        animated={true}
        delay={1.5}
      />
      
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY + stakeholders.spacing }} 
        end={{ x: outcomes.x, y: outcomes.startY + outcomes.spacing }} 
        animated={true}
        delay={1.6}
      />
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY + stakeholders.spacing }} 
        end={{ x: outcomes.x, y: outcomes.startY + (outcomes.spacing * 3) }} 
        animated={true}
        delay={1.7}
      />
      
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY + (stakeholders.spacing * 2) }} 
        end={{ x: outcomes.x, y: outcomes.startY + (outcomes.spacing * 4) }} 
        animated={true}
        delay={1.8}
      />
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY + (stakeholders.spacing * 2) }} 
        end={{ x: outcomes.x, y: outcomes.startY + (outcomes.spacing * 5) }} 
        animated={true}
        delay={1.9}
      />
      
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY + (stakeholders.spacing * 3) }} 
        end={{ x: outcomes.x, y: outcomes.startY + (outcomes.spacing * 6) }} 
        animated={true}
        delay={2.0}
      />
      <Connection 
        start={{ x: stakeholders.x + 40, y: stakeholders.startY + (stakeholders.spacing * 3) }} 
        end={{ x: outcomes.x, y: outcomes.startY + (outcomes.spacing * 7) }} 
        animated={true}
        delay={2.1}
      />
    </>
  );
};

export default ConnectionsSection;
