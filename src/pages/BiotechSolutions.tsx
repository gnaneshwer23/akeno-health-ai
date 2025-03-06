import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { 
  FlaskConical, 
  Dna, 
  MicroscopeIcon, 
  Brain, 
  LineChart, 
  Shield, 
  Beaker, 
  Pill, 
  Zap, 
  Syringe, 
  BarChart4, 
  Search, 
  Stethoscope, 
  Globe, 
  FileText, 
  Radio
} from 'lucide-react';

const BiotechSolutions = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Biotech & Pharma Solutions - Akeno Health AI';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-health-light">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 px-6 relative overflow-hidden bg-gradient-to-b from-white to-health-light">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
                Biotech & Pharma
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-health-dark mb-6">
                AI-Powered Healthcare Solutions for Biotech & Pharma
              </h1>
            </div>
            
            <div className="max-w-4xl mx-auto mb-12 text-center md:text-lg text-muted-foreground">
              <p className="mb-6">
                At Akeno Health AI, we empower biotech and pharmaceutical companies by leveraging AI-driven drug discovery, 
                biomarker-based clinical trials, synthetic biology, and immune therapy innovations. Our platform integrates 
                machine learning, multi-omics analysis, and real-world data to accelerate drug development, optimize clinical 
                trials, and provide data-driven research insights that reduce costs, enhance precision, and improve treatment efficacy.
              </p>
              <p>
                By combining advanced AI analytics, digital twin technology, and large-scale biological data processing, 
                we provide a comprehensive ecosystem for faster drug discovery, improved patient stratification in clinical trials, 
                and real-world evidence-based therapeutic innovations. Our goal is to revolutionize biotech and pharma by enabling 
                hyper-personalized medicine, increasing R&D efficiency, and reducing the time-to-market for novel therapeutics.
              </p>
            </div>
          </div>
        </section>
        
        {/* Drug Discovery Section */}
        <section id="drug-discovery" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI-Powered Drug Discovery & Biomarker-Driven Clinical Trials
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-primary/20 transition-all">
                <div className="mb-4 p-3 bg-health-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-primary">
                  <MicroscopeIcon size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI-Driven Target Identification & Drug Discovery</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning models analyse genomic, transcriptomic, proteomic, and metabolomic datasets to 
                  identify new drug targets, repurpose existing drugs, and optimize lead compounds. AI speeds up 
                  hit-to-lead optimization, enhancing molecular docking simulations and protein-ligand binding predictions.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-primary/20 transition-all">
                <div className="mb-4 p-3 bg-health-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-primary">
                  <Beaker size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">Biomarker-Based Clinical Trials</h3>
                <p className="text-muted-foreground text-sm">
                  AI integrates multi-omics data and real-world evidence (RWE) to stratify patients based on predictive biomarkers, 
                  ensuring more effective and personalized clinical trial designs. AI-driven biomarker discovery ensures 
                  better treatment response predictions and minimizes adverse effects.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-primary/20 transition-all">
                <div className="mb-4 p-3 bg-health-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-primary">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">Digital Twin Simulations for Drug Development</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered patient digital twins allow for in silico modelling of disease progression and drug response, 
                  helping refine trial protocols before real-world application. These AI-driven simulations reduce trial 
                  failure rates and improve dosing accuracy.
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-primary/20 transition-all">
                <div className="mb-4 p-3 bg-health-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-primary">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI for Trial Optimization & Patient Recruitment</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning models enhance patient recruitment, eligibility screening, and adaptive trial designs, 
                  reducing dropout rates, improving efficiency, and increasing trial success rates. AI also improves patient 
                  monitoring and protocol adherence through remote engagement tools.
                </p>
              </div>
              
              {/* Card 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-primary/20 transition-all">
                <div className="mb-4 p-3 bg-health-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-primary">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">Predictive Modelling for Drug Safety & Efficacy</h3>
                <p className="text-muted-foreground text-sm">
                  AI analyses adverse event patterns, genetic predispositions, and polypharmacy risks to predict drug 
                  responses and optimize treatment regimens. AI-driven pharmacovigilance systems detect safety signals 
                  in real-time, ensuring early risk mitigation.
                </p>
              </div>
            </div>
            
            <div className="bg-health-primary/5 p-6 rounded-xl border border-health-primary/10">
              <h4 className="flex items-center gap-2 text-health-primary font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-health-primary text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                AI accelerates drug discovery timelines, optimizes biomarker-driven clinical trials, enhances patient stratification, 
                and increases the likelihood of successful therapeutic outcomes while reducing development costs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Synthetic Biology Section */}
        <section id="synthetic-biology" className="py-16 px-6 bg-health-light/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-health-secondary/10 text-health-secondary mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                AI-Powered Synthetic Biology & Immune Therapy Innovations
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-secondary/20 transition-all">
                <div className="mb-4 p-3 bg-health-secondary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-secondary">
                  <Dna size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI-Designed Gene & Cell Therapies</h3>
                <p className="text-muted-foreground text-sm">
                  AI analyses genomic sequences, CRISPR data, and immune system responses to design optimized gene-editing 
                  solutions for rare diseases, cancer, and autoimmune disorders. AI-driven synthetic biology helps create 
                  precision-engineered cells and biomolecules for regenerative medicine.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-secondary/20 transition-all">
                <div className="mb-4 p-3 bg-health-secondary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-secondary">
                  <Pill size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">Synthetic Biology for Precision Medicine & AI-Guided Drug Engineering</h3>
                <p className="text-muted-foreground text-sm">
                  AI-driven computational biology and protein engineering help design customized therapeutic molecules, 
                  enzyme-based treatments, and biologics tailored to specific patient needs. AI models accelerate mRNA 
                  therapeutics, targeted biologics, and nanoparticle drug delivery systems.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-secondary/20 transition-all">
                <div className="mb-4 p-3 bg-health-secondary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-secondary">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI in Immunotherapy Development</h3>
                <p className="text-muted-foreground text-sm">
                  AI models predict immune checkpoint inhibitor responses, T-cell receptor (TCR) interactions, and antibody 
                  engineering for enhanced cancer immunotherapy and autoimmune disease treatments. AI-driven neoantigen 
                  prediction models personalize immunotherapy selection for better efficacy.
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-secondary/20 transition-all">
                <div className="mb-4 p-3 bg-health-secondary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-secondary">
                  <Syringe size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI-Guided Personalized Vaccine Development</h3>
                <p className="text-muted-foreground text-sm">
                  AI identifies mutation patterns in infectious diseases to accelerate vaccine design and optimize immune 
                  response predictions. AI accelerates the development of next-generation vaccines by identifying ideal 
                  antigenic targets and optimizing adjuvant selection.
                </p>
              </div>
              
              {/* Card 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-secondary/20 transition-all">
                <div className="mb-4 p-3 bg-health-secondary/10 rounded-full w-12 h-12 flex items-center justify-center text-health-secondary">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">Real-Time Therapy Optimization & AI-Powered Adaptive Immunotherapy</h3>
                <p className="text-muted-foreground text-sm">
                  AI continuously monitors patient immune profiles and treatment responses, dynamically adjusting dosage 
                  and therapeutic combinations for maximum efficacy. AI predicts cytokine storm risks and therapy resistance 
                  patterns, allowing clinicians to personalize treatment strategies dynamically.
                </p>
              </div>
            </div>
            
            <div className="bg-health-secondary/5 p-6 rounded-xl border border-health-secondary/10">
              <h4 className="flex items-center gap-2 text-health-secondary font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-health-secondary text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                AI enhances precision therapy design, immune modulation strategies, and biologic drug development, 
                ensuring faster, safer, and more effective treatments while increasing the success rate of advanced therapeutics.
              </p>
            </div>
          </div>
        </section>
        
        {/* Clinical Research Section */}
        <section id="clinical-research" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-health-accent/10 text-health-accent mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
                Data-Driven Clinical Research Insights
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-accent/20 transition-all">
                <div className="mb-4 p-3 bg-health-accent/10 rounded-full w-12 h-12 flex items-center justify-center text-health-accent">
                  <BarChart4 size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI-Powered Real-World Data (RWD) Analytics</h3>
                <p className="text-muted-foreground text-sm">
                  AI extracts insights from EHRs, patient registries, and wearable data to enhance clinical trial designs, 
                  post-market surveillance, and regulatory compliance. AI helps identify new therapeutic indications based 
                  on real-world data trends.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-accent/20 transition-all">
                <div className="mb-4 p-3 bg-health-accent/10 rounded-full w-12 h-12 flex items-center justify-center text-health-accent">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI-Enhanced Pharmacovigilance & Post-Market Surveillance</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning models detect adverse drug reactions (ADRs), drug interactions, and long-term safety concerns 
                  with greater accuracy, helping pharmaceutical companies refine safety labelling and minimize liability risks.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-accent/20 transition-all">
                <div className="mb-4 p-3 bg-health-accent/10 rounded-full w-12 h-12 flex items-center justify-center text-health-accent">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI-Driven Drug Repurposing Strategies</h3>
                <p className="text-muted-foreground text-sm">
                  AI scans chemical libraries, disease ontologies, and real-world patient outcomes to identify new therapeutic 
                  applications for existing drugs, accelerating time-to-market for off-label applications.
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-accent/20 transition-all">
                <div className="mb-4 p-3 bg-health-accent/10 rounded-full w-12 h-12 flex items-center justify-center text-health-accent">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">Population Health Insights for Pharma Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  AI analyses global epidemiology trends, disease prevalence, and genetic risk factors to help biopharma 
                  companies develop region-specific treatment strategies, ensuring equitable access to innovative medicines. 
                  AI-driven health economics modelling also enables cost-effective market access strategies.
                </p>
              </div>
              
              {/* Card 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-accent/20 transition-all">
                <div className="mb-4 p-3 bg-health-accent/10 rounded-full w-12 h-12 flex items-center justify-center text-health-accent">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">Regulatory-Grade AI Analytics & Compliance Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  AI supports regulatory submissions, real-time compliance tracking, and AI-driven evidence generation for FDA, 
                  EMA, and global health agencies. AI-assisted regulatory automation helps streamline documentation for faster approvals.
                </p>
              </div>
              
              {/* Card 6 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-health-accent/20 transition-all">
                <div className="mb-4 p-3 bg-health-accent/10 rounded-full w-12 h-12 flex items-center justify-center text-health-accent">
                  <Radio size={24} />
                </div>
                <h3 className="text-xl font-medium text-health-dark mb-3">AI-Powered Digital Biomarker Discovery</h3>
                <p className="text-muted-foreground text-sm">
                  AI uncovers novel digital biomarkers from multi-omics data and patient-reported outcomes, refining precision 
                  medicine initiatives and improving drug development decisions.
                </p>
              </div>
            </div>
            
            <div className="bg-health-accent/5 p-6 rounded-xl border border-health-accent/10">
              <h4 className="flex items-center gap-2 text-health-accent font-medium mb-2">
                <span className="w-6 h-6 rounded-full bg-health-accent text-white flex items-center justify-center text-xs">✓</span>
                Outcome
              </h4>
              <p className="text-health-dark">
                AI-driven clinical insights enable more efficient, evidence-based drug development, regulatory approval processes, 
                and post-market safety monitoring, reducing R&D costs and improving therapeutic success rates.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-health-light to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-health-secondary opacity-5 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-health-primary text-white mb-6">
              <FlaskConical size={24} />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-6">
              Transform Biotech & Pharma Research with AI-Powered Solutions
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              With Akeno Health AI, biotech and pharmaceutical companies gain access to AI-powered solutions that transform 
              drug discovery, optimize clinical trials, and enhance real-world data analytics—accelerating innovation and 
              improving global healthcare outcomes. By integrating AI into pharmaceutical research, we pave the way for a 
              new era of precision medicine, ensuring faster, safer, and more effective therapeutic innovations for patients worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="primary">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiotechSolutions;
