
import React from 'react';
import { motion } from 'framer-motion';

const EnhancedAIFlowDiagram = () => {
  return (
    <div className="container-enhanced-flow py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
        <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">
          Bridging Data, Intelligence, and Care
        </span>
        <span className="block text-health-dark"> for a Healthier Tomorrow</span>
        <div className="h-1 w-36 mx-auto mt-4 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
      </h2>
      
      <div className="flow-diagram-enhanced relative mx-auto max-w-6xl h-[600px] md:h-[700px] rounded-2xl p-6 overflow-hidden">
        <div className="ai-flow-container">
          {/* Left data sources */}
          <div className="ai-flow-left">
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              EHR Integration
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Multi-Omics
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Edge AI & IoT
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Imaging AI
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Behavioral Health
            </motion.div>
          </div>

          {/* Center AI Engine */}
          <motion.div 
            className="ai-flow-center"
            animate={{ 
              boxShadow: ["0 0 20px rgba(0, 255, 255, 0.3)", "0 0 40px rgba(0, 255, 255, 0.5)", "0 0 20px rgba(0, 255, 255, 0.3)"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            Akeno AI
          </motion.div>

          {/* Right outputs */}
          <div className="ai-flow-right">
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Digital Twin AI
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Predictive Dashboard
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Risk Forecasts
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Drug Discovery
            </motion.div>
            <motion.div 
              className="ai-flow-item"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Real-Time Monitoring
            </motion.div>
          </div>

          {/* Connecting Lines - Left */}
          <div className="ai-flow-line left line1"></div>
          <div className="ai-flow-line left line2"></div>
          <div className="ai-flow-line left line3"></div>
          <div className="ai-flow-line left line4"></div>
          <div className="ai-flow-line left line5"></div>

          {/* Connecting Lines - Right */}
          <div className="ai-flow-line right line1"></div>
          <div className="ai-flow-line right line2"></div>
          <div className="ai-flow-line right line3"></div>
          <div className="ai-flow-line right line4"></div>
          <div className="ai-flow-line right line5"></div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAIFlowDiagram;
