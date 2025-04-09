
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Heart, ArrowRight, Target, Award, Star, Users, BarChart } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

export const CareersSection = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" id="careers">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/20 to-indigo-50/20 -z-10"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iIzY0NzVmZiIvPjwvc3ZnPg==')]"></div>
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-14"
        >
          <h3 className="text-xl font-semibold text-center mb-8 text-health-dark">What We Offer</h3>
          
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
        </motion.div>
        
        {/* Key stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          <div className="bg-white rounded-lg p-6 shadow-sm border border-indigo-50 hover:shadow-md transition-shadow text-center">
            <BarChart size={28} className="mx-auto mb-3 text-purple-500" />
            <div className="text-3xl font-bold text-health-primary mb-1">35+</div>
            <p className="text-health-dark/70">Countries with team members</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-indigo-50 hover:shadow-md transition-shadow text-center">
            <Users size={28} className="mx-auto mb-3 text-indigo-500" />
            <div className="text-3xl font-bold text-health-primary mb-1">40%</div>
            <p className="text-health-dark/70">Team with healthcare background</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-indigo-50 hover:shadow-md transition-shadow text-center">
            <Target size={28} className="mx-auto mb-3 text-blue-500" />
            <div className="text-3xl font-bold text-health-primary mb-1">100%</div>
            <p className="text-health-dark/70">Committed to health equity</p>
          </div>
        </motion.div>
        
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
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
    >
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-health-primary/10 to-health-secondary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-health-dark font-semibold mb-2">{title}</h4>
      <p className="text-health-dark/80 text-sm">{description}</p>
    </motion.div>
  );
};
