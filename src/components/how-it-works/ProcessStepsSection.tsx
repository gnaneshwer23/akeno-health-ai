
import React from 'react';
import ProcessStepHeader from './process-steps/ProcessStepHeader';
import ProcessStepsBackground from './process-steps/ProcessStepsBackground';
import ProcessStepsList from './process-steps/ProcessStepsList';

const ProcessStepsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/50 to-white relative">
      <ProcessStepsBackground />
      
      <div className="max-w-6xl mx-auto">
        <ProcessStepHeader />
        <ProcessStepsList />
      </div>
    </section>
  );
};

export default ProcessStepsSection;
