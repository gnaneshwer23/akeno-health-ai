
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Form schema
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email address' }),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Here you would typically call an API to handle password reset
      console.log('Password reset requested for:', data.email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: 'Password Reset Email Sent',
        description: 'Check your inbox for instructions to reset your password',
      });
    } catch (error) {
      console.error('Error requesting password reset:', error);
      toast({
        title: 'Something went wrong',
        description: 'Unable to process your request. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Reset Your Password"
      description="Enter your email and we'll send you instructions to reset your password"
    >
      {!isSuccess ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        placeholder="Enter your email address" 
                        className="pl-10" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Instructions...' : 'Send Reset Instructions'}
            </Button>
            
            <div className="text-center text-sm">
              <Link to="/login" className="text-health-primary hover:underline">
                Back to login
              </Link>
            </div>
          </form>
        </Form>
      ) : (
        <div className="text-center space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
            <Mail className="h-6 w-6 text-health-primary" />
          </div>
          <h3 className="text-lg font-medium">Check Your Email</h3>
          <p className="text-muted-foreground text-sm">
            We've sent password reset instructions to your email address. 
            Please check your inbox and follow the link provided.
          </p>
          
          <div className="pt-4">
            <Link to="/login">
              <Button variant="outline" className="mt-2">
                Return to Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
