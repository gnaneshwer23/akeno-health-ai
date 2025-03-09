
import React from 'react';
import Connection from '../Connection';

const ConnectionsSection = () => {
  return (
    <>
      {/* Connections - Data Sources to AI */}
      <Connection 
        start={{ x: 90, y: 90 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.2}
      />
      <Connection 
        start={{ x: 90, y: 180 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.3}
      />
      <Connection 
        start={{ x: 90, y: 270 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.4}
      />
      <Connection 
        start={{ x: 90, y: 360 }} 
        end={{ x: 340, y: 180 }} 
        animated={true}
        color="#8571DD"
        delay={0.5}
      />

      {/* Connections - AI Sub-Modules */}
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 345, y: 100 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.6}
      />
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 435, y: 100 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.7}
      />
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 345, y: 220 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.8}
      />
      <Connection 
        start={{ x: 390, y: 160 }} 
        end={{ x: 435, y: 220 }} 
        animated={false}
        dotted={true}
        color="#8571DD"
        delay={0.9}
      />

      {/* Connections - AI to Stakeholders */}
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 80 }} 
        animated={true}
        color="#8571DD"
        delay={1.0}
      />
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 160 }} 
        animated={true}
        color="#8571DD"
        delay={1.1}
      />
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 240 }} 
        animated={true}
        color="#8571DD"
        delay={1.2}
      />
      <Connection 
        start={{ x: 400, y: 180 }} 
        end={{ x: 470, y: 320 }} 
        animated={true}
        color="#8571DD"
        delay={1.3}
      />

      {/* Connections - Stakeholders to Outcomes */}
      <Connection 
        start={{ x: 510, y: 80 }} 
        end={{ x: 650, y: 60 }} 
        animated={true}
        color="#8571DD"
        delay={1.4}
      />
      <Connection 
        start={{ x: 510, y: 80 }} 
        end={{ x: 650, y: 190 }} 
        animated={true}
        color="#8571DD"
        delay={1.5}
      />
      
      <Connection 
        start={{ x: 510, y: 160 }} 
        end={{ x: 650, y: 125 }} 
        animated={true}
        color="#8571DD"
        delay={1.6}
      />
      <Connection 
        start={{ x: 510, y: 160 }} 
        end={{ x: 650, y: 255 }} 
        animated={true}
        color="#8571DD"
        delay={1.7}
      />
      
      <Connection 
        start={{ x: 510, y: 240 }} 
        end={{ x: 650, y: 320 }} 
        animated={true}
        color="#8571DD"
        delay={1.8}
      />
      <Connection 
        start={{ x: 510, y: 240 }} 
        end={{ x: 650, y: 385 }} 
        animated={true}
        color="#8571DD"
        delay={1.9}
      />
      
      <Connection 
        start={{ x: 510, y: 320 }} 
        end={{ x: 650, y: 450 }} 
        animated={true}
        color="#8571DD"
        delay={2.0}
      />
      <Connection 
        start={{ x: 510, y: 320 }} 
        end={{ x: 650, y: 515 }} 
        animated={true}
        color="#8571DD"
        delay={2.1}
      />
    </>
  );
};

export default ConnectionsSection;
