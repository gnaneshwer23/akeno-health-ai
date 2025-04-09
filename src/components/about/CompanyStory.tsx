import React from 'react';
import { Lightbulb, Brain, Network, Activity, Calendar, Zap, Fingerprint, Crown, Microscope, Globe } from 'lucide-react';
import { StoryHeader } from './company-story/StoryHeader';
import { QuestionsList } from './company-story/QuestionsList';
import { TimelineMilestones } from './company-story/TimelineMilestones';
import { StoryFooter } from './company-story/StoryFooter';
import { BackgroundDecorations } from './company-story/BackgroundDecorations';

export const CompanyStory = () => {
  const milestones = [
    {
      title: "Inception",
      description: "Conceived by AI experts, medical professionals, and biotech innovators who saw the urgent need for a smarter, AI-driven healthcare system.",
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-500/20 text-amber-700"
    },
    {
      title: "Technology Development",
      description: "Built the world's first fully AI-powered personalised healthcare ecosystem integrating continuous monitoring, AI-driven diagnostics, and blockchain-secured patient records.",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      color: "bg-indigo-500/20 text-indigo-700"
    },
    {
      title: "Clinical Validation & Partnerships",
      description: "Collaborated with hospitals, pharma companies, and research institutions to ensure real-world applicability and high-impact health outcomes.",
      icon: <Network className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-500/20 text-purple-700"
    },
    {
      title: "Global Expansion",
      description: "Scaling our platform to deliver world-class AI-powered healthcare solutions across multiple regions and demographics.",
      icon: <Activity className="h-8 w-8 text-emerald-500" />,
      color: "bg-emerald-500/20 text-emerald-700"
    }
  ];

  const journeyMilestones = [
    {
      year: "2020",
      title: "The Idea Was Born",
      description: "During the global pandemic, the cracks in traditional healthcare systems became evident — reactive care, siloed data, and late diagnoses. This inspired the vision of Akeno Health: a future where AI-powered, predictive, patient-centric care becomes the global standard.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      color: "bg-amber-500"
    },
    {
      year: "2021",
      title: "Building the First Prototype",
      description: "We began building the core AI engine, focusing on real-time data collection from wearables and integrating Electronic Health Records (EHRs). Early tests showed the power of predictive analytics in chronic care scenarios.",
      icon: <Brain className="h-6 w-6 text-white" />,
      color: "bg-indigo-500"
    },
    {
      year: "2022",
      title: "Expanding Into Digital Twins & Federated Learning",
      description: "We introduced our first generation of patient-specific digital twins, enabling simulations of disease progression and treatment outcomes. We also implemented federated learning, allowing hospital collaborations without compromising patient privacy.",
      icon: <Fingerprint className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      year: "2023",
      title: "Clinical Collaborations & Patent Secured",
      description: "Secured our first patent for privacy-first, AI-powered diagnostics. Partnered with hospitals and research institutes in the UK, Europe, and India to validate our platform in real-world environments. Clinical pilot programs for diabetes, oncology, and cardiology began.",
      icon: <Microscope className="h-6 w-6 text-white" />,
      color: "bg-blue-500"
    },
    {
      year: "2024",
      title: "AI Studio, Quantum Simulation & Pharma Integration",
      description: "Launched the AI Studio for data scientists and clinicians. Integrated quantum simulation workflows for drug discovery, and partnered with pharmaceutical firms to accelerate clinical trial recruitment. Added blockchain-based Universal Health Record (UHR) functionality.",
      icon: <Zap className="h-6 w-6 text-white" />,
      color: "bg-green-500"
    },
    {
      year: "2025",
      title: "Public Beta, Global Expansion & Next-Gen Features",
      description: "Released Akeno Health Beta to early partners and users. Rolled out adaptive learning digital twins, multi-omics modelling, and global federated R&D networks. Preparing for regulatory clearances (FDA, CE) and public product launch.",
      icon: <Globe className="h-6 w-6 text-white" />,
      color: "bg-teal-500"
    }
  ];

  const questions = [
    "What if healthcare could be predictive rather than reactive?",
    "What if AI could prevent disease before symptoms appear?",
    "What if patients could have full control over their own health data?"
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden" id="story">
      <BackgroundDecorations />
      
      <div className="max-w-6xl mx-auto">
        <StoryHeader questions={questions} />
        <QuestionsList questions={questions} />
        
        <div className="mt-24 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Journey: From Vision to Innovation
              </span>
            </h2>
            <p className="text-xl text-health-dark/70 max-w-3xl mx-auto italic">
              Akeno Health was born from a simple idea — what if healthcare could predict, prevent, and personalise care long before symptoms appear?
            </p>
          </div>
          
          <TimelineMilestones 
            detailedMilestones={journeyMilestones}
            variant="detailed"
          />
          
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-health-dark mb-4">What's Next?</h3>
            <p className="text-xl text-health-dark/80 max-w-3xl mx-auto">
              By 2026, we aim to make <span className="font-semibold">real-time precision healthcare</span> accessible to over 
              <span className="font-semibold"> 100 million users globally</span>, transforming not only how care is delivered, but how it's experienced — 
              <span className="font-semibold"> from reactive to predictive</span>, from isolated systems to 
              <span className="font-semibold"> one unified AI ecosystem.</span>
            </p>
          </div>
        </div>
        
        <StoryFooter />
      </div>
    </section>
  );
};
