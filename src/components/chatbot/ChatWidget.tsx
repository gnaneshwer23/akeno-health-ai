
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import SuggestedQuestions from './SuggestedQuestions';
import ChatHeader from './ChatHeader';
import ChatMessageList from './ChatMessageList';
import ChatInputForm from './ChatInputForm';
import { useAuth } from '@/contexts/auth/useAuth';
import { 
  getResponseForMessage, 
  createUserMessage, 
  createBotMessage,
  getInitialMessage,
  handleHealthAction,
  getPatientSpecificResponse
} from './chatService';
import { ChatMessageType } from '@/types/supabase-types';

const ChatWidget = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([getInitialMessage()]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = createUserMessage(input);
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
    // Check for healthcare action commands
    const actionResult = handleHealthAction(message, user);
    
    if (actionResult.isAction) {
      // Add bot response for action
      const botMessage = createBotMessage(actionResult.response);
      setMessages((prev) => [...prev, botMessage]);
      
      // Show toast for successful actions
      if (actionResult.success) {
        toast({
          title: actionResult.toastTitle,
          description: actionResult.toastDescription,
        });
      }
      return;
    }
    
    // Get personalized response if user is authenticated
    const responseContent = user 
      ? getPatientSpecificResponse(message, user) 
      : getResponseForMessage(message);
      
    const botMessage = createBotMessage(responseContent);
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    
    // Auto-send the suggested question
    const userMessage = createUserMessage(question);
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      respondToMessage(question);
      setIsTyping(false);
    }, 1500);
  };

  const handleClearChat = () => {
    setMessages([getInitialMessage()]);
    
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
            data-testid="chatbot-button"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-md md:max-w-lg p-0 flex flex-col h-[80vh] border-0 shadow-2xl rounded-xl overflow-hidden" side="right">
          {/* Chat header */}
          <ChatHeader 
            onClose={() => setIsOpen(false)} 
            onClearChat={handleClearChat}
          />
          
          <div className="grid md:grid-cols-3 flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Suggested questions sidebar */}
            <div className="hidden md:block overflow-y-auto border-r border-gray-100">
              <SuggestedQuestions onSelectQuestion={handleSuggestedQuestion} />
            </div>
            
            {/* Chat messages */}
            <div className="md:col-span-2 flex flex-col h-full">
              <ChatMessageList 
                messages={messages} 
                isTyping={isTyping} 
              />
              
              {/* Input form */}
              <ChatInputForm
                input={input}
                setInput={setInput}
                handleSendMessage={handleSendMessage}
                isOpen={isOpen}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatWidget;
