
import React from 'react';
import { 
  LineChart,
  AlertCircle,
  Search,
  Globe,
  FileCheck,
  Antenna
} from 'lucide-react';

const ClinicalResearch = () => {
  const features = [
    {
      icon: <LineChart size={24} />,
      title: "AI-Powered Real-World Data Analytics",
      description: "AI extracts insights from our database of electronic health records, patient registries, and wearable data to enhance clinical trial designs."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "AI-Enhanced Pharmacovigilance",
      description: "Machine learning models detect adverse drug reactions by analyzing thousands of patient records across our wearable devices database."
    },
    {
      icon: <Search size={24} />,
      title: "AI-Driven Drug Repurposing Strategies",
      description: "AI scans our database of patient outcomes across 1,842 research subjects to identify new therapeutic applications for existing drugs."
    },
    {
      icon: <Globe size={24} />,
      title: "Population Health Insights",
      description: "AI analyzes our genomic data samples from diverse populations to help develop region-specific treatment strategies."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Regulatory-Grade AI Analytics",
      description: "AI supports regulatory submissions by extracting evidence from our clinical trials data and electronic health records."
    },
    {
      icon: <Antenna size={24} />,
      title: "AI-Powered Digital Biomarker Discovery",
      description: "AI uncovers novel digital biomarkers from our multi-omics database of 3,800+ genetic samples to refine precision medicine initiatives."
    }
  ];

  return (
    <section id="clinical-research" className="py-20 px-6 bg-health-light/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            Solution 3
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Data-Driven Clinical Research Insights
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI platform leverages 12.5M+ data points across 24 research cohorts to enable more efficient, evidence-based drug development and regulatory approval processes.
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
                AI-driven clinical insights reduce R&D costs by 40% by leveraging our comprehensive patient database, enabling more efficient evidence-based drug development, streamlining regulatory approval processes, and improving therapeutic success rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalResearch;
