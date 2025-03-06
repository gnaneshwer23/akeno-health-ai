
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { FlaskConical, Dna, Database } from 'lucide-react';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <FlaskConical size={24} />,
      title: "AI-Powered Drug Discovery & Clinical Trials",
      description: "Machine learning models analyze complex biological data to identify new drug targets, optimize clinical trials, and predict treatment outcomes."
    },
    {
      icon: <Dna size={24} />,
      title: "Synthetic Biology & Immune Therapy",
      description: "AI designs gene and cell therapies, optimizes immunotherapies, and accelerates development of precision medicine solutions."
    },
    {
      icon: <Database size={24} />,
      title: "Data-Driven Clinical Research Insights",
      description: "AI extracts actionable insights from real-world data to enhance clinical trial designs, post-market surveillance, and regulatory compliance."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Comprehensive Biotech & Pharma Solutions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform integrates AI-powered analytics, digital twin technology, and large-scale biological data processing to accelerate drug development, optimize clinical trials, and drive therapeutic innovations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
