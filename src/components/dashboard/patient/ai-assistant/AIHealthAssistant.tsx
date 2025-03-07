
import React from 'react';
import { MessageSquare, Brain, User } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';

const AIHealthAssistant = () => {
  const { user } = useAuth();

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Health Assistant</CardTitle>
        <CardDescription>Get instant answers to your health questions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-[200px] overflow-y-auto">
          <div className="flex gap-3 mb-3">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
              <Brain size={16} className="text-health-primary" />
            </div>
            <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm">Hello {user?.name}! Based on your recent activity data, I've noticed that your sleep quality has improved by 15% since you started the new evening routine. Would you like some additional recommendations to optimize your sleep further?</p>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end mb-3">
            <div className="flex-1 bg-health-primary/10 p-3 rounded-lg">
              <p className="text-sm">Yes, I'd like to know more about optimizing sleep.</p>
            </div>
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={16} />
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
              <Brain size={16} className="text-health-primary" />
            </div>
            <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm">Great! Here are 3 evidence-based suggestions:</p>
              <ol className="text-sm mt-2 pl-5 list-decimal">
                <li>Try to maintain a consistent sleep schedule, even on weekends</li>
                <li>Limit blue light exposure 1 hour before bedtime</li>
                <li>Consider a magnesium supplement in the evening, as your recent blood work showed slightly low levels</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <input 
            type="text" 
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-primary/50"
            placeholder="Ask about your health..."
          />
          <Button variant="primary" size="icon">
            <MessageSquare size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIHealthAssistant;
