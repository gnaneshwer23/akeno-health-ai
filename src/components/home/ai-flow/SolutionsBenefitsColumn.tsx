
import React from 'react';
import HealthcareSolutionsSection from './HealthcareSolutionsSection';
import BenefitsSection from './BenefitsSection';

const SolutionsBenefitsColumn = () => {
  return (
    <div className="column solutions-benefits">
      <h3 className="column-title">AI Solutions & Benefits</h3>
      <HealthcareSolutionsSection />
      <BenefitsSection />
    </div>
  );
};

export default SolutionsBenefitsColumn;
