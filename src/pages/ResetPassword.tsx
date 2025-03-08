
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import { AlertCircle, Check, KeyRound } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Form schema with password requirements
const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const ResetPassword = () => {
  const { toast } = useToast();
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Validate token
  useEffect(() => {
    const validateToken = async () => {
      try {
        // Here you would typically validate the token with your API
        // For demo purposes, we'll simulate a validation check
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo, we'll consider the token valid if it's at least 10 chars
        const isValid = token && token.length >= 10;
        setIsValidToken(isValid);
      } catch (error) {
        console.error('Error validating token:', error);
        setIsValidToken(false);
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, [token]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Here you would typically call an API to reset the password
      console.log('Password reset with token:', token);
      console.log('New password:', data.password);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: 'Password Reset Successful',
        description: 'Your password has been reset successfully',
      });
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error resetting password:', error);
      toast({
        title: 'Something went wrong',
        description: 'Unable to reset your password. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <AuthLayout
        title="Validating Reset Link"
        description="Please wait while we verify your reset link..."
      >
        <div className="flex justify-center items-center p-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-health-primary"></div>
        </div>
      </AuthLayout>
    );
  }

  if (!isValidToken) {
    return (
      <AuthLayout
        title="Invalid Reset Link"
        description="The password reset link is invalid or has expired"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 mb-4">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This password reset link is no longer valid. It may have expired or already been used.
            </AlertDescription>
          </Alert>
          
          <div className="pt-4">
            <Link to="/forgot-password">
              <Button className="mt-2">
                Request a new reset link
              </Button>
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  if (isSuccess) {
    return (
      <AuthLayout
        title="Password Reset Complete"
        description="Your password has been updated successfully"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          
          <h3 className="text-lg font-medium">Password Changed Successfully</h3>
          <p className="text-muted-foreground text-sm">
            Your password has been reset. You will be redirected to the login page.
          </p>
          
          <div className="pt-4">
            <Link to="/login">
              <Button className="mt-2">
                Go to Login
              </Button>
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Create New Password"
      description="Enter and confirm your new password"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Enter new password" 
                      type="password" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Confirm new password" 
                      type="password" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-sm space-y-2">
            <p className="font-medium">Password must contain:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${form.watch('password').length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                At least 8 characters
              </li>
              <li className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${/[A-Z]/.test(form.watch('password')) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                One uppercase letter
              </li>
              <li className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${/[a-z]/.test(form.watch('password')) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                One lowercase letter
              </li>
              <li className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${/[0-9]/.test(form.watch('password')) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                One number
              </li>
            </ul>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
          </Button>
        </form>
      </Form>
    </AuthLayout>
  );
};

export default ResetPassword;
