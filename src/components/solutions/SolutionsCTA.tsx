
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Stethoscope, Hospital, FlaskConical } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

const SolutionsCTA = () => {
  const stakeholders = [
    {
      icon: <User size={20} />,
      name: "Patients",
      path: "/patient-solutions"
    },
    {
      icon: <Stethoscope size={20} />,
      name: "Doctors",
      path: "/doctor-solutions"
    },
    {
      icon: <Hospital size={20} />,
      name: "Hospitals",
      path: "/hospital-solutions"
    },
    {
      icon: <FlaskConical size={20} />,
      name: "Pharma & Research",
      path: "/biotech-solutions"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-health-primary/20 to-health-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl p-12 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-health-primary/5 to-health-secondary/5 z-0"></div>
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
            >
              Join the Intelligent Healthcare Movement
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
            >
              Akeno Health is more than a platform — it's a revolution. Whether you're a patient, clinician, 
              researcher, or healthcare provider, our solutions are built for you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {stakeholders.map((item, index) => (
                <CustomButton
                  key={index}
                  to={item.path}
                  variant="outline"
                  className="group"
                  icon={item.icon}
                  withArrow
                >
                  {item.name} Solutions
                </CustomButton>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="gap-2 bg-health-primary hover:bg-health-secondary"
                asChild
              >
                <Link to="/contact">
                  Request a Demo <ArrowRight size={16} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2" 
                asChild
              >
                <Link to="/contact">
                  Partner With Us <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
