
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from '@supabase/supabase-js';
import { AuthContextType, AuthUser, UserRole } from './types';
import { authService } from './authService';

// Create the Auth Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [supabaseUser, setSupabaseUser] = useState<User | null>(null);
  const { toast } = useToast();

  // Set user state based on Supabase user and profile
  const setUserFromSupabase = async (session: Session | null) => {
    if (!session?.user) {
      setUser(null);
      return;
    }

    try {
      const profile = await authService.fetchUserProfile(session.user.id);
      
      if (profile) {
        setUser(authService.mapToAuthUser(
          session.user.id,
          session.user.email || '',
          profile
        ));
      } else {
        // Basic user info if profile not found
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: 'User',
          role: null,
          profileImage: authService.getDefaultProfileImage('User')
        });
      }
      
      setSupabaseUser(session.user);
    } catch (error) {
      console.error('Error in setUserFromSupabase:', error);
      setUser(null);
    }
  };

  // Check auth state on initial load and subscribe to auth changes
  useEffect(() => {
    setIsLoading(true);
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserFromSupabase(session);
      setIsLoading(false);
    });

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event);
        await setUserFromSupabase(session);
        setIsLoading(false);
      }
    );

    // Cleanup
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Login with Supabase
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      await authService.login(email, password);
      
      toast({
        title: "Login successful",
        description: "Welcome back to Akeno Health!",
      });
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up with Supabase
  const signup = async (email: string, password: string, role: UserRole, name: string) => {
    setIsLoading(true);
    
    try {
      await authService.signup(email, password, role, name);
      
      toast({
        title: "Registration successful",
        description: "Please check your email to confirm your account. You'll receive a verification link to activate your account.",
      });
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Registration failed",
        description: error.message || "An unknown error occurred",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout with Supabase
  const logout = async () => {
    try {
      await authService.logout();
      
      setUser(null);
      
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    } catch (error: any) {
      toast({
        title: "Error logging out",
        description: error.message || "An unknown error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
