
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, FileText, MessageSquare, Share2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ResearcherHelp = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Research Help Center</h1>
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
          <TabsTrigger value="support">
            <MessageSquare className="h-4 w-4 mr-2" />
            Live Support
          </TabsTrigger>
          <TabsTrigger value="best-practices">
            <Share2 className="h-4 w-4 mr-2" />
            Best Practices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about AI models, research data, and collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I access the AI model training datasets?</AccordionTrigger>
                  <AccordionContent>
                    AI model training datasets can be accessed through the Research Data section. Navigate to Research Data &gt; AI Models and select the specific model you wish to explore.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I share my research findings with other institutions?</AccordionTrigger>
                  <AccordionContent>
                    You can share your findings through the Collaborations section. Create a new collaboration, set appropriate access controls, and invite other researchers or institutions using their email addresses.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What ethical guidelines should I follow when using patient data?</AccordionTrigger>
                  <AccordionContent>
                    All research must comply with IRB approvals and bioethical considerations. Make sure data is de-identified, patient consent is obtained where required, and that you follow your institution's ethical guidelines for data usage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I cite the platform in my publications?</AccordionTrigger>
                  <AccordionContent>
                    When citing our platform in academic publications, please use the following format: "HealthTech AI Platform (Version X.X) [Software]. Retrieved from [website URL]."
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documentation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Research Documentation</CardTitle>
              <CardDescription>Comprehensive guides for the research platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Genomic Data Analysis Guide</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Complete documentation on analyzing genomic sequences, SNP identification, and variant calling.
                  </p>
                  <button className="text-sm text-primary hover:underline">Download PDF</button>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Medical Imaging AI Models</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Documentation for training, validating, and deploying medical imaging AI models.
                  </p>
                  <button className="text-sm text-primary hover:underline">Download PDF</button>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">API Integration Guide</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Technical documentation for integrating external systems with our research APIs.
                  </p>
                  <button className="text-sm text-primary hover:underline">Download PDF</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Research Support</CardTitle>
              <CardDescription>Get help from our research support team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-md">
                  <h3 className="font-medium mb-2">Research Support Team</h3>
                  <p className="text-sm mb-3">Our dedicated team of data scientists and research specialists is available Monday-Friday, 9am-6pm EST.</p>
                  <div className="flex space-x-2">
                    <button className="bg-primary text-white px-3 py-2 rounded-md text-sm">Schedule Call</button>
                    <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm">Email Support</button>
                  </div>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Research Discussion Forum</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Connect with other researchers to discuss methodologies, share insights, and solve problems.
                  </p>
                  <button className="text-sm text-primary hover:underline">Visit Forum</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="best-practices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Best Practices for AI in Healthcare Research</CardTitle>
              <CardDescription>Guidelines to ensure quality research outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium">Dataset Curation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ensure datasets are balanced across demographics to prevent bias in AI models. Document all preprocessing steps for reproducibility.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium">Model Validation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Always use separate validation datasets not seen during training. Consider external validation across different patient populations.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium">Bias Mitigation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Regularly test AI models for unintended biases across different patient populations and clinical settings.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-medium">Reproducibility</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Document all hyperparameters, random seeds, and environmental variables. Use version control for both code and datasets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResearcherHelp;
