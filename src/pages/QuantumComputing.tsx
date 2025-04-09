
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuantumComputing = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the solutions page with the quantum-computing anchor
    navigate('/solutions#quantum-computing');
  }, [navigate]);
  
  // This is just a fallback in case the navigation doesn't work
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Solutions page...</p>
    </div>
  );
};

export default QuantumComputing;
