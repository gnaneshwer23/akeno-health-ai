
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SuggestedQuestions from './SuggestedQuestions';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';

// Use the existing mock responses
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

const ChatWidget = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to the bottom of the messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

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
    
    // Auto-send the suggested question
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
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="h-14 w-14 rounded-full bg-gradient-to-r from-health-primary to-health-secondary hover:opacity-90 shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-md md:max-w-lg p-0 flex flex-col h-[80vh] border-0 shadow-2xl rounded-xl overflow-hidden" side="right">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-health-primary to-health-secondary p-4 shadow-md">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-white">Akeno AI Assistant</h3>
                <p className="text-xs text-white/80">Online | Powered by Advanced Health AI</p>
              </div>
              <div className="ml-auto flex gap-2">
                <Button 
                  onClick={handleClearChat}
                  variant="ghost" 
                  className="text-white hover:bg-white/20"
                  size="sm"
                >
                  Clear Chat
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Suggested questions sidebar */}
            <div className="hidden md:block overflow-y-auto border-r border-gray-100">
              <SuggestedQuestions onSelectQuestion={handleSuggestedQuestion} />
            </div>
            
            {/* Chat messages */}
            <div className="md:col-span-2 flex flex-col h-full">
              <div className="flex-grow p-4 overflow-y-auto">
                <div className="space-y-5">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' 
                            ? 'bg-health-primary text-white' 
                            : 'bg-health-primary/10'
                        }`}>
                          {message.sender === 'user' ? (
                            <User size={16} />
                          ) : (
                            <Bot size={16} className="text-health-primary" />
                          )}
                        </div>
                        
                        <div className={`mx-2 p-3 rounded-2xl shadow-sm ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-health-primary to-health-secondary text-white rounded-tr-none'
                            : 'bg-white rounded-tl-none border border-gray-100'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <span className={`text-xs mt-1 block ${
                            message.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-start mt-5">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/10 flex items-center justify-center">
                      <Bot size={16} className="text-health-primary" />
                    </div>
                    <div className="mx-2 px-4 py-2 bg-gray-100 rounded-full">
                      <div className="flex space-x-1 items-center">
                        <div className="w-2 h-2 bg-health-primary rounded-full typing-dot"></div>
                        <div className="w-2 h-2 bg-health-primary rounded-full typing-dot"></div>
                        <div className="w-2 h-2 bg-health-primary rounded-full typing-dot"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} className="h-4" />
              </div>
              
              {/* Input form */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 bg-white">
                <div className="relative flex rounded-full border border-gray-200 bg-gray-50 focus-within:ring-1 focus-within:ring-health-primary focus-within:border-health-primary overflow-hidden shadow-sm">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question here..."
                    className="flex-grow border-0 bg-transparent focus-visible:ring-0 rounded-l-full px-4"
                  />
                  <Button 
                    type="submit" 
                    disabled={!input.trim()}
                    className="rounded-full px-4 bg-gradient-to-r from-health-primary to-health-secondary hover:opacity-90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatWidget;
