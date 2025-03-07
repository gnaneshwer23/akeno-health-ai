
import React, { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputFormProps {
  input: string;
  setInput: (value: string) => void;
  handleSendMessage: (e?: React.FormEvent) => void;
  isOpen: boolean;
}

const ChatInputForm: React.FC<ChatInputFormProps> = ({ 
  input, 
  setInput, 
  handleSendMessage,
  isOpen
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  return (
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
  );
};

export default ChatInputForm;
