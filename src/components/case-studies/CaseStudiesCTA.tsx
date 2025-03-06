
import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const CaseStudiesCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      toast({
        title: "Subscription successful!",
        description: "You've been added to our newsletter list.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/30 relative overflow-hidden text-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute left-10 top-10 w-72 h-72 bg-health-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="inline-block bg-health-secondary/10 text-health-secondary px-4 py-1 rounded-full mb-6">
          <span className="text-sm font-medium">Subscribe to Our Newsletter</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
          Stay Updated & Join the AI Healthcare Revolution!
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Akeno Health AI is at the forefront of AI-powered medical breakthroughs, integrating quantum computing, 
          multi-omics analysis, and precision diagnostics into next-generation healthcare solutions. 
          Stay ahead with our expert insights, case studies, and in-depth articles!
        </p>
        
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button 
              type="submit" 
              disabled={isSubscribing}
              variant="primary"
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
              {!isSubscribing && <ArrowRight size={16} />}
            </Button>
          </div>
        </form>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Check size={18} className="text-health-secondary" />
            <span className="text-sm text-muted-foreground">Weekly Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={18} className="text-health-secondary" />
            <span className="text-sm text-muted-foreground">Exclusive Content</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={18} className="text-health-secondary" />
            <span className="text-sm text-muted-foreground">Research Insights</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="primary" as="Link" to="/contact">
            Subscribe to Our Blog
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" as="Link" to="/contact">
            <Mail size={16} />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;
