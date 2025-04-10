
import React from 'react';
import { Brain, Dna, Beaker, Stethoscope, Database, Smartphone, FileText, Image, HeartPulse, MonitorSmartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import '@/styles/analytics/impact-graph.css';

// Define the impact data structure
interface ImpactData {
  category: string;
  score: number;
  icon: React.ReactNode;
  color: string;
}

// Define data source structure
interface DataSource {
  icon: React.ReactNode;
  color: string;
  label: string;
}

const HealthcareAIImpactGraph: React.FC = () => {
  // Data for the impact scores
  const impactData: ImpactData[] = [
    {
      category: 'Disease Prediction',
      score: 85,
      icon: <Brain className="h-8 w-8 text-cyan-400" />,
      color: 'from-cyan-600 to-cyan-300'
    },
    {
      category: 'Precision Medicine',
      score: 92,
      icon: <Dna className="h-8 w-8 text-purple-400" />,
      color: 'from-purple-600 to-purple-300'
    },
    {
      category: 'Drug Discovery',
      score: 78,
      icon: <Beaker className="h-8 w-8 text-blue-400" />,
      color: 'from-blue-600 to-blue-300'
    },
    {
      category: 'AI Clinical Decision',
      score: 88,
      icon: <Stethoscope className="h-8 w-8 text-rose-400" />,
      color: 'from-rose-500 to-rose-300'
    },
    {
      category: 'Data-Driven Healthcare',
      score: 83,
      icon: <Database className="h-8 w-8 text-amber-400" />,
      color: 'from-amber-600 to-amber-300'
    }
  ];

  // Data sources list
  const dataSources: DataSource[] = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      color: "text-blue-400",
      label: "Wearable Data – Real-time Monitoring"
    },
    {
      icon: <Dna className="h-5 w-5" />,
      color: "text-pink-400",
      label: "Genomic Data – Molecular Analysis"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      color: "text-yellow-400",
      label: "Cognitive Health – Mental Health Metrics"
    },
    {
      icon: <Image className="h-5 w-5" />,
      color: "text-red-400",
      label: "Medical Imaging – Visual Diagnostics"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      color: "text-green-400",
      label: "Clinical Records – Patient History"
    }
  ];

  // AI Core capabilities
  const aiCapabilities = [
    { icon: "🔍", label: "Predictive Analytics", borderColor: "border-blue-500" },
    { icon: "🧠", label: "Diagnostic Intelligence", borderColor: "border-purple-500" },
    { icon: "🩺", label: "Clinical Decision", borderColor: "border-pink-500" },
    { icon: "🔬", label: "Research & Discovery", borderColor: "border-green-500" }
  ];

  return (
    <Card className="w-full overflow-hidden bg-slate-900 text-white border-slate-700">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Bridging Data, Intelligence, and Care
        </CardTitle>
        <CardDescription className="text-slate-400">
          Healthcare AI Impact Assessment across domains
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Left Column: Data Sources */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Data Sources</h3>
            <ul className="space-y-4">
              {dataSources.map((source, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className={`${source.color} flex items-center justify-center`}>
                    {source.icon}
                  </span>
                  <span>{source.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column: Akeno AI Core */}
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-10 shadow-xl mb-6 text-center">
              <h3 className="text-2xl font-bold text-white">Akeno AI</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className={`bg-gray-800 p-4 rounded-xl border ${capability.borderColor}`}>
                  <span className="mr-2">{capability.icon}</span>
                  <span>{capability.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: System-Wide Benefits (Impact Graph) */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">System-Wide Benefits</h3>
            
            {/* Bar Graph */}
            <div className="relative h-[400px] flex items-end justify-between px-2 pt-8 pb-16">
              {/* Y-axis label */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 transform -rotate-90 text-sm font-medium text-slate-400">
                Impact Score
              </div>
              
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pt-8 pb-16">
                {[0, 25, 50, 75, 100].reverse().map((value) => (
                  <div key={value} className="relative w-full h-px bg-slate-800">
                    <span className="absolute -left-7 -translate-y-1/2 text-xs text-slate-500">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Bars */}
              {impactData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center w-1/6 min-w-[40px] group"
                  style={{zIndex: 10 - index}} // Ensure hover states work properly
                >
                  {/* Bar */}
                  <div className="relative w-full flex justify-center">
                    <div 
                      className={`w-10 md:w-12 bg-gradient-to-t ${item.color} rounded-t-lg shadow-lg impact-bar hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] impact-bar-animation`}
                      style={{ 
                        height: `${item.score}%`,
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {/* Score value (shown on hover) */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Score: {item.score}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category label - shorter width for better text wrapping */}
                  <div className="absolute bottom-[-4.5rem] w-20 text-center">
                    <div className="text-white text-xs font-medium leading-tight">
                      {item.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthcareAIImpactGraph;
