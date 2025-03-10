
import React from 'react';

const FloatingConnections = () => {
  return (
    <>
      {/* Horizontal connections with animated flowing particles */}
      <div className="floating-connection floating-connection-top">
        <div className="connection-line connection-line-horizontal"></div>
        <div className="flow-particle-group">
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
        </div>
      </div>
      
      <div className="floating-connection floating-connection-middle">
        <div className="connection-line connection-line-horizontal"></div>
        <div className="flow-particle-group">
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
        </div>
      </div>
      
      <div className="floating-connection floating-connection-bottom">
        <div className="connection-line connection-line-horizontal"></div>
        <div className="flow-particle-group">
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
        </div>
      </div>
      
      {/* Vertical connection with animated flowing particles */}
      <div className="floating-connection floating-connection-vertical">
        <div className="connection-line connection-line-vertical"></div>
        <div className="flow-particle-group flow-particle-group-vertical">
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
        </div>
      </div>
    </>
  );
};

export default FloatingConnections;
