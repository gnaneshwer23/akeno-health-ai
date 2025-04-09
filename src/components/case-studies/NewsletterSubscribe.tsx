
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('clinician');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      return;
    }
    
    // Simulating a successful subscription
    setSubscriptionStatus('success');
    toast({
      title: "Newsletter Subscription Successful",
      description: `You've been added to our ${role} newsletter. Thanks for subscribing!`,
    });
    setEmail('');
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setSubscriptionStatus('idle');
    }, 3000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border border-white/20 shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Miss the Next Breakthrough
          </h2>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get monthly insights on healthcare AI, drug discovery, and digital twin innovations delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-grow relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 pr-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="default"
                size="lg"
                className="bg-white text-indigo-900 hover:bg-indigo-100 transition-colors h-12"
              >
                Subscribe Now
              </Button>
            </div>
            
            <div className="mb-4">
              <RadioGroup 
                defaultValue="clinician" 
                className="flex flex-wrap justify-center gap-4" 
                value={role}
                onValueChange={setRole}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="researcher" id="researcher" className="border-white/50 text-white" />
                  <Label htmlFor="researcher" className="text-white/90">Researcher</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="clinician" id="clinician" className="border-white/50 text-white" />
                  <Label htmlFor="clinician" className="text-white/90">Clinician</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="patient" id="patient" className="border-white/50 text-white" />
                  <Label htmlFor="patient" className="text-white/90">Patient</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="investor" id="investor" className="border-white/50 text-white" />
                  <Label htmlFor="investor" className="text-white/90">Investor</Label>
                </div>
              </RadioGroup>
            </div>
            
            {subscriptionStatus === 'success' && (
              <div className="mt-4 flex items-center justify-center text-sm text-green-300">
                <CheckCircle size={16} className="mr-2" />
                Thank you for subscribing! Check your inbox to confirm.
              </div>
            )}
            
            {subscriptionStatus === 'error' && (
              <div className="mt-4 flex items-center justify-center text-sm text-red-300">
                <AlertCircle size={16} className="mr-2" />
                Please enter a valid email address.
              </div>
            )}
          </form>
          
          <div className="mt-6 text-sm text-white/60">
            We respect your privacy. Unsubscribe at any time.
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
