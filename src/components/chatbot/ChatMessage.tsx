
import React from 'react';
import { Bot, User } from 'lucide-react';
import { ChatMessageType } from '@/types/supabase-types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div 
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
            {message.timestamp instanceof Date 
              ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
