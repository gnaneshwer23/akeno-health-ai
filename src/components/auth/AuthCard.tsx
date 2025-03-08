
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
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
        title: "Loading demo data...",
        description: "Please wait while we prepare your demo account.",
      });
      
      await seedDemoData();
      
      toast({
        title: "Demo data loaded!",
        description: "You've been logged in with demo data.",
        variant: "default",
      });
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error("Error loading demo data:", error);
      toast({
        title: "Error loading demo data",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
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
            className="w-full" 
            onClick={handleTryDemo}
          >
            Try Demo Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-4 text-center text-sm">
          {isLoginPage ? (
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          ) : (
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
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
