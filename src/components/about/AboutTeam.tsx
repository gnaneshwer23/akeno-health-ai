
import React from 'react';
import { Users, Brain, Stethoscope, Lightbulb } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export const AboutTeam = () => {
  const teamGroups = [
    {
      id: "leadership",
      icon: <Users size={28} />,
      title: "Founders & Leadership",
      description: "Visionaries with deep-rooted experience in biotechnology, AI innovation, digital health transformation, and medical research."
    },
    {
      id: "scientists",
      icon: <Brain size={28} />,
      title: "AI Scientists & Computational Biologists",
      description: "Experts in deep learning, predictive analytics, bioinformatics, and AI-driven multi-omics modelling."
    },
    {
      id: "medical",
      icon: <Stethoscope size={28} />,
      title: "Medical & Clinical Experts",
      description: "Physicians, immunologists, and healthcare specialists ensuring that AI solutions align with real-world clinical needs."
    },
    {
      id: "advisors",
      icon: <Lightbulb size={28} />,
      title: "Strategic Advisors & Industry Experts",
      description: "Leaders in biopharma, health policy, AI ethics, regulatory affairs, and global healthcare strategy."
    }
  ];

  return (
    <section className="mb-20 px-6 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-6">Our Team</h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
          
          <p className="text-health-dark/80 max-w-3xl mx-auto">
            At the core of Akeno Health AI is a dynamic team of scientists, AI engineers, healthcare professionals, 
            and biotechnology innovators, all driven by a shared passion for revolutionizing healthcare through 
            advanced technology. We bring together expertise from artificial intelligence, immunology, genomics, 
            data science, and pharmaceutical research to develop state-of-the-art healthcare solutions.
          </p>
        </div>
        
        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent w-full mb-6">
            {teamGroups.map((group) => (
              <TabsTrigger 
                key={group.id} 
                value={group.id}
                className="flex flex-col gap-2 p-4 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary rounded-xl"
              >
                <div className="text-current">
                  {group.icon}
                </div>
                <span className="text-xs md:text-sm font-medium">{group.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {teamGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-4">
              <Card className="bg-health-light border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-health-dark mb-4">{group.title}</h3>
                  <p className="text-health-dark/70">{group.description}</p>
                  
                  {/* Team visualization - rendered as a grid of avatars/positions */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-health-primary/20 rounded-full flex items-center justify-center mb-2">
                          <Users size={24} className="text-health-primary" />
                        </div>
                        <p className="text-sm font-medium text-health-dark">Position {i}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-10 text-center">
          <p className="text-health-dark/80 font-medium">
            Our team is united by a mission to transform healthcare into a data-driven, precision-based, 
            patient-first ecosystem that leverages AI to improve medical outcomes and accessibility for all.
          </p>
        </div>
      </div>
    </section>
  );
};
