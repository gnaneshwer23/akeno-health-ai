
import { useLocation } from 'react-router-dom';

export const useActiveLink = () => {
  const location = useLocation();
  
  // Helper function to check if the current path starts with the given path
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return { isActive };
};
