
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Activity, ArrowRight, Calendar, FileText, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { CustomButton } from '@/components/ui/custom-button';

const CallToActionSection = () => {
  const handleButtonClick = (actionType: string) => {
    toast({
      title: `${actionType} Initiated`,
      description: "Thank you for your interest. We will process your request shortly.",
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium gap-2 border border-health-primary/10 shadow-sm">
            <HeartPulse size={16} className="text-health-primary" />
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Ready to Begin?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Start Your Health Transformation Today
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Join thousands of patients and healthcare providers already using Akeno Health AI to revolutionize their approach to wellness and precision medicine.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <CustomButton
              variant="primary"
              size="lg"
              onClick={() => handleButtonClick("Free Trial")}
              className="group w-64 sm:w-auto min-w-[220px]"
              rightIcon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
            >
              <Activity size={18} className="mr-1" />
              Start Your Free Trial
            </CustomButton>
            
            <CustomButton
              variant="outline"
              size="lg"
              to="/contact"
              onClick={() => handleButtonClick("Demo Request")}
              className="group w-64 sm:w-auto min-w-[220px]"
            >
              <Calendar size={18} className="mr-1" />
              Schedule a Demo
            </CustomButton>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-health-dark">For Patients</h3>
            <p className="text-muted-foreground mb-6">
              Gain valuable insights from your health data to prevent illness and optimize wellbeing with personalized recommendations.
            </p>
            <CustomButton
              variant="link"
              to="/patient-solutions"
              onClick={() => handleButtonClick("Patient Solutions")}
              className="group text-indigo-600"
              rightIcon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
            >
              Learn More
            </CustomButton>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <HeartPulse size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-health-dark">For Doctors</h3>
            <p className="text-muted-foreground mb-6">
              Enhance your clinical decision making with AI-powered diagnostics, treatment recommendations, and patient monitoring.
            </p>
            <CustomButton
              variant="link"
              to="/doctor-solutions"
              onClick={() => handleButtonClick("Doctor Solutions")}
              className="group text-purple-600"
              rightIcon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
            >
              Learn More
            </CustomButton>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-12 w-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-health-dark">For Hospitals</h3>
            <p className="text-muted-foreground mb-6">
              Optimize resource allocation, reduce readmissions, and improve patient outcomes with predictive analytics and AI systems.
            </p>
            <CustomButton
              variant="link"
              to="/hospital-solutions"
              onClick={() => handleButtonClick("Hospital Solutions")}
              className="group text-cyan-600"
              rightIcon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
            >
              Learn More
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
