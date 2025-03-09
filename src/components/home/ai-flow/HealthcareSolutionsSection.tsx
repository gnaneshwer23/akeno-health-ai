
import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './AIFlowDiagram.module.css';

const HealthcareSolutionsSection = () => {
  return (
    <div className={styles.sectionsContainer}>
      <div className={styles.sectionTitle}>Healthcare AI Solutions</div>
      
      <div className={styles.solution}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div className={styles.icon}>👤</div>
        <div>Virtual Health AI</div>
        <small className={styles.nodeDescription}>LLMs, Personalized Care</small>
      </div>
      
      <div className={styles.solution}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div className={styles.icon}>👨‍⚕️</div>
        <div>Digital Twin AI</div>
        <small className={styles.nodeDescription}>Treatment Simulation</small>
      </div>
      
      <div className={styles.solution}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div className={styles.icon}>🏥</div>
        <div>Workflow AI</div>
        <small className={styles.nodeDescription}>Resource Optimization</small>
      </div>
      
      <div className={styles.solution}>
        <div className={styles.connectorIn}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
        <div className={styles.icon}>💊</div>
        <div>Drug Discovery AI</div>
        <small className={styles.nodeDescription}>Quantum Computing</small>
      </div>
    </div>
  );
};

export default HealthcareSolutionsSection;
