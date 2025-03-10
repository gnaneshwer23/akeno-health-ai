
import React from 'react';

const FloatingConnections = () => {
  return (
    <>
      {/* Static horizontal connections */}
      <div className="floating-connection floating-connection-top">
        <div className="flow-particle static"></div>
        <div className="flow-particle static"></div>
        <div className="flow-particle static"></div>
      </div>
      
      <div className="floating-connection floating-connection-middle">
        <div className="flow-particle static"></div>
        <div className="flow-particle static"></div>
        <div className="flow-particle static"></div>
      </div>
      
      <div className="floating-connection floating-connection-bottom">
        <div className="flow-particle static"></div>
        <div className="flow-particle static"></div>
        <div className="flow-particle static"></div>
      </div>
      
      {/* Static vertical connection */}
      <div className="floating-connection floating-connection-vertical">
        <div className="flow-particle flow-particle-vertical static"></div>
        <div className="flow-particle flow-particle-vertical static"></div>
        <div className="flow-particle flow-particle-vertical static"></div>
      </div>
    </>
  );
};

export default FloatingConnections;
