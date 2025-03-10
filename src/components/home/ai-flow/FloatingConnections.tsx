
import React from 'react';

const FloatingConnections = () => {
  return (
    <>
      {/* Top horizontal connection */}
      <div className="floating-connection floating-connection-top">
        <div className="flow-particle-group flow-particle-group-horizontal">
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
        </div>
      </div>
      
      {/* Middle horizontal connection */}
      <div className="floating-connection floating-connection-middle">
        <div className="flow-particle-group flow-particle-group-horizontal">
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
        </div>
      </div>
      
      {/* Bottom horizontal connection */}
      <div className="floating-connection floating-connection-bottom">
        <div className="flow-particle-group flow-particle-group-horizontal">
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
          <div className="flow-particle flow-particle-horizontal"></div>
        </div>
      </div>
      
      {/* Main vertical connection */}
      <div className="floating-connection floating-connection-vertical">
        <div className="connection-line connection-line-vertical"></div>
        <div className="flow-particle-group flow-particle-group-vertical">
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
        </div>
      </div>

      {/* Left vertical connection */}
      <div className="floating-connection floating-connection-vertical floating-connection-left">
        <div className="connection-line connection-line-vertical"></div>
        <div className="flow-particle-group flow-particle-group-vertical">
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
        </div>
      </div>

      {/* Right vertical connection */}
      <div className="floating-connection floating-connection-vertical floating-connection-right">
        <div className="connection-line connection-line-vertical"></div>
        <div className="flow-particle-group flow-particle-group-vertical">
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
          <div className="flow-particle flow-particle-vertical"></div>
        </div>
      </div>
    </>
  );
};

export default FloatingConnections;
