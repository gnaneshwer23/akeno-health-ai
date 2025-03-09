
import React from 'react';
import DataSourcesColumn from './DataSourcesColumn';
import AIEngineColumn from './AIEngineColumn';
import SolutionsBenefitsColumn from './SolutionsBenefitsColumn';
import ParticleEffect from './ParticleEffect';
import styles from './AIFlowDiagram.module.css';
import { ArrowRight } from 'lucide-react';

const AIFlowDiagram = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Akeno Health AI: Transforming Healthcare with AI-Powered Insights</h2>
      
      <div id="diagram" className={`${styles.diagram} ${styles.threeColumnLayout}`}>
        {/* Left Column: Data Sources (Inputs) */}
        <div style={{ position: 'relative' }}>
          <DataSourcesColumn />
          <div className={`${styles.columnConnector} ${styles.leftConnector}`}>
            <ArrowRight size={20} className={styles.arrowIcon} />
          </div>
        </div>
        
        {/* Middle Column: Akeno AI Engine (Processing Layer) */}
        <div style={{ position: 'relative' }}>
          <AIEngineColumn />
          <div className={`${styles.columnConnector} ${styles.leftConnector}`}>
            <ArrowRight size={20} className={styles.arrowIcon} />
          </div>
        </div>
        
        {/* Right Column: Solutions & Benefits (Outputs) */}
        <SolutionsBenefitsColumn />
      </div>
      
      {/* Add particle effects to all nodes */}
      <ParticleEffect selector=".node" />
    </div>
  );
};

export default AIFlowDiagram;
