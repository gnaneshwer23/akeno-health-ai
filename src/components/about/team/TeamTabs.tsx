
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { teamGroups } from '@/data/teamData';
import { TeamGroup } from '@/components/about/TeamGroup';
import { TeamTabTrigger } from '@/components/about/TeamTabTrigger';
import { Stethoscope, Lightbulb } from 'lucide-react';

export const TeamTabs: React.FC = () => {
  return (
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
  );
};
