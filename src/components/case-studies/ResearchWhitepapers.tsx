
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { FileText, Download, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/Button';

const whitepapers = [
  {
    title: "AI-Driven Precision Medicine: A New Era of Hyper-Personalised Treatment",
    description: "Explores how AI algorithms analyze multi-omics data to create truly personalized treatment plans based on a patient's unique genetic, epigenetic, and metabolic profile.",
    downloadLink: "#",
    icon: <FileText className="h-10 w-10 text-indigo-600" />,
    tags: ["Precision Medicine", "AI", "Multi-omics"]
  },
  {
    title: "Federated Learning in Healthcare: Privacy-Preserving AI for Global Patient Data",
    description: "Details how federated learning allows AI models to be trained across multiple institutions without sharing sensitive patient data, enabling global collaboration while maintaining privacy.",
    downloadLink: "#",
    icon: <FileText className="h-10 w-10 text-purple-600" />,
    tags: ["Federated Learning", "Privacy", "Global Healthcare"]
  },
  {
    title: "Digital Twin Technology & Predictive Healthcare: The Future of AI Medicine",
    description: "Examines how creating digital twins of patients enables AI to simulate disease progression and treatment outcomes, revolutionizing preventative medicine.",
    downloadLink: "#",
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    tags: ["Digital Twins", "Predictive Healthcare", "Simulation"]
  }
];

const ResearchWhitepapers = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-indigo-50 rounded-lg mb-4">
            <FileText className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Research & Whitepapers
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-indigo-700/70 max-w-3xl mx-auto">
            Access in-depth research, AI-driven healthcare reports, and scientific whitepapers 
            from Akeno Health's R&D team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whitepapers.map((paper, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full border-none group overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-50/80 to-transparent border-b border-indigo-100/50 pb-4">
                <div className="mb-3">
                  {paper.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-indigo-900 leading-tight">
                  {paper.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-indigo-700/70 mb-4">
                  {paper.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {paper.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 ml-auto text-indigo-600 group-hover:bg-indigo-50"
                >
                  <Download size={14} />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            <Users size={18} className="mr-2" />
            Join Our Research Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchWhitepapers;
