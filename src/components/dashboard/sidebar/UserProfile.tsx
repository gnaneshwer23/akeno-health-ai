import React from 'react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/auth/useAuth';
import { ChevronDown, ChevronUp, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const UserProfile = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: 'Error',
        description: 'Failed to log out. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-3 mb-6 shadow-sm">
      <div 
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Avatar className="h-10 w-10 border-2 border-health-primary/20">
          <AvatarImage src={user?.profileImage} alt={user?.name} />
          <AvatarFallback className="bg-health-primary text-white">
            {user?.name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate text-foreground">{user?.name}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-1"></span>
            {user?.role ? user.role : 'User'}
          </p>
        </div>
        {isExpanded ? 
          <ChevronUp size={18} className="text-muted-foreground" /> : 
          <ChevronDown size={18} className="text-muted-foreground" />
        }
      </div>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t space-y-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={() => {
              toast({
                title: "Profile settings",
                description: "This feature will be available soon!",
              });
            }}
          >
            <Settings size={16} className="mr-2" />
            Settings
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut size={16} className="mr-2" />
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
