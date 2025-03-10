
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { VisionMission } from '@/components/about/VisionMission';
import { AboutTeam } from '@/components/about/AboutTeam';
import { CompanyStory } from '@/components/about/CompanyStory';
import { AboutCTA } from '@/components/about/AboutCTA';
import { motion } from 'framer-motion';

const AboutUs = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Change page title
    document.title = 'About Us - Akeno Health AI';
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced background elements */}
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
      
      {/* Animated floating elements */}
      <div className="fixed top-[10%] left-[10%] w-20 h-20 rounded-xl bg-health-primary/10 animate-float -z-10" style={{animationDelay: '0.3s'}}></div>
      <div className="fixed top-[30%] right-[15%] w-24 h-24 rounded-full bg-health-secondary/10 animate-float -z-10" style={{animationDelay: '1.5s'}}></div>
      <div className="fixed top-[70%] left-[20%] w-16 h-16 rounded-2xl bg-health-accent/10 animate-float -z-10" style={{animationDelay: '2.8s'}}></div>
      <div className="fixed top-[45%] right-[8%] w-12 h-12 rounded-lg bg-purple-400/10 animate-float -z-10" style={{animationDelay: '4.2s'}}></div>
      <div className="fixed top-[85%] right-[25%] w-14 h-14 rounded-full bg-blue-400/10 animate-float -z-10" style={{animationDelay: '3.7s'}}></div>
      
      {/* Connected dots */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-20">
        <defs>
          <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="var(--health-primary)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--health-primary)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--health-primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--health-secondary)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={`${20 + i * 15}%`}
            cy={`${30 + i * 8}%`}
            r="2"
            fill="url(#dotGradient)"
            animate={{
              opacity: [0.7, 0.9, 0.7],
              cx: [`${20 + i * 15}%`, `${22 + i * 15}%`, `${20 + i * 15}%`],
              cy: [`${30 + i * 8}%`, `${32 + i * 8}%`, `${30 + i * 8}%`],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut"
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${20 + i * 15}%`}
            y1={`${30 + i * 8}%`}
            x2={`${20 + (i+1) * 15}%`}
            y2={`${30 + (i+1) * 8}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      
      <Navbar />
      
      <main className="flex-grow z-10">
        <AboutHero />
        
        {/* Enhanced colorful divider with animation */}
        <motion.div 
          className="relative py-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-6 gap-1 h-2">
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${
                    index === 0 ? 'from-health-primary to-health-primary/80' :
                    index === 1 ? 'from-health-secondary to-health-secondary/80' :
                    index === 2 ? 'from-health-accent to-health-accent/80' :
                    index === 3 ? 'from-purple-500 to-purple-400' :
                    index === 4 ? 'from-blue-500 to-blue-400' :
                    'from-green-500 to-green-400'
                  } rounded-full`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ scaleY: 1.5 }}
                ></motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <VisionMission />
        
        <div className="relative">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-48 h-48 overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-health-primary/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"
              animate={{
                opacity: [0.6, 0.8, 0.6],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            ></motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 overflow-hidden">
            <motion.div 
              className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-health-secondary/20 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"
              animate={{
                opacity: [0.6, 0.8, 0.6],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            ></motion.div>
          </div>
          
          <CompanyStory />
        </div>
        
        <div className="relative bg-gradient-to-b from-white via-health-light/30 to-white py-10">
          {/* Side accent bars with glow effect */}
          <motion.div 
            className="absolute left-0 top-1/4 bottom-1/4 w-3 bg-gradient-to-b from-health-primary/60 to-health-secondary/60 rounded-r-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            animate={{
              opacity: [0.8, 1, 0.8],
              height: ['50%', '55%', '50%'],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          ></motion.div>
          <motion.div 
            className="absolute right-0 top-1/3 bottom-1/3 w-3 bg-gradient-to-t from-health-primary/60 to-health-secondary/60 rounded-l-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            animate={{
              opacity: [0.8, 1, 0.8],
              height: ['33.33%', '38%', '33.33%'],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          ></motion.div>
          
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-dashed border-health-primary/20 animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border-2 border-dashed border-health-secondary/20 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
          
          <AboutTeam />
        </div>
        
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
