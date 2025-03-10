
import React from 'react';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { teamGroups } from '@/data/teamData';
import { TeamGroup } from './TeamGroup';
import { TeamTabTrigger } from './TeamTabTrigger';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Stethoscope, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutTeam = () => {
  return (
    <section className="mb-20 px-6 py-16 relative bg-gradient-to-b from-health-light to-white overflow-hidden" id="team">
      {/* Enhanced background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-600/5 rounded-full blur-xl -z-10"
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      
      {/* Connected dots network */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-5 pointer-events-none">
        <defs>
          <linearGradient id="teamLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <g key={i}>
            <motion.circle
              cx={`${10 + i * 9}%`}
              cy={`${30 + (i % 5) * 12}%`}
              r="2"
              fill={i % 2 === 0 ? "#6366f1" : "#8b5cf6"}
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
            {i < 9 && (
              <motion.line
                x1={`${10 + i * 9}%`}
                y1={`${30 + (i % 5) * 12}%`}
                x2={`${10 + (i+1) * 9}%`}
                y2={`${30 + ((i+1) % 5) * 12}%`}
                stroke="url(#teamLineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            )}
          </g>
        ))}
      </svg>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 text-sm font-medium mb-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Users size={16} className="text-purple-500 mr-2" />
            Meet the Team
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              The Minds Behind Akeno Health
            </span>
          </motion.h2>
          
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
          </motion.div>
          
          <motion.p 
            className="text-health-dark/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our team consists of world-class experts in AI, medicine, biotechnology, healthcare strategy, and digital transformation. 
            Together, we are united by a single mission—to redefine healthcare as a data-driven, precision-based, 
            patient-first ecosystem that leverages AI to enhance medical outcomes and make healthcare more accessible for all.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mb-16 bg-white rounded-2xl shadow-lg border border-purple-100 p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center text-health-dark mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Sparkles size={24} className="text-purple-500" />
            Leadership Team
            <Sparkles size={24} className="text-purple-500" />
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Gnaneshwer Reddy",
                title: "Founder & CEO",
                description: "Visionary in AI-powered healthcare innovation",
                color: "purple"
              },
              {
                name: "Dr. Sarah Johnson",
                title: "Chief Medical Officer",
                description: "Leading AI-driven clinical transformation",
                color: "indigo"
              },
              {
                name: "Dr. Marcus Wei",
                title: "Chief Technology Officer",
                description: "Expert in AI, blockchain, and quantum computing for healthcare",
                color: "blue"
              },
              {
                name: "Michael Torres",
                title: "Chief Operating Officer",
                description: "Scaling operations and global healthcare partnerships",
                color: "emerald"
              }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                className={`p-4 rounded-xl bg-gradient-to-br from-white to-${leader.color}-50 border border-${leader.color}-100 shadow-sm hover:shadow-md transition-all`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="text-center">
                  <h4 className="font-semibold text-health-dark mb-1">{leader.name}</h4>
                  <div className={`px-3 py-1 rounded-full bg-${leader.color}-100 text-${leader.color}-700 text-xs font-medium mb-2 inline-block`}>{leader.title}</div>
                  <p className="text-health-dark/70 text-sm">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Tabs defaultValue="medical" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-2xl mx-auto gap-4 bg-transparent mb-10">
              <TeamTabTrigger 
                id="medical"
                icon={<Stethoscope size={28} />}
                title="Medical & Clinical Experts"
              />
              <TeamTabTrigger 
                id="advisors"
                icon={<Lightbulb size={28} />}
                title="Strategic Advisors & Industry Experts"
              />
            </TabsList>
            
            {teamGroups.filter(group => group.id !== "scientists").map((group) => (
              <TabsContent key={group.id} value={group.id} className="mt-4">
                <TeamGroup group={group} />
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
        
        <motion.div 
          className="mt-16 px-8 py-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-100 shadow-md text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-health-dark/80 font-medium text-lg mb-8">
            We are backed by renowned medical professionals, AI pioneers, and biotech leaders who guide our mission towards a smarter, more efficient healthcare system.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-primary/90 hover:to-health-secondary/90"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Join Our Team
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-health-primary/30 hover:border-health-primary/60 bg-white/50 backdrop-blur-sm"
                asChild
              >
                <Link to="/contact">Become a Partner</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
