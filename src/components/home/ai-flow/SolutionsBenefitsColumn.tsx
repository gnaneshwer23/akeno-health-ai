
import React from 'react';
import HealthcareSolutionsSection from './HealthcareSolutionsSection';
import BenefitsSection from './BenefitsSection';
import styles from './styles';

const SolutionsBenefitsColumn = () => {
  return (
    <div className={`${styles.column} ${styles.solutionsBenefits}`}>
      <h3 className={styles.columnTitle}>AI Solutions & Benefits</h3>
      <HealthcareSolutionsSection />
      <BenefitsSection />
    </div>
  );
};

export default SolutionsBenefitsColumn;
