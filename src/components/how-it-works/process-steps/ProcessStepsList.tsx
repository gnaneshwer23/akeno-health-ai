
import React from 'react';
import ProcessStep from '../ProcessStep';
import { processStepsData } from './stepsData';

const ProcessStepsList: React.FC = () => {
  return (
    <>
      {processStepsData.map((step) => (
        <ProcessStep
          key={step.stepNumber}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          icon={step.icon}
          features={step.features}
          outcome={step.outcome}
        />
      ))}
    </>
  );
};

export default ProcessStepsList;
