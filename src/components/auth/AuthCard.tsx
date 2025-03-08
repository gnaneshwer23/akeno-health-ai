
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { seedDemoData } from '@/utils/demoData';
import { useToast } from '@/hooks/use-toast';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({
  children,
  title,
  description,
  footer,
  className,
}) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const { toast } = useToast();

  const handleTryDemo = async () => {
    try {
      toast({
        title: "Loading demo account...",
        description: "Please wait while we prepare your demo access.",
      });
      
      await seedDemoData();
      
      toast({
        title: "Demo access granted!",
        description: "You're now signed in with a demo account.",
        variant: "default",
      });
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error("Error loading demo data:", error);
      toast({
        title: "Error setting up demo",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className={cn("w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-md border-health-primary/5", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
      
      <div className="px-6 pb-6 pt-2">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              or
            </span>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            className="w-full group relative border-health-primary/20 text-health-dark hover:text-health-primary hover:border-health-primary" 
            onClick={handleTryDemo}
          >
            <UserCheck className="mr-2 h-4 w-4" />
            <span>Try Demo Account</span>
            <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
        
        <div className="mt-4 text-center text-sm">
          {isLoginPage ? (
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-health-primary hover:underline font-medium">
                Register
              </Link>
            </p>
          ) : (
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-health-primary hover:underline font-medium">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AuthCard;
