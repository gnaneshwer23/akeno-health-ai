
import React from 'react';
import ProcessStep from './ProcessStep';
import { Smartphone, Database, Brain, Activity, FlaskConical, Workflow, Dna, LineChart, HeartPulse, Beaker, Users, Shield, FileText } from 'lucide-react';

const ProcessStepsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/50 to-white relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-50 to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 font-medium gap-2 border border-indigo-200/50 shadow-sm">
            <Workflow size={16} className="text-indigo-500" />
            <span>Our Process</span>
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Our <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-Driven</span> Healthcare Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How we combine AI, genomics, and real-time monitoring to revolutionize healthcare
          </p>
        </div>
        
        {/* Step 1 */}
        <ProcessStep
          stepNumber={1}
          title="Data Collection & Digital Twin"
          description="Our AI creates a virtual model of your health by gathering comprehensive data from multiple sources."
          icon={<Database size={60} className="text-indigo-500" />}
          features={[
            {
              icon: <Smartphone size={24} />,
              title: "Wearables & IoT",
              content: "Real-time biometrics from smartwatches, glucose monitors, and fitness trackers."
            },
            {
              icon: <FileText size={24} />,
              title: "Medical Records",
              content: "Secure integration of your clinical data, lab tests, and medical history."
            },
            {
              icon: <Dna size={24} />,
              title: "Genetic Data",
              content: "Analysis of your genomics, proteomics, and microbiome data."
            },
            {
              icon: <Activity size={24} />,
              title: "Lifestyle Data",
              content: "Diet, stress levels, environment, and other health determinants."
            },
          ]}
          outcome="A personalized Digital Twin that simulates your health status and predicts responses to treatments."
        />
        
        {/* Step 2 */}
        <ProcessStep
          stepNumber={2}
          title="Early Disease Detection"
          description="Our AI identifies disease risks before symptoms appear, enabling proactive intervention."
          icon={<LineChart size={60} className="text-purple-500" />}
          features={[
            {
              icon: <Brain size={24} />,
              title: "Pattern Recognition",
              content: "AI detects early biomarkers for chronic conditions years before clinical symptoms."
            },
            {
              icon: <Dna size={24} />,
              title: "Multi-Omics Analysis",
              content: "Integration of genetic and molecular data for precise risk assessment."
            },
            {
              icon: <Activity size={24} />,
              title: "Adaptive Learning",
              content: "Models continuously refine predictions based on new health data."
            },
            {
              icon: <HeartPulse size={24} />,
              title: "Continuous Monitoring",
              content: "Real-time tracking of subtle variations in health markers."
            },
          ]}
          outcome="Early disease warnings and personalized prevention strategies to maintain optimal health."
        />
        
        {/* Step 3 */}
        <ProcessStep
          stepNumber={3}
          title="Personalized Treatment Plans"
          description="Our AI creates tailored therapy recommendations based on your unique biological profile."
          icon={<FlaskConical size={60} className="text-blue-500" />}
          features={[
            {
              icon: <Dna size={24} />,
              title: "Precision Medicine",
              content: "Treatments based on your genetic and epigenetic markers."
            },
            {
              icon: <Shield size={24} />,
              title: "Drug Matching",
              content: "AI finds medications that match your molecular profile."
            },
            {
              icon: <Activity size={24} />,
              title: "Advanced Therapies",
              content: "CRISPR-based insights for genetic and autoimmune conditions."
            },
            {
              icon: <Brain size={24} />,
              title: "Adaptive Optimization",
              content: "Treatment plans that evolve based on your response."
            },
          ]}
          outcome="A dynamic health plan that evolves with your biological state for maximum effectiveness."
        />
        
        {/* Step 4 */}
        <ProcessStep
          stepNumber={4}
          title="Real-Time Health Monitoring"
          description="Our AI continuously monitors your health and adjusts recommendations as your condition changes."
          icon={<Activity size={60} className="text-cyan-500" />}
          features={[
            {
              icon: <Smartphone size={24} />,
              title: "Continuous Tracking",
              content: "Real-time health metrics from wearables and biosensors."
            },
            {
              icon: <Brain size={24} />,
              title: "Intelligent Adjustments",
              content: "AI refines medication, nutrition, and exercise plans based on your data."
            },
            {
              icon: <Workflow size={24} />,
              title: "Predictive Simulations",
              content: "Digital Twin models to anticipate treatment outcomes."
            },
            {
              icon: <HeartPulse size={24} />,
              title: "Clinical Integration",
              content: "Automated alerts for healthcare providers when intervention is needed."
            },
          ]}
          outcome="Proactive healthcare with reduced complications and optimized treatment effectiveness."
        />
        
        {/* Step 5 */}
        <ProcessStep
          stepNumber={5}
          title="Medical Research Acceleration"
          description="Our AI drives breakthroughs in precision medicine and pharmaceutical development."
          icon={<Beaker size={60} className="text-pink-500" />}
          features={[
            {
              icon: <Dna size={24} />,
              title: "Biomarker Discovery",
              content: "AI identifies new therapeutic targets for precision medicine."
            },
            {
              icon: <Users size={24} />,
              title: "Clinical Trial Optimization",
              content: "AI selects ideal trial candidates and predicts outcomes."
            },
            {
              icon: <FlaskConical size={24} />,
              title: "Drug Development",
              content: "AI-powered simulations for faster therapeutic discovery."
            },
            {
              icon: <Brain size={24} />,
              title: "Safety Enhancement",
              content: "Machine learning predicts drug interactions and reduces adverse events."
            },
          ]}
          outcome="Faster development of safer, more effective treatments for complex health conditions."
        />
      </div>
    </section>
  );
};

export default ProcessStepsSection;
