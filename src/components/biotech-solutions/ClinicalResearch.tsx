
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
      description: "AI extracts insights from EHRs, patient registries, and wearable data to enhance clinical trial designs and post-market surveillance."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "AI-Enhanced Pharmacovigilance",
      description: "Machine learning models detect adverse drug reactions, drug interactions, and long-term safety concerns with greater accuracy."
    },
    {
      icon: <Search size={24} />,
      title: "AI-Driven Drug Repurposing Strategies",
      description: "AI scans chemical libraries and real-world patient outcomes to identify new therapeutic applications for existing drugs."
    },
    {
      icon: <Globe size={24} />,
      title: "Population Health Insights",
      description: "AI analyzes global epidemiology trends and genetic risk factors to help develop region-specific treatment strategies."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Regulatory-Grade AI Analytics",
      description: "AI supports regulatory submissions, compliance tracking, and evidence generation for FDA, EMA, and global health agencies."
    },
    {
      icon: <Antenna size={24} />,
      title: "AI-Powered Digital Biomarker Discovery",
      description: "AI uncovers novel digital biomarkers from multi-omics data, refining precision medicine initiatives and drug development decisions."
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
            Our AI-driven clinical insights enable more efficient, evidence-based drug development, regulatory approval processes, and post-market safety monitoring.
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
                AI-driven clinical insights enable more efficient, evidence-based drug development, regulatory approval processes, and post-market safety monitoring, reducing R&D costs and improving therapeutic success rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalResearch;
