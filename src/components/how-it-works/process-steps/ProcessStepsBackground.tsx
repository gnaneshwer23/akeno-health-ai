
import React from 'react';

const ProcessStepsBackground: React.FC = () => {
  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-50 to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl -z-10"></div>
    </>
  );
};

export default ProcessStepsBackground;
