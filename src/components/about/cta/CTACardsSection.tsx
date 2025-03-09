
import React from 'react';
import { Users, BookOpen, Briefcase } from 'lucide-react';
import { CTACard } from './CTACard';

export const CTACardsSection = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {ctaCards.map((card, index) => (
        <CTACard
          key={index}
          icon={card.icon}
          bgGradient={card.bgGradient}
          shadowColor={card.shadowColor}
          borderColor={card.borderColor}
          title={card.title}
          description={card.description}
          link={card.link}
          linkText={card.linkText}
          buttonColor={card.buttonColor}
        />
      ))}
    </div>
  );
};
