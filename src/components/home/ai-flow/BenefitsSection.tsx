
import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './styles';

const BenefitsSection = () => {
  return (
    <div className={styles.sectionsContainer}>
      <div className={styles.sectionTitle}>System-wide Benefits</div>
      
      <div className={styles.benefit}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div>Real-Time Health AI</div>
        <small className={styles.nodeDescription}>24/7 Monitoring</small>
      </div>
      
      <div className={styles.benefit}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div>Precision Medicine</div>
        <small className={styles.nodeDescription}>Personalized Treatment</small>
      </div>
      
      <div className={styles.benefit}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div>Smart Healthcare</div>
        <small className={styles.nodeDescription}>Automated Workflows</small>
      </div>
      
      <div className={styles.benefit}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div>Accelerated R&D</div>
        <small className={styles.nodeDescription}>Quantum Discovery</small>
      </div>
    </div>
  );
};

export default BenefitsSection;
