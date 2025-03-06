
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Clock, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

const AIChatbot = () => {
  return (
    <section id="ai-chatbot" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            AI-Powered Chatbot for Instant Support
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get immediate assistance 24/7 with our intelligent AI chatbot, designed to provide 
            instant troubleshooting, personalized health insights, and seamless escalation to human experts when needed.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Round-the-clock support for instant responses to your questions
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <MessageCircle className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">Health Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-driven personalized health and wellness recommendations
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <FileText className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">Troubleshooting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step guides to resolve technical issues quickly
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <ArrowRight className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">Human Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamless escalation to our human support team when needed
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <Button>
            Start Chatting Now
          </Button>
        </div>
        
        <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
          <div className="bg-gray-100 rounded-t-lg p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-700">Akeno AI Assistant</h3>
          </div>
          <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-4">
            <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
              <p className="text-sm">Hello! I'm Akeno's AI Assistant. How can I help you today?</p>
            </div>
            
            <div className="bg-health-primary/10 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
              <p className="text-sm">I need help tracking my medication adherence.</p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
              <p className="text-sm">I can help with that! Our health dashboard has a medication tracking feature. Would you like me to show you how to use it?</p>
            </div>
            
            <div className="bg-health-primary/10 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
              <p className="text-sm">Yes, please show me how to set up reminders.</p>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
              <p className="text-sm">Great! Here's a step-by-step guide to setting up medication reminders...</p>
            </div>
          </div>
          <div className="border-t border-gray-200 p-4 flex">
            <input 
              type="text" 
              placeholder="Type your message here..." 
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-health-primary"
            />
            <Button className="ml-2" size="sm">
              <MessageCircle className="h-4 w-4 mr-1" /> Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;
