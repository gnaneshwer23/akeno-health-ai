
import React from 'react';
import { LogOut, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserProfile from './UserProfile';
import SidebarNavigation from './SidebarNavigation';

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  trigger: React.ReactNode;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ 
  isOpen, 
  setIsOpen,
  trigger 
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          aria-label="Menu"
        >
          {trigger}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[270px] sm:w-[300px] flex flex-col p-0">
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-health-primary/20 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-health-primary"></div>
            </div>
            <span className="font-medium text-lg">Akeno Health</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </Button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <div className="p-4">
            <UserProfile />
            <SidebarNavigation />
          </div>
        </div>
        
        <div className="p-4 border-t">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={handleLogout}
          >
            <LogOut size={18} className="mr-2" />
            Sign Out
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
