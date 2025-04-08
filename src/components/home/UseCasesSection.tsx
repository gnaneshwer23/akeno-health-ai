
import React, { useState } from 'react';
import { Heart, Dna, Syringe, Globe } from 'lucide-react';

interface FlippableCardProps {
  icon: React.ReactNode;
  frontTitle: string;
  backContent: string;
  iconColor: string;
}

const FlippableCard: React.FC<FlippableCardProps> = ({ icon, frontTitle, backContent, iconColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="h-64 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 rounded-xl border border-health-primary/20 shadow-sm ${iconColor} text-white`}>
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-medium text-center">{frontTitle}</h3>
          <p className="text-sm mt-2 text-white/90">Click to reveal details</p>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 rounded-xl border border-health-primary/10 shadow-sm flex flex-col items-center justify-center text-center">
          <p className="text-muted-foreground">{backContent}</p>
          <p className="mt-4 text-sm text-health-primary">Click to flip back</p>
        </div>
      </div>
    </div>
  );
};

export const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <Heart />,
      frontTitle: "🫀 Predicting heart attack 5 days in advance",
      backContent: "Patient received early alert from wearable + digital twin. Doctor intervened pre-ER, preventing a major cardiac event and potentially saving their life.",
      iconColor: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: <Dna />,
      frontTitle: "🧬 Matching rare disease patients to trials",
      backContent: "AI found a match for a rare variant in a global trial database within 2 hours, connecting patients with targeted therapies faster than conventional methods.",
      iconColor: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <Syringe />,
      frontTitle: "💉 Digital twin prevents chemo overuse",
      backContent: "Simulation showed toxicity risk → dose adjusted → side effects prevented, enabling more effective and comfortable cancer treatment for patients.",
      iconColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Globe />,
      frontTitle: "🌍 Pharma identifies BRCA1 treatment in Indian population",
      backContent: "Federated AI identified variant efficacy patterns across 4 countries, unlocking new treatment possibilities that were previously overlooked in genetic research.",
      iconColor: "bg-gradient-to-br from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-health-primary/10 text-health-primary font-medium mb-4">
            <Heart size={16} className="mr-2" />
            Real Cases
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Akeno Health in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our technology is making a real difference in healthcare outcomes globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <FlippableCard
              key={index}
              icon={useCase.icon}
              frontTitle={useCase.frontTitle}
              backContent={useCase.backContent}
              iconColor={useCase.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
