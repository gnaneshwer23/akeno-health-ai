
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Beaker, Dna, Microscope } from 'lucide-react';
import ProjectCard from './ProjectCard';
import DiscoveryCard from './DiscoveryCard';

const AIModelDiscoveryCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Guided Drug Discovery</CardTitle>
        <CardDescription>ML-powered target identification and compound optimization driven by our integrated database</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">Active Discovery Projects</h3>
            <div className="space-y-3">
              <ProjectCard
                title="PARP Inhibitor Optimization"
                badgeText="Phase 2"
                badgeClass="bg-green-500"
                description="AI-driven structure optimization using genomic data from 2,300+ samples for improved blood-brain barrier penetration"
                progress={72}
              />
              
              <ProjectCard
                title="Novel T-Cell Engager"
                badgeText="Phase 1"
                badgeClass="bg-blue-500"
                description="AI screening of 5,000+ protein-protein interactions from our database for optimized binding profiles"
                progress={38}
              />
              
              <ProjectCard
                title="mRNA Stability Enhancement"
                badgeText="Phase 1"
                badgeClass="bg-purple-500"
                description="Computational prediction of modified nucleosides derived from analysis of our genomic database"
                progress={45}
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Recent AI Discoveries</h3>
            <div className="space-y-3">
              <DiscoveryCard
                icon={<Beaker size={20} />}
                iconBgClass="bg-blue-100"
                iconTextClass="text-blue-600"
                title="Novel Kinase Inhibitor"
                description="AI identified a novel scaffold from analysis of 3,800+ genomic samples with high selectivity for JAK3 over JAK1/2, potentially reducing off-target effects."
                actionText="View molecule details"
              />
              
              <DiscoveryCard
                icon={<Dna size={20} />}
                iconBgClass="bg-green-100"
                iconTextClass="text-green-600"
                title="RNA Therapeutic Target"
                description="AI analysis of transcriptomics data from our electronic health records revealed a previously unidentified long non-coding RNA involved in fibrosis regulation."
                actionText="View target details"
              />
              
              <DiscoveryCard
                icon={<Microscope size={20} />}
                iconBgClass="bg-amber-100"
                iconTextClass="text-amber-600"
                title="Biomarker Panel for NASH"
                description="AI-derived serum biomarker panel from analysis of 10,000+ patient records shows 92% accuracy in diagnosing NASH without liver biopsy."
                actionText="View panel details"
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View All Research Projects</Button>
      </CardFooter>
    </Card>
  );
};

export default AIModelDiscoveryCard;
