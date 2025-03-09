
import React from 'react';
import { Button } from '@/components/Button';
import { Users, BookOpen, Briefcase, ArrowRight, Sparkles, Building, Globe, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const AboutCTA = () => {
  const ctaCards = [
    {
      icon: <Users size={24} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
      shadowColor: "shadow-purple-500/20",
      borderColor: "border-indigo-300/20",
      title: "Leadership",
      description: "Our leadership team brings together expertise from AI research, medicine, healthcare policy, and business innovation.",
      link: "/about",
      linkText: "Meet our team",
      buttonColor: "text-indigo-600"
    },
    {
      icon: <BookOpen size={24} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-fuchsia-500 to-purple-600",
      shadowColor: "shadow-fuchsia-500/20",
      borderColor: "border-purple-300/20",
      title: "Research",
      description: "We continuously publish our research and collaborate with leading academic institutions to advance the field of AI in healthcare.",
      link: "/quantum-computing",
      linkText: "View our publications",
      buttonColor: "text-purple-600"
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      bgGradient: "bg-gradient-to-br from-blue-500 to-sky-600",
      shadowColor: "shadow-blue-500/20",
      borderColor: "border-sky-300/20",
      title: "Careers",
      description: "Join our team of dedicated professionals working at the intersection of AI and healthcare to make a real difference in people's lives.",
      link: "/contact",
      linkText: "See open positions",
      buttonColor: "text-blue-600"
    }
  ];

  const partnerTypes = [
    {
      title: "Top-Tier Hospitals & Clinics",
      description: "Implementing AI-powered diagnostics and patient monitoring",
      icon: <Building className="h-6 w-6 text-indigo-500" />
    },
    {
      title: "Pharmaceutical Giants & Biotech Startups",
      description: "Accelerating clinical trials and drug discovery with AI",
      icon: <FlaskConical className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Wearable Tech & IoT Companies",
      description: "Integrating smart health devices for continuous monitoring",
      icon: <ActivitySquare className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Academic & Research Institutions",
      description: "Partnering for AI-driven medical breakthroughs",
      icon: <BookOpen className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Regulatory & Compliance Bodies",
      description: "Ensuring ethical, secure, and GDPR-compliant health data processing",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />
    }
  ];

  return (
    <section className="px-6 py-20 relative overflow-hidden" id="partners">
      {/* Enhanced background with patterns and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-health-light/30 to-white -z-10"></div>
      
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCA0MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 -z-10"></div>
      
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-sky-500/10 font-medium gap-2 border border-blue-500/10 shadow-lg shadow-indigo-500/5">
            <Handshake size={16} className="text-blue-500 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              Our Partners & Investors
            </span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Collaborating for a Healthier Future
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></div>
          </div>
          
          <p className="text-health-dark/70 max-w-3xl mx-auto mb-8">
            Akeno Health thrives on strategic partnerships with some of the world's leading healthcare institutions, technology firms, and investment partners.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 mb-16">
          <h3 className="text-xl font-bold text-health-dark mb-6 flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-500" />
            Key Collaborators
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((partner, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  {partner.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-health-dark mb-1">{partner.title}</h4>
                  <p className="text-health-dark/70 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-lg font-bold text-health-dark mb-3">Investors Who Believe in the Future of AI Healthcare</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium border border-blue-100">[Investment Firm A]</span>
              <span className="px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium border border-indigo-100">[Investment Firm B]</span>
              <span className="px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm font-medium border border-purple-100">[Angel Investors & Venture Capital Partners]</span>
            </div>
            
            <p className="text-health-dark/80 font-medium mt-6">
              Together, we are building the most advanced AI-powered healthcare ecosystem in the world.
            </p>
          </div>
        </div>
      
        <h3 className="text-2xl font-bold text-center text-health-dark mb-6">
          Explore More
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <Card 
              key={index} 
              className={`border-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${card.shadowColor} ${card.borderColor}`}
            >
              <CardContent className="p-0 overflow-hidden">
                <div className={`${card.bgGradient} p-6 rounded-t-lg relative overflow-hidden`}>
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
                    className={`${card.buttonColor} font-medium p-0 h-auto flex items-center gap-1 hover:gap-2 transition-all group`}
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
        
        <div className="text-center mt-16">
          <p className="text-xl font-medium text-health-dark mb-8">
            Be Part of the Healthcare Revolution
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/contact"
              className="group"
            >
              Join the Future of AI Healthcare
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              as="Link"
              to="/contact"
            >
              Request a Demo
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              as="Link"
              to="/contact"
            >
              Partner With Us
            </Button>
          </div>
          
          <p className="text-base text-health-dark/60 mt-12">
            Akeno Health – Pioneering AI-Driven Personalised Medicine for a Healthier Tomorrow.
          </p>
        </div>
      </div>
      
      {/* Enhanced floating elements with animations */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-purple-500/20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-10 w-10 h-10 rounded-full bg-indigo-500/20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/5 right-1/4 w-6 h-6 rounded-full bg-blue-500/20 animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-fuchsia-500/20 animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};
