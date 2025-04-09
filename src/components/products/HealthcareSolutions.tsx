
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { 
  FlaskConical, 
  Package, 
  Dna, 
  Shield, 
  Brain, 
  Microscope, 
  HeartPulse, 
  ArrowRight 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SolutionCard = ({ icon, iconClass, title, description, linkUrl, delay }: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  description: string;
  linkUrl: string;
  delay: number;
}) => {
  const { toast } = useToast();
  
  const handleClick = () => {
    toast({
      title: "Solution Selected",
      description: `You've selected ${title}. Exploring solution details now.`,
    });
  };
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-6">
        <div className={`${iconClass} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <CustomButton 
          variant="link" 
          to={linkUrl}
          onClick={handleClick}
          className="text-health-primary group p-0"
          rightIcon={<ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />}
        >
          Explore Solution
        </CustomButton>
      </div>
    </motion.div>
  );
};

const HealthcareSolutions = () => {
  const solutions = [
    {
      icon: <Brain />,
      iconClass: "bg-indigo-500/10 text-indigo-600",
      title: "Clinical Decision Support",
      description: "AI-powered decision support for clinicians, integrating patient data with the latest research evidence to suggest optimal treatment paths.",
      linkUrl: "/doctor-solutions",
    },
    {
      icon: <Package />,
      iconClass: "bg-green-500/10 text-green-600",
      title: "Health Data Integration Platform",
      description: "Secure, compliant data integration platform that connects EHRs, wearables, genomic data, and laboratory results for a unified health record.",
      linkUrl: "/health-data",
    },
    {
      icon: <Dna />,
      iconClass: "bg-amber-500/10 text-amber-600",
      title: "Genomic Analysis Toolkit",
      description: "Advanced genomic sequencing analysis tools for research institutions and pharmaceutical companies developing personalized therapeutics.",
      linkUrl: "/genomics",
    },
    {
      icon: <Shield />,
      iconClass: "bg-red-500/10 text-red-600",
      title: "Health Data Security Framework",
      description: "Enterprise-grade security solution for healthcare organizations, ensuring HIPAA compliance and protecting sensitive patient information.",
      linkUrl: "/security",
    },
    {
      icon: <FlaskConical />,
      iconClass: "bg-blue-500/10 text-blue-600",
      title: "Biotech Research Platform",
      description: "Comprehensive toolset for biotech companies conducting research on novel therapeutics and personalized medicine approaches.",
      linkUrl: "/biotech-solutions",
    },
    {
      icon: <HeartPulse />,
      iconClass: "bg-purple-500/10 text-purple-600",
      title: "Patient Engagement System",
      description: "Personalized health recommendations and monitoring tools that empower patients to take control of their health journey.",
      linkUrl: "/patient-solutions",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
            Healthcare Solutions
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Specialized products designed for specific healthcare stakeholders,
            from clinicians to researchers to healthcare administrators.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              iconClass={solution.iconClass}
              title={solution.title}
              description={solution.description}
              linkUrl={solution.linkUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CustomButton 
            variant="outline" 
            size="lg"
            to="/contact"
            className="min-w-[240px] border-health-primary text-health-primary"
          >
            Request Custom Solution
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthcareSolutions;
