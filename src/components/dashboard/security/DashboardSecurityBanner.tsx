import React from 'react';
import { Shield, Lock, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth/useAuth';
import { motion } from 'framer-motion';

const DashboardSecurityBanner: React.FC = () => {
  const { user } = useAuth();
  const [showBanner, setShowBanner] = React.useState(true);

  if (!showBanner) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Alert className="bg-health-primary/5 border-health-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-health-primary/10 z-0" />
        <div className="relative z-10 flex items-start md:items-center gap-3 md:gap-4">
          <div className="bg-white/80 p-1.5 rounded-full shadow-sm border border-health-primary/10">
            <Shield className="h-4 w-4 text-health-primary" />
          </div>
          <div className="flex-1">
            <AlertTitle className="text-health-dark font-medium">
              HIPAA & GDPR Compliant Environment
            </AlertTitle>
            <AlertDescription className="text-sm text-muted-foreground">
              All AI insights and patient data are encrypted and protected with role-based access control.
              {user?.role === 'doctor' && " Your diagnostic activity is being securely logged for compliance purposes."}
              {user?.role === 'researcher' && " Your data analysis operations are being securely logged for research compliance."}
              {user?.role === 'patient' && " Your health information is encrypted and only accessible to your authorized providers."}
            </AlertDescription>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="mt-0 shrink-0"
            onClick={() => setShowBanner(false)}
          >
            Dismiss
          </Button>
        </div>
      </Alert>
    </motion.div>
  );
};

export default DashboardSecurityBanner;
