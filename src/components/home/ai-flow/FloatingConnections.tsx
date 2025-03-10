
import React from 'react';

const FloatingConnections = () => {
  return (
    <>
      {/* Horizontal connections with animated lines */}
      <div className="floating-connection floating-connection-top">
        <div className="connection-line connection-line-horizontal"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
      </div>
      
      <div className="floating-connection floating-connection-middle">
        <div className="connection-line connection-line-horizontal"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
      </div>
      
      <div className="floating-connection floating-connection-bottom">
        <div className="connection-line connection-line-horizontal"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
      </div>
      
      {/* Vertical connection with animated line */}
      <div className="floating-connection floating-connection-vertical">
        <div className="connection-line connection-line-vertical"></div>
        <div className="flow-particle flow-particle-vertical"></div>
        <div className="flow-particle flow-particle-vertical"></div>
        <div className="flow-particle flow-particle-vertical"></div>
      </div>
    </>
  );
};

export default FloatingConnections;
