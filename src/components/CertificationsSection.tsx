
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Shield, ShieldCheck, Lock, FileCheck, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    { 
      id: 'hipaa', 
      name: 'HIPAA', 
      description: 'Health Insurance Portability and Accountability Act', 
      icon: <Shield className="h-5 w-5" />,
      category: 'privacy'
    },
    { 
      id: 'gdpr', 
      name: 'GDPR', 
      description: 'General Data Protection Regulation', 
      icon: <Shield className="h-5 w-5" />,
      category: 'privacy'
    },
    { 
      id: 'iso13485', 
      name: 'ISO 13485', 
      description: 'Medical Devices Quality Management', 
      icon: <CheckCircle className="h-5 w-5" />,
      category: 'quality'
    },
    { 
      id: 'ce', 
      name: 'CE Mark', 
      description: 'European Conformity', 
      icon: <CheckCircle className="h-5 w-5" />,
      category: 'regulatory'
    },
    { 
      id: 'fda', 
      name: 'FDA Cleared AI', 
      description: 'Food and Drug Administration', 
      icon: <ShieldCheck className="h-5 w-5" />,
      category: 'regulatory'
    },
    { 
      id: 'hitrust', 
      name: 'HITRUST', 
      description: 'Health Information Trust Alliance', 
      icon: <Lock className="h-5 w-5" />,
      category: 'security'
    },
    { 
      id: 'nist', 
      name: 'NIST AI Risk Framework', 
      description: 'National Institute of Standards and Technology', 
      icon: <ShieldCheck className="h-5 w-5" />,
      category: 'ai'
    },
    { 
      id: 'soc2', 
      name: 'SOC 2 Type II', 
      description: 'Service Organization Control', 
      icon: <Lock className="h-5 w-5" />,
      category: 'security'
    },
    { 
      id: 'iso27001', 
      name: 'ISO 27001', 
      description: 'Information Security Management', 
      icon: <Lock className="h-5 w-5" />,
      category: 'security'
    },
    { 
      id: 'ieee', 
      name: 'IEEE AI Ethics', 
      description: 'Institute of Electrical and Electronics Engineers', 
      icon: <FileCheck className="h-5 w-5" />,
      category: 'ai'
    },
    { 
      id: 'ichgcp', 
      name: 'ICH-GCP', 
      description: 'International Council for Harmonisation - Good Clinical Practice', 
      icon: <FileCheck className="h-5 w-5" />,
      category: 'clinical'
    },
    { 
      id: 'cfr', 
      name: '21 CFR Part 11', 
      description: 'Code of Federal Regulations for Electronic Records', 
      icon: <FileCheck className="h-5 w-5" />,
      category: 'regulatory'
    },
  ];

  const categories = [
    { id: 'privacy', name: 'Privacy', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { id: 'security', name: 'Security', color: 'bg-green-100 text-green-800 border-green-200' },
    { id: 'quality', name: 'Quality', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 'regulatory', name: 'Regulatory', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { id: 'clinical', name: 'Clinical', color: 'bg-rose-100 text-rose-800 border-rose-200' },
    { id: 'ai', name: 'AI Standards', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
            Compliance & Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform adheres to the highest standards of data security, privacy, and clinical excellence to ensure trust and reliability in healthcare AI.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Badge 
              key={category.id} 
              variant="outline" 
              className={`${category.color} px-3 py-1 text-xs font-medium`}
            >
              {category.name}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => {
            const categoryData = categories.find(c => c.id === cert.category);
            return (
              <Card 
                key={cert.id}
                className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow text-center h-full border-t-2 border-t-health-secondary/40 hover:border-t-health-secondary"
              >
                <div className="mb-2 text-health-secondary">
                  {cert.icon}
                </div>
                <h3 className="font-bold text-health-dark mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground leading-tight">
                  {cert.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

