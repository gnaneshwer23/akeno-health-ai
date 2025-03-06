
import React from 'react';
import { 
  Dna,
  Pill,
  TestTube,
  Sparkles,
  Brain
} from 'lucide-react';

const SyntheticBiology = () => {
  const features = [
    {
      icon: <Dna size={24} />,
      title: "AI-Designed Gene & Cell Therapies",
      description: "AI analyzes genomic sequences, CRISPR data, and immune responses to design optimized gene-editing solutions for precision medicine."
    },
    {
      icon: <Pill size={24} />,
      title: "Synthetic Biology for Precision Medicine",
      description: "AI-driven computational biology and protein engineering design customized therapeutic molecules and biologics for specific patient needs."
    },
    {
      icon: <Brain size={24} />,
      title: "AI in Immunotherapy Development",
      description: "AI models predict immune checkpoint inhibitor responses and optimize T-cell receptor interactions for enhanced cancer immunotherapy."
    },
    {
      icon: <TestTube size={24} />,
      title: "AI-Guided Personalized Vaccine Development",
      description: "AI identifies mutation patterns in infectious diseases to accelerate vaccine design and optimize immune response predictions."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Real-Time Therapy Optimization",
      description: "AI continuously monitors patient immune profiles and treatment responses, dynamically adjusting therapeutic combinations for maximum efficacy."
    }
  ];

  return (
    <section id="synthetic-biology" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            Solution 2
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            AI-Powered Synthetic Biology & Immune Therapy Innovations
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI enhances precision therapy design, immune modulation strategies, and biologic drug development, ensuring faster, safer, and more effective treatments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-health-light/10 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border border-health-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-health-primary/10 flex items-center justify-center text-health-primary">
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-health-dark mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-health-primary/5 border border-health-primary/10 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-health-primary flex items-center justify-center text-white">
              <Dna size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-health-dark mb-2">Outcome</h3>
              <p className="text-muted-foreground">
                AI enhances precision therapy design, immune modulation strategies, and biologic drug development, ensuring faster, safer, and more effective treatments while increasing the success rate of advanced therapeutics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticBiology;
