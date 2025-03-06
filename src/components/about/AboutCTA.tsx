
import React from 'react';
import { Button } from '@/components/Button';
import { Users, BookOpen, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutCTA = () => {
  const ctaCards = [
    {
      icon: <Users size={24} className="text-health-primary" />,
      title: "Leadership",
      description: "Our leadership team brings together expertise from AI research, medicine, healthcare policy, and business innovation.",
      link: "#",
      linkText: "Meet our team"
    },
    {
      icon: <BookOpen size={24} className="text-health-primary" />,
      title: "Research",
      description: "We continuously publish our research and collaborate with leading academic institutions to advance the field of AI in healthcare.",
      link: "#",
      linkText: "View our publications"
    },
    {
      icon: <Briefcase size={24} className="text-health-primary" />,
      title: "Careers",
      description: "Join our team of dedicated professionals working at the intersection of AI and healthcare to make a real difference in people's lives.",
      link: "#",
      linkText: "See open positions"
    }
  ];

  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <Card key={index} className="bg-health-light border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-health-dark">{card.title}</h3>
                </div>
                
                <p className="text-health-dark/70 mb-4">
                  {card.description}
                </p>
                
                <Button 
                  variant="link" 
                  className="text-health-primary font-medium p-0 h-auto"
                  as="a" 
                  href={card.link}
                >
                  {card.linkText} →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
