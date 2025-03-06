
import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    title: "AI & Quantum Computing in Drug Discovery",
    challenge: "Traditional drug discovery takes years and billions of dollars, with a high failure rate. Researchers needed a way to accelerate drug-target identification while reducing costs.",
    solution: "Akeno Health AI leveraged Quantum-Powered AI Simulations to rapidly predict drug-protein interactions and optimize molecule design.",
    outcome: "A novel oncology drug candidate was identified 3X faster than conventional methods, reducing preclinical development costs by 40% and enabling quicker FDA approval timelines."
  },
  {
    title: "Early Disease Detection Using AI & Digital Twins",
    challenge: "Late-stage disease detection in neurodegenerative conditions like Alzheimer's results in limited treatment options and poor patient outcomes.",
    solution: "Akeno Health AI's predictive biomarkers & AI-driven Digital Twin modeling detected early warning signs of Alzheimer's 8-10 years before clinical symptoms appeared.",
    outcome: "Early intervention strategies improved cognitive resilience, slowing disease progression by up to 45%, reducing hospitalization rates, and enhancing patient quality of life."
  },
  {
    title: "AI-Driven Personalized Treatment for Autoimmune Disorders",
    challenge: "Patients with autoimmune conditions (e.g., lupus, rheumatoid arthritis) often undergo trial-and-error treatment with severe side effects.",
    solution: "Akeno Health AI used AI-driven immune profiling and epigenetic analysis to customize therapies tailored to an individual's immune response markers.",
    outcome: "60% improvement in treatment efficacy, 30% reduction in medication side effects, and a significant decrease in relapse rates."
  },
  {
    title: "AI-Powered Clinical Trial Optimization",
    challenge: "Traditional clinical trials face long recruitment times, high dropout rates, and inefficient patient matching.",
    solution: "Akeno Health AI's AI-driven patient stratification and quantum computing simulations streamlined recruitment by identifying ideal candidates based on real-time genetic and biomarker data.",
    outcome: "Reduced trial enrollment time by 50%, increased patient retention rates by 35%, and improved overall study efficiency."
  }
];

const CaseStudiesList = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark">
            Case Studies: Real-World Impact of AI & Quantum Computing in Healthcare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Akeno Health AI is transforming the healthcare landscape by integrating AI, quantum computing, 
            multi-omics analysis, and digital twin simulations to revolutionize patient care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              challenge={study.challenge}
              solution={study.solution}
              outcome={study.outcome}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesList;
