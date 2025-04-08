
import React from 'react';
import { Bell, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth/useAuth';
import { Button } from '@/components/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </Button>
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-health-primary"></div>
            </div>
            <span className="font-medium text-lg hidden sm:inline">Akeno Health</span>
          </div>
        </div>
        
        {/* User menu */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <Separator orientation="vertical" className="h-8" />
          
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
            </div>
            
            <Avatar className="h-9 w-9">
              <AvatarImage src={user?.profileImage} alt={user?.name} />
              <AvatarFallback className="bg-health-primary text-white">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="hidden md:flex"
            >
              <LogOut size={18} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
