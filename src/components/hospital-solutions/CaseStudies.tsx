
import React from 'react';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered ICU Monitoring",
      challenge: "A leading hospital was struggling with high ICU mortality rates and staff burnout due to constant patient monitoring needs.",
      solution: "Implementation of Akeno Health's AI-driven early warning system to continuously monitor patient vitals and predict deterioration before critical events occurred.",
      outcome: "ICU mortality rates reduced by 32% within six months, while nursing staff reported 42% less burnout and 68% more time for direct patient care."
    },
    {
      title: "AI-Powered Radiology Support",
      challenge: "A regional hospital network faced increasing radiology backlogs and concerning rates of diagnostic errors in medical imaging.",
      solution: "Deployment of Akeno Health's AI-assisted radiology platform to pre-screen all imaging studies and flag potential abnormalities for radiologist review.",
      outcome: "Misdiagnosis rates reduced by 40%, radiology workflow efficiency improved by 35%, and average time-to-diagnosis decreased from 4 days to 1.2 days."
    },
    {
      title: "AI-Driven Clinical Decision Support",
      challenge: "A large healthcare system struggled with sepsis-related mortality and inconsistent application of best-practice sepsis protocols.",
      solution: "Implementation of Akeno Health's predictive AI-driven decision support system with automated sepsis detection and treatment protocol guidance.",
      outcome: "Sepsis-related deaths reduced by 29%, average antibiotic administration time decreased from 2.8 hours to 42 minutes, and protocol adherence increased to 94%."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            Success Stories
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Case Studies & Testimonials from Healthcare Partners
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world examples of how Akeno Health is transforming hospitals worldwide with AI-powered solutions that enhance patient care and operational efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
        
        <div className="mt-16 bg-gradient-to-r from-health-primary/5 to-health-secondary/5 p-8 rounded-xl">
          <h3 className="text-xl font-medium text-health-dark mb-6 text-center">
            What Healthcare Leaders Are Saying
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-health-primary/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-health-primary/20 flex items-center justify-center mr-4">
                  <span className="text-health-primary font-bold">EC</span>
                </div>
                <div>
                  <h4 className="font-medium">Dr. Emily Collins</h4>
                  <p className="text-sm text-muted-foreground">Chief Medical Officer</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Akeno Health's AI solutions have transformed how we manage our hospital. The predictive analytics and real-time AI insights have saved countless lives and dramatically improved our operational efficiency."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-health-primary/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-health-primary/20 flex items-center justify-center mr-4">
                  <span className="text-health-primary font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-medium">Mark Reynolds</h4>
                  <p className="text-sm text-muted-foreground">Hospital Administrator</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "AI-powered automation has dramatically reduced our administrative burden, allowing us to focus on patient care rather than paperwork. The cost savings have been substantial, and our staff satisfaction has improved significantly."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
