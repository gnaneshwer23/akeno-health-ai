
import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  Brain, 
  Pill, 
  Activity, 
  FileQuestion, 
  Search
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import SuggestedQuestions from './SuggestedQuestions';
import { useToast } from '@/hooks/use-toast';

// Mock responses for different question categories
const MOCK_RESPONSES: Record<string, string[]> = {
  general: [
    "Akeno Health AI combines artificial intelligence, quantum computing, and healthcare expertise to provide personalized healthcare solutions.",
    "Our platform is designed for patients, doctors, and biotech researchers with specialized tools for each user group.",
    "You can create an account by clicking the 'Sign Up' button in the top right corner of our website.",
  ],
  patient: [
    "Our patient solutions include personalized health monitoring, digital twin technology, and a comprehensive mobile health app.",
    "The digital twin technology creates a virtual model of your body to simulate how different treatments might affect you specifically.",
    "Yes, all your health data is encrypted and securely stored according to HIPAA regulations.",
  ],
  doctor: [
    "Our AI diagnostics system analyzes patient data to suggest potential diagnoses with supporting evidence.",
    "The remote monitoring tools allow you to track patients' vitals and health metrics in real-time.",
    "Our health reports feature provides comprehensive analysis of patient data with actionable insights.",
  ],
  biotech: [
    "Our drug discovery platform uses AI to identify potential drug candidates more efficiently.",
    "The clinical research tools help streamline trial design and participant selection.",
    "Our synthetic biology solutions assist in designing and testing biological systems.",
  ],
  quantum: [
    "Quantum computing allows us to process complex biological simulations that would be impossible with traditional computing.",
    "We currently use quantum algorithms for drug discovery and personalized medicine applications.",
    "The main advantage of quantum computing in healthcare is the ability to analyze complex biological systems more accurately.",
  ],
  support: [
    "You can contact our support team via email at support@akenohealthai.com or through the Contact page.",
    "Our standard support hours are Monday through Friday, 9 AM to 6 PM Eastern Time.",
    "For urgent technical issues, please use the 'Emergency Support' option in your dashboard.",
  ],
};

type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const ChatbotInterface = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      content: "Hi there! I'm Akeno's AI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to the bottom of the messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      respondToMessage(input);
      setIsTyping(false);
    }, 1500);
  };

  const respondToMessage = (message: string) => {
    const lowerMessage = message.toLowerCase();
    let responseCategory = 'general';
    
    // Simple keyword matching for demo purposes
    if (lowerMessage.includes('patient') || lowerMessage.includes('app') || lowerMessage.includes('monitoring')) {
      responseCategory = 'patient';
    } else if (lowerMessage.includes('doctor') || lowerMessage.includes('diagnostic') || lowerMessage.includes('monitor')) {
      responseCategory = 'doctor';
    } else if (lowerMessage.includes('biotech') || lowerMessage.includes('drug') || lowerMessage.includes('research')) {
      responseCategory = 'biotech';
    } else if (lowerMessage.includes('quantum') || lowerMessage.includes('computing')) {
      responseCategory = 'quantum';
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('contact')) {
      responseCategory = 'support';
    }
    
    // Get random response from the appropriate category
    const responses = MOCK_RESPONSES[responseCategory];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const botMessage: MessageType = {
      id: Date.now().toString(),
      content: randomResponse,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    
    // Optionally auto-send the suggested question
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: question,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      respondToMessage(question);
      setIsTyping(false);
    }, 1500);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: '1',
        content: "Hi there! I'm Akeno's AI Assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
    
    toast({
      title: "Chat cleared",
      description: "Your conversation has been reset.",
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 mb-8">
        <div className="flex-1">
          <Button 
            onClick={handleClearChat}
            variant="outline" 
            className="w-full"
          >
            Clear Chat
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Suggested questions sidebar on desktop */}
        <div className="hidden md:block w-80 shrink-0">
          <SuggestedQuestions onSelectQuestion={handleSuggestedQuestion} />
        </div>
        
        {/* Main chat interface */}
        <div className="flex-1 bg-white rounded-xl shadow-xl border border-health-primary/10 overflow-hidden flex flex-col">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-health-primary to-health-secondary p-4">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-white">Akeno AI Assistant</h3>
                <p className="text-xs text-white/80">Online | Powered by Advanced Health AI</p>
              </div>
            </div>
          </div>
          
          {/* Messages container */}
          <div className="flex-grow p-4 overflow-y-auto max-h-[500px] bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-gray-200' 
                      : 'bg-health-primary/20'
                  }`}>
                    {message.sender === 'user' ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} className="text-health-primary" />
                    )}
                  </div>
                  
                  <div className={`mx-2 p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-health-primary/10 rounded-tr-none'
                      : 'bg-white shadow-sm rounded-tl-none'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center mr-2">
                  <Bot size={16} className="text-health-primary" />
                </div>
                <div className="flex space-x-1 items-center">
                  <span>Typing</span>
                  <span className="typing-dot">.</span>
                  <span className="typing-dot">.</span>
                  <span className="typing-dot">.</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                className="flex-grow"
              />
              <Button type="submit" disabled={!input.trim()}>
                <Send className="h-4 w-4 mr-1" /> Send
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Suggested questions for mobile - shown below chat */}
      <div className="md:hidden mt-8">
        <SuggestedQuestions onSelectQuestion={handleSuggestedQuestion} />
      </div>
    </div>
  );
};

export default ChatbotInterface;
