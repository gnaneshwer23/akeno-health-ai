
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  MessageSquare,
  FileText,
  PanelLeft,
  Settings,
  Phone,
  UserRound,
  ScreenShare,
  Brain
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const VideoConsultation = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Badge className="bg-red-500">Live</Badge>
                <CardTitle className="text-lg">Video Consultation</CardTitle>
              </div>
              <Badge variant="outline">
                <Clock6 size={14} className="mr-1" />
                12:34
              </Badge>
            </div>
            <CardDescription>Emma Thompson - Type 2 Diabetes Follow-up</CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-hidden">
            <div className="bg-black aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white">
                  <UserRound size={100} className="mx-auto mb-2 opacity-20" />
                  <p className="opacity-60">Waiting for camera...</p>
                </div>
              </div>
              
              {/* Small self video */}
              <div className="absolute bottom-4 right-4 w-[180px] h-[120px] bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>Dr</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* AI Assistant Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-health-primary/80 backdrop-blur-sm">
                  <Brain size={14} className="mr-1" />
                  AI Assistant Active
                </Badge>
              </div>
            </div>
            
            <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <Mic size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <Video size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <ScreenShare size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <Settings size={18} />
                </Button>
              </div>
              
              <Button variant="destructive" size="sm" className="w-full md:w-auto">
                <Phone size={16} className="mr-2" />
                End Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card className="h-full flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Consultation Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex-1 overflow-auto px-4">
            <Tabs defaultValue="notes" className="h-full flex flex-col">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="notes">
                  <FileText size={16} className="mr-2" />
                  Notes
                </TabsTrigger>
                <TabsTrigger value="chat">
                  <MessageSquare size={16} className="mr-2" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="ai">
                  <Brain size={16} className="mr-2" />
                  AI
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="notes" className="flex-1 mt-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Clinical Notes</label>
                    <textarea 
                      className="mt-1 w-full h-40 border rounded-md p-2 text-sm" 
                      placeholder="Enter clinical notes..."
                      defaultValue="Patient reports improved glucose levels after medication adjustment. Still experiences occasional fatigue in afternoons."
                    ></textarea>
                  </div>
                  <Separator />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium">AI-Generated Summary</label>
                      <Badge variant="outline" className="text-xs">Auto-updating</Badge>
                    </div>
                    <div className="p-3 bg-muted rounded-md text-sm">
                      <p className="mb-2">Key points identified by AI:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved glucose levels post medication change</li>
                        <li>Persistent afternoon fatigue</li>
                        <li>Diet adherence has improved</li>
                        <li>Exercise routine is inconsistent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="chat" className="flex-1 flex flex-col mt-4">
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>ET</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                      <p>Hi Dr. Johnson, I've been following the new medication regimen you prescribed.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm max-w-[80%]">
                      <p>That's great to hear, Emma. How have your glucose readings been?</p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>Dr</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>ET</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                      <p>Much better! Fasting levels have been between 110-125 mg/dL this week.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Input 
                    placeholder="Type your message..."
                    className="pr-16"
                  />
                  <Button className="absolute right-0 top-0 h-full rounded-l-none">
                    Send
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="ai" className="flex-1 mt-4">
                <div className="space-y-4">
                  <div className="bg-health-primary/10 p-3 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain size={16} className="text-health-primary" />
                      <h3 className="text-sm font-medium">AI Health Assistant</h3>
                    </div>
                    <p className="text-sm">Analyzing patient data and conversation in real-time...</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <h4 className="text-sm font-medium mb-1">Medication Effectiveness</h4>
                      <p className="text-sm text-muted-foreground">Patient's glucose levels show 18% improvement since medication adjustment. Trend is positive.</p>
                    </div>
                    <div className="border rounded-md p-3">
                      <h4 className="text-sm font-medium mb-1">Symptom Analysis</h4>
                      <p className="text-sm text-muted-foreground">Afternoon fatigue may indicate reactive hypoglycemia. Consider adjusting insulin timing.</p>
                    </div>
                    <div className="border rounded-md p-3">
                      <h4 className="text-sm font-medium mb-1">Suggested Topics</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>Discuss mid-day snack options</li>
                        <li>Review exercise impact on glucose levels</li>
                        <li>Check medication adherence patterns</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Input placeholder="Ask AI a question about this patient..." />
                    <Button variant="outline" size="icon">
                      <Brain size={16} />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// This is needed just for the mockup
const Clock6 = ({ size, className }: { size: number, className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 12 12"/>
    </svg>
  );
};

export default VideoConsultation;
