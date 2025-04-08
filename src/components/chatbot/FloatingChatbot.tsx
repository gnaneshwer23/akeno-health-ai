
import React, { useState } from 'react';
import { MessageCircle, X, Calendar, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth/useAuth';

interface FloatingChatbotProps {
  id?: string;
}

const FloatingChatbot: React.FC<FloatingChatbotProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  const { user } = useAuth();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Detect specific healthcare-related commands
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
      toast({
        title: "Appointment Request",
        description: "I'll help you schedule that appointment. A care coordinator will follow up shortly.",
      });
    } else if (lowerMessage.includes('medication') || lowerMessage.includes('reminder') || lowerMessage.includes('pill')) {
      toast({
        title: "Medication Reminder Set",
        description: "I've set a reminder for your medication. You'll receive notifications at the scheduled times.",
      });
    } else {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. Our healthcare team will respond shortly.",
      });
    }
    
    setMessage('');
  };

  // Generate personalized greeting based on user data
  const getPersonalizedGreeting = () => {
    if (!user) return "Hello! How can we help you today?";
    
    const hour = new Date().getHours();
    let greeting = "Good morning";
    if (hour >= 12 && hour < 18) greeting = "Good afternoon";
    else if (hour >= 18) greeting = "Good evening";
    
    return `${greeting}, ${user.name}! How can I assist with your healthcare needs today?`;
  };

  // Quick action buttons for common healthcare needs
  const quickActions = [
    { icon: <Calendar size={16} />, text: "Schedule Appointment" },
    { icon: <Pill size={16} />, text: "Medication Reminder" }
  ];

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          id={id}
          onClick={toggleOpen}
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-lg bg-health-primary hover:bg-health-secondary transition-all duration-300",
            isOpen && "rotate-90"
          )}
          aria-label="Open chatbot"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-xl border overflow-hidden"
          >
            <div className="bg-gradient-to-r from-health-primary to-health-secondary p-4 text-white">
              <h3 className="font-bold">Akeno Health Assistant</h3>
              <p className="text-sm opacity-90">Your personal healthcare companion</p>
            </div>

            <div className="h-64 p-4 overflow-y-auto bg-gray-50">
              <div className="flex flex-col space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm font-medium">Akeno AI</p>
                  <p className="text-sm">{getPersonalizedGreeting()}</p>
                </div>
                
                {user && (
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                    <p className="text-sm">I see you have an appointment with Dr. Sarah this Friday. Would you like me to help you prepare for it?</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="px-4 py-2 border-t border-b bg-gray-50">
              <p className="text-xs text-gray-500 mb-2">Quick Actions:</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-1 whitespace-nowrap bg-white"
                    onClick={() => setMessage(action.text)}
                  >
                    {action.icon}
                    <span>{action.text}</span>
                  </Button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your healthcare question..."
                  className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-health-primary/50"
                />
                <Button 
                  type="submit" 
                  disabled={!message.trim()}
                  className="bg-health-primary hover:bg-health-secondary"
                >
                  Send
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;
