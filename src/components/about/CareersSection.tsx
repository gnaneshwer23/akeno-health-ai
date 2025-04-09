
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Heart, ArrowRight, Target, Award, Star } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { CTACardsSection } from './cta/CTACardsSection';

export const CareersSection = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" id="careers">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-health-dark">
            Careers & Culture
          </h2>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-full text-health-primary font-medium">
              <Target size={18} /> Join a Mission-Driven, Multidisciplinary Team
            </div>
          </div>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            Whether you're a clinician, data scientist, engineer, or policy expert, 
            <span className="font-semibold text-health-primary"> your skills could help change global healthcare</span>. 
            We believe in:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <CultureValueCard
            icon={<Brain size={24} className="text-health-primary" />}
            title="Lifelong learning and AI upskilling"
            description="We invest in continuous education and provide resources to keep our team at the cutting edge of healthcare AI."
            delay={0.1}
          />
          
          <CultureValueCard
            icon={<Globe size={24} className="text-health-primary" />}
            title="Remote-first and inclusive hiring"
            description="We believe talent has no borders. Our diverse team works across time zones with flexibility and autonomy."
            delay={0.3}
          />
          
          <CultureValueCard
            icon={<Heart size={24} className="text-health-primary" />}
            title="Purpose over perks"
            description="We're driven by our mission to transform healthcare, creating meaningful impact in patients' lives worldwide."
            delay={0.5}
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-14">
          <div className="flex justify-between flex-wrap gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Award className="w-8 h-8 text-indigo-500" />
              <div>
                <h4 className="font-semibold">Competitive Compensation</h4>
                <p className="text-sm text-gray-600">Fair pay + equity options</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Star className="w-8 h-8 text-indigo-500" />
              <div>
                <h4 className="font-semibold">Professional Growth</h4>
                <p className="text-sm text-gray-600">Mentorship + career pathing</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <Brain className="w-8 h-8 text-indigo-500" />
              <div>
                <h4 className="font-semibold">Cutting-edge Tech</h4>
                <p className="text-sm text-gray-600">Latest AI + Healthcare tools</p>
              </div>
            </motion.div>
          </div>
        </div>

        <CTACardsSection />
        
        <div className="flex justify-center mt-12">
          <CustomButton
            size="lg"
            variant="outline"
            to="/contact"
            className="group"
          >
            <span>Get Involved as a Collaborator</span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </CustomButton>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10 text-health-dark/50 text-sm"
        >
          <p>Explore Careers → Coming Soon</p>
        </motion.div>
      </div>
    </section>
  );
};

interface CultureValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const CultureValueCard: React.FC<CultureValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-health-primary/10 to-health-secondary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-health-dark font-medium mb-2">{title}</h4>
      <p className="text-health-dark/80 text-sm">{description}</p>
    </motion.div>
  );
};
