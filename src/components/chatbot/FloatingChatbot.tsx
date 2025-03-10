
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface FloatingChatbotProps {
  id?: string;
}

const FloatingChatbot: React.FC<FloatingChatbotProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // For now, we'll just display a toast since this is a demo
    toast({
      title: "Message Sent",
      description: "Thank you for your message. Our team will respond shortly.",
    });
    
    setMessage('');
    // In a real app, you'd send the message to a backend API here
  };

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
              <p className="text-sm opacity-90">How can we help you today?</p>
            </div>

            <div className="h-64 p-4 overflow-y-auto bg-gray-50">
              <div className="flex flex-col space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm font-medium">Akeno AI</p>
                  <p className="text-sm">Hello! How can I assist with your healthcare needs today?</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
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
