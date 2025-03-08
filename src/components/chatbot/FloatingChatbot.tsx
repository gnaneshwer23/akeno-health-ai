
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type Message = {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    sender: 'bot',
    text: "Hello! I'm your Akeno Health AI assistant. How can I help you today?",
    timestamp: new Date(),
  }
];

const FloatingChatbot: React.FC = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      sender: 'user',
      text: message,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('faq-chatbot', {
        body: { message: message.trim() }
      });
      
      if (error) {
        throw error;
      }
      
      // Add bot response
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: 'bot',
            text: data.response.answer,
            timestamp: new Date(),
          }
        ]);
        setIsLoading(false);
      }, 500); // Small delay to make it feel more natural
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Something went wrong',
        description: 'Could not process your request. Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col mb-4 transition-all duration-300 animate-in slide-in-from-bottom-5">
          <div className="bg-health-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Akeno Health AI Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="text-white hover:bg-health-primary/80"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 max-h-96 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 ${msg.sender === 'bot' ? 
                  'bg-gray-100 rounded-lg p-3 max-w-[85%] ml-0' : 
                  'bg-health-primary/10 rounded-lg p-3 max-w-[85%] ml-auto'}`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 rounded-lg p-3 max-w-[85%] ml-0 mb-3 flex items-center">
                <Loader2 className="h-4 w-4 mr-2 animate-spin text-health-primary" />
                <p className="text-sm">Typing...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-primary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !message.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      ) : null}
      
      <Button
        onClick={toggleChat}
        className="bg-health-primary hover:bg-health-primary/90 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg group"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-200" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        )}
        <span className="sr-only">{isOpen ? 'Close chat' : 'Open chat'}</span>
      </Button>
    </div>
  );
};

export default FloatingChatbot;
