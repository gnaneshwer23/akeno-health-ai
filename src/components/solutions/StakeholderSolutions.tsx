
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { User, Stethoscope, Hospital, FlaskConical, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StakeholderSolutions = () => {
  const [activeTab, setActiveTab] = useState("patients");

  const stakeholders = {
    patients: {
      icon: <User size={40} />,
      title: "For Patients",
      description: "Akeno empowers individuals with personalized health insights, early warning systems, and seamless communication with healthcare providers.",
      features: [
        "Continuous health monitoring via wearables and IoT devices",
        "AI-powered early detection of health risks and diseases",
        "Personalized health recommendations and insights",
        "Secure access to and control over your health data",
        "Seamless communication with healthcare providers"
      ],
      benefits: "Take control of your health journey with AI-powered early detection and personalized recommendations.",
      linkText: "Explore Patient Solutions",
      linkTo: "/patient-solutions"
    },
    doctors: {
      icon: <Stethoscope size={40} />,
      title: "For Doctors",
      description: "Akeno provides clinicians with AI-powered diagnostic assistance, real-time patient insights, and streamlined workflows.",
      features: [
        "AI-powered diagnostic assistance and clinical decision support",
        "Real-time patient monitoring and alerts",
        "Digital twin simulations for treatment planning",
        "Streamlined documentation and administrative workflows",
        "Evidence-based treatment recommendations"
      ],
      benefits: "Enhance your clinical practice with AI-powered insights, saving time and improving patient outcomes.",
      linkText: "Explore Doctor Solutions",
      linkTo: "/doctor-solutions"
    },
    hospitals: {
      icon: <Hospital size={40} />,
      title: "For Hospitals",
      description: "Akeno helps healthcare institutions optimize operations, reduce costs, and improve patient outcomes.",
      features: [
        "AI-powered resource allocation and staff scheduling",
        "Predictive analytics for patient flow and bed management",
        "Early warning system for high-risk patients",
        "Streamlined operations and cost optimization",
        "Enhanced patient experience and satisfaction"
      ],
      benefits: "Optimize operations, reduce costs, and improve patient outcomes with AI-powered healthcare solutions.",
      linkText: "Explore Hospital Solutions",
      linkTo: "/hospital-solutions"
    },
    biopharma: {
      icon: <FlaskConical size={40} />,
      title: "For Pharma & Research",
      description: "Akeno accelerates drug discovery, optimizes clinical trials, and enables precision medicine research.",
      features: [
        "AI-powered drug discovery and development",
        "Clinical trial optimization and patient matching",
        "Real-world evidence generation and analysis",
        "Precision medicine research and development",
        "Secure data collaboration with healthcare providers"
      ],
      benefits: "Accelerate innovation, optimize research, and bring life-saving treatments to market faster.",
      linkText: "Explore Biotech Solutions",
      linkTo: "/biotech-solutions"
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-health-primary/5 to-health-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
          >
            Solutions for Every Healthcare Stakeholder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our platform is designed to meet the unique needs of patients, doctors, 
            hospitals, and pharmaceutical researchers, creating a connected healthcare ecosystem.
          </motion.p>
        </div>
        
        <Tabs defaultValue="patients" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto p-1 mb-8 bg-muted/20">
            {Object.entries(stakeholders).map(([key, value]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className={`flex items-center gap-2 py-3 px-4 text-base data-[state=active]:shadow-lg ${
                  activeTab === key ? 'bg-white text-health-primary' : 'bg-transparent'
                }`}
              >
                {React.cloneElement(value.icon as React.ReactElement, { 
                  size: 20,
                  className: activeTab === key ? 'text-health-primary' : 'text-muted-foreground'
                })}
                <span>{value.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(stakeholders).map(([key, value]) => (
            <TabsContent 
              key={key} 
              value={key}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 bg-white rounded-xl p-8 shadow-lg border border-health-primary/10"
              >
                <div>
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center mb-6">
                    {React.cloneElement(value.icon as React.ReactElement, { className: 'text-health-primary' })}
                  </div>
                  <h3 className="text-2xl font-bold text-health-dark mb-4">{value.title}</h3>
                  <p className="text-muted-foreground mb-6">{value.description}</p>
                  <div className="p-4 bg-health-primary/5 rounded-lg mb-6">
                    <h4 className="font-semibold text-health-dark mb-2">Key Benefits:</h4>
                    <p className="text-health-primary">{value.benefits}</p>
                  </div>
                  <Button asChild className="gap-2">
                    <Link to={value.linkTo}>
                      {value.linkText} <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-health-light/10 rounded-xl p-6">
                  <h4 className="font-semibold text-health-dark mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {value.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-start gap-2"
                      >
                        <div className="min-w-5 mt-1 rounded-full bg-health-primary/20 p-0.5 flex items-center justify-center">
                          <ArrowRight size={12} className="text-health-primary" />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default StakeholderSolutions;
