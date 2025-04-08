
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Mail, User, MessageSquare, Building, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent",
        description: "We'll get back to you within 24-48 hours.",
      });
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="scroll-mt-16">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-health-primary/5">
        <h2 className="text-2xl font-bold text-health-dark mb-6">
          Send Us a Message
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-health-dark">
                <User className="h-4 w-4 text-health-primary" />
                <span>Full Name</span>
              </Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name" 
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-health-dark">
                <Mail className="h-4 w-4 text-health-primary" />
                <span>Email Address</span>
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="organization" className="flex items-center gap-2 text-health-dark">
              <Building className="h-4 w-4 text-health-primary" />
              <span>Organization (Optional)</span>
            </Label>
            <Input 
              id="organization" 
              type="text" 
              placeholder="Enter your organization name"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-health-dark">
              <MessageSquare className="h-4 w-4 text-health-primary" />
              <span>Message</span>
            </Label>
            <textarea 
              id="message" 
              rows={4} 
              placeholder="How can we help you?" 
              className="w-full rounded-md border border-input px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-health-primary"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-health-primary hover:bg-health-primary/90 text-white group" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            We typically respond within 24-48 business hours
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
