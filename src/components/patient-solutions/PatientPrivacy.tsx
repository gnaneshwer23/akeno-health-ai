
import React from 'react';
import { Shield, Lock, FileText, Eye, Award } from 'lucide-react';
import { Button } from '@/components/Button';

const PatientPrivacy = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-medium">
              Complete Data Protection
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              Patient Privacy & Data Security
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Blockchain-powered Universal Health Records (UHRs) give you complete control over your health data with advanced security features that keep your information private while enabling AI-driven insights.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">Your Data, Your Control</h3>
                  <p className="text-muted-foreground">You decide who accesses your health records with granular permission settings for doctors, researchers, and applications.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Lock size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">Blockchain Encryption</h3>
                  <p className="text-muted-foreground">Fully secured, decentralized, and tamper-proof health records protected by advanced cryptography and distributed ledger technology.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Eye size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">Zero-Knowledge Proofs & AI Data Anonymization</h3>
                  <p className="text-muted-foreground">Your personal information remains private while enabling AI-driven research with cutting-edge privacy-preserving technology.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Award size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-health-dark mb-1">HIPAA & GDPR Compliance</h3>
                  <p className="text-muted-foreground">Full regulatory compliance for global health data protection with regular security audits and certifications.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-blue-100 shadow-sm mb-8">
              <p className="text-health-dark">
                <span className="font-medium">Outcome:</span> 100% data security, full control over your medical records, and seamless access to your health history.
              </p>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Learn More About Akeno Health's Data Protection
            </Button>
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-blue-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full opacity-30 transform -translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <FileText size={24} className="text-blue-600" />
                  <span className="font-medium">Universal Health Records</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Secure</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Encrypted</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                <h4 className="text-sm font-medium mb-2">Health Data Protection</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Medical Records</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Blockchain Protected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Genomic Data</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Encrypted Storage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Biometric Data</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Zero-Knowledge Encryption</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Treatment History</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Tamper-Proof Storage</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <h4 className="text-sm font-medium mb-2">Access Control</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-xs text-green-600">✓</span>
                    </div>
                    <span className="text-xs">Primary Care Doctor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-xs text-green-600">✓</span>
                    </div>
                    <span className="text-xs">Specialist (Cardiologist)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-xs text-red-600">✕</span>
                    </div>
                    <span className="text-xs">Research Institute (Pending Approval)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="text-xs text-yellow-600">!</span>
                    </div>
                    <span className="text-xs">Emergency Access (Time-Limited)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
                  Your Data, Under Your Control
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientPrivacy;
