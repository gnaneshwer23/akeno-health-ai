
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LogOut, 
  Menu, 
  X, 
  Home, 
  User, 
  Activity, 
  MessageCircle, 
  Bell,
  Settings, 
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/Button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Role-specific navigation items
  const getNavItems = () => {
    const commonItems = [
      { icon: <Home size={20} />, label: 'Dashboard', href: '#' },
      { icon: <User size={20} />, label: 'Profile', href: '#' },
      { icon: <Settings size={20} />, label: 'Settings', href: '#' },
      { icon: <HelpCircle size={20} />, label: 'Help', href: '#' },
    ];

    switch (user?.role) {
      case 'patient':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Health Tracking', href: '#' },
          { icon: <MessageCircle size={20} />, label: 'AI Assistant', href: '#' },
          { icon: <Bell size={20} />, label: 'Notifications', href: '#' },
        ];
      case 'doctor':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Patient Reports', href: '#' },
          { icon: <MessageCircle size={20} />, label: 'Consultations', href: '#' },
          { icon: <Bell size={20} />, label: 'Alerts', href: '#' },
        ];
      case 'researcher':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Research Data', href: '#' },
          { icon: <MessageCircle size={20} />, label: 'Collaborations', href: '#' },
          { icon: <Bell size={20} />, label: 'Updates', href: '#' },
        ];
      default:
        return commonItems;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                  <Menu size={24} />
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
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={20} />
                  </Button>
                </div>
                
                <div className="flex-1 overflow-auto">
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-6">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.profileImage} alt={user?.name} />
                        <AvatarFallback className="bg-health-primary text-white">
                          {user?.name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                      </div>
                    </div>
                    
                    <nav className="space-y-1">
                      {getNavItems().map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-health-primary transition-colors"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </nav>
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
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar - Desktop only */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block p-4">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.profileImage} alt={user?.name} />
                <AvatarFallback className="bg-health-primary text-white">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
              </div>
            </div>
            
            <Separator className="mb-4" />
            
            <nav className="space-y-1">
              {getNavItems().map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-health-primary transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>
        
        {/* Main dashboard content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
