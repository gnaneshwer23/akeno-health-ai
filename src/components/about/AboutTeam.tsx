
import React from 'react';
import { Users, Brain, Stethoscope, Lightbulb } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AboutTeam = () => {
  const teamGroups = [
    {
      id: "leadership",
      icon: <Users size={28} />,
      title: "Founders & Leadership",
      description: "Visionaries with deep-rooted experience in biotechnology, AI innovation, digital health transformation, and medical research.",
      members: [
        {
          name: "Dr. Eliza Chen",
          title: "CEO & Co-Founder",
          bio: "Former Director of AI Research at Stanford Medicine, specialized in computational biology and AI applications in healthcare.",
          avatar: "/placeholder.svg",
          initials: "EC"
        },
        {
          name: "Dr. Marcus Wei",
          title: "CTO & Co-Founder",
          bio: "Quantum computing pioneer with 15+ publications on AI-driven diagnostics and predictive healthcare models.",
          avatar: "/placeholder.svg",
          initials: "MW"
        },
        {
          name: "Dr. Sarah Johnson",
          title: "Chief Medical Officer",
          bio: "Board-certified physician with extensive experience in translational medicine and clinical AI implementation.",
          avatar: "/placeholder.svg",
          initials: "SJ"
        },
        {
          name: "Michael Torres",
          title: "Chief Business Officer",
          bio: "Former healthcare venture capitalist focused on scaling digital health startups and strategic partnerships.",
          avatar: "/placeholder.svg",
          initials: "MT"
        }
      ]
    },
    {
      id: "scientists",
      icon: <Brain size={28} />,
      title: "AI Scientists & Computational Biologists",
      description: "Experts in deep learning, predictive analytics, bioinformatics, and AI-driven multi-omics modelling.",
      members: [
        {
          name: "Dr. Aisha Patel",
          title: "Head of AI Research",
          bio: "Specializes in multi-modal learning for medical imaging and genomic data integration.",
          avatar: "/placeholder.svg",
          initials: "AP"
        },
        {
          name: "Dr. James Lee",
          title: "Lead Computational Biologist",
          bio: "Expert in protein structure prediction and drug-target interaction modelling using deep learning.",
          avatar: "/placeholder.svg",
          initials: "JL"
        },
        {
          name: "Dr. Sofia Rodriguez",
          title: "Senior AI Researcher",
          bio: "Focuses on natural language processing for medical literature and electronic health records.",
          avatar: "/placeholder.svg",
          initials: "SR"
        },
        {
          name: "Dr. David Kim",
          title: "Senior Data Scientist",
          bio: "Specializes in real-time health monitoring algorithms and predictive health analytics.",
          avatar: "/placeholder.svg",
          initials: "DK"
        }
      ]
    },
    {
      id: "medical",
      icon: <Stethoscope size={28} />,
      title: "Medical & Clinical Experts",
      description: "Physicians, immunologists, and healthcare specialists ensuring that AI solutions align with real-world clinical needs.",
      members: [
        {
          name: "Dr. Rachel Nguyen",
          title: "Clinical Integration Director",
          bio: "Focuses on integrating AI tools into clinical workflows with 10+ years of hospital administration experience.",
          avatar: "/placeholder.svg",
          initials: "RN"
        },
        {
          name: "Dr. Thomas Garcia",
          title: "Medical Research Lead",
          bio: "Immunologist with expertise in biomarker discovery and validation for early disease detection.",
          avatar: "/placeholder.svg",
          initials: "TG"
        },
        {
          name: "Dr. Olivia Williams",
          title: "Patient Outcomes Specialist",
          bio: "Focuses on measuring and optimizing the real-world impact of AI-driven healthcare interventions.",
          avatar: "/placeholder.svg",
          initials: "OW"
        },
        {
          name: "Dr. Robert Chen",
          title: "Regulatory Affairs Director",
          bio: "Expert in navigating FDA approval processes for AI-based medical technologies and diagnostics.",
          avatar: "/placeholder.svg",
          initials: "RC"
        }
      ]
    },
    {
      id: "advisors",
      icon: <Lightbulb size={28} />,
      title: "Strategic Advisors & Industry Experts",
      description: "Leaders in biopharma, health policy, AI ethics, regulatory affairs, and global healthcare strategy.",
      members: [
        {
          name: "Dr. Helena Morris",
          title: "Bioethics Advisor",
          bio: "Specializes in ethical implications of AI in healthcare and patient data privacy frameworks.",
          avatar: "/placeholder.svg",
          initials: "HM"
        },
        {
          name: "Dr. Jonathan Blake",
          title: "Pharmaceutical Innovation Advisor",
          bio: "Former VP of R&D at a major pharmaceutical company with expertise in drug discovery acceleration.",
          avatar: "/placeholder.svg",
          initials: "JB"
        },
        {
          name: "Lisa Washington",
          title: "Healthcare Policy Advisor",
          bio: "Former health policy director with expertise in regulatory frameworks for digital health technologies.",
          avatar: "/placeholder.svg",
          initials: "LW"
        },
        {
          name: "Dr. Alan Zhang",
          title: "Quantum Computing Advisor",
          bio: "Pioneering researcher in quantum algorithms for molecular modeling and drug discovery.",
          avatar: "/placeholder.svg",
          initials: "AZ"
        }
      ]
    }
  ];

  return (
    <section className="mb-20 px-6 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">Our Team</h2>
          
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
                className="flex flex-col gap-2 p-4 data-[state=active]:bg-health-primary/10 data-[state=active]:text-health-primary rounded-xl transition-all duration-200"
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
              <Card className="bg-health-light border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-health-dark mb-4">{group.title}</h3>
                  <p className="text-health-dark/70 mb-8">{group.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {group.members.map((member, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <Avatar className="h-20 w-20 mb-4 border-2 border-health-primary/20">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="bg-health-primary/10 text-health-primary font-medium">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <h4 className="font-semibold text-health-dark text-lg mb-1">{member.name}</h4>
                        <p className="text-health-primary font-medium text-sm mb-3">{member.title}</p>
                        <p className="text-health-dark/70 text-sm text-center">{member.bio}</p>
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
