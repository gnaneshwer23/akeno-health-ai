
import React from 'react';
import { Brain, Globe, Heart } from 'lucide-react';
import { CultureValueCard } from './CultureValueCard';

export const CultureValuesGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-14">
      <CultureValueCard
        icon={<Brain size={24} className="text-health-primary" />}
        title="Lifelong learning and AI upskilling"
        description="We invest in continuous education and provide resources to keep our team at the cutting edge of healthcare AI."
        delay={0.1}
      />
      
      <CultureValueCard
        icon={<Globe size={24} className="text-health-primary" />}
        title="Remote-first and inclusive hiring"
        description="We believe talent has no borders. Our diverse team works across time zones with flexibility and autonomy."
        delay={0.3}
      />
      
      <CultureValueCard
        icon={<Heart size={24} className="text-health-primary" />}
        title="Purpose over perks"
        description="We're driven by our mission to transform healthcare, creating meaningful impact in patients' lives worldwide."
        delay={0.5}
      />
    </div>
  );
};
