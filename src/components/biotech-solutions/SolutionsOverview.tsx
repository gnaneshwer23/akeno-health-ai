
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { FlaskConical, Dna, Database } from 'lucide-react';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <FlaskConical size={24} />,
      title: "AI-Powered Drug Discovery & Clinical Trials",
      description: "Our platform processes 12.5M+ data points from genomic samples, clinical trials, and patient outcomes to identify new drug targets and optimize research protocols."
    },
    {
      icon: <Dna size={24} />,
      title: "Synthetic Biology & Immune Therapy",
      description: "AI designs gene and cell therapies using our database of 3,800+ genomic samples, optimizing immunotherapies and precision medicine solutions."
    },
    {
      icon: <Database size={24} />,
      title: "Data-Driven Clinical Research Insights",
      description: "Access to real-world health records, imaging datasets, and research findings to enhance clinical trial designs, post-market surveillance, and regulatory compliance."
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
            Our platform integrates AI-powered analytics with our extensive database of patient records, genomic data, and clinical outcomes to accelerate drug development, optimize trials, and drive therapeutic innovations.
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
