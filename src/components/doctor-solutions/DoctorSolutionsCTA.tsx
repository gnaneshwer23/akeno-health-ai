
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Brain, Activity, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const DoctorSolutionsCTA = () => {
  const { toast } = useToast();
  
  const handleDemo = () => {
    toast({
      title: "Demo Request",
      description: "Thank you for your interest in our doctor solutions. A team member will contact you shortly.",
    });
  };
  
  const benefits = [
    {
      icon: <Clock size={28} />,
      text: "Save Time"
    },
    {
      icon: <Brain size={28} />,
      text: "Improve Accuracy"
    },
    {
      icon: <Activity size={28} />,
      text: "Enhance Patient Outcomes"
    },
    {
      icon: <Shield size={28} />,
      text: "Real-Time AI Support"
    },
    {
      icon: <BookOpen size={28} />,
      text: "Evidence-Based Practice"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-health-primary to-health-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-pattern-grid opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Get Started in Minutes
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl font-light max-w-3xl mx-auto mb-6 text-blue-100"
        >
          Harness the power of AI to enhance your expertise, not replace it. Join thousands of forward-thinking doctors using AI to revolutionize patient care.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12V24L32 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Onboarding</h3>
            <p className="text-blue-100">
              Onboard via your NHS email or clinical registration in minutes.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20H44V38C44 39.0609 43.5786 40.0783 42.8284 40.8284C42.0783 41.5786 41.0609 42 40 42H8C6.93913 42 5.92172 41.5786 5.17157 40.8284C4.42143 40.0783 4 39.0609 4 38V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 10C4 8.93913 4.42143 7.92172 5.17157 7.17157C5.92172 6.42143 6.93913 6 8 6H40C41.0609 6 42.0783 6.42143 42.8284 7.17157C43.5786 7.92172 44 8.93913 44 10V20H4V10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 30H32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect Your EHR</h3>
            <p className="text-blue-100">
              Connect your hospital's EHR system with our secure integration.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 24C44 35.0457 35.0457 44 24 44M44 24C44 12.9543 35.0457 4 24 4M44 24H36M24 44C12.9543 44 4 35.0457 4 24M24 44V36M4 24C4 12.9543 12.9543 4 24 4M4 24H12M24 4V12M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 20L23 25L20 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Start Exploring</h3>
            <p className="text-blue-100">
              Explore your patient list, clinical tools, and dashboards right away.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
              <div className="text-blue-200 mb-3">{benefit.icon}</div>
              <p className="text-sm">{benefit.text}</p>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button 
            asChild
            className="bg-white text-health-primary hover:bg-blue-50"
            size="lg"
          >
            <Link to="/register">Join Akeno Health for Clinicians <ArrowRight size={16} /></Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
            size="lg"
            onClick={handleDemo}
          >
            Request a Clinical Demo
          </Button>
          
          <Button 
            variant="ghost" 
            asChild
            className="text-white hover:bg-white/10"
            size="lg"
          >
            <Link to="/how-it-works">Explore Medical AI Tools</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorSolutionsCTA;
