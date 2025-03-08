
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

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
