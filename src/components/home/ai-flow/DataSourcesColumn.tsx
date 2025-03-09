
import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './AIFlowDiagram.module.css';

const DataSourcesColumn = () => {
  return (
    <div className={`${styles.column} ${styles.dataSources}`}>
      <h3 className={styles.columnTitle}>Data Sources</h3>
      
      <div className={styles.dataSource}>
        <div className={styles.icon}>⌚</div>
        <div>Edge AI & IoT</div>
        <small className={styles.nodeDescription}>Smartwatches, ECG, Glucose</small>
        <div className={styles.connector}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
      </div>
      
      <div className={styles.dataSource}>
        <div className={styles.icon}>📋</div>
        <div>EHR Integration</div>
        <small className={styles.nodeDescription}>FHIR, DICOM, OpenEHR</small>
        <div className={styles.connector}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
      </div>
      
      <div className={styles.dataSource}>
        <div className={styles.icon}>🧬</div>
        <div>Multi-Omics</div>
        <small className={styles.nodeDescription}>NGS, Proteomics, PRS</small>
        <div className={styles.connector}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
      </div>
      
      <div className={styles.dataSource}>
        <div className={styles.icon}>🔬</div>
        <div>AI-Enhanced Imaging</div>
        <small className={styles.nodeDescription}>Radiology AI, DICOM</small>
        <div className={styles.connector}>
          <ArrowRight className={styles.arrowIcon} size={14} />
        </div>
      </div>
    </div>
  );
};

export default DataSourcesColumn;
