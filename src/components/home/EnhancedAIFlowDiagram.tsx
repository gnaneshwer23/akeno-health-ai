
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedAIFlowDiagram = () => {
  return (
    <div className="container-enhanced-flow py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
        <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">
          Bridging Data, Intelligence, and Care
        </span>
        <span className="block text-health-dark"> for a Healthier Tomorrow</span>
        <div className="h-1 w-36 mx-auto mt-4 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
      </h2>
      
      <div className="flow-diagram-enhanced relative mx-auto max-w-5xl h-[500px] md:h-[600px] bg-gradient-to-br from-[#001F3F] to-[#0074D9] rounded-2xl p-6 overflow-hidden shadow-2xl">
        {/* Central AI Engine Node */}
        <motion.div 
          className="center-node absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-[radial-gradient(circle,#2ECCFA_0%,#0074D9_80%)] flex items-center justify-center text-white font-bold text-center p-3 shadow-[0_0_30px_rgba(0,255,255,0.4)] z-10"
          animate={{ 
            boxShadow: ["0 0 20px #00c3ff", "0 0 50px #00e1ff", "0 0 20px #00c3ff"] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          Akeno AI Engine
        </motion.div>
        
        {/* Data Sources - Top */}
        <DataSourceNode className="left-[10%] top-[10%]" title="Wearables" subtitle="HRV, ECG, Glucose" />
        <DataSourceNode className="left-[30%] top-[5%]" title="EHRs" subtitle="Clinical Notes, Diagnoses" />
        <DataSourceNode className="right-[30%] top-[5%]" title="Genomics" subtitle="DNA, RNA, PRS" />
        <DataSourceNode className="right-[10%] top-[10%]" title="Lifestyle" subtitle="Sleep, Mood, Diet" />
        
        {/* Outputs - Bottom */}
        <OutputNode className="left-[25%] bottom-[10%]" title="Personalised Care" subtitle="Digital Twin" />
        <OutputNode className="right-[25%] bottom-[10%]" title="Clinical Insights" subtitle="Real-time AI Alerts" />
        
        {/* Connecting Arrows with Animation */}
        <ConnectingArrows />
        
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[2px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>
    </div>
  );
};

// Data Source Node component
const DataSourceNode = ({ className, title, subtitle }: { className: string, title: string, subtitle: string }) => {
  return (
    <motion.div 
      className={`source absolute w-32 md:w-40 p-3 bg-white/10 rounded-lg border border-white/30 text-center backdrop-blur-md z-20 ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeInOut",
        // Add slight randomness to the animation timing
        delay: Math.random() 
      }}
    >
      <div className="text-white font-medium">{title}</div>
      <div className="text-blue-100 text-xs">{subtitle}</div>
    </motion.div>
  );
};

// Output Node component
const OutputNode = ({ className, title, subtitle }: { className: string, title: string, subtitle: string }) => {
  return (
    <motion.div 
      className={`output absolute w-32 md:w-40 p-3 bg-white/10 rounded-lg border border-white/30 text-center backdrop-blur-md z-20 ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        duration: 6,
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeInOut",
        // Add slight randomness to the animation timing
        delay: Math.random() + 1
      }}
    >
      <div className="text-white font-medium">{title}</div>
      <div className="text-blue-100 text-xs">{subtitle}</div>
    </motion.div>
  );
};

// Connecting Arrows component
const ConnectingArrows = () => {
  return (
    <>
      {/* Top left to center */}
      <ConnectingLine from="left-[15%] top-[20%]" to="left-[40%] top-[40%]" />
      {/* Top center to center */}
      <ConnectingLine from="left-[35%] top-[15%]" to="left-[45%] top-[35%]" />
      {/* Top right to center */}
      <ConnectingLine from="right-[35%] top-[15%]" to="right-[45%] top-[35%]" />
      {/* Far right to center */}
      <ConnectingLine from="right-[15%] top-[20%]" to="right-[40%] top-[40%]" />
      
      {/* Center to bottom left */}
      <ConnectingLine from="left-[45%] bottom-[35%]" to="left-[30%] bottom-[20%]" />
      {/* Center to bottom right */}
      <ConnectingLine from="right-[45%] bottom-[35%]" to="right-[30%] bottom-[20%]" />
    </>
  );
};

// Animated connecting line with data flow effect
const ConnectingLine = ({ from, to }: { from: string, to: string }) => {
  // Using div lines instead of SVG for simplicity
  return (
    <div className={`absolute ${from} h-[100px] w-[2px] bg-gradient-to-b from-cyan-300/80 to-blue-300/80 z-10 origin-top`}>
      {/* Animated data particles flowing along the line */}
      <motion.div 
        className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] left-[-3px]"
        animate={{ 
          y: [0, 100],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
        }}
      />
      
      {/* Arrow head */}
      <div className="absolute bottom-0 left-[-4px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-cyan-300"></div>
    </div>
  );
};

export default EnhancedAIFlowDiagram;
