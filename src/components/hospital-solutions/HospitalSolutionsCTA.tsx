
import React from 'react';
import { Button } from '@/components/ui/button';
import { Hospital, ArrowRight, Phone, Mail, Zap, FileText, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';

const HospitalSolutionsCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-health-primary/10 to-health-secondary/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white text-health-primary font-medium mb-6"
              >
                <Hospital size={18} className="mr-2" />
                <span>Let's Transform Care Together</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
              >
                Experience the Power of AI-Driven Healthcare Transformation
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Join the future of AI-powered healthcare and transform your hospital operations with cutting-edge technology that improves patient outcomes and reduces costs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <CTAFeature
                    icon={<Zap size={16} />}
                    text="Improve patient outcomes with AI-powered diagnostics and monitoring"
                  />
                  <CTAFeature
                    icon={<Zap size={16} />}
                    text="Reduce hospital costs through automation and predictive resource management"
                  />
                  <CTAFeature
                    icon={<Zap size={16} />}
                    text="Enhance operational efficiency with seamless AI-driven workflow integration"
                  />
                  <CTAFeature
                    icon={<Zap size={16} />}
                    text="Provide cutting-edge AI-assisted clinical decision support to doctors"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <CustomButton
                  variant="primary"
                  size="lg"
                  to="/contact"
                  withArrow
                  icon={<Calendar className="mr-2 h-4 w-4" />}
                >
                  Book a Live Demo
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="lg"
                  to="/contact"
                  icon={<FileText className="mr-2 h-4 w-4" />}
                >
                  Download ROI Brochure
                </CustomButton>
              </motion.div>
            </div>
            
            <div className="p-8 md:p-12 bg-white">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-health-dark mb-6"
              >
                Speak to an AI Healthcare Expert
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 mb-8"
              >
                <FormField
                  label="Hospital/Healthcare Organization"
                  id="hospital-name"
                  placeholder="Enter your organization name"
                />
                
                <FormField
                  label="Your Name"
                  id="contact-name"
                  placeholder="Enter your full name"
                />
                
                <FormField
                  label="Email Address"
                  id="contact-email"
                  type="email"
                  placeholder="Enter your email address"
                />
                
                <FormField
                  label="Phone Number"
                  id="contact-phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-health-primary focus:border-health-primary"
                    placeholder="Tell us about your hospital's needs"
                  ></textarea>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="w-full gap-2">
                  Submit Request <ArrowRight size={18} />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a href="#" className="flex items-center gap-2 text-health-primary hover:text-health-secondary">
                  <Phone size={18} />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-health-primary hover:text-health-secondary">
                  <Mail size={18} />
                  <span>hospital@akeno-health.com</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Join leading hospitals and healthcare providers already using Akeno Health AI
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {['NHS Trust', 'University Hospital', 'Memorial Health', 'Regional Medical'].map((partner, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 opacity-70">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTAFeature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 flex-shrink-0">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
        {icon}
      </div>
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

const FormField = ({ 
  label, 
  id, 
  type = "text", 
  placeholder 
}: { 
  label: string; 
  id: string; 
  type?: string; 
  placeholder: string 
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-health-primary focus:border-health-primary"
      placeholder={placeholder}
    />
  </div>
);

export default HospitalSolutionsCTA;
