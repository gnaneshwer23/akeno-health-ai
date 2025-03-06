
import React, { useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { ChevronDown } from 'lucide-react';

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
        
        <div className="mb-8 flex justify-center">
          <div className="relative inline-block">
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              onClick={() => setShowMetricDropdown(!showMetricDropdown)}
            >
              <span>Filter by Success Metric: <strong>{activeMetric}</strong></span>
              <ChevronDown size={16} className={`transition-transform ${showMetricDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showMetricDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg py-1">
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                  onClick={() => {
                    setActiveMetric('All');
                    setShowMetricDropdown(false);
                  }}
                >
                  All
                </button>
                {successMetrics.map(metric => (
                  <button 
                    key={metric}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                    onClick={() => {
                      setActiveMetric(metric);
                      setShowMetricDropdown(false);
                    }}
                  >
                    {metric}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study, index) => (
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
