
import React from 'react';
import { Lightbulb, Brain, Network, Activity } from 'lucide-react';
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

  const questions = [
    "What if healthcare could be predictive rather than reactive?",
    "What if AI could prevent disease before symptoms appear?",
    "What if patients could have full control over their own health data?"
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="story">
      <BackgroundDecorations />
      
      <div className="max-w-6xl mx-auto">
        <StoryHeader questions={questions} />
        <QuestionsList questions={questions} />
        <TimelineMilestones milestones={milestones} />
        <StoryFooter />
      </div>
    </section>
  );
};
