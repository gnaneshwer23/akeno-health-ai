
import React from 'react';
import ProcessStep from './ProcessStep';
import { Smartphone, Database, Brain, Activity, FlaskConical, Workflow, Dna, LineChart, HeartPulse, Beaker, Users, Shield, FileText } from 'lucide-react';

const ProcessStepsSection = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Our AI-Driven Healthcare Process
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
          icon={<Database size={60} className="text-health-primary/70" />}
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
          icon={<LineChart size={60} className="text-health-primary/70" />}
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
          icon={<FlaskConical size={60} className="text-health-primary/70" />}
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
          icon={<Activity size={60} className="text-health-primary/70" />}
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
          icon={<Beaker size={60} className="text-health-primary/70" />}
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
