
import React from 'react';
import { Button } from '@/components/Button';
import { Users, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutCTA = () => {
  const ctaCards = [
    {
      icon: <Users size={24} className="text-white" />,
      bgColor: "bg-health-primary",
      title: "Leadership",
      description: "Our leadership team brings together expertise from AI research, medicine, healthcare policy, and business innovation.",
      link: "#",
      linkText: "Meet our team"
    },
    {
      icon: <BookOpen size={24} className="text-white" />,
      bgColor: "bg-health-secondary",
      title: "Research",
      description: "We continuously publish our research and collaborate with leading academic institutions to advance the field of AI in healthcare.",
      link: "#",
      linkText: "View our publications"
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      bgColor: "bg-health-accent",
      title: "Careers",
      description: "Join our team of dedicated professionals working at the intersection of AI and healthcare to make a real difference in people's lives.",
      link: "#",
      linkText: "See open positions"
    }
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-white to-health-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark mb-6">Explore More</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-6"></div>
          <p className="text-health-dark/70 max-w-3xl mx-auto">
            Discover more ways to engage with Akeno Health AI and join our mission to transform healthcare through AI innovation.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <Card 
              key={index} 
              className="bg-white border-none hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className={`${card.bgColor} p-6 rounded-t-lg`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-health-dark/70 mb-6 min-h-[80px]">
                    {card.description}
                  </p>
                  
                  <Button 
                    variant="link" 
                    className="text-health-primary font-medium p-0 h-auto flex items-center gap-1 hover:gap-2 transition-all"
                    as="a" 
                    href={card.link}
                  >
                    {card.linkText} <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
