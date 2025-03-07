
import React from 'react';
import { 
  Brain, 
  Pill, 
  Activity, 
  FileQuestion, 
  Search,
  Users,
  Microscope
} from 'lucide-react';

type SuggestedQuestionsProps = {
  onSelectQuestion: (question: string) => void;
};

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ 
  onSelectQuestion 
}) => {
  const questionCategories = [
    {
      title: "General",
      icon: <Search className="h-4 w-4 text-indigo-500" />,
      questions: [
        "What is Akeno Health AI?",
        "How do I create an account?",
        "What solutions do you offer?",
        "Is my data secure?",
      ]
    },
    {
      title: "Patient Solutions",
      icon: <Users className="h-4 w-4 text-blue-500" />,
      questions: [
        "How does the health monitoring work?",
        "What is a digital twin?",
        "How do I use the mobile app?",
        "Can I share data with my doctor?",
      ]
    },
    {
      title: "Doctor Solutions",
      icon: <Activity className="h-4 w-4 text-green-500" />,
      questions: [
        "How accurate is the AI diagnostic?",
        "How does remote monitoring work?",
        "What types of health reports are available?",
        "Can I integrate with my EMR system?",
      ]
    },
    {
      title: "Biotech Solutions",
      icon: <Microscope className="h-4 w-4 text-amber-500" />,
      questions: [
        "How does the drug discovery platform work?",
        "Tell me about clinical research tools",
        "What is synthetic biology?",
        "How can quantum computing help research?",
      ]
    },
    {
      title: "Support",
      icon: <FileQuestion className="h-4 w-4 text-red-500" />,
      questions: [
        "How do I contact support?",
        "What are your support hours?",
        "How long does it take to get a response?",
        "Is there emergency support?",
      ]
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white h-full">
      <div className="bg-gradient-to-r from-health-primary/90 to-health-secondary/90 p-3">
        <h3 className="font-medium text-white flex items-center">
          <Brain className="h-4 w-4 mr-2" /> 
          Suggested Questions
        </h3>
      </div>
      
      <div className="p-4 divide-y divide-gray-100">
        {questionCategories.map((category, index) => (
          <div key={index} className="py-4 first:pt-0">
            <h4 className="text-sm font-medium flex items-center text-gray-700 mb-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 mr-2">
                {category.icon}
              </div>
              <span>{category.title}</span>
            </h4>
            
            <ul className="space-y-1 pl-8">
              {category.questions.map((question, qIndex) => (
                <li key={qIndex}>
                  <button
                    type="button"
                    onClick={() => onSelectQuestion(question)}
                    className="text-sm text-left w-full px-3 py-1.5 rounded-md hover:bg-health-primary/5 text-gray-600 hover:text-health-primary transition-colors flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mr-2 flex-shrink-0"></span>
                    {question}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
