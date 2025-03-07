
import React from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onClose: () => void;
  onClearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose, onClearChat }) => {
  return (
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
            onClick={onClearChat}
            variant="ghost" 
            className="text-white hover:bg-white/20"
            size="sm"
          >
            Clear Chat
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
