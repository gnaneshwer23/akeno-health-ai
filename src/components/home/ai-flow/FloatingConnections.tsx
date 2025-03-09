
import React from 'react';

const FloatingConnections = () => {
  return (
    <>
      {/* Floating connections - horizontal top */}
      <div className="floating-connection floating-connection-top">
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
      </div>
      
      {/* Floating connections - horizontal middle */}
      <div className="floating-connection floating-connection-middle">
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
      </div>
      
      {/* Floating connections - horizontal bottom */}
      <div className="floating-connection floating-connection-bottom">
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
        <div className="flow-particle"></div>
      </div>
      
      {/* Floating connection - vertical */}
      <div className="floating-connection floating-connection-vertical">
        <div className="flow-particle flow-particle-vertical"></div>
        <div className="flow-particle flow-particle-vertical"></div>
        <div className="flow-particle flow-particle-vertical"></div>
      </div>
    </>
  );
};

export default FloatingConnections;
