
import React from 'react';
import { Atom, Zap, BrainCircuit, Dna, MicroscopeIcon, Network } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5
    }
  })
};

export const QuantumIntro = () => {
  return (
    <section className="mb-16 py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6
              }
            }
          }}
        >
          <h2 className="text-3xl font-bold text-health-dark mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">What is Quantum Computing & Why It Matters in Healthcare?</h2>
          
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden border border-purple-100 hover:shadow-xl transition-all">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-100 rounded-full opacity-40"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full opacity-40"></div>
              
              <div className="absolute top-1/3 right-10 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-1/4 left-10 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <p className="text-lg text-health-dark/80 mb-6 leading-relaxed">
                  Traditional computing struggles with ultra-complex biological and chemical simulations. Quantum computing overcomes these limitations by leveraging quantum bits (qubits), which can exist in multiple states simultaneously, performing calculations at speeds unimaginable for classical computers.
                </p>
                
                <div className="flex justify-center my-8">
                  <div className="relative w-60 h-60">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-44 w-44 rounded-full bg-purple-100/80 animate-pulse" style={{ animationDuration: '8s' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-32 w-32 rounded-full bg-purple-200/80 animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full bg-purple-300/80 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Atom size={72} className="text-purple-600 animate-spin" style={{ animationDuration: '20s' }}/>
                    </div>
                    {/* Electron orbits */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-60 w-60 rounded-full border-2 border-dashed border-purple-300/60 animate-spin" style={{ animationDuration: '15s' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-60 w-36 rounded-full border-2 border-dashed border-blue-300/60 animate-spin" style={{ animationDuration: '12s', transform: 'rotate(60deg)' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-60 w-48 rounded-full border-2 border-dashed border-indigo-300/40 animate-spin" style={{ animationDuration: '20s', transform: 'rotate(120deg)' }}></div>
                    </div>
                    
                    {/* Particles */}
                    <div className="absolute top-5 left-1/2 h-3 w-3 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute bottom-10 right-10 h-2 w-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-5 h-2 w-2 bg-indigo-500 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                <p className="text-lg text-health-dark/80 font-medium">
                  Akeno Health AI harnesses quantum algorithms to bring forth an era of 
                  <span className="text-purple-600 font-semibold"> hyper-efficient, data-driven precision medicine.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div custom={0} variants={cardVariants}>
            <Card className="bg-gradient-to-br from-white to-purple-50 border-none hover:shadow-lg transition-shadow h-full group">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Atom size={28} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-health-dark mb-3">Exponential Computing Power</h3>
                <p className="text-health-dark/70">
                  Solves complex biological simulations in seconds, which would take supercomputers millions of years to complete, dramatically accelerating medical research.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div custom={1} variants={cardVariants}>
            <Card className="bg-gradient-to-br from-white to-blue-50 border-none hover:shadow-lg transition-shadow h-full group">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BrainCircuit size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-health-dark mb-3">AI Integration</h3>
                <p className="text-health-dark/70">
                  Combining quantum computing with AI to analyze complex medical data, identify patterns, and make predictions with unprecedented accuracy and speed.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div custom={2} variants={cardVariants}>
            <Card className="bg-gradient-to-br from-white to-green-50 border-none hover:shadow-lg transition-shadow h-full group">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Dna size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-health-dark mb-3">Healthcare Transformation</h3>
                <p className="text-health-dark/70">
                  Redefining healthcare through quantum-powered precision medicine, drastically improving patient outcomes through drug discovery, predictive disease modeling, and secure data exchange.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
