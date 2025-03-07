
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-3 mb-6">
      <Avatar className="h-10 w-10">
        <AvatarImage src={user?.profileImage} alt={user?.name} />
        <AvatarFallback className="bg-health-primary text-white">
          {user?.name?.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{user?.name}</p>
        <p className="text-xs text-muted-foreground">{user?.role ? user.role : 'User'}</p>
      </div>
    </div>
  );
};

export default UserProfile;
