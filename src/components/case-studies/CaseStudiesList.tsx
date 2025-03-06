
import React, { useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { ChevronDown, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const successMetrics = ["Cost Reduction", "Time Savings", "Efficacy Improvement", "Patient Outcomes"];

const caseStudies = [
  {
    title: "AI & Quantum Computing in Drug Discovery",
    challenge: "Traditional drug discovery takes years and billions of dollars, with a high failure rate. Researchers needed a way to accelerate drug-target identification while reducing costs.",
    solution: "Akeno Health AI leveraged Quantum-Powered AI Simulations to rapidly predict drug-protein interactions and optimize molecule design.",
    outcome: "A novel oncology drug candidate was identified 3X faster than conventional methods, reducing preclinical development costs by 40% and enabling quicker FDA approval timelines.",
    metrics: ["Time Savings", "Cost Reduction"]
  },
  {
    title: "Early Disease Detection Using AI & Digital Twins",
    challenge: "Late-stage disease detection in neurodegenerative conditions like Alzheimer's results in limited treatment options and poor patient outcomes.",
    solution: "Akeno Health AI's predictive biomarkers & AI-driven Digital Twin modeling detected early warning signs of Alzheimer's 8-10 years before clinical symptoms appeared.",
    outcome: "Early intervention strategies improved cognitive resilience, slowing disease progression by up to 45%, reducing hospitalization rates, and enhancing patient quality of life.",
    metrics: ["Patient Outcomes", "Efficacy Improvement"]
  },
  {
    title: "AI-Driven Personalized Treatment for Autoimmune Disorders",
    challenge: "Patients with autoimmune conditions (e.g., lupus, rheumatoid arthritis) often undergo trial-and-error treatment with severe side effects.",
    solution: "Akeno Health AI used AI-driven immune profiling and epigenetic analysis to customize therapies tailored to an individual's immune response markers.",
    outcome: "60% improvement in treatment efficacy, 30% reduction in medication side effects, and a significant decrease in relapse rates.",
    metrics: ["Efficacy Improvement", "Patient Outcomes"]
  },
  {
    title: "AI-Powered Clinical Trial Optimization",
    challenge: "Traditional clinical trials face long recruitment times, high dropout rates, and inefficient patient matching.",
    solution: "Akeno Health AI's AI-driven patient stratification and quantum computing simulations streamlined recruitment by identifying ideal candidates based on real-time genetic and biomarker data.",
    outcome: "Reduced trial enrollment time by 50%, increased patient retention rates by 35%, and improved overall study efficiency.",
    metrics: ["Time Savings", "Efficacy Improvement"]
  }
];

const CaseStudiesList = () => {
  const [activeMetric, setActiveMetric] = useState('All');
  const [showMetricDropdown, setShowMetricDropdown] = useState(false);

  const filteredCaseStudies = activeMetric === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.metrics.includes(activeMetric));

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              Case Studies:
            </span> Real-World Impact of AI & Quantum Computing in Healthcare
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Akeno Health AI is transforming the healthcare landscape by integrating AI, quantum computing, 
            multi-omics analysis, and digital twin simulations to revolutionize patient care.
          </p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <div className="bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-wrap gap-2">
              <Badge 
                className={`px-4 py-2 text-sm cursor-pointer transition-all hover:shadow-sm ${
                  activeMetric === 'All' 
                    ? 'bg-health-primary text-white hover:bg-health-primary/90' 
                    : 'bg-transparent text-muted-foreground hover:bg-gray-100'
                }`}
                variant="outline"
                onClick={() => setActiveMetric('All')}
              >
                All Metrics
              </Badge>
              
              {successMetrics.map(metric => (
                <Badge 
                  key={metric}
                  className={`px-4 py-2 text-sm cursor-pointer transition-all hover:shadow-sm ${
                    activeMetric === metric 
                      ? 'bg-health-primary text-white hover:bg-health-primary/90' 
                      : 'bg-transparent text-muted-foreground hover:bg-gray-100'
                  }`}
                  variant="outline"
                  onClick={() => setActiveMetric(metric)}
                >
                  {metric}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCaseStudies.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No case studies found matching the selected criteria.</p>
            </div>
          ) : (
            filteredCaseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                title={study.title}
                challenge={study.challenge}
                solution={study.solution}
                outcome={study.outcome}
              />
            ))
          )}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-12 bg-health-primary/30"></div>
            <span className="px-4 text-health-primary">Explore more case studies</span>
            <div className="h-px w-12 bg-health-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesList;
