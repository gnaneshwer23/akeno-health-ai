
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Users, 
  Download, 
  Bell, 
  Shield, 
  BarChart4,
  Sliders,
  Database,
  FileDown,
  FileUp,
  Key
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from 'framer-motion';

const ResearcherSettings = () => {
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Settings</h1>
        <p className="text-muted-foreground">Control AI model tuning, data access, and notification preferences</p>
      </div>

      <Tabs defaultValue="ai-model">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="ai-model">AI Model Settings</TabsTrigger>
          <TabsTrigger value="access">Access Permissions</TabsTrigger>
          <TabsTrigger value="data-export">Data Export</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ai-model" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Sliders className="h-5 w-5 mr-2 text-health-primary" />
                <CardTitle>AI Model Customization</CardTitle>
              </div>
              <CardDescription>
                Customize AI models for your specific research needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Predictive Analytics</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                      <span className="text-sm">85%</span>
                    </div>
                    <Slider id="confidence-threshold" defaultValue={[85]} max={100} step={1} />
                    <p className="text-xs text-muted-foreground">
                      Set the minimum confidence level required for AI predictions to be included in research findings
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sample-size">Minimum Sample Size</Label>
                      <span className="text-sm">300</span>
                    </div>
                    <Slider id="sample-size" defaultValue={[300]} max={1000} step={10} />
                    <p className="text-xs text-muted-foreground">
                      Set the minimum sample size required for AI model training and validation
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="model-type">Base Model</Label>
                      <Select defaultValue="ensemble">
                        <SelectTrigger id="model-type">
                          <SelectValue placeholder="Select model type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transformer">Transformer</SelectItem>
                          <SelectItem value="ensemble">Ensemble</SelectItem>
                          <SelectItem value="cnn">CNN</SelectItem>
                          <SelectItem value="gnn">Graph Neural Network</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="feature-selection">Feature Selection</Label>
                      <Select defaultValue="auto">
                        <SelectTrigger id="feature-selection">
                          <SelectValue placeholder="Select feature selection method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manual">Manual</SelectItem>
                          <SelectItem value="auto">Auto</SelectItem>
                          <SelectItem value="genetic">Genetic Algorithm</SelectItem>
                          <SelectItem value="pca">PCA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Biomarker Tracking</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Novel Biomarker Detection</Label>
                      <p className="text-xs text-muted-foreground">
                        Allow AI to identify potential new biomarkers from research data
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Longitudinal Tracking</Label>
                      <p className="text-xs text-muted-foreground">
                        Track biomarker changes over time with temporal analysis
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Cross-Study Correlation</Label>
                      <p className="text-xs text-muted-foreground">
                        Enable AI to correlate biomarker findings across different studies
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Multi-omics Correlations</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="integration-method">Integration Method</Label>
                      <Select defaultValue="early">
                        <SelectTrigger id="integration-method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="early">Early Integration</SelectItem>
                          <SelectItem value="late">Late Integration</SelectItem>
                          <SelectItem value="intermediate">Intermediate Integration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="normalization">Normalization Method</Label>
                      <Select defaultValue="quantile">
                        <SelectTrigger id="normalization">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quantile">Quantile Normalization</SelectItem>
                          <SelectItem value="zscore">Z-score</SelectItem>
                          <SelectItem value="minmax">Min-Max Scaling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="data-integration">Multi-omics Integration Level</Label>
                      <span className="text-sm">High</span>
                    </div>
                    <Slider id="data-integration" defaultValue={[75]} max={100} step={1} />
                    <p className="text-xs text-muted-foreground">
                      Control how aggressively the AI attempts to find correlations across multi-omics datasets
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="access" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-health-primary" />
                <CardTitle>Access Permissions</CardTitle>
              </div>
              <CardDescription>
                Control who can access your research data and AI models
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Data Access Controls</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Genomic Dataset Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Control who can view and use genomic sequencing data
                        </p>
                      </div>
                      <Select defaultValue="team">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Only</SelectItem>
                          <SelectItem value="team">Research Team</SelectItem>
                          <SelectItem value="institution">Institution</SelectItem>
                          <SelectItem value="public">Public</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Clinical Data Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Control who can view and use anonymized clinical data
                        </p>
                      </div>
                      <Select defaultValue="institution">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Only</SelectItem>
                          <SelectItem value="team">Research Team</SelectItem>
                          <SelectItem value="institution">Institution</SelectItem>
                          <SelectItem value="public">Public</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">AI Model Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Control who can use your trained AI models
                        </p>
                      </div>
                      <Select defaultValue="team">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Only</SelectItem>
                          <SelectItem value="team">Research Team</SelectItem>
                          <SelectItem value="institution">Institution</SelectItem>
                          <SelectItem value="public">Public</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">API Access</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">API Keys</h4>
                        <p className="text-sm text-muted-foreground">
                          Manage keys for programmatic access to your research data
                        </p>
                      </div>
                      <Button size="sm">
                        <Key size={14} className="mr-2" />
                        Generate New Key
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded-md flex items-center justify-between">
                        <div>
                          <p className="text-sm font-mono">pk_live_a1b2c3d4e5f6g7h8i9j0...</p>
                          <p className="text-xs text-muted-foreground">Created: Jan 15, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">Revoke</Button>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-md flex items-center justify-between">
                        <div>
                          <p className="text-sm font-mono">pk_live_j9i8h7g6f5e4d3c2b1a0...</p>
                          <p className="text-xs text-muted-foreground">Created: Mar 22, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">Revoke</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium mb-2">Rate Limits</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Control how frequently API requests can be made
                      </p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="rate-limit">Requests per Minute</Label>
                            <Select defaultValue="60">
                              <SelectTrigger id="rate-limit">
                                <SelectValue placeholder="Select limit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="30">30</SelectItem>
                                <SelectItem value="60">60</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="unlimited">Unlimited</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="bandwidth">Bandwidth Limit</Label>
                            <Select defaultValue="500mb">
                              <SelectTrigger id="bandwidth">
                                <SelectValue placeholder="Select limit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="100mb">100 MB/day</SelectItem>
                                <SelectItem value="500mb">500 MB/day</SelectItem>
                                <SelectItem value="1gb">1 GB/day</SelectItem>
                                <SelectItem value="unlimited">Unlimited</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="data-export" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <FileDown className="h-5 w-5 mr-2 text-health-primary" />
                <CardTitle>Data Export & Reporting</CardTitle>
              </div>
              <CardDescription>
                Configure data export formats and reporting templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Export Formats</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="default-format">Default Export Format</Label>
                      <Select defaultValue="csv">
                        <SelectTrigger id="default-format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                          <SelectItem value="xlsx">Excel (XLSX)</SelectItem>
                          <SelectItem value="parquet">Parquet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="compression">Compression Method</Label>
                      <Select defaultValue="gzip">
                        <SelectTrigger id="compression">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="gzip">GZIP</SelectItem>
                          <SelectItem value="zip">ZIP</SelectItem>
                          <SelectItem value="tar">TAR</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Include Metadata</Label>
                      <p className="text-xs text-muted-foreground">
                        Include study, collection, and processing metadata with exports
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Anonymize Exports</Label>
                      <p className="text-xs text-muted-foreground">
                        Remove all identifiable information before export
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Research Paper Formatting</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="citation-style">Citation Style</Label>
                      <Select defaultValue="apa">
                        <SelectTrigger id="citation-style">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apa">APA</SelectItem>
                          <SelectItem value="mla">MLA</SelectItem>
                          <SelectItem value="chicago">Chicago</SelectItem>
                          <SelectItem value="harvard">Harvard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="table-format">Table Format</Label>
                      <Select defaultValue="journal">
                        <SelectTrigger id="table-format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="journal">Journal Standard</SelectItem>
                          <SelectItem value="apa">APA Style</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                          <SelectItem value="detailed">Detailed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Auto-generate Methods Section</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically create methodology sections based on AI analysis
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Include AI Model Details</Label>
                      <p className="text-xs text-muted-foreground">
                        Add technical details about AI models used in research
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Visualization Preferences</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="chart-theme">Chart Theme</Label>
                      <Select defaultValue="publication">
                        <SelectTrigger id="chart-theme">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="publication">Publication Ready</SelectItem>
                          <SelectItem value="presentation">Presentation</SelectItem>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="color-palette">Color Palette</Label>
                      <Select defaultValue="scientific">
                        <SelectTrigger id="color-palette">
                          <SelectValue placeholder="Select palette" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scientific">Scientific</SelectItem>
                          <SelectItem value="colorblind">Colorblind Safe</SelectItem>
                          <SelectItem value="viridis">Viridis</SelectItem>
                          <SelectItem value="pastel">Pastel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">High-resolution Export</Label>
                      <p className="text-xs text-muted-foreground">
                        Export visualizations in 300+ DPI for publication
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-health-primary" />
                <CardTitle>Notification Preferences</CardTitle>
              </div>
              <CardDescription>
                Control how and when you receive research updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">AI Model Updates</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">New Data Insights</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications when AI discovers significant patterns
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Model Training Complete</Label>
                      <p className="text-xs text-muted-foreground">
                        Get notified when AI model training is finished
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Prediction Threshold Alerts</Label>
                      <p className="text-xs text-muted-foreground">
                        Alert when predictions exceed confidence thresholds
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Collaboration Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Collaboration Invitations</Label>
                      <p className="text-xs text-muted-foreground">
                        Get notified about new research collaboration opportunities
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Dataset Sharing Requests</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications when others request access to your datasets
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Peer Feedback</Label>
                      <p className="text-xs text-muted-foreground">
                        Get notified when collaborators comment on research
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Research & Funding Updates</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Grant Deadlines</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive reminders about upcoming grant submission deadlines
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Publication Updates</Label>
                      <p className="text-xs text-muted-foreground">
                        Get notified about journal publication status changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Conference Deadlines</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive alerts about abstract submission deadlines
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Notification Delivery</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Switch id="email-delivery" defaultChecked />
                      <Label htmlFor="email-delivery">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="sms-delivery" />
                      <Label htmlFor="sms-delivery">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="push-delivery" defaultChecked />
                      <Label htmlFor="push-delivery">Push</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Notification Frequency</Label>
                    <Select defaultValue="real-time">
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-time">Real-time</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Summary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ResearcherSettings;
