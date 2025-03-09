
import React from 'react';
import styles from './AIFlowDiagram.module.css';

const AIEngineColumn = () => {
  return (
    <div className={`${styles.column} ${styles.aiEngineColumn}`}>
      <h3 className={styles.columnTitle}>Processing Layer</h3>
      
      <div className={styles.aiContainer}>
        <div className={styles.aiTitle}>
          <span className={styles.aiTitleIcon}>🧠</span>
          <span className={styles.text}>Akeno AI Engine</span>
        </div>
        
        <div className={styles.aiEngine}>
          <div className={styles.icon}>🔮</div>
          <div>Predictive Analytics</div>
          <small className={styles.nodeDescription}>Risk Assessment & Forecasting</small>
        </div>
        
        <div className={styles.aiEngine}>
          <div className={styles.icon}>⚕️</div>
          <div>Diagnostic Intelligence</div>
          <small className={styles.nodeDescription}>Medical Imaging & Pathology</small>
        </div>
        
        <div className={styles.aiEngine}>
          <div className={styles.icon}>📊</div>
          <div>Clinical Decision Support</div>
          <small className={styles.nodeDescription}>Treatment Optimization & NLP</small>
        </div>
      </div>
    </div>
  );
};

export default AIEngineColumn;
