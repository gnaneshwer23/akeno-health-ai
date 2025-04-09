
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Activity, Brain, Smartphone, Shield, Users, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SolutionsOverview = () => {
  const mainSolutions = [
    {
      icon: <Activity size={24} />,
      title: "AI-Powered Health Monitoring",
      description: "Continuous tracking of biometrics, genetics, and lifestyle factors to provide actionable health insights and proactive healthcare recommendations."
    },
    {
      icon: <Brain size={24} />,
      title: "Digital Twin Technology",
      description: "AI-generated virtual replicas that simulate how biological changes, diseases, and treatments interact over time for personalized medicine."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Health App",
      description: "Real-time health monitoring, customized wellness insights, and AI-driven treatment recommendations in the palm of your hand."
    }
  ];

  const additionalBenefits = [
    {
      icon: <Shield size={24} className="text-blue-600" />,
      title: "Privacy & Security",
      description: "Your health data is protected with hospital-grade encryption and advanced security protocols that exceed HIPAA requirements."
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Connected Care Teams",
      description: "Seamlessly share your health data with healthcare providers for coordinated care and improved treatment outcomes."
    },
    {
      icon: <HeartPulse size={24} className="text-blue-600" />,
      title: "Preventive Health Focus",
      description: "Our AI identifies health risks early, enabling preventive interventions that can delay or prevent disease progression."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 font-medium">
            Our Solutions for Patients
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Comprehensive Patient Solutions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform integrates AI-powered diagnostics, continuous health monitoring, and predictive analytics to create a smarter, more personalized healthcare experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                index={index}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-health-dark mb-4">Additional Benefits</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to patient care extends beyond our core solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-health-dark mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Link to="/register">
                Try Akeno Health Today
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SolutionsOverview;
