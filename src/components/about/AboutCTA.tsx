
import React from 'react';
import { Button } from '@/components/Button';
import { Users, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const AboutCTA = () => {
  const ctaCards = [
    {
      icon: <Users size={24} className="text-white" />,
      bgColor: "bg-gradient-to-br from-health-primary to-health-primary/80",
      title: "Leadership",
      description: "Our leadership team brings together expertise from AI research, medicine, healthcare policy, and business innovation.",
      link: "/about",
      linkText: "Meet our team"
    },
    {
      icon: <BookOpen size={24} className="text-white" />,
      bgColor: "bg-gradient-to-br from-health-secondary to-health-secondary/80",
      title: "Research",
      description: "We continuously publish our research and collaborate with leading academic institutions to advance the field of AI in healthcare.",
      link: "/quantum-computing",
      linkText: "View our publications"
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      bgColor: "bg-gradient-to-br from-health-accent to-health-accent/80",
      title: "Careers",
      description: "Join our team of dedicated professionals working at the intersection of AI and healthcare to make a real difference in people's lives.",
      link: "/contact",
      linkText: "See open positions"
    }
  ];

  return (
    <section className="px-6 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-health-light/20 -z-10"></div>
      
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCA0MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 font-medium gap-2 border border-health-primary/10">
            <ArrowRight size={16} className="text-health-primary" />
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Explore More</span>
          </div>
          
          <h2 className="text-3xl font-bold text-health-dark mb-6">Join Our Mission</h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary"></div>
          </div>
          
          <p className="text-health-dark/70 max-w-3xl mx-auto">
            Discover more ways to engage with Akeno Health AI and join our mission to transform healthcare through AI innovation.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <Card 
              key={index} 
              className="border-none hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
                
                <div className="p-6 bg-white rounded-b-lg">
                  <p className="text-health-dark/70 mb-6 min-h-[80px]">
                    {card.description}
                  </p>
                  
                  <Button 
                    variant="link" 
                    className="text-health-primary font-medium p-0 h-auto flex items-center gap-1 hover:gap-2 transition-all"
                    as="Link" 
                    to={card.link}
                  >
                    {card.linkText} <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-health-primary/10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-10 w-8 h-8 rounded-full bg-health-secondary/10 animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};
