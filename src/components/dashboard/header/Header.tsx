
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Search } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick }) => {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      {onMenuClick && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden mr-2" 
          onClick={onMenuClick}
          aria-label="Menu"
        >
          <Bell className="h-5 w-5" />
        </Button>
      )}
      
      {title && (
        <h1 className="text-xl font-semibold">{title}</h1>
      )}
      
      <div className="flex-1 flex justify-end items-center space-x-4">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-9 pl-9 pr-4 rounded-full bg-secondary text-secondary-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        
        <ThemeToggle />
        
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm hidden sm:inline-block">Welcome, {user?.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
