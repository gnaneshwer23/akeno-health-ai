
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, FileText, MessageSquare, Share2, PlayCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HospitalHelp = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Hospital Help Center</h1>
      </div>

      <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mb-6">
        <div className="flex gap-4 items-start">
          <div className="bg-teal-100 p-2 rounded-full">
            <HelpCircle className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <h2 className="font-medium text-teal-800">Need immediate assistance?</h2>
            <p className="text-sm text-teal-700 mb-2">Our dedicated hospital support team is available 24/7</p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="bg-white">Live Chat</Button>
              <Button size="sm" variant="outline" className="bg-white">Call Support</Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="faq">
            <HelpCircle className="h-4 w-4 mr-2" />
            FAQs
          </TabsTrigger>
          <TabsTrigger value="documentation">
            <FileText className="h-4 w-4 mr-2" />
            Documentation
          </TabsTrigger>
          <TabsTrigger value="videos">
            <PlayCircle className="h-4 w-4 mr-2" />
            Tutorial Videos
          </TabsTrigger>
          <TabsTrigger value="support">
            <MessageSquare className="h-4 w-4 mr-2" />
            Support Tickets
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about the hospital dashboard and features</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the AI-powered patient risk monitoring work?</AccordionTrigger>
                  <AccordionContent>
                    Our AI algorithms analyze patient data from multiple sources including vital signs, lab results, and medical history to identify patterns associated with deterioration. The system continuously monitors patients and alerts staff when risk thresholds are exceeded, allowing for earlier interventions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I customize the resource management dashboard?</AccordionTrigger>
                  <AccordionContent>
                    You can customize the resource management dashboard by clicking the "Settings" icon in the top right corner of the resource panel. From there, you can select which metrics to display, adjust thresholds for alerts, and configure the time periods for predictive analytics.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I integrate the system with our existing EHR?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our platform integrates with all major Electronic Health Record (EHR) systems including Epic, Cerner, Allscripts, and MEDITECH. For integration setup, please go to Settings &gt; Integrations and follow the configuration wizard for your specific EHR system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I set up roles and permissions for hospital staff?</AccordionTrigger>
                  <AccordionContent>
                    You can manage roles and permissions by navigating to Settings &gt; Access Control. From there, you can create custom roles, assign specific permissions, and manage user accounts. We recommend creating role templates based on staff positions such as administrators, physicians, nurses, and analysts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Is the platform HIPAA compliant?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our platform is fully HIPAA compliant and includes all necessary safeguards for Protected Health Information (PHI). All data is encrypted both in transit and at rest, and we maintain comprehensive audit logs of all access to patient information. We also provide Business Associate Agreements (BAAs) as required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How accurate are the predictive analytics for resource management?</AccordionTrigger>
                  <AccordionContent>
                    Our predictive models achieve 85-92% accuracy in forecasting resource needs 24-48 hours in advance. The system uses a combination of historical data, seasonal patterns, and real-time inputs to generate predictions. Accuracy improves over time as the system learns from your hospital's specific patterns and adjusts its algorithms accordingly.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documentation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hospital Platform Documentation</CardTitle>
              <CardDescription>Comprehensive guides for using the hospital management platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Administrator Guide</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Complete documentation for hospital administrators on system setup, user management, and configuration.
                  </p>
                  <button className="text-sm text-primary hover:underline">View PDF</button>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Clinical Decision Support Manual</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Guide to using AI-powered clinical decision support features for medical staff.
                  </p>
                  <button className="text-sm text-primary hover:underline">View PDF</button>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Resource Optimization Handbook</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Guide to interpreting predictive analytics and optimizing hospital resources.
                  </p>
                  <button className="text-sm text-primary hover:underline">View PDF</button>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Integration Guide</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Technical documentation for IT staff on integrating with hospital systems.
                  </p>
                  <button className="text-sm text-primary hover:underline">View PDF</button>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Data Security and Compliance</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Information on HIPAA compliance, data protection, and security measures.
                  </p>
                  <button className="text-sm text-primary hover:underline">View PDF</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tutorial Videos</CardTitle>
              <CardDescription>Step-by-step visual guides for platform features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-gray-400" />
                    </div>
                    <img 
                      src="https://placehold.co/800x450/teal/white?text=Dashboard+Overview" 
                      alt="Dashboard Overview"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Dashboard Overview</h3>
                    <p className="text-sm text-muted-foreground">5:32 • Getting started with your hospital dashboard</p>
                  </div>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-gray-400" />
                    </div>
                    <img 
                      src="https://placehold.co/800x450/teal/white?text=Patient+Risk+Monitor" 
                      alt="Patient Risk Monitor"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Patient Risk Monitoring</h3>
                    <p className="text-sm text-muted-foreground">7:15 • Setting up patient risk alerts and monitoring</p>
                  </div>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-gray-400" />
                    </div>
                    <img 
                      src="https://placehold.co/800x450/teal/white?text=Resource+Management" 
                      alt="Resource Management"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Resource Management</h3>
                    <p className="text-sm text-muted-foreground">6:48 • Optimizing staff and resource allocation</p>
                  </div>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-gray-400" />
                    </div>
                    <img 
                      src="https://placehold.co/800x450/teal/white?text=AI+Decision+Support" 
                      alt="AI Decision Support"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">AI Decision Support</h3>
                    <p className="text-sm text-muted-foreground">8:22 • Using AI recommendations in clinical settings</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="w-full">View All Videos</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Get help from our hospital platform specialists</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h3 className="font-medium mb-3">Open a New Support Ticket</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Subject</label>
                      <Input placeholder="Brief description of your issue" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <select className="w-full h-10 px-3 border rounded-md">
                        <option>Technical Issue</option>
                        <option>Account Access</option>
                        <option>Integration Help</option>
                        <option>Feature Request</option>
                        <option>Billing Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea 
                        rows={4} 
                        className="w-full p-3 border rounded-md"
                        placeholder="Please provide details about your issue..."
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Priority</label>
                      <select className="w-full h-10 px-3 border rounded-md">
                        <option>Low - General Question</option>
                        <option>Medium - Affecting Workflow</option>
                        <option>High - System Partially Unavailable</option>
                        <option>Critical - System Down</option>
                      </select>
                    </div>
                    <Button className="bg-health-primary hover:bg-health-primary/90">Submit Ticket</Button>
                  </div>
                </div>
                
                <h3 className="font-medium">Recent Tickets</h3>
                <div className="border rounded-md divide-y">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">#4289: EHR Integration Issue</h4>
                      <p className="text-sm text-muted-foreground">Opened 2 days ago • High Priority</p>
                    </div>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">In Progress</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">#4276: Staff Permission Configuration</h4>
                      <p className="text-sm text-muted-foreground">Opened 5 days ago • Medium Priority</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Resolved</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">#4271: Patient Risk Algorithm Question</h4>
                      <p className="text-sm text-muted-foreground">Opened 7 days ago • Low Priority</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Resolved</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HospitalHelp;
