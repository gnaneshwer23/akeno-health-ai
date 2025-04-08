import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth/useAuth';
import { Button } from '@/components/Button';
import { Separator } from '@/components/ui/separator';
import UserProfile from './UserProfile';
import SidebarNavigation from './SidebarNavigation';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block p-4">
      <div className="mb-6">
        <UserProfile />
        
        <Separator className="mb-4" />
        
        <SidebarNavigation />
      </div>
    </aside>
  );
};

export default Sidebar;
