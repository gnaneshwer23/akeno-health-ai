
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { 
  Activity, 
  Brain, 
  Stethoscope, 
  Shield, 
  FlaskConical,
  ArrowRight 
} from 'lucide-react';

const PatientHowItWorks = () => {
  const solutionSteps = [
    {
      icon: <Activity size={24} />,
      title: "Early Detection & Prevention",
      description: "AI-powered monitoring that detects illness before it happens using wearables, smart devices, and digital biomarkers to identify health risks before symptoms appear."
    },
    {
      icon: <Brain size={24} />,
      title: "AI-Powered Health Monitoring",
      description: "Hyper-personalised healthcare adapting treatments based on your genetics, microbiome, and real-time health data with customized AI-optimized treatment plans."
    },
    {
      icon: <Stethoscope size={24} />,
      title: "AI-Powered Doctor Support",
      description: "AI-powered clinical decision support helps doctors diagnose and treat you faster and more accurately with real-time medical assessments."
    },
    {
      icon: <Shield size={24} />,
      title: "Patient Privacy & Data Security",
      description: "Blockchain-powered Universal Health Records (UHRs) give you complete control over who accesses your health records with full encryption and security."
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Access to Cutting-Edge Treatments",
      description: "AI-powered clinical trial matching gives you early access to innovative drug therapies and groundbreaking medical research with full transparency."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            How Akeno Health Works for You
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From prevention to personalized treatment—Akeno Health covers every step of your healthcare journey with AI-powered solutions.
          </p>
        </div>
        
        {/* Solution Steps Flow */}
        <div className="hidden md:flex items-center justify-center mb-14 max-w-3xl mx-auto">
          {solutionSteps.slice(0, 3).map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-health-primary/10 flex items-center justify-center mb-2">
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-health-dark text-center">{step.title.split(" – ")[0]}</span>
              </div>
              {index < 2 && <ArrowRight size={24} className="text-health-primary/30 mx-2" />}
            </React.Fragment>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionSteps.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="bg-health-light/10 rounded-2xl p-8 md:p-12 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-health-dark mb-4">Your AI-Powered Health Guardian</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Imagine a healthcare system that detects disease before symptoms appear, personalizes your treatment based on your unique biology, and connects you with the best doctors and research—all in real-time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Activity size={24} className="text-amber-600" />
              </div>
              <h4 className="text-lg font-medium text-health-dark mb-2">Continuous AI Health Monitoring</h4>
              <p className="text-muted-foreground text-sm">Real-time health tracking and early disease detection.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Brain size={24} className="text-blue-600" />
              </div>
              <h4 className="text-lg font-medium text-health-dark mb-2">Personalized Treatment Plans</h4>
              <p className="text-muted-foreground text-sm">AI-tailored healthcare based on your unique biology.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Shield size={24} className="text-green-600" />
              </div>
              <h4 className="text-lg font-medium text-health-dark mb-2">Full Data Security</h4>
              <p className="text-muted-foreground text-sm">Blockchain-protected health records under your control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientHowItWorks;
