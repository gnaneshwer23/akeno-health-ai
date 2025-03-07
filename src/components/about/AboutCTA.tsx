
import React from 'react';
import { Button } from '@/components/Button';
import { Users, BookOpen, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const AboutCTA = () => {
  const ctaCards = [
    {
      icon: <Users size={24} className="text-white" />,
      bgColor: "bg-gradient-to-br from-health-primary to-indigo-500",
      shadowColor: "shadow-indigo-500/20",
      borderColor: "border-indigo-300/20",
      title: "Leadership",
      description: "Our leadership team brings together expertise from AI research, medicine, healthcare policy, and business innovation.",
      link: "/about",
      linkText: "Meet our team"
    },
    {
      icon: <BookOpen size={24} className="text-white" />,
      bgColor: "bg-gradient-to-br from-health-secondary to-purple-500",
      shadowColor: "shadow-purple-500/20",
      borderColor: "border-purple-300/20",
      title: "Research",
      description: "We continuously publish our research and collaborate with leading academic institutions to advance the field of AI in healthcare.",
      link: "/quantum-computing",
      linkText: "View our publications"
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      bgColor: "bg-gradient-to-br from-health-accent to-sky-500",
      shadowColor: "shadow-sky-500/20",
      borderColor: "border-sky-300/20",
      title: "Careers",
      description: "Join our team of dedicated professionals working at the intersection of AI and healthcare to make a real difference in people's lives.",
      link: "/contact",
      linkText: "See open positions"
    }
  ];

  return (
    <section className="px-6 py-20 relative overflow-hidden">
      {/* Enhanced background with patterns and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-health-light/30 to-white -z-10"></div>
      
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCA0MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-health-accent/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 border-4 border-health-primary/10 rounded-xl rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-health-secondary/10 rounded-full -rotate-12"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 font-medium gap-2 border border-health-primary/10 shadow-lg shadow-health-primary/5">
            <Sparkles size={16} className="text-health-primary animate-pulse" />
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              Explore More
            </span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-health-dark via-health-primary to-health-secondary bg-clip-text text-transparent">
            Join Our Mission
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
          </div>
          
          <p className="text-health-dark/70 max-w-3xl mx-auto">
            Discover more ways to engage with Akeno Health AI and join our mission to transform healthcare through AI innovation.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <Card 
              key={index} 
              className={`border-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${card.shadowColor} ${card.borderColor}`}
            >
              <CardContent className="p-0 overflow-hidden">
                <div className={`${card.bgColor} p-6 rounded-t-lg relative overflow-hidden`}>
                  {/* Decorative elements */}
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  
                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 rounded-b-lg">
                  <p className="text-health-dark/70 mb-6 min-h-[80px]">
                    {card.description}
                  </p>
                  
                  <Button 
                    variant="link" 
                    className="text-health-primary font-medium p-0 h-auto flex items-center gap-1 hover:gap-2 transition-all group"
                    as="Link" 
                    to={card.link}
                  >
                    <span className="group-hover:underline">{card.linkText}</span> 
                    <ArrowRight size={16} className="group-hover:animate-pulse" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Enhanced floating elements with animations */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-health-primary/10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-10 w-10 h-10 rounded-full bg-health-secondary/10 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/5 right-1/4 w-6 h-6 rounded-full bg-health-accent/10 animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-purple-400/10 animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};
