
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUsBackground: React.FC = () => {
  return (
    <>
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCA2MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-10 -z-10"></div>
      
      {/* Large gradient blobs */}
      <motion.div 
        className="fixed top-0 right-0 w-2/3 h-screen bg-gradient-to-b from-health-primary/15 via-health-secondary/10 to-transparent blur-3xl -z-10"
        animate={{
          opacity: [0.7, 0.9, 0.7],
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      ></motion.div>
      <motion.div 
        className="fixed bottom-0 left-0 w-2/3 h-screen bg-gradient-to-t from-health-secondary/15 via-health-accent/10 to-transparent blur-3xl -z-10"
        animate={{
          opacity: [0.7, 0.9, 0.7],
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      ></motion.div>
      <motion.div 
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-health-accent/15 blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
    </>
  );
};
