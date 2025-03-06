
import React from 'react';
import { 
  FlaskConical,
  LineChart, 
  Dna, 
  Brain,
  Stethoscope,
  Users
} from 'lucide-react';

const DrugDiscovery = () => {
  const features = [
    {
      icon: <FlaskConical size={24} />,
      title: "AI-Driven Target Identification & Drug Discovery",
      description: "Machine learning models analyze multi-omics datasets to identify new drug targets, repurpose existing drugs, and optimize lead compounds."
    },
    {
      icon: <Users size={24} />,
      title: "Biomarker-Based Clinical Trials",
      description: "AI integrates multi-omics data to stratify patients based on predictive biomarkers, ensuring more effective clinical trial designs."
    },
    {
      icon: <Brain size={24} />,
      title: "Digital Twin Simulations",
      description: "AI-powered patient digital twins allow for in silico modeling of disease progression and drug response, refining trial protocols."
    },
    {
      icon: <LineChart size={24} />,
      title: "AI for Trial Optimization",
      description: "Machine learning enhances patient recruitment, eligibility screening, and adaptive trial designs, reducing dropout rates."
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Predictive Modeling for Drug Safety",
      description: "AI analyzes adverse event patterns, genetic predispositions, and polypharmacy risks to predict drug responses and safety."
    }
  ];

  return (
    <section id="drug-discovery" className="py-20 px-6 bg-health-light/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            Solution 1
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            AI-Powered Drug Discovery & Biomarker-Driven Clinical Trials
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI accelerates drug discovery timelines, optimizes biomarker-driven clinical trials, enhances patient stratification, and increases the likelihood of successful therapeutic outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-health-primary/10"
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
              <LineChart size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-health-dark mb-2">Outcome</h3>
              <p className="text-muted-foreground">
                AI accelerates drug discovery timelines, optimizes biomarker-driven clinical trials, enhances patient stratification, and increases the likelihood of successful therapeutic outcomes while reducing development costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrugDiscovery;
