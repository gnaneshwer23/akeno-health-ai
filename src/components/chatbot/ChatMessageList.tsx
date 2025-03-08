
import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { ChatMessageType } from '@/types/supabase-types';

interface ChatMessageListProps {
  messages: ChatMessageType[];
  isTyping: boolean;
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ 
  messages, 
  isTyping 
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the messages
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="space-y-5">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      
      {/* Typing indicator */}
      {isTyping && <TypingIndicator />}
      
      <div ref={messagesEndRef} className="h-4" />
    </div>
  );
};

export default ChatMessageList;
