
import React from 'react';
import { User, Stethoscope, Building2, FlaskConical, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface StakeholderCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const StakeholderCard: React.FC<StakeholderCardProps> = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-health-primary/10 hover:shadow-md transition-shadow flex flex-col">
      <div className="w-12 h-12 rounded-full bg-health-primary/10 flex items-center justify-center mb-4 text-health-primary">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <Button asChild variant="outline" className="mt-auto group">
        <Link to={buttonLink} className="flex items-center">
          {buttonText} 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
};

export const StakeholdersSection: React.FC = () => {
  const stakeholders = [
    {
      icon: <User size={24} />,
      title: "Patients",
      description: "Get personalised health insights, lifestyle nudges, and early warnings – all from your phone.",
      buttonText: "Try Akeno Health",
      buttonLink: "/patient-solutions"
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Doctors",
      description: "Leverage AI-powered diagnosis, digital twins, and real-time patient dashboards.",
      buttonText: "Join Akeno MD Network",
      buttonLink: "/doctor-solutions"
    },
    {
      icon: <Building2 size={24} />,
      title: "Hospitals",
      description: "Streamline operations, reduce readmissions, and monitor at scale with AI risk flags.",
      buttonText: "Book a Demo",
      buttonLink: "/hospital-solutions"
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Pharma & Research",
      description: "Accelerate trial recruitment and uncover novel targets via real-world federated datasets.",
      buttonText: "Collaborate with Us",
      buttonLink: "/biotech-solutions"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-health-primary/10 text-health-primary font-medium mb-4">
            <User size={16} className="mr-2" />
            Who We Serve
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Tailored Value for Every Stakeholder
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our solutions are specifically designed to meet the needs of different healthcare stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <StakeholderCard
              key={index}
              icon={stakeholder.icon}
              title={stakeholder.title}
              description={stakeholder.description}
              buttonText={stakeholder.buttonText}
              buttonLink={stakeholder.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
