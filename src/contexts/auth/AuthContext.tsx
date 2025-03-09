
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

  // Optimized function to set user state based on Supabase user and profile
  const setUserFromSupabase = async (session: Session | null) => {
    if (!session?.user) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      // Check if we already have the user with this ID to avoid unnecessary profile fetches
      if (user?.id === session.user.id && supabaseUser?.id === session.user.id) {
        setIsLoading(false);
        return;
      }
      
      const profile = await authService.fetchUserProfile(session.user.id);
      
      if (profile) {
        const authUser = authService.mapToAuthUser(
          session.user.id,
          session.user.email || '',
          profile
        );
        
        setUser(authUser);
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
    } finally {
      setIsLoading(false);
    }
  };

  // Check auth state on initial load and subscribe to auth changes
  useEffect(() => {
    setIsLoading(true);
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserFromSupabase(session);
    });

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event);
        
        // Only update user data for relevant auth events
        if (['SIGNED_IN', 'SIGNED_OUT', 'USER_UPDATED', 'TOKEN_REFRESHED'].includes(event)) {
          await setUserFromSupabase(session);
        }
      }
    );

    // Cleanup
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Optimized login with Supabase
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      const data = await authService.login(email, password);
      
      if (data?.user && data?.session) {
        // Success message will be shown when auth state changes
        return data;
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
      throw error;
    } finally {
      // setIsLoading is handled by the auth state change listener
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

  // Optimized logout with Supabase
  const logout = async () => {
    try {
      await authService.logout();
      // User state will be updated by the auth state change listener
      // No need to manually set user to null here
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
