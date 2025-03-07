
import React from 'react';
import { cn } from '@/lib/utils';
import { Smartphone, Database, Brain, FlaskConical, Activity, HeartPulse, Beaker } from 'lucide-react';

const InfographicSection = () => {
  const journeySteps = [
    {
      step: 1,
      title: "Data Integration",
      content: "Sync wearables, medical records, and genetic data with our platform",
      icon: <Smartphone size={24} />,
      color: "indigo"
    },
    {
      step: 2,
      title: "Continuous Analysis",
      content: "AI interprets your health data in real-time",
      icon: <Database size={24} />,
      color: "purple"
    },
    {
      step: 3,
      title: "Risk Assessment",
      content: "Your Digital Twin predicts health risks with high accuracy",
      icon: <Brain size={24} />,
      color: "blue"
    },
    {
      step: 4,
      title: "Custom Treatments",
      content: "Receive personalized therapy recommendations",
      icon: <FlaskConical size={24} />,
      color: "cyan"
    },
    {
      step: 5,
      title: "Adaptive Care",
      content: "Treatment adjustments based on your response",
      icon: <Activity size={24} />,
      color: "teal"
    },
    {
      step: 6,
      title: "Clinical Insights",
      content: "Your doctor receives AI-driven treatment guidance",
      icon: <HeartPulse size={24} />,
      color: "pink"
    },
    {
      step: 7,
      title: "Research Impact",
      content: "Your anonymized data helps advance medical breakthroughs",
      icon: <Beaker size={24} />,
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'indigo':
        return {
          bg: "bg-indigo-50",
          gradient: "from-indigo-500 to-indigo-600",
          border: "border-indigo-200",
          light: "bg-indigo-100",
          shadow: "shadow-indigo-200/50",
          iconBg: "bg-indigo-500/10 text-indigo-600"
        };
      case 'purple':
        return {
          bg: "bg-purple-50",
          gradient: "from-purple-500 to-purple-600",
          border: "border-purple-200",
          light: "bg-purple-100",
          shadow: "shadow-purple-200/50",
          iconBg: "bg-purple-500/10 text-purple-600"
        };
      case 'blue':
        return {
          bg: "bg-blue-50",
          gradient: "from-blue-500 to-blue-600",
          border: "border-blue-200",
          light: "bg-blue-100",
          shadow: "shadow-blue-200/50",
          iconBg: "bg-blue-500/10 text-blue-600"
        };
      case 'cyan':
        return {
          bg: "bg-cyan-50",
          gradient: "from-cyan-500 to-cyan-600",
          border: "border-cyan-200",
          light: "bg-cyan-100",
          shadow: "shadow-cyan-200/50",
          iconBg: "bg-cyan-500/10 text-cyan-600"
        };
      case 'teal':
        return {
          bg: "bg-teal-50",
          gradient: "from-teal-500 to-teal-600",
          border: "border-teal-200",
          light: "bg-teal-100",
          shadow: "shadow-teal-200/50",
          iconBg: "bg-teal-500/10 text-teal-600"
        };
      case 'pink':
        return {
          bg: "bg-pink-50",
          gradient: "from-pink-500 to-pink-600",
          border: "border-pink-200",
          light: "bg-pink-100",
          shadow: "shadow-pink-200/50",
          iconBg: "bg-pink-500/10 text-pink-600"
        };
      case 'amber':
        return {
          bg: "bg-amber-50",
          gradient: "from-amber-500 to-amber-600",
          border: "border-amber-200",
          light: "bg-amber-100",
          shadow: "shadow-amber-200/50",
          iconBg: "bg-amber-500/10 text-amber-600"
        };
      default:
        return {
          bg: "bg-gray-50",
          gradient: "from-gray-500 to-gray-600",
          border: "border-gray-200",
          light: "bg-gray-100",
          shadow: "shadow-gray-200/50",
          iconBg: "bg-gray-500/10 text-gray-600"
        };
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50 -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 font-medium gap-2 border border-indigo-200/50 shadow-sm">
            <Activity size={16} className="text-indigo-500" />
            <span>Patient Experience</span>
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Your Health Journey with <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">Akeno AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How our technology transforms your healthcare experience
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300"></div>
          
          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((item, index) => {
              const colors = getColorClasses(item.color);
              return (
                <div key={index} className={cn(
                  "flex flex-col lg:flex-row gap-6 items-center lg:items-start relative",
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                )}>
                  <div className="absolute left-4 lg:left-1/2 top-0 transform -translate-x-1/2 z-10">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${colors.gradient} text-white text-sm font-medium shadow-md`}>
                      {item.step}
                    </div>
                  </div>
                  
                  <div className={cn(
                    "w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-8",
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  )}>
                    <div className={`bg-white rounded-xl p-6 shadow-md border ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colors.shadow}`}>
                      <div className={cn(
                        "flex gap-4 items-start",
                        index % 2 === 0 ? "lg:flex-row-reverse" : ""
                      )}>
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shadow-md`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-health-dark mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
