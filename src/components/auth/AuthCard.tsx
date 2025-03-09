
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    <Card className={cn(
      "w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-lg border-health-primary/5 overflow-hidden",
      className
    )}>
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-health-primary via-health-secondary to-health-accent"></div>
      
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-xl font-bold text-center">{title}</CardTitle>
        {description && (
          <CardDescription className="text-center">{description}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent>
        {children}
      </CardContent>
      
      {footer && <CardFooter>{footer}</CardFooter>}
      
      <div className="px-6 pb-6 pt-2">
        <div className="pt-4 text-center text-sm border-t border-border/30">
          {isLoginPage ? (
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Don't have an account?{" "}
              <Link to="/register" className="text-health-primary hover:underline font-medium transition-colors">
                Register
              </Link>
            </motion.p>
          ) : (
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Already have an account?{" "}
              <Link to="/login" className="text-health-primary hover:underline font-medium transition-colors">
                Login
              </Link>
            </motion.p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AuthCard;
