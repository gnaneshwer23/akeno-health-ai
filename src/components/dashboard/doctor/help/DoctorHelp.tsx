
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  FileText,
  BookOpen,
  Search,
  User
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DoctorHelp = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Help & Support</h1>
        <p className="text-muted-foreground">Guidance & technical support for using the AI-powered platform</p>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="py-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search for help topics..." 
              className="pl-10 pr-4 py-6 text-lg w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Help Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FAQs & Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle size={18} className="text-health-primary" />
              FAQs & Troubleshooting
            </CardTitle>
            <CardDescription>Common questions about AI platform use</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="text-sm hover:text-health-primary cursor-pointer">How accurate are AI predictions?</li>
              <li className="text-sm hover:text-health-primary cursor-pointer">Troubleshooting telehealth connections</li>
              <li className="text-sm hover:text-health-primary cursor-pointer">Managing patient data access</li>
              <li className="text-sm hover:text-health-primary cursor-pointer">Understanding risk prediction scores</li>
              <li className="text-sm hover:text-health-primary cursor-pointer">Setting up notifications</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All FAQs</Button>
          </CardFooter>
        </Card>

        {/* AI Assistant */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle size={18} className="text-health-primary" />
              AI Assistant for Support
            </CardTitle>
            <CardDescription>Get instant answers to your questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-4 max-h-[180px] overflow-y-auto space-y-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="bg-accent p-2 rounded-lg">Hello! I'm your AI assistant. How can I help you with the Akeno Health platform today?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="text-sm">
                  <p className="bg-primary text-primary-foreground p-2 rounded-lg">How do I customize AI alert thresholds?</p>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="bg-accent p-2 rounded-lg">You can customize AI alert thresholds in Settings → AI Customization. There you'll find sliders to adjust sensitivity for different types of alerts.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Input 
                placeholder="Type your question here..." 
                className="pr-16"
              />
              <Button className="absolute right-0 top-0 h-full rounded-l-none">
                Ask
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Live Support */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone size={18} className="text-health-primary" />
              Live Support
            </CardTitle>
            <CardDescription>Get help from our technical team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Phone size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Technical Support</p>
                  <p className="text-sm text-muted-foreground">+1 (800) 555-0123</p>
                  <p className="text-xs text-muted-foreground">Available 24/7</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <MessageCircle size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-sm text-muted-foreground">Connect with a support agent</p>
                  <p className="text-xs text-muted-foreground">Typical response in 2 minutes</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <User size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Schedule Training</p>
                  <p className="text-sm text-muted-foreground">1-on-1 platform training</p>
                  <p className="text-xs text-muted-foreground">30-minute guided session</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Contact Support</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Medical Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen size={18} className="text-health-primary" />
            Medical Guidelines & Resources
          </CardTitle>
          <CardDescription>Access latest clinical guidelines, drug interactions, and AI use cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:border-health-primary cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-health-primary" />
                <h3 className="font-medium">Clinical Guidelines</h3>
              </div>
              <p className="text-sm text-muted-foreground">Evidence-based practice guidelines across specialties</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-health-primary cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-health-primary" />
                <h3 className="font-medium">Drug Reference</h3>
              </div>
              <p className="text-sm text-muted-foreground">Comprehensive medication database with interactions</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-health-primary cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-health-primary" />
                <h3 className="font-medium">AI Use Cases</h3>
              </div>
              <p className="text-sm text-muted-foreground">Real-world examples of AI application in clinical practice</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-health-primary cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-health-primary" />
                <h3 className="font-medium">Telehealth Best Practices</h3>
              </div>
              <p className="text-sm text-muted-foreground">Guidelines for effective remote patient consultations</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-health-primary cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-health-primary" />
                <h3 className="font-medium">Research Database</h3>
              </div>
              <p className="text-sm text-muted-foreground">Latest medical research and clinical studies</p>
            </div>
            <div className="border rounded-lg p-4 hover:border-health-primary cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-health-primary" />
                <h3 className="font-medium">Platform Documentation</h3>
              </div>
              <p className="text-sm text-muted-foreground">Detailed guides on using all platform features</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorHelp;
