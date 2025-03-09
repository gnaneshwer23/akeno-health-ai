
import React from 'react';
import { Building, FlaskConical, ActivitySquare, BookOpen, ShieldCheck, Globe } from 'lucide-react';
import { PartnerTypeCard } from './PartnerTypeCard';

export const PartnersSection = () => {
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
    <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 mb-16">
      <h3 className="text-xl font-bold text-health-dark mb-6 flex items-center gap-2">
        <Globe className="h-6 w-6 text-blue-500" />
        Key Collaborators
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partnerTypes.map((partner, index) => (
          <PartnerTypeCard 
            key={index}
            title={partner.title}
            description={partner.description}
            icon={partner.icon}
          />
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
  );
};
