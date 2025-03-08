
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageSquare, Phone, BookOpen, User, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PatientHelp = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    toast({
      title: "Message sent",
      description: "Our support team will respond shortly.",
    });
    
    setChatMessage('');
  };

  const handleScheduleCall = () => {
    toast({
      title: "Coming Soon",
      description: "Call scheduling will be available soon!",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Help Center</h1>
        <p className="text-muted-foreground">Get assistance with using AI-powered healthcare features</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for help topics..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-health-primary/50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="faqs">
        <TabsList className="mb-6">
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
          <TabsTrigger value="support">Live Support</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faqs">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about AI-powered healthcare features</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How accurate is the AI-powered risk assessment?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our AI risk assessment is designed to be highly accurate, using multiple data points from your health profile, genetic information, and real-time biometrics. The system is trained on millions of patient records and validated against clinical outcomes. However, it's important to remember that these are predictive models and should be used alongside professional medical advice, not as a replacement.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How is my health data protected?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Your health data is protected using industry-leading encryption standards both in transit and at rest. We implement strict access controls and adhere to HIPAA compliance requirements. You have complete control over who can access your data through the privacy settings. Additionally, any data used for research is anonymized and aggregated to ensure your privacy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I connect my wearable devices to the platform?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, our platform supports integration with a wide range of wearable devices and health monitors, including Apple Watch, Fitbit, Oura Ring, continuous glucose monitors, and many more. You can connect these devices in the Profile section under "Connected Devices." Once connected, your real-time health data will be analyzed by our AI to provide personalized insights.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I share my health data with my doctor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can share your health data with healthcare providers through the Data Sharing Settings in your profile. Add your doctor's information, and they will receive an invitation to access your health dashboard. You can control exactly what information they can see and for how long. Your doctor will receive a secure link to view your AI-analyzed health data, which can help them make more informed decisions about your care.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>What should I do if I receive a high-risk alert?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      If you receive a high-risk alert, first review the specific details provided in the notification. For urgent alerts (marked in red), you should contact your healthcare provider immediately or seek emergency care if recommended. For moderate risk alerts, schedule a consultation with your doctor within the timeframe suggested. All alerts include specific guidance on next steps and are designed to provide early warnings, but they should be verified by healthcare professionals.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I customize the AI recommendations I receive?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, you can customize the AI recommendations through the Settings page under "AI Customization." Here, you can set your health priorities, adjust the frequency of notifications, and select the interaction style that works best for you. You can also indicate specific health concerns you want the AI to focus on, ensuring the insights you receive are relevant to your personal health goals.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chatbot">
          <Card>
            <CardHeader>
              <CardTitle>AI Support Assistant</CardTitle>
              <CardDescription>Get instant answers to your questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 h-80 overflow-y-auto">
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
                    <MessageSquare size={16} className="text-health-primary" />
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm">Hello! I'm your AI support assistant. How can I help you today with the Akeno Health platform?</p>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end mb-4">
                  <div className="flex-1 max-w-md bg-health-primary/10 p-3 rounded-lg">
                    <p className="text-sm">How do I interpret my health score?</p>
                  </div>
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={16} />
                  </div>
                </div>
                
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
                    <MessageSquare size={16} className="text-health-primary" />
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm">Your Health Score is a comprehensive measure of your overall wellbeing on a scale of 0-100, calculated using multiple factors:</p>
                    <ul className="text-sm mt-2 list-disc pl-5">
                      <li>80-100: Excellent health with low risk factors</li>
                      <li>60-79: Good health with some areas for improvement</li>
                      <li>40-59: Moderate health concerns that need attention</li>
                      <li>Below 40: Significant health risks requiring intervention</li>
                    </ul>
                    <p className="text-sm mt-2">The score is updated daily based on your latest metrics and lifestyle factors. You can tap on the score to see a detailed breakdown of contributing factors.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-primary/50"
                  placeholder="Type your question here..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!chatMessage.trim()}
                >
                  <ArrowRight size={18} className="mr-2" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="support">
          <Card>
            <CardHeader>
              <CardTitle>Live Customer Support</CardTitle>
              <CardDescription>Get help from our healthcare support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare size={24} className="text-health-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Support</h3>
                  <p className="text-muted-foreground mb-4">Send a message to our support team and get a response within 24 hours.</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setChatMessage("I need help with...")}
                  >
                    Send Message
                  </Button>
                </div>
                
                <div className="border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-health-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} className="text-health-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Schedule a Call</h3>
                  <p className="text-muted-foreground mb-4">Book a call with our healthcare support specialists.</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleScheduleCall}
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Support Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">General Support</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8am - 8pm EST</p>
                    <p className="text-muted-foreground">Saturday: 9am - 5pm EST</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Emergency Health Support</h4>
                    <p className="text-muted-foreground">Available 24/7</p>
                    <p className="text-sm text-red-600 mt-2">For medical emergencies, please call 911 or your local emergency number</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Educational Resources</CardTitle>
              <CardDescription>Learn more about AI in healthcare and how to use our platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg overflow-hidden group">
                  <div className="h-40 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <BookOpen size={32} className="text-health-primary" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Getting Started Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">A comprehensive walkthrough of all platform features</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => toast({
                        title: "Coming Soon",
                        description: "This resource will be available soon!",
                      })}
                    >
                      Read Guide
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden group">
                  <div className="h-40 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <BookOpen size={32} className="text-health-primary" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Understanding AI in Healthcare</h3>
                    <p className="text-sm text-muted-foreground mb-4">Learn how AI is revolutionizing personalized healthcare</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => toast({
                        title: "Coming Soon",
                        description: "This resource will be available soon!",
                      })}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden group">
                  <div className="h-40 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <BookOpen size={32} className="text-health-primary" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Health Data Privacy</h3>
                    <p className="text-sm text-muted-foreground mb-4">How we protect your sensitive health information</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => toast({
                        title: "Coming Soon",
                        description: "This resource will be available soon!",
                      })}
                    >
                      Read Guide
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Video Tutorials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 rounded p-4 flex items-start gap-4">
                    <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <BookOpen size={24} className="text-health-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">How to Read Your AI Health Reports</h4>
                      <p className="text-sm text-muted-foreground mb-2">A step-by-step guide to understanding your health data</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toast({
                          title: "Coming Soon",
                          description: "This video will be available soon!",
                        })}
                      >
                        Watch Video
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded p-4 flex items-start gap-4">
                    <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <BookOpen size={24} className="text-health-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Connecting Your Health Devices</h4>
                      <p className="text-sm text-muted-foreground mb-2">Learn how to connect wearables and health monitors</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toast({
                          title: "Coming Soon",
                          description: "This video will be available soon!",
                        })}
                      >
                        Watch Video
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Community Forum</h3>
                <p className="text-muted-foreground mb-4">Join our community to share experiences and get peer support</p>
                <Button onClick={() => toast({
                  title: "Coming Soon",
                  description: "Community forum will be available soon!",
                })}>
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientHelp;
